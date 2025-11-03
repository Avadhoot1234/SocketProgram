const crypto = require("crypto");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


// function encrypt(text) {
//   let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
//   let encrypted = cipher.update(text, "utf8", "hex");
//   encrypted += cipher.final("hex");
//   return encrypted;
// }

// function decrypt(text) {
//   let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
//   let decrypted = decipher.update(text, "hex", "utf8");
//   decrypted += decipher.final("utf8");
//   return decrypted;
// }
function encrypt(text) {
  return Buffer.from(text, "utf8").toString("base64");
}

function decrypt(text) {
  return Buffer.from(text, "base64").toString("utf8");
}

module.exports = { encrypt, decrypt };
