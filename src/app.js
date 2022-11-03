class अनुप्रयोगः {
  constructor() {
    this.time = 0;
    this.c = 0;
    this.k = लिपि;
    this.lang_texts = {};
    this.anya_html = {};
    this.app = LipiLekhikA;
    this.loaded_display_lng = [];
    this.pages = ["inter", "parri"];
    this.lipyaH = {
      Devanagari: ["देवनागरी", "", "अ", "auto"],
      Hindi: ["हिन्दी", "अजय्", "अ", "hi"],
      "Purna-Devanagari": ["पूर्ण-देवनागरी", "अजय्", "अ", "auto"],
      Bengali: ["বাংলা", "অজয্", "অ", "bn"],
      Telugu: ["తెలుగు", "అజయ్", "అ", "te"],
      Tamil: ["தமிழ்", "அஜய்", "அ", "ta"],
      Marathi: ["मराठी", "अजय्", "अ", "mr"],
      Gujarati: ["ગુજરાતી", "અજય્", "અ", "gu"],
      Malayalam: ["മലയാളം", "അജയ്", "അ", "ml"],
      Kannada: ["ಕನ್ನಡ", "ಅಜಯ್", "ಅ", "kn"],
      Odia: ["ଓଡ଼ିଆ", "ଅଜଯ୍", "ଅ", "or"],
      Assamese: ["অসমীয়া", "অজয্", "অ", "as"],
      Konkani: ["कोंकणी", "अजय्", "अ", "gom"],
      Sanskrit: ["संस्कृतम्", "अजय्", "अ", "sa"],
      Punjabi: ["ਪੰਜਾਬੀ", "ਅਜਯ੍", "ਅ", "pa"],
      Nepali: ["नेपाली", "अजय्", "अ", "ne"],
      Kashmiri: ["कश्मीरी", "अजय्", "अ", 0],
      Sindhi: ["सिन्धी", "अजय्", "अ", 0],
      Urdu: ["اُردُو", "اجَے ", "ب", "ur"],
      Romanized: ["Romanized", "ajay ", "ā", "en"],
      Sinhala: ["සිංහල", "අජය්", "අ", "si"],
      "Tamil-Extended": ["தமிழ்-Extended", "அஜய்", "அ", 0],
      Sharada: ["शारदा", "𑆃𑆘𑆪𑇀", "𑆃", 0],
      Modi: ["मोडी", "𑘀𑘕𑘧𑘿", "𑘀", 0],
      Siddham: ["सिद्धम्", "𑖀𑖕𑖧𑖿", "𑖀", 0],
      Granth: ["கிரந்த", "𑌅𑌜𑌯𑍍", "𑌅", 0],
      Brahmi: ["ब्राह्मी", "𑀅𑀚𑀬𑁆", "𑀅", 0],
      Normal: ["Normal", "", "A", "en"],
    };
    this.lang_list = {
      English: [0, "en", "English"],
      हिन्दी: [0.5, "hi", "Hindi"],
      தமிழ்: [0, "ta", "Tamil"],
      संस्कृतम्: [0.5, "sa", "Sanskrit"],
      తెలుగు: [0.5, "te", "Telugu"],
      ಕನ್ನಡ: [0.5, "kn", "Kannada"],
      বাংলা: [0.5, "bn", "Bengali"],
      मराठी: [0.5, "mr", "Marathi"],
      ગુજરાતી: [0.5, "gu", "Gujarati"],
      ଓଡ଼ିଆ: [0.5, "or", "Odia"],
      ਪੰਜਾਬੀ: [0.5, "pa", "Punjabi"],
      മലയാളം: [-0.3, "ml", "Malayalam"],
      অসমীয়া: [0.5, "as", "Assamese"],
      اُردُو: [2.3, "ur", "Urdu"],
    };
    this.locales = [];
    for (let x in this.lang_list) this.locales.push(this.lang_list[x][1]);
    this.translate = (v, f, t) => {
      v = `https://translate.google.com/?sl=${f}&tl=${t}&text=${encodeURIComponent(
        v
      )}&op=translate`;
      window.open(v, "_blank");
    };
    this.sthAna = {
      main: "",
      lang: "",
      from: "",
      to: "",
    };
    this.pRShThedAnIm = "";
    this.up_lipyaH = ["Siddham", "Brahmi", "Sharada", "Modi", "Granth"];
    this.once_edited = false;
    this.auto = !false;
    this.menu_btn_clicked = false;
    this.yuj = (x, y) => $l(x).append(y);
    this.current_page = "gRham";
    this.back_loaded = false;
    this.first_load = true;
    this.in = (x, y) => this.k.in(x, y);
  }
  init_html() {
    let yuj = app.yuj;
    if (true) {
      //main
      let el = $l("#back_btn").on("click", () => app.change_page("gRham"));
      el.css("display", "none");
      $l("#parivartak").on("click", () => app.change_page("inter"));
      $l(".prayog_btn").on("click", () => app.change_page("prayog", false));
      $l("#sah_set_val").on("click", function () {
        app.store_values(
          "sahayika",
          {
            false: "off",
            true: "on",
          }[this.checked]
        );
      });
      $l("#script_set").on("change", function () {
        app.store_values("script", this.value);
      });
    }
    if (true) {
      //menu
      let time = 210,
        cl = ["#38383871", "transparent"];
      let cl_st = (x, y, v) =>
        `@keyframes black_color${v}{from{background-color:${cl[x]}}to{background-color:${cl[y]}}}`;
      let anm = (x, y, z) =>
        $l("#menu_blocker").css({
          "animation-name": `black_color${x}`,
          "animation-duration": `${y}ms`,
          "background-color": cl[z],
        });
      $l("#menu_body").css("transition", `left ${time}ms`);
      yuj("#menu_body", `<style>${cl_st(1, 0, 1) + cl_st(0, 1, 2)}</style>`);
      $l("#menu_btn").on("click", () => {
        $l("#menu_container").show();
        anm(1, time - 15, 0);
        $l("#menu_body").css("left", "0px");
        app.pRShThedAnIm = "menu";
      });
      $l("#menu_blocker").on("click", () => {
        app.pRShThedAnIm = "";
        $l("#menu_body").css("left", `-${$l("#menu_body").css("width")}`);
        setTimeout(() => $l("#menu_container").hide(), time + 12);
        if (app.menu_btn_clicked) {
          $l("#menu_blocker").css("background-color", cl[1]);
          app.menu_btn_clicked = false;
        } else anm(2, time + 7, 1);
      });
      for (let p in app.lang_list)
        yuj(
          "#app_lang",
          `<option tlt="${app.lang_list[p][1]}-in" value="${p}" class="langsw">${p}</option>`
        );
      $l("#app_lang").on("change", async function () {
        let v = $l("#app_lang").val();
        if (!app.in(app.loaded_display_lng, v)) {
          app.loaded_display_lng.push(v);
          app.lang_texts[v] = await $lf.get(`/src/display/${v}.json`);
          // $lf.getScript(`https://github.com/lipilekhika/dist/releases/download/bhasha/${app.lang_list[v][1]}.js`);
        }
        app.store_values("app_lang", $l("#app_lang").val());
        app.set_lang_text();
        app.kr("font-size");
        app.kr("convert-msg");
      });
      $l("#about_menu").on("click", () => {
        app.change_page("parri");
        $l("#menu_blocker").trigger("click");
      });
      $l("#setting_menu").on("click", () => {
        app.change_page("setting", false);
        app.menu_btn_clicked = true;
        $l("#menu_blocker").trigger("click");
      });
      $l("#prayog_menu").on("click", () => {
        app.change_page("prayog", false);
        app.menu_btn_clicked = true;
        $l("#menu_blocker").trigger("click");
      });
      $l("#redirect1").on("click", () => {
        if ("app_lang" in s1) window.open("/", "_blank");
        else app.open_link("/" + app.lang_list[$l("#app_lang").val()][1], null);
      });
    }
    if (true) {
      //about
      $l("#licence_btn").on("click", () => {
        $lf.get("/LICENCE.txt").then((v) => {
          $l("#licence").html(app.k.replace_all(v, "\n", "<br>"));
          $l("#licence").show();
          $l("#licence_btn").hide();
        });
      });
    }
    if (true) {
      //base
      $l("#sah_val").on("click", function () {
        let sah = this.checked;
        let elm = $l("#main"),
          msg = "lekhan-sahayika";
        let val = [["off1", "on1"], ""];
        val[1] = val[0][sah ? 1 : 0];
        let vl = app.k.substring(val[1], 0, -1);
        if (sah) elm.attr(msg, vl);
        else elm.attr(msg, vl);
      });
      $l("#sahayika_text").on("click", function () {
        $l(this).css("color", "white");
        setTimeout(() => $l(this).css("color", ""), 250);
      });
      $l("#sah_val").check(
        {
          off: false,
          on: true,
        }[app.get_values("sahayika")]
      );
      $l("#sa_04").on("click", () => $l("#main").attr("lipi-mode", 0));
      $l("#sa_14").on("click", () => $l("#main").attr("lipi-mode", 1));
      $l("#main").attr("lekhan-sahayika", app.get_values("sahayika"));
      $l(".no_checking").attr({
        spellcheck: "false",
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
      });
      $l("#main_lang").on("change", async () => {
        await app.k.load_lang($l("#main_lang").val());
        let ak = $l("#main_lang").val();
        $l("#main").attr("lipi-lang", ak);
        if (app.in(["Urdu", "Romanized"], ak)) $l("#sa_mode").hide();
        else $l("#sa_mode").show();
        app.kr("sa-val");
        app.kr("add-direction", $l("#main"), $l("#main_lang").val());
        if (!app.once_edited)
          app.kr("add-direction", $l("#first"), $l("#main_lang").val());
        let e = $l("#anu_main");
        if (s.mode == 0)
          if (app.lipyaH[ak][3] == 0) {
            e.hide();
            $l("#main").attr("lang", "");
          } else {
            e.show();
            $l("#main").attr("lang", app.lipyaH[ak][3]);
          }
        app.kr("p-holder", "#main_lang");
      });
      $l("#main_val").on("click", function () {
        let kry = this.checked;
        let elm = $l("#main"),
          msg = "lipi-lekhika";
        let val = [["off", "on"], ""];
        val[1] = val[0][kry ? 1 : 0];
        if (kry) elm.attr(msg, val[1]);
        else elm.attr(msg, val[1]);
      });
      $l("#cp1").on("click", () => {
        app.copy_text("#main");
        setTimeout(function () {
          document.execCommand("copy");
        }, 1);
      });
      if (s.mode == 0) {
        let y = "";
        for (let x in app.lipyaH) {
          if (app.in(["Devanagari", "Normal"], x)) continue;
          y += `<a rel="noopener" class="bhAShAnyAH block dvayam-right-anya-bhAShA" href="/lang/${x}" target="_blank">${app.lipyaH[x][0]} (<span class="bhAShAnyAH_name" value="${x}"></span>)</a>`;
        }
        yuj("#bhAShA_sanchit", y);
      }
      $l("#redirect0").on("click", () => {
        if ("main_lang" in s1) window.open("/", "_blank");
        else app.open_link(null, "/lang/" + $l("#main_lang").val());
      });
      $l("#anu_main").on("click", () => {
        let v = $l("#main").val(),
          fr = app.lipyaH[$l("#main_lang").val()][3];
        app.translate(v, fr, "en");
      });
    }
    if (true) {
      //prayog
      let t = $l("#close1").on("click", () =>
        app.change_page("mA_prayog", false)
      );
      $l("#prayog .blocker").on("click", () => t.trigger("click"));
      $l("#xcv").on("change", () => app.kr("set-lang-img"));
      $l("#download").on("click", () => {
        let e = $l("#image");
        app.download(e.attr("src"), `${e.attr("title").split(" - ")[0]}.png`);
      });
    }
    if (true) {
      //setting
      $l("#set_img").on("click", () => app.change_page("setting", false));
      let t = $l("#close2").on("click", () =>
        app.change_page("mA_setting", false)
      );
      $l("#setting .blocker").on("click", () => t.trigger("click"));
    }
    if (true) {
      //lipi parivartak
      $l("#anu_main1").on("click", () => {
        let v = $l("#first").val(),
          fr = app.lipyaH[$l("#lang1").val()][3],
          to = app.lipyaH[$l("#lang2").val()][3];
        to = to == "auto" ? "hi" : to;
        app.translate(v, fr, to);
      });
      $l("#lang1").on("change", () => {
        load_lekhika_lang($l("#lang1").val(), () => {
          if (app.auto)
            $l("#first").val(
              app.app.parivartak(
                $l("#second").val(),
                $l("#lang2").val(),
                $l("#lang1").val()
              )
            );
          let n = app.k.akSharAH[app.k.normalize($l("#lang1").val())].sa;
          $l("#first").attr("lipi-mode", n);
        });
        app.kr("add-direction", $l("#first"), $l("#lang1").val());
        app.kr("convert-msg");
        $l("#first").attr("lipi-lang", app.k.normalize($l("#lang1").val()));
        app.kr("inter-anuvadak");
        app.kr("inter-set");
        app.kr("p-holder", "#lang1");
      });
      $l(".img_inter1").on("click", function () {
        $l("#first").attr(
          "lipi-lekhika",
          {
            true: "on",
            false: "off",
          }[this.checked]
        );
      });
      $l("#cp2").on("click", () => app.copy_text("#first"));
      $l("#first").on("input", function () {
        app.kr("edited");
        if (app.auto)
          $l("#second").val(
            app.app.parivartak(
              this.value,
              $l("#lang1").val(),
              $l("#lang2").val()
            )
          );
      });
      $l("#lang2").on("change", () => {
        load_lekhika_lang($l("#lang2").val(), () => {
          if (app.auto)
            $l("#second").val(
              app.app.parivartak(
                $l("#first").val(),
                $l("#lang1").val(),
                $l("#lang2").val()
              )
            );
          let n = app.k.akSharAH[app.k.normalize($l("#lang2").val())].sa;
          $l("#second").attr("lipi-mode", n);
        });
        app.kr("add-direction", $l("#second"), $l("#lang2").val());
        app.kr("convert-msg");
        $l("#second").attr("lipi-lang", app.k.normalize($l("#lang2").val()));
        app.kr("inter-anuvadak");
        app.kr("inter-set");
        app.kr("p-holder", "#lang2");
      });
      $l("#cp3").on("click", () => app.copy_text("#second"));
      $l(".img_inter2").on("click", function () {
        $l("#second").attr(
          "lipi-lekhika",
          {
            true: "on",
            false: "off",
          }[this.checked]
        );
      });
      $l("#second").on("input", function () {
        app.kr("edited");
        if (app.auto)
          $l("#first").val(
            app.app.parivartak(
              this.value,
              $l("#lang2").val(),
              $l("#lang1").val()
            )
          );
      });
      $l("#auto_img").on("click", () => {
        app.auto = !app.auto;
        $l("#auto_img").css(
          "background-color",
          `${app.auto ? "#ff6464" : "lightgreen"}`
        );
        if (!app.auto) {
          $l("#up_arrow_img").show();
          $l("#down_arrow_img").show();
        } else {
          $l("#down_arrow_img").trigger("click");
          $l("#up_arrow_img").hide();
          $l("#down_arrow_img").hide();
        }
      });
      $l("#auto_img").trigger("click");
      $l("#down_arrow_img").on("click", () =>
        $l("#second").val(
          app.app.parivartak(
            $l("#first").val(),
            $l("#lang1").val(),
            $l("#lang2").val()
          )
        )
      );
      $l("#up_arrow_img").on("click", () =>
        $l("#first").val(
          app.app.parivartak(
            $l("#second").val(),
            $l("#lang2").val(),
            $l("#lang1").val()
          )
        )
      );
      $l(".inter_redirect").on("click", () => {
        if ("to" in s1 && "from" in s1) window.open("/", "_blank");
        else {
          if ($l("#lang1").val() == "Normal") return;
          app.open_link(
            null,
            `/converter/${$l("#lang1").val()}/${$l("#lang2").val()}`
          );
        }
      });
    }
    if (true) {
      // adding lang options in select tags
      if (s.mode == 1)
        setTimeout(() => {
          $l(".web_only1").remove();
          $l(".web_only").hide();
        }, 1);
      for (let z of $l(".lang").elm) {
        let x = $l(z).attr("id");
        let j = "";
        for (let y in app.lipyaH) {
          if (y == "Devanagari" && !app.in(["lang1", "lang2"], x)) continue;
          if (y == "Normal" && app.in(["main_lang", "xcv", "script_set"], x))
            continue;
          j += `<option value="${y}"></option>`;
        }
        app.yuj("#" + x, j);
      }
      app.yuj("#xcv", `<option id="Vedic" value="Vedic"></option>`);
      app.yuj(
        "#paricaya",
        `<div class="br-above">भारते रचितः</div>E-mail : <a rel="noopener" href="mailto:lipilekhika@gmail.com" class="mail">lipilekhika@gmail.com</a>`
      );
    }
  }
  kr(q, i = null, lang = 0) {
    if (q == "font-size") {
      let x = app.lang_list[$l("#app_lang").val()][0];
      $l("body").css("font-size", `${10 + x}px`);
      $l("html").attr("lang", app.lang_list[$l("#app_lang").val()][1]);
    } else if (q == "add-direction") {
      if (lang == "Urdu") i.attr("dir", "rtl");
      else i.attr("dir", "ltr");
    } else if (q == "inter-anuvadak") {
      let e = $l("#anu_main1");
      if (s.mode == 0)
        if (
          app.lipyaH[$l("#lang1").val()][3] == 0 ||
          app.lipyaH[$l("#lang2").val()][3] == 0
        )
          e.hide();
        else e.show();
    } else if (q == "edited") this.once_edited = true;
    else if (q == "convert-msg") {
      let db = app.lang_texts[$l("#app_lang").val()];
      let data = db.scripts;
      db = db.others;
      let val = [$l("#lang1").val(), $l("#lang2").val()];
      val[0] = data[val[0]];
      val[1] = data[val[1]];
      let elm = [$l("#down_arrow_img")[0], $l("#up_arrow_img")[0]];
      elm[0].title = `${db.convert} :- ${val[0]} ➠ ${val[1]}`;
      elm[1].title = `${db.convert} :- ${val[1]} ➠ ${val[0]}`;
    } else if (q == "sa-val") {
      let src = $l("#main_lang").val();
      let val = app.lipyaH[src][1];
      let sa = app.k.akSharAH[src].sa;
      $l(`#sa_${sa}4`).check(true);
      $l("#main").attr("lipi-mode", sa);
      if (app.in(["Romanized", "Normal", "Urdu"], src)) val += " ";
      let extra = 0;
      if (app.in(["Brahmi", "Modi", "Sharada", "Siddham", "Granth"], src))
        extra++;
      let val1 = val.substring(0, val.length - 1 - extra);
      $l("#sa_0").html(`ajay ➠ ${val1}`);
      $l("#sa_1").html(`ajay ➠ ${val}`);
    } else if (q == "inter-set") {
      $l($l(`#lang1, #lang2`).children()).show();
      $l(
        `#lang1 [value=${$l("#lang2").val()}], #lang2 [value=${$l(
          "#lang1"
        ).val()}]`
      ).hide();
    } else if (q == "set-lang-img") {
      let val = "";
      if (i == null) val = $l("#xcv").val();
      else val = i;
      let data = this.lang_texts[$l("#app_lang").val()],
        elm = $l("#image");
      let v = `${data.scripts[val]} - ${data.title.image}`;
      $l("#xcv").val(val);
      let img = new Image();
      img.onload = function () {
        elm.css({
          width: `${this.width * 0.78}px`,
          height: `${this.height * 0.78}px`,
        });
        elm.attr({
          src: app.app.usage_table_link(val),
          title: v,
          alt: v,
        });
      };
      img.src = app.app.usage_table_link(val);
    } else if (q == "p-holder") {
      for (let x of ["#lang1", "#lang2", "#main_lang"]) {
        if (i != null && x != i) continue;
        let e = $l(x);
        let f = $l(e.attr("of"));
        let d = this.lang_texts[$l("#app_lang").val()];
        f.attr(
          "placeholder",
          app.k.format(d.others.place, ["- " + this.lipyaH[e.val()][0]])
        );
      }
    }
  }
  change_page(to, set = true) {
    if (set) {
      $l(`#${app.current_page}`).hide();
      $l(`#${to}`).show();
    }
    if (to === "inter") app.set_link("/parivartak");
    else app.set_link("/");
    if (to == "inter" || to == "parri") {
      $l("#parivartak").hide();
      $l("#back_btn").show();
    }
    if (to == "inter" && !app.once_edited)
      load_lekhika_lang($l("#lang1").val(), () => {
        load_lekhika_lang($l("#lang2").val(), () => {
          if (!("from" in s1)) $l("#lang1").val($l("#main_lang").val());
          if (!("to" in s1)) $l("#lang2").val("Romanized");
          $l("#first").val($l("#main").val());
          $l("#second").attr("lipi-lang", app.k.normalize($l("#lang2").val()));
          $l("#first").attr("lipi-lang", app.k.normalize($l("#lang1").val()));
          let n = app.k.akSharAH[$l("#lang1").val()].sa;
          $l("#first").attr("lipi-mode", n);
          n = app.k.akSharAH[$l("#lang2").val()].sa;
          $l("#second").attr("lipi-mode", n);
          app.kr("inter-anuvadak");
          $l("#lang1", "#lang2").resize();
          $l("#second").val(
            app.app.parivartak(
              $l("#first").val(),
              $l("#lang1").val(),
              $l("#lang2").val()
            )
          );
          app.kr("inter-set");
        });
      });
    else if (to == "gRham") {
      $l("#parivartak").show();
      $l("#back_btn").hide();
    } else if (to == "prayog") {
      $l("#xcv").val($l("#main_lang").val());
      $l("#xcv").trigger("change");
      $l("#prayog").show();
    } else if (to == "mA_prayog") {
      $l("#prayog").hide();
    } else if (to == "setting") {
      $l("#setting").show();
    } else if (to == "mA_setting") {
      $l("#setting").hide();
    }
    if (set) app.current_page = to;
    app.pRShThedAnIm = to;
  }
  copy_text(query) {
    var copyText = $l(query)[0];
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length + 2);
    document.execCommand("copy");
  }
  set_link(url = null, locale = null) {
    if (!locale) locale = this.lang_list[$l("#app_lang").val()][1];
    if (!url) url = window.location.pathname;
    let url_list = url.split("/");
    if ($lf.in(this.locales, url_list[1])) {
      url_list.splice(1, 1);
      if (url_list.length === 1) url_list.push("");
      url = url_list.join("/");
    } else if (url_list.length === 2 && url_list[1] === "") url_list.push("");
    url = `${(locale !== "en" ? "/" + locale : "") + url}`;
    if ($lf.last(url) === "/" && url.length !== 1)
      url = url.substring(0, url.length - 1);
    let stateObj = { id: "100" };
    window.history.pushState(stateObj, $l("title").html(), url);
    return url;
  }
  set_lang_text(val = $l("#app_lang").val()) {
    let data = app.lang_texts[val];
    let tlt = data.others.page_title,
      t1 = data.scripts;
    if ("main_lang" in s1)
      tlt = app.k.format(data.others.title_lang, [t1[s1["main_lang"]]]);
    if ("to" in s1)
      tlt = app.k.format(data.others.title_convert, [
        app.k.format(data.others.from, [t1[s1["from"]], t1[s1["to"]]]),
      ]);
    if (s1.page === 1)
      tlt = app.k.replace_all(data.others.title_convert, "{0} - ", "");

    $l("title").html(tlt);
    for (let x in data.lekhAH) {
      let v = "";
      if (x == "anya_nirdesh") v = app.k.text_to_html(data.lekhAH[x], "li");
      else v = app.k.replace_all(data.lekhAH[x], "\n", "<br>");
      if (x == "about_text")
        v = app.k.format(v, [
          `<a rel="noopener" href="https://rebrand.ly/lekhika" target="_blank">`,
          "</a>",
        ]);
      $l(`[lkh=${x}]`).html(v);
    }
    for (let x in data.scripts) {
      let v = data.scripts[x];
      if (x == "Vedic") $l(`[value=${x}]`).html(`${v}`);
      else
        $l(`:not(.bhAShAnyAH) [value=${x}]`).html(
          `${v} (${this.lipyaH[x][2]})`
        );
      $l(`.bhAShAnyAH [value=${x}]`).html(`${v}`);
    }
    app.app.set_interface_lang(app.lang_list[val][2]);
    for (let x in data.title) {
      let v = data.title[x];
      $l(`[tlt=${x}]`).attr({
        title: v,
        alt: v,
      });
    }
    if (!this.first_load) $l("select").resize();
    else this.first_load = false;
    this.kr("p-holder");
    if (s.mode == 1)
      for (let x of $l("a").elm)
        for (let g of ["href", "target", "rel"]) x.removeAttribute(g);
    this.set_link();
  }
  store_values(name, val, defal = false) {
    if (defal) {
      switch (name) {
        case "script":
          storage.setItem(name, "Hindi");
          break;
        case "app_lang":
          storage.setItem(name, "English");
          break;
        case "sahayika":
          storage.setItem(name, "on");
          break;
      }
    } else {
      if (!app.in(["app_lang", "script", "sahayika"], name)) return;
      switch (name) {
        case "script":
          if (!(val in app.lipyaH)) return;
          break;
        case "app_lang":
          if (!(val in app.lang_list)) return;
          break;
        case "sahayika":
          if (!(val == "on" || val == "off")) return;
          break;
      }
      storage.setItem(name, val);
    }
  }
  get_values(name) {
    if (name in storage) {
      let val = storage[name];
      switch (name) {
        case "script":
          if (!(val in app.lipyaH)) {
            val = "Hindi";
            this.store_values(name, val);
          }
          break;
        case "app_lang":
          if (!(val in app.lang_list)) {
            val = "English";
            this.store_values(name, val);
          }
          break;
        case "sahayika":
          if (!(val == "off" || val == "on")) {
            val = "on";
            this.store_values(name, val);
          }
          break;
      }
      return val;
    } else {
      this.store_values(name, "", true);
      return app.get_values(name);
    }
  }
  open_link(lang = null, main = null) {
    if (lang == null) lang = app.sthAna.lang;
    if (main == null)
      if ("to" in s1) main = app.sthAna.from + app.sthAna.to;
      else main = app.sthAna.main;
    window.open(window.location.origin + lang + main, "_blank");
  }
  download(url, nm = "") {
    var link = document.createElement("a");
    link.href = url;
    link.download = nm;
    link.click();
    link.remove();
  }
}
var app = new अनुप्रयोगः();
var storage = window.localStorage;
var s1 = {};
setTimeout(async () => {
  if (true) {
    //pre settings
    if ("main_lang" in s) s["from"] = app.k.normalize(s["main_lang"]);
    if ("from" in s) {
      s["main_lang"] = app.k.normalize(s["from"]);
    }
    s1 = JSON.parse(JSON.stringify(s));
  }
  if (true) {
    //setting values
    if (!("app_lang" in s)) s["app_lang"] = app.get_values("app_lang");
    if (!("main_lang" in s)) s["main_lang"] = app.get_values("script");
    if (!("from" in s)) s["from"] = s["main_lang"];
    if (!("to" in s)) s["to"] = "Romanized";
    if (!("vitroTanam" in s)) s["vitroTanam"] = true;
    if (!("page" in s)) s["page"] = 0;
    if (!("mode" in s)) s["mode"] = 0;
  }
  let v = s["app_lang"];
  app.lang_texts[v] = await $lf.get(`/src/display/${s["app_lang"]}.json`);
  // $lf.getScript(`https://github.com/lipilekhika/dist/releases/download/bhasha/${app.lang_list[v][1]}.js`);
  $l("body").append(await $lf.get("/app.asp"));
  let e = $l("#store_html").children();
  for (let x of e) app.anya_html[x.getAttribute("nm")] = x.innerHTML;
  $l("#store_html").remove();
  app.init_html();
  $l("#main_val").check(true);
  setTimeout(async () => {
    // waiting for main process to complete
    let el = $lf.make(
      await $lf.get(app.k.substring(app.k.image_loca, 0, -5) + "/img.asp")
    );
    for (let x of el.children) {
      let elm = $l(`[chv=${x.getAttribute("nm")}]`).html(x.innerHTML);
      elm.addClass("imgs");
    }
    el.remove();
    $l("#main_section").show(); // showing the Application
  }, 1);
  $l(".redirect").attr("tlt", "redirect_msg");
  let ht = (x, y) => app.k.format(app.anya_html[x], [y]),
    t = "";
  if (true) {
    // init values
    // if ("app_lang" in s1) {
    //   t = $l("#app_lang").after(ht("app_set", s1["app_lang"]));
    //   t.hide();
    //   app.sthAna.lang = "/" + app.lang_list[s["app_lang"]][1];
    // }
    if ("main_lang" in s1) {
      t = $l("#main_lang").after(ht("main_set", s1["main_lang"]));
      t.hide();
      t = $l("#script_set").after(ht("script_set", s1["main_lang"]));
      t.hide();
      app.sthAna.main = "/lang/" + s1["main_lang"];
    }
    if ("from" in s1) {
      t = $l("#lang1").after(ht("from_set", s1["from"]));
      t.hide();
      app.sthAna.from = "/converter/" + s1["from"];
    }
    if ("to" in s1) {
      t = $l("#lang2").after(ht("to_set", s1["to"]));
      t.hide();
      app.sthAna.to = "/" + s1["to"];
      if (s1.page == 1) load_lekhika_lang(s1.to);
    }
    $l(".fixed_select").on("dblclick", function () {
      let e = $l(this).attr("ukku");
      if (e == undefined) return;
      e = e.split(",");
      for (let x of e) {
        $l(x).show();
        $l(x + "+span.fixed_select").remove();
      }
      for (let x of $l(this).attr("adi").split(",")) delete s1[x];
    });
  }
  //adding on off tooltip of img type 2
  $l("[chv=imgon2]").attr("tlt", "imgon");
  $l("[chv=imgoff2]").attr("tlt", "imgoff");
  on_loaded();
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = () => {
    $l("title").html($l("title").html());
    $l(".lipi_icon").remove();
    add_icon();
    // let t = app.k.time();
    let back = false;
    let hde = () => $l("#back_btn").hide();
    if (!back) window.history.pushState(null, "", window.location.href);
    let pg = app.pRShThedAnIm,
      bck = {
        prayog: "#close1",
        setting: "#close2",
      };
    if (pg == "menu") $l("#menu_blocker").trigger("click");
    else if (pg in bck) $l(bck[pg]).trigger("click");
    else if (app.in(app.pages, app.current_page)) {
      app.change_page("gRham");
      hde();
    }
    app.time = app.k.time();
    app.c++;
  };
}, 1);

