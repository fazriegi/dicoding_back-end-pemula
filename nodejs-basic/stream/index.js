import fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const readStream = fs.createReadStream(path.resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});

const writeStream = fs.createWriteStream(path.resolve(__dirname, "output.txt"));

readStream.on("readable", () => {
  try {
    writeStream.write(`${readStream.read()}\n`);
  } catch (error) {
    console.log("Gagal baca file", error);
  }
});

readStream.on("end", () => {
  console.log("Selesai");
  writeStream.end();
});
