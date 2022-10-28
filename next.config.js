/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  webpack: (config, options) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
      module: false,
    };
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      // { test: /\.txt$/, use: "raw-loader" },
      { test: /\.png$/, use: ['file-loader', 'url-loader'] },
    );
    return config;
  },
};

module.exports = nextConfig;
