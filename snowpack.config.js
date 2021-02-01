/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: "@snowpack/app-scripts-react",
  packageOptions: {
    rollup: {
      plugins: [require("rollup-plugin-node-polyfills")()],
    },
  },
  mount: {
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  // plugins: [],
  // plugins: ["@snowpack/plugin-react-refresh"],

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
    // port: 8080,
    // src: "src",
    // bundle: process.env.NODE_ENV === "production",
    // routes: "public/index.html",
  },
  buildOptions: {
    /* ... */
  },
};
