const {read, write} = require("./helper")

console.log("start");
const request = process.argv[2];
if(request === "read") {
    read()
}else if (request === "write"){
    write()
}else {
    console.log("エラー:readまたはwriteの引数を入れてください")
}
console.log(process.argv[2])
console.log("end");