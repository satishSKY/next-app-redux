export const DEVELOPMENT = 'development';
export const STAGING = 'staging';
export const PRODUCTION = 'production';

function isDev() {
    return (process.env.NODE_ENV || DEVELOPMENT) === DEVELOPMENT;
}
function isProd() {
    return process.env.NODE_ENV === PRODUCTION;
}

module.exports = {
    isProd,
    isDev,
    prod: PRODUCTION,
    dev: DEVELOPMENT,
    stg: STAGING
};
