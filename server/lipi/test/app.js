var app = require("./lipi.js").lipi;
var fs = require("fs");
async function main() {
    let f = await load_file("test.txt");
    f = app.k.replace_all(f, "\r\n", "\n");
    f = f.split("\n");
    await app.k.load_lang(f[0]);
    await app.k.load_lang(f[1]);
    f = [f[0], f[1], f[2], app.parivartak(f[2], f[0], f[1], true)];
    await save_file("test.txt", f.join("\n"));
}

function load_file(file) {
    return new Promise(rs => {
        fs.readFile("./" + file, "utf-8", (e, b) => rs(b));
    })
}

function save_file(file, db) {
    return new Promise(rs => {
        fs.writeFile("./" + file, db, "utf-8", (e, b) => rs(b));
    })
}
main()