var config = {
   entry: './client/app.jsx',
   output: {
       filename: __dirname + '/build/bundle.js'
   },
   module: {
       loaders: [
           {
               test: /\.jsx$/,
               loader: 'jsx-loader?insertPragma=React.DOM&harmony'
           }
       ]
   },
   externals: {
       'react': 'React'
   },
   resolve: {
       extensions: ['', '.js', '.jsx']
   }
};

module.exports = config;