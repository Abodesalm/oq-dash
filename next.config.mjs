import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next'.NextConfig)} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "zed-games-api.onrender.com"],
  },
};

export default withNextIntl(nextConfig);
