const path = require('path');
const outputDir = path.join(__dirname, "public/js/");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/Main.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: 'app.js',
  },
};
