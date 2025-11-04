Socket Programming Assignment
This project demonstrates basic Socket Programming using Node.js + socket.io.
Two main tasks are implemented:


Socket communication between client & server


Encryption & Decryption of messages



Features Implemented
✅ Part 1: Socket Programming


Client sends a string input like: SetA-One


Server splits this string using -


First part becomes Set Name (SetA)


Second part becomes Word (One)


Server checks if Set & Word exist in predefined collection


Example Collection:
const sets = {
  SetA: { One: 1, Two: 2, Three: 3 },
  SetB: { One: 2, Two: 4 }
};



If found → server reads numeric value (ex: 1)


Server then sends current time to client N times (every 1 second)


If not found → server sends "EMPTY"



✅ Part 2: Encryption / Decryption


Messages are encrypted before sending


Messages are decrypted on receiving


Simple Base64 is used for encoding/decoding


Encryption module (cryptoUtil.js)
function encrypt(text) {
  return Buffer.from(text, "utf8").toString("base64");
}

function decrypt(text) {
  return Buffer.from(text, "base64").toString("utf8");
}

module.exports = { encrypt, decrypt };


Technologies Used
ComponentTechnologyRuntimeNode.jsLibrarysocket.ioEncryptionBase64 (custom)FrontendHTML + JS

How To Run
Install Dependencies
npm install

Start Server
node index.js

Server will run on:
http://localhost:9000

Open this URL in multiple browser windows → both users can communicate.

Test Samples
Input MessageExpected ResultSetA-OneTime printed 1 timeSetA-ThreeTime printed 3 timesSetZ-AbcEMPTY

Conclusion
This project completes:


Basic Socket Programming


Data Mapping & Validation


Multi-user realtime communication


Message Encryption & Decryption


✔ ready for assignment submission ✅
