from time import time
import shubhlipi as sh, json, yaml, os

ln = sh.lang_list
ln2 = sh.dict_rev(ln)
if not os.path.isfile("r.json"):
    sh.write("r.json", sh.dump_json({"yes": {}, "no": {"others": {"from": -1}}}))
if sh.args(0) in ln2:
    src = sh.args(0)
else:
    src = "en"
if input(f"Do you want to translate with {src} as base? ") != "yes":
    exit()
main_db = yaml.safe_load(sh.read(f"lang\\{ln2[src]}.yaml"))
anu = {}
only = json.loads(sh.read("r.json"))
print(only)
for y in ln:
    if ln[y] == "en":
        continue
    tm = time()
    anu[y] = {}
    org = yaml.safe_load(sh.read(f"lang/{y}.yaml"))
    if ln[y] != "ur":
        anu[y] = sh.process_json(
            main_db,
            org,
            src,
            ln[y],
            no=only["no"],
            yes=only["yes"],
            only_org=ln[y] in ("sa", "hi"),
        )
    else:
        anu[y] = sh.process_json(
            anu["हिन्दी"],
            org,
            "Hindi",
            "Urdu",
            no=only["no"],
            yes=only["yes"],
            func=sh.parivartak,
        )
    sh.write(
        f"lang\\{y}.yaml",
        yaml.safe_dump(anu[y], allow_unicode=True, sort_keys=False),
    )
    print(ln[y], f"{time()-tm}s")
if True:
    import yojak
