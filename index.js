const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const { encrypt, decrypt } = require("./utils/cryptoUtil");
const sets = {
  SetA: { One: 1, Two: 2 },
  SetB: { Three: 3, Four: 4 },
  SetC: { Five: 5, Six: 6 },
  SetD: { Seven: 7, Eight: 8 },
  SetE: { Nine: 9, Ten: 10 }
};

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("user-message", (encryptedMsg) => {
    const msg = decrypt(encryptedMsg);
    console.log("DECRYPTED Message", msg);
    const [setName, word] = msg.split("-");
    if (!sets[setName] || sets[setName][word] == null) {
      socket.emit("message", encrypt("EMPTY"));
      return;
    }
    const n = sets[setName][word];
    let count = 0;

    const interval = setInterval(() => {
      const timeNow = new Date().toLocaleTimeString();
      socket.emit("message", encrypt(timeNow));
      count++;
      if (count === n) clearInterval(interval);
    }, 1000);
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));