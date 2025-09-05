// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: { module: { rules: { test: RegExp; use: { loader: string; options: { publicPath: string; outputPath: string; name: string; }; }; }[]; }; }) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
      
    });

    return config;
  },
  
};

module.exports = nextConfig;
