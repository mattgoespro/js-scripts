import express from "express";
import path from "path";
import fs from "fs";

function createServer(serveDir: string) {
  const server = express();

  server.use("/js", express.static(serveDir));

  server.get("/", (_, res) => {
    res.send(
      fs
        .readdirSync(serveDir, { recursive: true, withFileTypes: true })
        .filter((file) => file.name.endsWith(".js"))
        .map((file) => ({
          scriptName: file.name,
          url: `/js/${file.name}`
        }))
    );
  });

  server.get("/js/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(serveDir, filename);
    res.sendFile(filePath);
  });

  return server;
}

export function startServeServer(serveDir: string) {
  const port = process.env.PORT || 3000;
  const server = createServer(serveDir);

  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
