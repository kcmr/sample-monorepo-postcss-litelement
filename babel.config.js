module.exports = {
  plugins: [
    ['babel-plugin-postcss', { postcss: true, tagged: ['css', 'lit-element'] }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
