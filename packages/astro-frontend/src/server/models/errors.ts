import { makeApiProblemBuilder } from "pagopa-interop-public-models";

export const errorCodes = {};
export type ErrorCodes = keyof typeof errorCodes;

export const makeApiProblem = makeApiProblemBuilder(errorCodes);
