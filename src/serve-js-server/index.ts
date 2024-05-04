import { startServeServer } from "./serve-js-server";

const serveDir = process.env.SERVE_DIR || "dist";

startServeServer(serveDir);
