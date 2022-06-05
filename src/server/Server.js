const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const { INDEX_ROUTE } = require("./routes/Routes");
const webpackConfig = require("../../webpack.config");
const setupWebRoutes = require("./routes/web/WebRoutes");
const setupApiRoutes = require("./routes/api/ApiRoutes");

require("dotenv").config();

const PORT = process.env.EXPRESS_PORT || 3000;
const BASE_DIR = path.resolve(__dirname, "../../dist");
const DEV = process.env.NODE_ENV !== "production";

const server = express();

const config = webpackConfig({ production: !DEV });
const compiler = webpack(config);

if (DEV) {
    server.use(
        webpackDevMiddleware(compiler, {
            publicPath: INDEX_ROUTE,
            stats: {
                children: false,
                modules: false,
                colors: true,
            },
        })
    );

    server.use(webpackHotMiddleware(compiler));
}

// JSON support.
server.use(express.json());

// Static routes.
server.use(express.static(`${BASE_DIR}/app`));

// Web routes.
setupWebRoutes(server, BASE_DIR);

// API routes.
setupApiRoutes(server);

server.listen(PORT, () => {
    console.log(
        `App (${
            DEV ? "development" : "production"
        }) listening at http://localhost:${PORT}`
    );
});
