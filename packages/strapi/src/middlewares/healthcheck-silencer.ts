export default (_config: any, { strapi }: any) => {
    return async (ctx: any, next: () => Promise<void>) => {
        const userAgent = ctx.get('user-agent');

        if (
            ctx.path === '/_health' &&
            userAgent?.startsWith('ELB-HealthChecker')
        ) {
            ctx.status = 204;
            return;
        }

        await next();
    };
};
