module.exports = ctx => {

  const plugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    // require('tailwindcss'),
    require('postcss-nested'),
  ]

  if (ctx.env === 'production') {
    plugins.push(
      require('cssnano')({ preset: 'default' }),
      require('autoprefixer')
    )
  }

  return { plugins }
}