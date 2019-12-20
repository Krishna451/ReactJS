var config = {
    entry: "./index.js",
    output: {
      path: "/",
      filename: "build.js" // build file
    },
    devServer: {
      port: 3000
    },
    module: {
      loaders: [
        {
          // Add  this for .js or .jsx file
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
             presets: ["es2015","react"]
           }
  
  
        }
      ]
    }
  };
  
  module.exports = config;