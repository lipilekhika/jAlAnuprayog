import shubhlipi as sh, json, os

root = sh.env("sthAnam") + "\\jAlAnuprayogaH\\server\\lipi\\"
loc = {
    "app.js": "o\\index.js",
    "lipi.js": "o\\lipi.js",
}
if sh.args(0) == "clone":
    sh.cmd("deta clone --name lipi")
    os.rename("lipi", "o")
    exit()
for lc in loc:
    f = sh.read(root + lc)
    rpl = {
        'Buffer.from(process.env.DETA_KEY, "base64").toString("utf-8")': "",
    }
    for x in rpl:
        f = f.replace(x, rpl[x])
    f = sh.remove_in_between(f, r"r_start", r"r_end", md=1)
    sh.write(root + loc[lc], sh.minify_js(f))
    print(lc, 200)
pkg_req = json.loads(sh.read("o/package.json"))["dependencies"]
pkg_all = json.loads(
    sh.read(sh.env("sthAnam") + r"\jAlAnuprayogaH\server\lipi\package.json")
)["dependencies"]
new_pkg = {}
for x in pkg_req:
    new_pkg[x] = pkg_all[x]
new_pkg = {"dependencies": new_pkg}
sh.write("o/package.json", sh.dump_json(new_pkg))
files = []
folders = []
for x in os.listdir("o"):
    if x in [".deta", "index.js", "lipi.js", "package.json"]:
        continue
    if os.path.isfile("o/" + x):
        sh.delete_file("o/" + x)
    else:
        sh.delete_folder("o/" + x)
for x in files:
    sh.copy_file(x, "o/" + x)
for x in folders:
    sh.copy_folder(x, "o/" + x)
if sh.args(0) == "deploy":
    sh.cmd("cd o\ndeta deploy", file=True)
