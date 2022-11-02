<div id="main_section" style="display:none;">
    <div id="base">
        <div class="in-flex">
            <span id="menu_btn" chv="menu_btn" tlt="menu"></span>
            <span tlt="back" chv="back_btn" class="back pointer" id="back_btn"></span>
            <span id="parivartak" tlt="parivartak" class="in-flex button">
                <span chv="convert" class="imgs btn_img"></span>
                <span lkh="parivartak"></span>
            </span>
            <span tlt='usage_btnm' chv="usage_btn" class='prayog_btn imgs' id='up_usage'></span>
        </div>
        <div id="parri" style="display:none;">
            <p id="about_text" lkh="about_text" class="br-above"></p>
            <p id="paricaya" class="br-above"></p>
            <div class="flex br-above">
                <a id="issue" class="flex dvayam-right no_under web_only1" rel="noopener" href="https://github.com/lipilekhika/jAlAnuprayog/issues" target="_blank">
                    <span chv="git"></span>
                    <span lkh="issue"></span>
                </a>
                <span id="licence_btn" lkh="show_lic" class="button"></span>
            </div>
            <p id="licence" class="br-above" style="display:none"></p>
        </div>
        <div id="gRham" style="display:none;">
            <div class="flex">
                <span id="sa_mode" class="dvayam-right in-flex">
                    <label class="in-flex" tlt="sa_0">
                        <input type="radio" class="sa_radio" name="sa_mode" id="sa_04">
                        <span id="sa_0" class="ajay"></span>
                    </label>
                    <label class="in-flex" tlt="sa_1">
                        <input type="radio" class="sa_radio" name="sa_mode" id="sa_14">
                        <span id="sa_1" class="ajay"></span>
                    </label>
                </span>
                <label class="check_img in-flex">
                    <input type="checkbox" t=kr id="sah_val">
                    <span chv="imgoff1" class="imgs" kr=off tlt="imgoff1"></span>
                    <span chv="imgon1" class="imgs" kr=on tlt="imgon1"></span>
                    <span tlt="lekhan_sahayika" lkh="sahayika_text" id="sahayika_text"></span>
                </label>
            </div>
            <div class="vr-flex1">
                <div class="typ_lang flex">
                    <select class="lang" tlt="typ_lang" id="main_lang" of=#main></select>
                    <span class="redirect web_only1" chv="redirect" id="redirect0"></span>
                    <span id="set_img" class="set_img pointer" chv="setting" tlt="setting"></span>
                    <label id="main_switch" class="check_img ekam">
                        <input type="checkbox" t=kr id="main_val">
                        <span chv="imgoff" class="imgs" kr=off tlt=imgofflipi></span>
                        <span chv="imgon" class="imgs" kr=on tlt=imgonlipi></span>
                    </label>
                    <span id="cp1" class="cpy_btn ekam-right" chv="cpy_btn" tlt="cpy_btn"></span>
                    <span class="anuvadak web_only1 pointer" chv="anuvadak" tlt="anuvadak" id="anu_main"></span>
                </div>
            </div>
            <textarea id="main" tlt="mukhya_lekhan" class="Lipi-LekhikA no_checking block"></textarea>
            <div id="table_btn" class="in-flex prayog_btn button">
                <span tlt="usage_btnm" chv="usage_btn" class="imgs btn_img"></span>
                <span id="table" lkh="show_table"></span>
            </div>
        </div>
        <div id="inter" style="display:none;">
            <div class="in-flex">
                <select class="lang" id="lang1" of="#first"></select>
                <span id="cp2" chv="cpy_btn" class="cpy_btn ekam" tlt="cpy_btn"></span>
                <label class="check_img">
                    <input type="checkbox" t=kr class="img_inter1">
                    <span chv="imgoff2" kr=off></span>
                    <span chv="imgon2" kr=on></span>
                </label>
                <span class="redirect inter_redirect web_only1" chv="redirect"></span>
                <span class="anuvadak pointer web_only1" chv="anuvadak" tlt="anuvadak" id="anu_main1"></span>
            </div>
            <textarea id="first" class="normal Lipi-LekhikA block no_checking" lipi-lekhika="off"></textarea>
            <div class="in-flex">
                <select class="lang" id="lang2" of="#second"></select>
                <span id="cp3" chv="cpy_btn" class="cpy_btn ekam-left" tlt="cpy_btn"></span>
                <span id="up_arrow_img" chv="up_arrow" class="cnvrt" style="margin:0 0 0 5px;"></span>
                <span id="down_arrow_img" chv="down_arrow" class="cnvrt" style="margin:0 -2px 0 -3.5px;"></span>
                <span id="auto_img" chv="auto" class="ekam-right" style="margin-left:5px;"></span>
                <label class="check_img">
                    <input type="checkbox" t=kr class="img_inter2">
                    <span chv="imgoff2" kr=off></span>
                    <span chv="imgon2" kr=on></span>
                </label>
                <span class="redirect inter_redirect web_only1" chv="redirect"></span>
            </div>
            <textarea id="second" class="normal Lipi-LekhikA block no_checking" lipi-lekhika="off"></textarea>
            <div>
                <span lkh='no_prvrtn'></span>
            </div>
        </div>
    </div>
    <div class="vr-flex extra" id="prayog" style="display:none;">
        <div class="in-extra">
            <div class="in-flex">
                <select class="lang" id="xcv"></select>
                <div id="download" class="pointer web_only1" tlt="img_download" chv="img_download"></div>
            </div>
            <div class="close_contain flex">
                <span id="close1" tlt="close_img" chv="close_img" class="close_img close_minus"></span>
            </div>
            <div class="vr-flex">
                <img id="image" class="block" tlt="image">
                <div id="shoonyam" lkh="anya_nirdesh"></div>
            </div>
        </div>
        <div class="blocker"></div>
    </div>
    <div class="vr-flex extra" id="setting" style="display:none;">
        <div class="flex">
            <div class="in-extra" id="setting_in">
                <div lkh="defal_msg" id="set_msg"></div>
                <div class="close_contain flex">
                    <span id="close2" tlt="close_img" chv="close_img" class="close_img close_minus"></span>
                </div>
                <div class="defal">
                    <span tlt="lekhan_sahayika" lkh="sahayika_text" class="one"></span>
                    <label class="check_img">
                        <input type="checkbox" t=kr id="sah_set_val">
                        <span chv="imgoff2" kr=off></span>
                        <span chv="imgon2" kr=on></span>
                    </label>
                </div>
                <div class="defal">
                    <span class="one" lkh="script_set"></span>
                    <select id="script_set" class="lang script_set"></select>
                </div>
            </div>
        </div>
        <div class="blocker"></div>
    </div>
