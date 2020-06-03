const t = require("fs");
//var fsPromises = require('fs').promises;

async function print(path) {
  const dir = await t.promises.opendir(path);

  for await (const dirent of dir) {
    console.log(dirent.name);
  }
}

print("./").catch(console.error);
