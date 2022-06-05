const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");

require("dotenv").config();

const config = () => {
    const dev = process.env.NODE_ENV !== "production";

    const appEntries = ["./src/app/index.js"];

    // Dev only entries.
    if (dev) appEntries.push("webpack-hot-middleware/client");

    const plugins = [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/app/index.html"),
            filename: path.resolve(__dirname, "dist/app/index.html"),
        }),
    ];

    // Dev only plugins.
    if (dev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    let transformers = undefined;

    // Dev only transformers.
    if (dev)
        transformers = {
            before: [ReactRefreshTypeScript()],
        };

    const loader = {
        loader: "ts-loader",
        options: {
            getCustomTransformers: () => {
                return transformers;
            },
            transpileOnly: dev,
        },
    };

    return {
        devtool: dev ? "source-map" : false,
        mode: dev ? "development" : "production",
        stats: {
            children: true,
            modules: false,
        },
        entry: {
            app: appEntries,
        },
        output: {
            path: path.resolve(__dirname, "dist/app"),
            filename: "js/[name].js",
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    use: loader,
                },
                { enforce: "pre", test: /\.js$/, use: "source-map-loader" },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: "css-loader" },
                        { loader: "postcss-loader" },
                        { loader: "sass-loader" },
                    ],
                },
                {
                    test: /\.svg$/,
                    issuer: /\.[jt]sx?$/,
                    use: ["@svgr/webpack"],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    type: "asset/inline",
                },
            ],
        },
        plugins: plugins,
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                    },
                },
            },
            runtimeChunk: "single",
        },
    };
};

module.exports = config;
