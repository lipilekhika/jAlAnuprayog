import shubhlipi as sh
import re

root = sh.env("sthAnam")
l = root + "\\jAlAnuprayogaH\\src"
to = root + "\\jAlAnuprayogaH\\server\\lipi"
f = sh.read(l + "//src//main.js")
f = sh.remove_in_between(f, r"r_start", r"r_end", md=1)
replaces = {
    r'this.sanchit = "src/dattAMsh";': r'this.sanchit = "https://cdn.jsdelivr.net/gh/lipilekhika/dist@latest/src/dattAMsh";',
    r"""        for (let x of [from, to])
            if (!l.lang_in(x))
                l.load_lang(x, null, true);\n""": "",
    r"""
        this.sanchit = "https://cdn.jsdelivr.net/gh/lipilekhika/dist@latest/src/dattAMsh";
        this.font_loca = this.substring(this.sanchit, 0, -8) + "fonts";
        this.image_loca = this.substring(this.sanchit, 0, -12) + "img/lang";""": r"",
    r"""return $lf.get(this.sanchit + `/${lang}.json`, {
                'async': !block,
                success: (result) => {
                    this.akSharAH[lang] = result;
                    this.k.clear_all_val(true);
                    this.k.add_font(lang);
                    // this.git(lang);
                    if (callback != null)
                        callback();
                }
            });""": r"""let akshara_json = (lng) => {
                //this shall return json object of database of the language(lng)
                return new Promise(r => {
                    aks.get(lng).then(v => r(v.value[0]));
                })
            };
            return new Promise(rs => akshara_json(lang).then((v) => {
                let k = LipiLekhikA.k;
                k.akSharAH[lang] = v;
                LipiLekhikA.clear_all_val(true);
                if (callback != null)
                    callback();
                rs("loaded");
            }));""",
}
for x in replaces:
    f = f.replace(x, replaces[x])
v = sh.read(to + "\\lipi.js").split("\n// above")[1]
sh.write(to + "\\lipi.js", f + "\n// above" + v)
