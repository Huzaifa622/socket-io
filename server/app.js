import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const port = process.env.PORT || 3000;
const app = express();
import cors from "cors";
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);
});
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
