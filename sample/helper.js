const fs = require("fs");

const person = {
    name: "Mike",
    age : 30
}

const add = function(a, b) {
    return a + b;
};

const read = function() {
    fs.readFile("./sample.json","utf8",function(err, data) {
        const person = JSON.parse(data)
        console.log(person.age);
    });
};

const write = function() {
    fs.writeFile("sample.json", JSON.stringify(person), function() {
        console.log("書き出し完了");
    });
};

module.exports = {
    add: add,
    read: read,
    write: write

};