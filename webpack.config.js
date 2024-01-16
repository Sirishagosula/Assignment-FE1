module: {
  rules: [{
    test: /\.ts$/,
    use:['ts-loader']
  },{
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },{
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    use: ['url-loader?limit=100000']
  },{
    test: /\.png$/,
    use: ['file-loader']
  }]
}