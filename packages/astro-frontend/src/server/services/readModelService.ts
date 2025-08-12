// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, max-params
export function readModelServiceBuilder(dbInstance: DB) {
  return {
    async getTenants(
      filters: AgreementQueryFilters,
      limit: number,
      offset: number
    ) {
      logger.info(
        `Getting articles from STRAPI with filters: ${JSON.stringify(
          filters
        )}, offset = ${offset}, limit = ${limit}`
      );

      return await readModelService.getAgreements(
        authData.organizationId,
        filters,
        limit,
        offset
      );
    },
  };
}
