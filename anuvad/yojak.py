import shubhlipi as sh, yaml

ln1 = sh.lang_list_names
root = sh.env("sthAnam")
anuvad = {}
for x in ln1:
    anuvad[x] = yaml.safe_load(sh.read(f"lang\\{x}.yaml"))
    sh.write(
        f"{root}\\jAlAnuprayogaH\\src\\src\\dattAMsh\\sahayika\\{ln1[x][1]}.json",
        sh.dump_json(anuvad[x]["sahayika"]),
    )
    del anuvad[x]["sahayika"]
    sh.write(
        f"{root}\\jAlAnuprayogaH\\src\\src\\display\\{x}.json",
        sh.dump_json(anuvad[x]),
    )
