var path = require('path');

module.exports = {
    entry: [
      path.resolve(__dirname, "app/app.jsx"),
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
      path: path.resolve(__dirname, 'www'),
      publicPath: "/assets/",
      filename: 'bundle.js',
    },
    module: {
        loaders: [
          {   test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
