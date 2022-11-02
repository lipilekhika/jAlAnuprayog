import os, shubhlipi as sh

rt = sh.env("sthAnam")
lc = rt + r"\saGgaNakAnuprayogaH\src\resources\dattAMsh"
sh.makedir("datt")
for x in os.listdir(lc):
    if x[-5:] != ".json":
        continue
    sh.copy_file(lc + f"\\{x}", f"datt\\{x}")
if sh.args(0) == "1":
    l = sh.read(rt + r"\jAlAnuprayogaH\server\lipi\lipi.js")
    l = l.replace(
        """aks.get(lng).then((v) => r(JSON.parse(v.value)));""",
        """fs.readFile(`D:/Softwares/Z/saGgaNakAnuprayogaH/src/resources/dattAMsh/${lang}.json`, "utf-8", (e, v) => r(JSON.parse(v)));""",
    )
    l = (
        l.split("// above")[0]
        + """// above\nvar fs = require("fs");\nexports.lipi = LipiLekhikA;"""
    )
    sh.write("lipi.js", l)
