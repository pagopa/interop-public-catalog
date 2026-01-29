'use strict';

const {
    winston,
    formats: { prettyPrint, levelFilter },
} = require('@strapi/logger');

const ignoreHealthCheckLogs = winston.format((info) => {
    if (typeof info.message === 'string' && info.message.includes('GET /_health')) {
        return false
    }
    return info;
});

export default {
    transports: [
        new winston.transports.Console({
            level: 'http',
            format: winston.format.combine(
                ignoreHealthCheckLogs(),
                levelFilter('http'),
                prettyPrint({ timestamps: 'YYYY-MM-DD hh:mm:ss.SSS' })
            ),
        }),
    ],
};