</div>
</div>
<div id="menu_container" style="display:none;">
    <div id="menu_body" style="left:-900px">
        <div id="lang_change_container" class="in-flex">
            <span id="lang_img" chv="lang" tlt="app_lang"></span>
            <select id="app_lang" tlt="app_lang" class="app_lang"></select>
            <span class="redirect web_only1" chv="redirect" id="redirect1"></span>
        </div>
        <div id="about_menu" class="menu_items ekam-left flex menu_borders">
            <span id="about_button" chv="about"></span>
            <span lkh="about_msg" class="menu_msg"></span>
        </div>
        <div id="setting_menu" class="menu_items ekam-left flex menu_borders">
            <span class="set_img" chv="setting"></span>
            <span lkh="setting" class="menu_msg"></span>
        </div>
        <div id="prayog_menu" class="menu_items ekam-left flex menu_borders">
            <span chv="usage_btn" class="imgs"></span>
            <span lkh="show_table" class="menu_msg"></span>
        </div>
        <div id="info_links" class="web_only1 vr-flex">
            <a rel="noopener" target="_blank" class="menu_items menu_borders vr-flex no_under"
                href="https://rebrand.ly/lekhika">
                <span class="home_img imgs"></span>
                <span lkh="home_link" class="menu_msg"></span>
            </a>
            <a rel="noopener" target="_blank" class="menu_items menu_borders vr-flex no_under"
                href="https://rebrand.ly/lekhikadownload">
                <span class="download_img" chv="download"></span>
                <span lkh="download_link" class="menu_msg"></span>
            </a>
            <a rel="noopener" target="_blank" class="menu_items menu_borders vr-flex no_under" tlt="git"
                href="https://github.com/lipilekhika/jAlAnuprayog">
                <span chv="git"></span>
                <span lkh="source_link" class="menu_msg"></span>
            </a>
        </div>
        <div class='web_only1 vr-flex' id='bhAShA_sanchit'></div>
    </div>
    <div id="menu_blocker"></div>
</div>
<div id="store_html" style="display:none;">
    <div nm="app_set">
        <span class="app_lang fixed_select" adi="app_lang" ukku="#app_lang">{0}</span>
    </div>
    <div nm="main_set">
        <span class="lang fonts fixed_select" adi="main_lang,from" ukku="#main_lang,#lang1" value="{0}"></span>
    </div>
    <div nm="from_set">
        <span class="lang fonts fixed_select" adi="from,main_lang" ukku="#lang1,#main_lang" value="{0}"></span>
    </div>
    <div nm="to_set">
        <span class="lang fonts fixed_select" adi="to" ukku="#lang2" value="{0}"></span>
    </div>
    <div nm="script_set">
        <span class="lang fixed_select script_set fonts" value="{0}"></span>
    </div>
</div>