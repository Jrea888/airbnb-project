const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
    // 配置less
    plugins: [
        {
            plugin: CracoLessPlugin,
        },
    ],
    // 配置别名
    webpack: {
        alias: {
            "@": resolve("src"),
            components: resolve("src/components"),
            utils: resolve("src/utils"),
        },
    },
};
