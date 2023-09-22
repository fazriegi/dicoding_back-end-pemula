import fs from "fs";

const readFilesystemCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca file");
    return;
  }

  console.log(data);
};

fs.readFile(
  "/home/egi/javascript-projects-dicoding/nodejs-basic/filesystem/notes.txt",
  "UTF-8",
  readFilesystemCallback
);
