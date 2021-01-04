module.exports = {
  plugins: [
    ['babel-plugin-postcss', { postcss: true, test: /\.s?css$/, tagged: ['css', 'lit-element'] }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
