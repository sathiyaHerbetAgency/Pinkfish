/** @type {import('next').NextConfig} */
const nextConfig = {

 experimental:{appDir: true},
 env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },

};
 
module.exports = nextConfig;
