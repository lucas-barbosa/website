module.exports = { // you can learn this in babel documentation 
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties"
  ]
};