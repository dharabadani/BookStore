module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
  plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-jsx", "@babel/plugin-transform-react-jsx"]
};