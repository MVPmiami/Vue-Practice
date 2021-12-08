module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/index.scss";`,
      },
    },
	},
	publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
};
