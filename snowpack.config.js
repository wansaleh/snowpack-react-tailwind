/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-react',
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
    config: { url: '/config' }
  },
  plugins: [
    // '@snowpack/plugin-react-refresh',
    // '@snowpack/plugin-babel',
    // '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  }
};
