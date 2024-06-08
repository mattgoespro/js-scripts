import { startFileServer } from "./express/api";

const serveDir = process.env.SERVE_DIR || "dist";

startFileServer(serveDir);
