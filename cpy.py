import shubhlipi as sh

root = sh.env("sthAnam")
app_loc = "\\jAlAnuprayogaH\\src"
base = root + app_loc
for ar in sh.argv:
    if "7z" in sh.argv:
        continue
    if ar == "1":  # for 3'rd party online usage and api files
        to = root + "\\dist"
        base = root + "\\jAlasthAnam\\out"
        files = ("img\\main.png", "img\\main.ico")
        folders = ("img\\lang", "src\\dattAMsh", "src\\fonts")
        for x in files:
            sh.delete_file(f"{to}\\{x}")
            sh.copy_file(f"{base}\\{x}", f"{to}\\{x}")
        sh.copy_file(f"{base}\\src\\query.js", f"{to}\\query.js")
        for x in folders:
            sh.delete_folder(f"{to}\\{x}")
            sh.copy_folder(f"{base}\\{x}", f"{to}\\{x}")
        print(ar, "done")


if sh.args(0) == "7z":
    # Making 7z of required file
    def make_7z(pth, out):
        sh.cmd(
            f'"{sh.tool}\\7zip\\7za.exe" a -t7z "{out}" "{pth}" -y -mx9', file=True
        )
    to = root + "\\dist"
    pth = (
        ("\\src\\dattAMsh\\*", "dattAMsh.7z"),
        ("\\img\\lang\\*", "images.7z"),
        ("\\src\\fonts\\*", "fonts.7z"),
    )
    for x in sh.argv[1:]:
        df = pth[int(x) - 1]
        sh.delete_file(to + f"\\zip\\{df[1]}")
        make_7z(to + df[0], to + "\\zip\\" + df[1])
