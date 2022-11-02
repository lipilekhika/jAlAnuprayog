from sys import argv
import os, shubhlipi as sh, re

root = sh.env("sthAnam")
app_loc = "\\jAlAnuprayogaH\\src"
web_loc = "\\jAlasthAnam\\out"
lipi_loc = "\\dist"
DIR = (
    [f"{root+app_loc}\\src\\main.js", [f"{root+web_loc}\\src\\main.js"]],
    [f"{root+app_loc}\\app.js", [f"{root+web_loc}\\app.js"]],
    [f"{root+app_loc}\\app.css", [f"{root+web_loc}\\app.css"]],
    [f"{root+app_loc}\\img\\ChavyaH.css", [f"{root+web_loc}\\img\\ChavyaH.css"]],
    [f"{root+app_loc}\\app.js", [f"{root+lipi_loc}\\lipilekhika.min.js"]],
)
for xc in argv[-1]:
    file = int(xc) - 1
    dir = DIR[file]
    file = dir[0]
    f = file
    data = sh.read(file)
    if xc == "1":
        sh.delete_folder(root + web_loc + r"\src\dattAMsh")
        sh.makedir(f"{root+web_loc}\\src\\dattAMsh")
        sh.makedir(f"{root+web_loc}\\src\\dattAMsh\\sahayika")
        sh.makedir(f"{root+web_loc}\\src\\dattAMsh\\table")
        for q in ("dattAMsh", "dattAMsh\\sahayika", "dattAMsh\\table"):
            for x in os.listdir(f"{root+app_loc}\\src\\{q}"):
                if ".json" in x:
                    sh.write(
                        f"{root+web_loc}\\src\\{q}\\{x}",
                        sh.minify_json(sh.read(f"{root+app_loc}\\src\\{q}\\{x}")),
                    )
                elif os.path.isfile(f"{root+app_loc}\\src\\dattAMsh\\{x}"):
                    sh.copy_file(
                        f"{root+app_loc}\\src\\dattAMsh\\{x}",
                        f"{root+web_loc}\\src\\dattAMsh\\{x}",
                    )
        data = data.replace(
            'this.sanchit = "src/dattAMsh"', 'this.sanchit = "/src/dattAMsh"'
        )
        data = data.replace('// this.git("su");', 'this.git("su");')
        data = data.replace("// this.git(lang);", "this.git(lang);")
        print(xc, "    kRt")
    elif xc == "2":
        sh.delete_folder(f"{root+web_loc}\\src\\display")
        sh.makedir(f"{root+web_loc}\\src\\display")
        data = data.replace("app.asp", "app.txt")
        data = data.replace("img.asp", "img.txt")
        for x in os.listdir(f"{root+app_loc}\\src\\display"):
            if ".json" in x:
                sh.write(
                    f"{root+web_loc}\\src\\display\\{x}",
                    sh.minify_json(sh.read(f"{root+app_loc}\\src\\display\\{x}")),
                )
        sh.write(
            f"{root+web_loc}\\app.txt",
            sh.read(f"{root+app_loc}\\app.asp").replace("\n", ""),
        )
        print(xc, 200, "app.asp")
        data = data.replace(
            "// $lf.getScript(`https://github.com/lipilekhika/dist/releases/download/bhasha/${app.lang_list[v][1]}.js`);",
            "$lf.getScript(`https://github.com/lipilekhika/dist/releases/download/bhasha/${app.lang_list[v][1]}.js`);",
        )
        cp_fl = [
            "src\\query.js",
            "src\\lib.js",
        ]
        for f in cp_fl:
            sh.write(
                root + web_loc + "\\" + f,
                sh.minify_js(sh.read(root + app_loc + "\\" + f)),
            )
            print(xc, 200, f.split("\\")[-1])
        print(xc, "    kRt")
    elif xc == "4":
        sh.write(
            f"{root+web_loc}\\img\\img.txt",
            sh.read(f"{root+app_loc}\\img\\img.asp").replace("\n", ""),
        )
        print(xc, 200, "img.asp")
    elif xc == "5":
        fl = sh.read("src/src/main.js").split("\n")
        fl1 = "\n".join(fl[:-6])
        fl2 = "\n".join(fl[-6:])
        a = (
            fl1
            + "\n"
            + sh.read("src/src/query.js")
            + "\n"
            + fl2
            + "\n"
            + sh.read("src/src/lib.js")
        )
        rpl = {
            'this.sanchit = "src/dattAMsh"': 'this.sanchit = "https://cdn.jsdelivr.net/gh/lipilekhika/dist@latest/src/dattAMsh"',
            "$lf.getScript(`https://github.com/lipilekhika/dist/releases/download/jala/${x}.js`)": "$lf.getScript(`https://github.com/lipilekhika/dist/releases/download/ext/${x}.js`)",
            '// this.git("su");': 'this.git("su");',
            "// this.git(lang);": "this.git(lang);",
            '// this.set_lang("English")': 'this.set_lang("English")',
        }
        for rr in rpl:
            a = a.replace(rr, rpl[rr])
        rt = []
        a = sh.remove_tags(a, r"r_remove|r_start|r_end", md=1)
        a = "/* शुभमानन्दगुप्तेन तु भगवत्प्रसादाद्भारते रचितः */\n" + a
        data = a
        print(xc, "    kRt")
        et = {
            """
        this.git = (x) => $lf.getScript(`https://github.com/lipilekhika/dist/releases/download/ext/${x}.js`);
        this.git("su");""": "",
            """
                    this.git(lang);""": "",
        }
        for rr in et:
            a = a.replace(rr, et[rr])
        sh.write(root + r"\dist\lipilekhika.js", a)
    for x in dir[1]:
        if ".css" == file[-4:]:
            dt = sh.minify_css(data)
        elif ".js" == file[-3:]:
            dt = sh.minify_js(data)
        if xc == "5":
            dt = "/* शुभमानन्दगुप्तेन तु भगवत्प्रसादाद्भारते रचितः */\n" + dt
        sh.write(x, dt)
    print(xc, 200, x.split("\\")[-1])
