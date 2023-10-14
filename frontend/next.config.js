const withSvgr = require('next-svgr');

const nextConfig = {
    // Enables React strict mode for development
    reactStrictMode: true,

    // Disables the "Powered by Vercel" header in the server response (for security reasons)
    poweredByHeader: false,

    // Specifies custom paths for the `dist` directory (change this if you need a custom build directory)
    // distDir: 'build',

    // Add custom environmental variables here that you want to expose to the client side
    // env: {
    //   CUSTOM_ENV_VARIABLE: 'my-value',
    // },

    // Include any other configurations you might want
};

module.exports = withSvgr(nextConfig);