var icon_link = $l("#lipi_icon").attr("href");

function add_icon() {
  let pra = icon_link;
  for (x of ["icon", "shortcut icon", "apple-touch-icon"])
    $l("head").append(
      `<link rel="${x}" type="image/png" href="${pra}" class="lipi_icon">`
    );
}
add_icon();

function on_loaded() {
  lipi_lekhika(); // initializing lipi lekhika core tool
  $l("#sah_set_val").check(
    $l("#sah_val").check(
      {
        on: true,
        off: false,
      }[app.get_values("sahayika")]
    )
  );

  if (true) {
    $l("#app_lang").val(s["app_lang"]);
    $l("#main_lang").val(s["main_lang"]);
    $l("#lang1").val(s["from"]);
    $l("#xcv").val(s["main_lang"]);
    $l("#lang2").val(s["to"]);
    $l("#script_set").val(app.get_values("script"));
    $l("#main_lang").trigger("change");
    app.set_lang_text();
    if (s["page"] == 0) $l("#gRham").show();
    else if (s["page"] == 1) {
      app.current_page = "inter";
      $l("#inter").show();
      $l("#parivartak").hide();
      $l("#back_btn").show();
    }
    $l("#second").attr("lipi-lang", app.k.normalize($l("#lang2").val()));
    $l("#first").attr("lipi-lang", app.k.normalize($l("#lang1").val()));
  }
  if (true) {
    let akl = $l("#main_lang").val();
    if (app.in(["Urdu", "Romanized"], akl)) $l("#sa_mode").hide();
    app.kr("add-direction", $l("#main"), akl);
    app.kr("add-direction", $l("#first"), $l("#lang1").val());
    app.kr("add-direction", $l("#second"), $l("#lang2").val());
    app.kr("convert-msg");
    app.kr("font-size");
    app.kr("inter-set");
  }
  if (s.vitroTanam) window.onbeforeunload = () => "Do you really want to Leave";
  $l("#lipi_icon").remove();
  for (let x of ["#main", "#first", "#second"]) {
    let e = $l(x);
    e.css("height", e.css("height"));
  }
  for (let x of ["select:not(#app_lang)", ".ajay", "#main", ".normal"])
    $l(x).addClass("fonts");
  // Setting Location of the Menu
  $l("#menu_container").show();
  $l("#menu_body").css("left", "-" + $l("#menu_body").css("width"));
  $l("#menu_container").hide();
  $l("select")
    .resize()
    .on("change", (e) => $l(e.target).resize());
  $l(".redirect").hide();
}
