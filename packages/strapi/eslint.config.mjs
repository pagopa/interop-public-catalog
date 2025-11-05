import { config } from "pagopa-interop-public-eslint-config/base";
import { globalIgnores } from "eslint/config";

/** @type {import("eslint").Linter.Config} */
export default [...config, globalIgnores([".strapi", "types/generated/**"])];
