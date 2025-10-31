/* eslint-disable max-classes-per-file */
import { constants } from "http2";
import { match, P } from "ts-pattern";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

const {
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_NOT_FOUND,
} = constants;

export const emptyErrorMapper = (): number => HTTP_STATUS_INTERNAL_SERVER_ERROR;

export class ApiError<T> extends Error {
  /* TODO consider refactoring how the code property is used:
    From the API point of view, it is an info present only in the single error
    in the errors array - not in the main Problem response.
    However, at the moment we need it because it is used around the codebase to
    map ApiError to a specific HTTP status code.
    */
  public code: T;
  public title: string;
  public detail: string;
  public errors: Array<{ code: T; detail: string }>;

  constructor({
    code,
    title,
    detail,
    errors,
  }: {
    code: T;
    title: string;
    detail: string;
    errors?: Error[];
  }) {
    super(detail);
    this.code = code;
    this.title = title;
    this.detail = detail;
    this.errors =
      errors && errors.length > 0
        ? errors.map((e) => ({ code, detail: e.message }))
        : [{ code, detail }];
  }
}

export class InternalError<T> extends Error {
  public code: T;
  public detail: string;

  constructor({ code, detail }: { code: T; detail: string }) {
    super(detail);
    this.code = code;
    this.detail = detail;
  }
}

type ProblemError = {
  code: string;
  detail: string;
};

export type Problem = {
  type: string;
  status: number;
  title: string;
  correlationId?: string;
  detail: string;
  errors: ProblemError[];
  toString: () => string;
};

type MakeApiProblemFn<T extends string> = (
  error: unknown,
  httpMapper: (apiError: ApiError<T>) => number,
  context: {
    logger: {
      error: (message: string) => void;
      warn: (message: string) => void;
    };
    correlationId: string;
  },
  operationalLogMessage?: string,
) => Problem;

const makeProblemLogString = (
  problem: Problem,
  originalError: unknown,
): string => {
  const errorsString = problem.errors.map((e) => e.detail).join(" - ");
  return `- title: ${problem.title} - detail: ${problem.detail} - errors: ${errorsString} - original error: ${originalError}`;
};

export function makeApiProblemBuilder<T extends string>(errors: {
  [K in T]: string;
}): MakeApiProblemFn<T> {
  const allErrors = { ...commonErrorCodes, ...errors };

  return (
    error,
    httpMapper,
    { logger, correlationId },
    operationalLogMessage,
  ) => {
    const makeProblem = (
      httpStatus: number,
      { title, detail, errors }: ApiError<T | CommonErrorCodes>,
    ): Problem => ({
      type: "about:blank",
      title,
      status: httpStatus,
      detail,
      correlationId,
      errors: errors.map(({ code, detail }) => ({
        code: allErrors[code],
        detail,
      })),
    });

    const genericProblem = makeProblem(
      HTTP_STATUS_INTERNAL_SERVER_ERROR,
      genericError("Unexpected error"),
    );

    if (operationalLogMessage) {
      logger.warn(operationalLogMessage);
    }

    return match<unknown, Problem>(error)
      .with(P.instanceOf(ApiError<T | CommonErrorCodes>), (error) => {
        const mappedCode = httpMapper(error as never);
        const code =
          mappedCode === HTTP_STATUS_INTERNAL_SERVER_ERROR
            ? defaultCommonErrorMapper(error.code as CommonErrorCodes)
            : mappedCode;

        const problem = makeProblem(code, error);
        const problemLogString = makeProblemLogString(problem, error);

        logger.warn(problemLogString);
        return problem;
      })
      .with(P.instanceOf(ZodError), (error) => {
        const zodError = fromZodError(error);
        const badRequest = badRequestError(zodError.message);
        const problem = makeProblem(HTTP_STATUS_BAD_REQUEST, badRequest);
        const problemLogString = makeProblemLogString(problem, error);

        logger.warn(problemLogString);
        return problem;
      })
      .otherwise((error: unknown): Problem => {
        logger.error(makeProblemLogString(genericProblem, error));
        return genericProblem;
      });
  };
}

export const commonErrorCodes = {
  genericError: "9991",
  notFoundError: "9992",
  badRequestError: "9993",
} as const;

export type CommonErrorCodes = keyof typeof commonErrorCodes;

/* ===== API Error ===== */

const defaultCommonErrorMapper = (code: CommonErrorCodes): number =>
  match(code)
    .with("badRequestError", () => HTTP_STATUS_BAD_REQUEST)
    .with("notFoundError", () => HTTP_STATUS_NOT_FOUND)
    .otherwise(() => HTTP_STATUS_INTERNAL_SERVER_ERROR);

export function badRequestError(
  detail: string,
  errors?: Error[],
): ApiError<CommonErrorCodes> {
  return new ApiError({
    detail,
    code: "badRequestError",
    title: "Bad request",
    errors,
  });
}

export function genericError(details: string): ApiError<"genericError"> {
  return new ApiError({
    detail: details,
    code: "genericError",
    title: "Unexpected error",
  });
}

export function notFoundError(details: string): ApiError<"notFoundError"> {
  return new ApiError({
    detail: details,
    code: "notFoundError",
    title: "Not found",
  });
}
