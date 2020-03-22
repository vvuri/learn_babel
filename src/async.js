require("babel-polyfill");

function getDate() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Async");
    }, 2000);
  });
}

async function getDataAsync() {
  let data = await getDate();
  console.log(data);
}

getDataAsync();
