module.exports = {
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].title = 'Superpeer UI'
        args[0].meta = {viewport: 'width=device-width,initial-scale=1,max-scale=1,min-scale=1,user-scalable=no'};
        return args
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/scss/superpeer/_variables.scss";
          @import "~@/scss/superpeer/_mixins.scss";
          @import "~@/scss/style.scss";
        `
      }
    }
  }
}
