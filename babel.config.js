module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
  ],
};
