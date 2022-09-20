/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three']);

const nextConfig = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
}

module.exports = nextConfig;
module.exports = withTM();
