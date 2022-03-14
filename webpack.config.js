const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',  // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },  // Añadimos nuestro punto de salida
  resolve: {
    extensions: ['.js', '.jsx']  // Añadimos el soporte para la extencion de JSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,  // Ignora la carpeta de node_modules
        use: {
          loader: "babel-loader" // Utiliza la configuracion de Babel
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [  // utilizamos este plugin para añadir el compilado al documento HTML
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};