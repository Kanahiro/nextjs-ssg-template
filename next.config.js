const isProd = process.env.NODE_ENV == 'production';
const basePath = isProd ? '/nextjs-trial' : '';

module.exports = {
    assetPrefix: basePath,
    trailingSlash: true,
    publicRuntimeConfig: { basePath },
};
