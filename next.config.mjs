/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    REACT_APP_ID: process.env.REACT_APP_ID,
    REACT_APP_KEY: process.env.REACT_APP_KEY
  }
};

export default nextConfig;
