/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    async redirects() {
      return [
        {
          source: "/#blog",
          destination: "https://narenblog.netlify.app",
          permanent: true,
        },
      ];
    },
  };  

export default nextConfig;
