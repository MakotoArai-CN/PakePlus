const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })



var intervalBox = setInterval(tools, 1000);
function tools() {
    clearInterval(intervalBox)
    // css insert
    var style = document.createElement('style');
    style.innerHTML = `
    .mian-card {
            position: fixed;
            right: 20px;
            bottom: 20px;
            width: auto;
            height: auto;
            margin: 10px;
            z-index: 9999999;
        }

        .mian-card mdui-menu {
            width: 100%;
            height: 100%;
        }

        .mian-card mdui-menu-item span {
            margin: 10px;
        }

        .mian-card-ctrl {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .ctrl-panel {
            transition: all 0.3s ease-in-out;
            position: fixed;
            top: 20px;
            right: -330px;
            border: solid 1px #ccc;
            border-radius: 10px;
            width: 330px;
            padding: 10px;
            z-index: 9999999;
        }

        .ctrl-panel-show {
            right: 20px;
        }

        .mdui-card-actions {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px;
        }

        .after-n-min mdui-text-field,
        .nofree-n-min mdui-text-field {
            margin: 10px;
            width: 160px;
        }

        .after-n-min-select,
        .nofree-n-min-select {
            width: 110px;
        }

        .question-actions {
            width: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px;
        }

        /* 前两个文本输入框宽度为120px */
        .msg-card-actions .area mdui-text-field {
            width: 99px;
        }

        .candidate-words {
            overflow-y: scroll;
        }

        /* .candidate-words滚动条隐藏 */
        .candidate-words::-webkit-scrollbar {
            display: none;
        }

        .candidate-words-item {
            width: 100%;
        }

        .candidate-words-item .candidate-word-select-td {
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hide-btn {
            transition: all 0.3s ease-in-out;
            opacity: 0;
        }

        .hide-btn:hover {
            opacity: 1;
        }

        .hide-y-element {
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
        }

        .show-y-element {
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
            max-height: 1000px;
            /* 需要根据内容的实际最大高度进行调整 */
            opacity: 1;
            overflow: hidden;
            /* 保持内容隐藏，防止溢出 */
        }
    `;
    document.head.appendChild(style);
    // inside new dom element
    var element = document.createElement('div');
    var panel = `
    <mdui-card class="mian-card">
        <mdui-menu>
            <mdui-menu-item>
                <mdui-chip elevated>开关</mdui-chip>
                <mdui-switch class="system-switch"></mdui-switch>
            </mdui-menu-item>
            <mdui-menu-item>
                <mdui-chip elevated>美化</mdui-chip>
                <mdui-switch class="theme-switch"></mdui-switch>
            </mdui-menu-item>
            <mdui-menu-item class="mian-card-ctrl">
                <mdui-button class="ctrl-panel-switch">控制面板</mdui-button>
            </mdui-menu-item>
        </mdui-menu>
    </mdui-card>

    <mdui-tabs class="ctrl-panel" value="tab-3">
        <mdui-tab value="tab-1" style=" ">登录设置</mdui-tab>
        <mdui-tab value="tab-2">功能设置</mdui-tab>
        <mdui-tab value="tab-3" style=" ">消息模板</mdui-tab>
        <!-- Panel 1 -->
        <mdui-tab-panel slot="panel" value="tab-1">
            <mdui-card>
                <mdui-text-field label="用户名" class="login_username"></mdui-text-field>
                <mdui-text-field label="密码" class="login_password"></mdui-text-field>
                <mdui-text-field label="分机号" class="login_phonenum"></mdui-text-field>
                <mdui-checkbox checked class="login_autologin">自动登录</mdui-checkbox>
                <mdui-checkbox checked class="login_autobusy">自动置忙</mdui-checkbox>
                <mdui-checkbox checked class="login_beautify">登录美化</mdui-checkbox>
                <mdui-card class="mdui-card-actions">
                    <mdui-button class="mdui-ripple mdui-color-theme-accent login-save">保存</mdui-button>
                    <mdui-button class="mdui-ripple mdui-color-theme-accent login-reset">重置</mdui-button>
                    <mdui-button class="mdui-ripple ctrl-panel-hide">取消</mdui-button>
                </mdui-card>
            </mdui-card>
        </mdui-tab-panel>
        <!-- Panel 2 -->
        <mdui-tab-panel slot="panel" value="tab-2">
            <mdui-checkbox checked class="workorder-candidate">工单候选</mdui-checkbox>
            <mdui-checkbox checked class="workorder-auto">自动提交</mdui-checkbox>
            <mdui-checkbox checked class="workorder-auto-free">自动置闲</mdui-checkbox>
            <mdui-checkbox checked class="workorder-auto-busy">置忙检测</mdui-checkbox>
            <mdui-checkbox checked class="workorder-auto-preselect">自动预选</mdui-checkbox>
            <div class="auto-kill">
                <div class="after-n-min">
                    <mdui-text-field label="话后超过n分钟时" class="after-n-min-input"></mdui-text-field>
                    <mdui-select class="after-n-min-select" value="退出">
                        <mdui-menu-item value="退出">退出</mdui-menu-item>
                        <mdui-menu-item value="挂机">挂机</mdui-menu-item>
                    </mdui-select>
                </div>
                <div class="nofree-n-min">
                    <mdui-text-field label="置忙超过n分钟时" class="nofree-n-min-input"></mdui-text-field>
                    <mdui-select class="nofree-n-min-select" value="置闲">
                        <mdui-menu-item value="退出">退出</mdui-menu-item>
                        <mdui-menu-item value="置闲">置闲</mdui-menu-item>
                    </mdui-select>
                </div>

            </div>


            <mdui-menu-item>
                <mdui-select class="theme-select" value="选择主题">
                    <mdui-menu-item value="pink">樱花粉</mdui-menu-item>
                    <mdui-menu-item value="blue">云涧蓝</mdui-menu-item>
                    <mdui-menu-item value="Night Light">护眼色</mdui-menu-item>
                    <mdui-menu-item value="Custom mode">自定义</mdui-menu-item>
                </mdui-select>
            </mdui-menu-item>
            <div class="question-actions">
                <mdui-button class="mdui-ripple system-save">保存</mdui-button>
                <mdui-button class="mdui-ripple question-actions-setting">工单候选设置</mdui-button>
                <mdui-button class="mdui-ripple ctrl-panel-hide">取消</mdui-button>
            </div>

        </mdui-tab-panel>

        <!-- Panel 3 -->
        <mdui-tab-panel slot="panel" value="tab-3">
            <div class="msg-card-actions">
                <div class="area">
                    <mdui-text-field label="区划" class="area-province"></mdui-text-field>
                    <mdui-text-field label="区县" class="area-city"></mdui-text-field>
                    <mdui-text-field label="单位编码" class="company_code"></mdui-text-field>
                </div>
                <div class="company">
                    <mdui-text-field label="单位名称" class="company_name"></mdui-text-field>
                </div>
                <mdui-text-field label="联系电话" class="contact_phone"></mdui-text-field>
                <mdui-text-field label="问题描述" rows="2" class="question_desc"></mdui-text-field>
            </div>
            <div class="msg-card-actions">
                <mdui-text-field label="" rows="4"
                    placeholder="点我获取信息😆  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;👇然后点这里&emsp;&emsp;隐藏窗口点这里👇  &emsp;&emsp;&emsp;复制点这里👇"
                    class="msg-template"></mdui-text-field>
            </div>
            <mdui-card class="mdui-card-actions">
                <mdui-button class="mdui-ripple mdui-color-theme-accent msg-create">生成</mdui-button>
                <mdui-button class="mdui-ripple mdui-color-theme-accent msg-copy">复制</mdui-button>
                <mdui-button class="mdui-ripple ctrl-panel-hide">取消</mdui-button>
            </mdui-card>
        </mdui-tab-panel>
    </mdui-tabs>

    <!-- theme custom dialog -->
    <mdui-dialog close-on-overlay-click class="theme-custom">
        <label for="custom-theme">
            <h3>自定义主题</h3>
        </label>
        <mdui-text-field label="logo图片地址，留空则使用默认图片" class="logo_url"></mdui-text-field>
        <mdui-text-field label="左侧渐变A色" class="color_left_a"></mdui-text-field>
        <mdui-text-field label="左侧渐变B色" class="color_left_b"></mdui-text-field>
        <mdui-text-field label="顶部渐变A色" class="color_top_a"></mdui-text-field>
        <mdui-text-field label="顶部渐变B色" class="color_top_b"></mdui-text-field>
    </mdui-dialog>

    <!-- Candidate words dialog -->
    <mdui-dialog close-on-overlay-click class="candidate-words">
        <div>
            <label for="candidate-words">
                <table>
                    <tr>
                        <td>
                            <h3>候选词设置</h3>
                        </td>
                        <td><mdui-chip style="display: none;">查看共享QA<mdui-badge
                                    variant="large">99+</mdui-badge></mdui-chip></td>
                    </tr>
                </table>

            </label>
            <mdui-collapse accordion value="item-1" class="candidate-value">
                <mdui-collapse-item value="item-1">
                    <mdui-list-item slot="header" icon="question_mark" title="question">问题描述候选词</mdui-list-item>
                    <div style="margin-left: 1.5rem">
                        <mdui-chip icon="add" class="candidate-add-word">add</mdui-chip>
                        <mdui-chip icon="search" class="candidate-search-btn">search</mdui-chip>
                        <mdui-chip icon="import_export" class="candidate-Export-btn hide-btn"
                            title="你知道的太多了">Export</mdui-chip>
                        <mdui-chip icon="import_export" class="candidate-Import-btn hide-btn"
                            title="你知道的太多了">Import</mdui-chip>
                        <mdui-chip icon="delete" class="candidate-delete-btn">Delete</mdui-chip>
                        <mdui-text-field icon="search" class="actions-search hide-y-element"
                            label="SEARCH YOUR WORD"></mdui-text-field>
                        <table class="candidate-words-item question"></table>
                    </div>

                </mdui-collapse-item>
                <mdui-collapse-item value="item-2">
                    <mdui-list-item slot="header" icon="question_answer" title="solution">解决方案候选词</mdui-list-item>
                    <div style="margin-left: 2.5rem">
                        <mdui-chip icon="add" class="candidate-add-word">add</mdui-chip>
                        <mdui-chip icon="search" class="candidate-search-btn">search</mdui-chip>
                        <mdui-chip icon="import_export" class="candidate-Export-btn hide-btn"
                            title="你知道的太多了">Export</mdui-chip>
                        <mdui-chip icon="import_export" class="candidate-Import-btn hide-btn"
                            title="你知道的太多了">Import</mdui-chip>
                        <mdui-chip icon="delete" class="candidate-delete-btn">Delete</mdui-chip>
                        <mdui-text-field icon="search" class="actions-search hide-y-element"
                            label="SEARCH YOUR WORD"></mdui-text-field>
                        <table class="candidate-words-item answer"></table>
                    </div>
                </mdui-collapse-item>
            </mdui-collapse>

        </div>

    </mdui-dialog>
    `;
    element.innerHTML = panel;
    document.body.appendChild(element);

    // css CDN
    var mdui_css = document.createElement('link');
    mdui_css.href = "https://cdnjs.cloudflare.com/ajax/libs/mdui/2.1.3/mdui.min.css";
    mdui_css.rel = "stylesheet";
    document.head.appendChild(mdui_css);
    // MDUI ICON CDN
    var mdui_icon_css = document.createElement('link');
    mdui_icon_css.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    mdui_icon_css.rel = "stylesheet";
    document.head.appendChild(mdui_icon_css);

    // JQuery CDN
    var jquery_js = document.createElement('script');
    jquery_js.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
    document.head.appendChild(jquery_js);
    // mdui CDN
    var mdui_js = document.createElement('script');
    mdui_js.src = "https://cdnjs.cloudflare.com/ajax/libs/mdui/2.1.3/mdui.global.js";
    document.head.appendChild(mdui_js);
    var timeoutBox = setTimeout(function(){
       panelevent();
    }, 1000);
  };

function panelevent(){

        const account_config = {
            // 用户名，密码，分机号，自动登录，自动置忙，登录美化
            login_url: 'http://qycc.cloudsilk.net:8000/ynczt/login',
            username: '0000',
            password: 'undefined',
            phonenum: '00000000',
            autologin: true,
            autobusy: true,
            login_beautify: true,
            login_config: {
                // ************* 登录设置 ************* //
                // 保存按钮
                save_element: ".login-save",
                // 重置按钮
                reset_element: ".login-reset",
                // 用户名输入框
                username_element: ".login_username",
                // 密码输入框
                password_element: ".login_password",
                // 分机号输入框
                phonenum_element: ".login_phonenum",
                // 自动登录复选框
                autologin_element: ".login_autologin",
                // 自动置忙复选框
                autobusy_element: ".login_autobusy",
                // 登录美化复选框
                beautify_element: ".login_beautify",
            },
            web_element: {
                // 输入框
                input_element: ".el-input__inner",
                // 登录复选框
                login_element: ".el-button--primary",
                // 置忙复选框
                busy_element: ".el-checkbox__label"
            }
        };

        const theme_config = {
            // 主题配置
            logo_url: {
                pink: '',
                blue: '',
                'Night Light': '',
                'Custom mode': ''
            },
            color_left_a: {
                pink: '',
                blue: '',
                'Night Light': '',
                'Custom mode': ''
            },
            color_left_b: {
                pink: '',
                blue: '',
                'Night Light': '',
                'Custom mode': ''
            },
            color_top_a: {
                pink: '',
                blue: '',
                'Night Light': '',
                'Custom mode': ''
            },
            color_top_b: {
                pink: '',
                blue: '',
                'Night Light': '',
                'Custom mode': ''
            },
            logo_element: "",
            left_element: "",
            top_element: "",
            element_config: {
                theme_dialog: ".theme-custom",
                theme_open_button: ".theme-select",
                logo_url_element: ".logo_url",
                left_a_element: ".color_left_a",
                left_b_element: ".color_left_b",
                top_a_element: ".color_top_a",
                top_b_element: ".color_top_b",
            },
        };

        const message_config = {
            // 区划，区县，单位编码，单位名称，联系电话，问题描述元素
            area: {
                province: ".page-wrap .relative .el-input__inner",
                city: ".page-wrap .relative .el-input__inner",
                company_code: ".page-wrap .relative .el-input__inner",
            },
            company: {
                company_name: ".page-wrap .relative .el-input__inner",
            },
            contact_phone: ".page-wrap .relative .el-input__inner",
            textarea_class: ".el-textarea__inner",
            element_config: {
                // ************* 消息模板 ************* //
                // 区划输入框
                area_province_element: ".area-province",
                // 区县输入框
                area_city_element: ".area-city",
                // 单位编码输入框
                company_code_element: ".company_code",
                // 单位名称输入框
                company_name_element: ".company_name",
                // 联系电话输入框
                contact_phone_element: ".contact_phone",
                // 问题描述输入框
                question_desc_element: ".question_desc",
                // 生成后的消息模板
                msg_template_element: ".msg-template",
                // 生成消息按钮
                msg_create_element: ".msg-create",
                // 复制消息按钮
                msg_copy_element: ".msg-copy",
            }
        };

        const function_config = {
            // 功能配置
            workorder_candidate: true,
            auto_submit: true,
            auto_free: true,
            busy_detect: true,
            auto_preselect: true,
            auto_kill: {
                after_n_min: 0,
                after_n_min_action: '退出',
                nofree_n_min: 0,
                nofree_n_min_action: '置闲',
            },
            theme: 'pink',
            element_config: {
                // ************* 功能设置 ************* //
                // 工单候选复选框
                workorder_candidate_element: ".workorder-candidate",
                // 自动提交工单复选框
                workorder_auto_element: ".workorder-auto",
                // 自动置闲复选框
                workorder_auto_free_element: ".workorder-auto-free",
                // 置忙检测复选框
                workorder_auto_busy_element: ".workorder-auto-busy",
                // 自动预选复选框                
                workorder_auto_preselect_element: ".workorder-auto-preselect",
                // 自动挂机设置-话后超过n分钟时
                after_n_min_input_element: ".after-n-min-input",
                after_n_min_select_element: ".after-n-min-select",
                // 自动挂机设置-置忙超过n分钟时
                nofree_n_min_input_element: ".nofree-n-min-input",
                nofree_n_min_select_element: ".nofree-n-min-select",
                // 主题选择
                theme_select_element: ".theme-select",
                // 主题设置
                theme_dialog_element: ".theme-custom",
                // 保存按钮
                system_save_element: ".system-save",
                // 问题录入候选设置
                question_actions_element: ".question-actions-setting",
            },
        };

        const candidate_config = {
            // 候选词配置
            question_candidate_words: [],
            answer_candidate_words: [],
            element_config: {
                // add_btn
                add_btn_element: ".candidate-add-word",
                // search_btn
                search_btn_element: ".candidate-search-btn",
                // export_btn
                export_btn_element: ".candidate-Export-btn",
                // import_btn
                import_btn_element: ".candidate-Import-btn",
                // delete_btn
                delete_btn_element: ".candidate-delete-btn",
                // search_input
                search_input_element: ".actions-search",
                // candidate_words_item
                candidate_words_item_element: ".candidate-words-item",
                // candidate_word_select_td
                candidate_word_select_td_element: ".candidate-word-select-td",
                // candidate_word
                candidate_word_element: ".candidate-word",
            }
        }

        const system_config = {
            // 系统配置
            switch: true,
            beautify: false,
            Version: '4.0.3',
            css_config: {
                ctrl_panel_show: "ctrl-panel-show"
            },
            element_config: {
                // 系统开关
                system_switch_element: ".system-switch",
                // 主题开关
                theme_switch_element: ".theme-switch",
                // 控制面板开关
                ctrl_switch_element: ".ctrl-panel-switch",
                ctrl_panel_element: ".ctrl-panel",
                ctrl_panel_cancel_element: ".ctrl-panel-hide",



                // ************* 消息模板 ************* //
                // 区划输入框
                area_province_element: ".area-province",
                // 区县输入框
                area_city_element: ".area-city",
                // 单位编码输入框
                company_code_element: ".company_code",
                // 单位名称输入框
                company_name_element: ".company_name",
                // 联系电话输入框
                contact_phone_element: ".contact_phone",
                // 问题描述输入框
                question_desc_element: ".question_desc",
                // 生成消息按钮
                msg_create_element: ".msg-create",
                // 复制消息按钮
                msg_copy_element: ".msg-copy",
                // ************* 其他 ************* //

            },
        };


        // -------------------------------config-end------------------------------- //

        // 打开新窗口
        // $('.NewWindow').on('click', function () {
        //     window.open('https://wwx.ciy.cool', "newwindow", "width=540,height=1080");
        // });


        /**
         * @description 登录函数,没有返回值
         * @returns {void}
         */
        function login_fun() {
            /**
             * @description 登录设置,没有返回值
             * @returns {void}
             */
            function login_config() {
                // 登录设置
                const save_element = $(account_config.login_config.save_element);
                const reset_element = $(account_config.login_config.reset_element);
                const username_element = $(account_config.login_config.username_element);
                const password_element = $(account_config.login_config.password_element);
                const phonenum_element = $(account_config.login_config.phonenum_element);
                const autologin_element = $(account_config.login_config.autologin_element);
                const autobusy_element = $(account_config.login_config.autobusy_element);
                const beautify_element = $(account_config.login_config.beautify_element);


                if (localStorage.getItem('account_config') !== null) {
                    const account_config_json = localStorage.getItem('account_config');
                    const account_config_obj = JSON.parse(account_config_json);
                    username_element.val(account_config_obj.username);
                    password_element.val(account_config_obj.password);
                    phonenum_element.val(account_config_obj.phonenum);
                    autologin_element.prop('checked', account_config_obj.autologin);
                    autobusy_element.prop('checked', account_config_obj.autobusy);
                    beautify_element.prop('checked', account_config_obj.beautify);
                }

                // 保存按钮
                save_element.on('click', function () {
                    const username = username_element.val();
                    const password = password_element.val();
                    const phonenum = phonenum_element.val();
                    const autologin = autologin_element.prop('checked');
                    const autobusy = autobusy_element.prop('checked');
                    const beautify = beautify_element.prop('checked');
                    //格式化为json字符串，保存到localStorage
                    const account_config_json = JSON.stringify({
                        username: username,
                        password: password,
                        phonenum: phonenum,
                        autologin: autologin,
                        autobusy: autobusy,
                        beautify: beautify
                    });
                    localStorage.setItem('account_config', account_config_json);
                    // console.log(account_config_json);
                    // console.log(localStorage.getItem('account_config'));
                    // console.log(JSON.parse(localStorage.getItem('account_config')));
                    mdui.snackbar({
                        message: '保存成功',
                        position: 'top',
                        timeout: 2000
                    });
                });

                // 重置按钮
                reset_element.on('click', function () {
                    username_element.val('');
                    password_element.val('');
                    phonenum_element.val('');
                    autologin_element.prop('checked', false);
                    autobusy_element.prop('checked', false);
                    beautify_element.prop('checked', false);
                    // 清除localStorage
                    localStorage.removeItem('account_config');
                    mdui.snackbar({
                        message: '重置成功',
                        position: 'top',
                        timeout: 2000
                    });
                });
            }

            /**
             * 登录事件，传入登录配置
             * @param {object} account_config 登录配置
             * @returns {void}
             */
            function login_event(save_config) {
                if (!save_config) return;
                // 登录事件
                const login_url = account_config.login_url;
                const username = save_config.username;
                const password = save_config.password;
                const phonenum = save_config.phonenum;
                const autologin = save_config.autologin;
                const autobusy = save_config.autobusy;
                const login_beautify = save_config.login_beautify;

                if (location.href == login_url) {
                    changeReactInputValue($(account_config.web_element.input_element).eq(0)[0], username);
                    changeReactInputValue($(account_config.web_element.input_element).eq(1)[0], password);
                    if (login_beautify) {
                        $(".pic-wrap").remove();
                        $(".login").style.borderRadius = "12px";
                    }
                    setTimeout(function () {

                        setTimeout(function () {
                            changeReactInputValue($(account_config.web_element.input_element).eq(2)[0], phonenum);
                        }, 600);


                        setTimeout(function () {
                            if (autobusy) {
                                $(account_config.web_element.busy_element).click();
                            }
                        }, 600);
                        if (autologin) {
                            setTimeout(function () {
                                $(account_config.web_element.login_element).click();
                                // console.log(autologin);

                            }, 600);
                        }

                        // setTimeout(function () {
                        //     location.reload();
                        // }, 1000);
                    }, 1500);
                }
            }
            login_event(JSON.parse(localStorage.getItem('account_config')));
            login_config();
        }

        /**
         * 
         * @description 模板消息,没有返回值
         */
        function message_fun() {
            // 消息模板调用（message_config）
            const area_province_element = $(message_config.element_config.area_province_element);
            const area_city_element = $(message_config.element_config.area_city_element);
            const company_code_element = $(message_config.element_config.company_code_element);
            const company_name_element = $(message_config.element_config.company_name_element);
            const contact_phone_element = $(message_config.element_config.contact_phone_element);
            const question_desc_element = $(message_config.element_config.question_desc_element);
            const msg_template_element = $(message_config.element_config.msg_template_element);
            const msg_create_element = $(message_config.element_config.msg_create_element);
            const msg_copy_element = $(message_config.element_config.msg_copy_element);
            // console.log(msg_create_element);

            msg_template_element.on('click', function () {
                // 实装后调试
                const allProvinceElements = $(message_config.area.province);
                const allCityElements = $(message_config.area.city);
                const allCompanyCodeElements = $(message_config.area.company_code);
                const allCompanyNameElements = $(message_config.company.company_name);
                const contactPhoneElement = $(message_config.contact_phone);

                $(area_province_element).val(ChineseStr(allProvinceElements.eq(0).val()));
                $(area_city_element).val(ChineseStr(allCityElements.eq(1).val()));
                $(company_code_element).val(allCompanyCodeElements.eq(2).val());
                $(company_name_element).val(allCompanyNameElements.eq(3).val());
                $(contact_phone_element).val(contactPhoneElement.eq(5).val());

                // http://qycc.cloudsilk.net:8000/api/order/unitInfo/page?search_RLIKE_unitname=${ChineseStr(allCityElements.eq(1).val()).slice(0, 2)}&search_RLIKE_unitcode=${allCompanyCodeElements.eq(2).val()}&page=1&limit=10

                /**response
                 {
                     "msg": "success",
                     "code": 0,
                     "data": null,
                     "page": {
                       "total": 1,
                       "size": 10,
                       "current": 1,
                       "records": [
                         {
                           "id": 24023,
                           "year": "2024",
                           "zoningcode": "530428000",
                           "zoningname": "元江县本级",
                           "unitcode": "571001",
                           "unitname": "元江哈尼族彝族傣族自治县曼来镇人民政府"
                         }
                       ],
                       "pages": 1
                     }
                   }
                   */
                if (allCompanyNameElements.eq(3).val() == '' && allCompanyCodeElements.eq(2).val() != '' && $(company_name_element).val() == '') {
                    $.ajax({
                        url: `http://qycc.cloudsilk.net:8000/api/order/unitInfo/page?search_RLIKE_unitname=${ChineseStr(allCityElements.eq(1).val()).slice(0, 2)}&search_RLIKE_unitcode=${allCompanyCodeElements.eq(2).val()}&page=1&limit=10`,
                        type: 'GET',
                        success: function (res) {
                            $(company_name_element).val(res.page.records[0].unitname);
                            changeReactInputValue(allCompanyNameElements.eq(3)[0], res.page.records[0].unitname);
                        },
                    })
                }
            });
            msg_create_element.on('click', function () {
                const area_province = area_province_element.val();
                const area_city = area_city_element.val();
                const company_code = company_code_element.val();
                const company_name = company_name_element.val();
                const contact_phone = contact_phone_element.val();
                const question_desc = question_desc_element.val();
                const msg_template = `区       划：${area_province}
区       县：${area_city}
单位编码：${company_code}
单位名称：${company_name}
联系电话：${contact_phone}
问题描述：${question_desc}，麻烦老师处理一下，谢谢`;
                msg_template_element.val(msg_template);
                // console.log(msg_template);
                mdui.snackbar({
                    message: '消息模板生成成功',
                    position: 'top',
                    timeout: 2000
                });
                if (isInViewPort($(".insert-page")[2]) && !$(message_config.textarea_class).eq(4).val()) return;
                changeReactInputValue($(message_config.textarea_class).eq(4)[0], $(question_desc_element).val());
            });

            msg_copy_element.on('click', function () {
                const msg_template = msg_template_element.val();
                const msg_textarea = document.createElement('textarea');
                msg_textarea.value = msg_template;
                document.body.appendChild(msg_textarea);
                msg_textarea.select();
                document.execCommand('copy');
                document.body.removeChild(msg_textarea);
                mdui.snackbar({
                    message: '消息模板已复制到剪贴板',
                    position: 'top',
                    timeout: 2000
                });
            });

            /**
             * 输入同步
             */
            question_desc_element.on('input', () => {
                if (isInViewPort($(".insert-page")[2])) return;
                changeReactInputValue($(message_config.textarea_class).eq(4)[0], $(question_desc_element).val());
            });
        }

        function function_fun() {
            // 功能配置调用（function_config）
            const workorder_candidate = $(function_config.element_config.workorder_candidate_element);
            const workorder_auto_submit = $(function_config.element_config.workorder_auto_element);
            const workorder_auto_free = $(function_config.element_config.workorder_auto_free_element);
            const workorder_auto_busy = $(function_config.element_config.workorder_auto_busy_element);
            const workorder_auto_preselect = $(function_config.element_config.workorder_auto_preselect_element);
            const after_n_min_input = $(function_config.element_config.after_n_min_input_element);
            const after_n_min_select = $(function_config.element_config.after_n_min_select_element);
            const nofree_n_min_input = $(function_config.element_config.nofree_n_min_input_element);
            const nofree_n_min_select = $(function_config.element_config.nofree_n_min_select_element);
            const theme_select = $(function_config.element_config.theme_select_element);
            const system_save = $(function_config.element_config.system_save_element);
            const question_actions = $(function_config.element_config.question_actions_element);

            // 保存按钮
            system_save.on('click', function () {
                const candidate = workorder_candidate.prop('checked');
                const auto_submit = workorder_auto_submit.prop('checked');
                const auto_free = workorder_auto_free.prop('checked');
                const auto_busy = workorder_auto_busy.prop('checked');
                const auto_preselect = workorder_auto_preselect.prop('checked');
                const after_input = after_n_min_input.val();
                const after_select = after_n_min_select.val();
                const nofree_input = nofree_n_min_input.val();
                const nofree_select = nofree_n_min_select.val();
                const theme_type = theme_select.val();
                //格式化为json字符串，保存到localStorage
                const workorder_candidate_json = JSON.stringify({
                    candidate: candidate,
                    auto_submit: auto_submit,
                    auto_free: auto_free,
                    auto_busy: auto_busy,
                    auto_preselect: auto_preselect,
                    after_input: after_input,
                    after_select: after_select,
                    nofree_input: nofree_input,
                    nofree_select: nofree_select,
                    theme_type: theme_type
                });
                localStorage.setItem('function_config', workorder_candidate_json);
                // console.log(workorder_candidate_json);
                // console.log(localStorage.getItem('function_config'));
                // console.log(JSON.parse(localStorage.getItem('function_config')));
                mdui.snackbar({
                    message: '保存成功',
                    position: 'top',
                    timeout: 2000
                });
            });

            // 问题录入候选设置
            question_actions.on('click', function () {
                const candidate_words_dialog = $(".candidate-words")[0];
                candidate_words_dialog.open = true;
            });

        }

        function question_actions_fun() {
            // 问题录入候选设置
            const add_candidate_word = $(candidate_config.element_config.add_btn_element);
            const search_btn = $(candidate_config.element_config.search_btn_element);
            const export_btn = $(candidate_config.element_config.export_btn_element);
            const import_btn = $(candidate_config.element_config.import_btn_element);
            const delete_btn = $(candidate_config.element_config.delete_btn_element);
            const search_input = $(candidate_config.element_config.search_input_element);
            const candidate_words_item = $(candidate_config.element_config.candidate_words_item_element);
            const candidate_word_select_td = $(candidate_config.element_config.candidate_word_select_td_element);
            const candidate_word = $(candidate_config.element_config.candidate_word_element);
            // 问题描述候选词
            const question_candidate_words = [];
            // 解决方案候选词
            const answer_candidate_words = [];

            // 候选词添加按钮
            add_candidate_word.on('click', function () {
                const Original_element = $(this).nextAll("table").find("tr");
                const element = `<tr>
                                    <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${guid()}"></mdui-checkbox></mdui-tooltip></td>
                                    <td> 
                                        <mdui-text-field class="candidate-word"></mdui-text-field>
                                    </td>
                                 </tr>`;
                $(this).nextAll("table").prepend(element);
                // 候选词第一个输入框
                const candidate_word_input = $(this).nextAll("table").find(".candidate-word").first();
                // console.log(candidate_word_input);
                // 候选词输入框失去焦点后自动把值插入到localStorage最前面
                candidate_word_input.on("blur", function () {
                    const candidate_word = $(this).val();
                    const Import_type = $(this).parent().parent().parent().parent().prevAll("mdui-list-item").text() == "问题描述候选词" ? 'question' : 'answer';
                    const candidate_words = JSON.parse(localStorage.getItem(Import_type + '_candidate_words'));
                    // 检测是否有重复值，有责报错
                    if (candidate_words.candidate_words.includes(candidate_word)) {
                        mdui.alert({
                            headline: "Error Type",
                            description: "候选词重复",
                            confirmText: "OK",
                            onConfirm: () => console.log("confirmed"),
                        });
                    } else {
                        // 写入localStorage最前面
                        if (candidate_word == "") { return; }
                        candidate_words.candidate_words.unshift(candidate_word);
                        // 替换localStorage的candidate_words
                        localStorage.setItem(Import_type + '_candidate_words', JSON.stringify(candidate_words));
                        // console.log(localStorage.getItem(Import_type + '_candidate_words'));

                    }
                });

            });

            // 搜索按钮
            search_btn.on('click', function () {
                $(this).nextAll("mdui-text-field").toggleClass("hide-y-element").toggleClass("show-y-element").focus();
            });

            search_input.on("blur", function () {
                const show_num = $(this).nextAll("table").find("tr").length;
                if ($(this).val() == "") {
                    $(this).addClass("hide-y-element").removeClass("show-y-element");
                }
                if (show_num == 0) {
                    load_candidate_words();
                }
            })

            // 导出按钮
            export_btn.on('click', function () {
                const data = {
                    Import_type: $(this).parent().prevAll("mdui-list-item").text() == "问题描述候选词" ? 'question' : 'answer',
                    Import_id: guid(),
                    candidate_words: $(this).nextAll("table").find(".candidate-word").map(function () {
                        return $(this).val();
                    }).toArray(),
                };
                const content = JSON.stringify(data);
                const a = document.createElement('a');
                a.href = URL.createObjectURL(new Blob([content]));
                a.download = $(this).parent().prevAll("mdui-list-item").text() == "问题描述候选词" ? 'question_candidate_words.json' : 'answer_candidate_words.json';
                a.click();
            });
            // 导入按钮
            import_btn.on('click', function () {
                const input = document.createElement('input');
                input.type = 'file';
                input.click();
                const im_this = $(this);
                input.onchange = function () {
                    try {
                        const file = this.files[0];
                        const reader = new FileReader();
                        reader.readAsText(file);
                        reader.onload = function () {
                            try {
                                const data = JSON.parse(reader.result);
                                // 检测导入的数据是否有空值，清除空值
                                data.candidate_words = data.candidate_words.filter(function (word) {
                                    return word != "";
                                });
                                // 检测导入的数据是否有重复值，清除重复值
                                data.candidate_words = data.candidate_words.filter(function (word, index, arr) {
                                    return arr.indexOf(word) == index;
                                });
                                // 将清洗后的数据写入localStorage
                                if (data.Import_type == "question") {
                                    localStorage.setItem('question_candidate_words', JSON.stringify(data));
                                } else if (data.Import_type == "answer") {
                                    localStorage.setItem('answer_candidate_words', JSON.stringify(data));
                                } else {
                                    mdui.alert({
                                        headline: "Error Type",
                                        description: "导入类型错误",
                                        confirmText: "OK",
                                        onConfirm: () => console.log("confirmed"),
                                    });
                                    console.error("导入类型错误");

                                }

                                const Import_id_list = $(im_this).nextAll("table").find(".candidate-word-select-td").map(function () {
                                    return $(this).data('guid');
                                }).toArray();
                                console.log(Import_id_list.includes(Number(data.Import_id)));
                                if (Import_id_list.includes(Number(data.Import_id)) || Import_id_list.includes(data.Import_id)) {
                                    mdui.confirm({
                                        headline: "Error Type",
                                        description: "导入重复,是否覆盖？",
                                        confirmText: "OK",
                                        cancelText: "Cancel",
                                        onConfirm: () => delete_import_id(data.Import_id),
                                    });
                                    console.info("导入重复");
                                    function delete_import_id(Import_id) {
                                        $(im_this).nextAll("table").find(".candidate-word-select-td[data-guid='" + Import_id + "']").closest("tr").remove();
                                        creat_new_candidate_word();
                                    }
                                } else {
                                    creat_new_candidate_word();
                                }

                                function creat_new_candidate_word() {
                                    if ($(im_this).parent().prevAll("mdui-list-item").text() == "问题描述候选词" && data.Import_type == "question") {
                                        data.candidate_words.forEach(function (word) {
                                            const element = `<tr>
                                                            <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${data.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                                            <td> 
                                                                <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                                            </td>
                                                        </tr>`;

                                            $(im_this).nextAll("table").append(element);
                                        });
                                    } else if ($(im_this).parent().prevAll("mdui-list-item").text() == "解决方案候选词" && data.Import_type == "answer") {
                                        data.candidate_words.forEach(function (word) {
                                            const element = `<tr>
                                                            <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${data.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                                            <td> 
                                                                <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                                            </td>
                                                        </tr>`;
                                            $(im_this).nextAll("table").append(element);
                                        });
                                    } else {
                                        mdui.alert({
                                            headline: "Error Type",
                                            description: "导入类型错误",
                                            confirmText: "OK",
                                            onConfirm: () => console.log("confirmed"),
                                        });
                                        // mdui.snackbar({ message: '导入类型错误' });
                                    }
                                }
                            }
                            catch (e) {
                                mdui.alert({
                                    headline: "Error Type",
                                    description: "导入文件错误",
                                    confirmText: "OK",
                                    onConfirm: () => console.log("confirmed"),
                                });
                            }
                        };
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
            });

            // 删除按钮
            delete_btn.on('click', function () {
                // $(candidate_word_select_td).prop('checked');
                const checked_items = $(this).nextAll("table").find(".candidate-word-select-td");
                checked_items.each(function () {
                    if ($(this).prop('checked')) {
                        $(this).closest("tr").remove();
                        try {
                            // 匹配candidate-word值并删除localStorage中对应的数据
                            const candidate_word = $(this).closest("tr").find(".candidate-word").val();
                            const question_candidate_words = JSON.parse(localStorage.getItem('question_candidate_words')).candidate_words || [];
                            const answer_candidate_words = JSON.parse(localStorage.getItem('answer_candidate_words')).candidate_words || [];
                            // 删除question_candidate_words中的candidate_word
                            question_candidate_words.forEach(function (word, index) {
                                if (word == candidate_word) {
                                    question_candidate_words.splice(index, 1);
                                }
                            });
                            // 删除answer_candidate_words中的candidate_word
                            answer_candidate_words.forEach(function (word, index) {
                                if (word == candidate_word) {
                                    answer_candidate_words.splice(index, 1);
                                }
                            });
                            // 写入localStorage
                            localStorage.setItem('question_candidate_words', JSON.stringify({
                                Import_type: 'question',
                                Import_id: question_candidate_words.Import_id,
                                candidate_words: question_candidate_words
                            }));
                            localStorage.setItem('answer_candidate_words', JSON.stringify({
                                Import_type: 'answer',
                                Import_id: answer_candidate_words.Import_id,
                                candidate_words: answer_candidate_words
                            }));
                            mdui.snackbar({ message: '删除成功' });
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                });
                // 如果没有候选词，则自动加载
                if ($(this).nextAll("table").find(".candidate-word-select-td").length == 0) {
                    load_candidate_words();
                }
            });

            // 候选词搜索功能
            function search_candidate_words() {
                search_input.on("keyup", function () {
                    const value = $(this).val().toLowerCase();
                    // const candidate_words_item = $(this).nextAll("table").find(".candidate-word");
                    const question_candidate_words = JSON.parse(localStorage.getItem('question_candidate_words'));
                    const answer_candidate_words = JSON.parse(localStorage.getItem('answer_candidate_words'));
                    const search_type = $(this).parent().prevAll("mdui-list-item").text();
                    const candidate_words_item = $(this).nextAll("table").find("tr");
                    const this_search = $(this);
                    if (search_type == "问题描述候选词") {
                        $(candidate_words_item).remove();
                        question_candidate_words.candidate_words.forEach(function (word) {
                            // console.log(word.toLowerCase().indexOf(value) > -1);

                            if (word.toLowerCase().indexOf(value) > -1) {
                                const element = `<tr>
                                                <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${question_candidate_words.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                                <td> 
                                                    <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                                </td>
                                            </tr>`;
                                $(this_search).nextAll("table").append(element);
                            } else {
                                // console.log("没有找到");
                            }
                        });
                    } else if (search_type == "解决方案候选词") {
                        $(candidate_words_item).remove();
                        answer_candidate_words.candidate_words.forEach(function (word) {
                            if (word.toLowerCase().indexOf(value) > -1) {
                                const element = `<tr>
                                                <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${answer_candidate_words.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                                <td> 
                                                    <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                                </td>    
                                            </tr>`;
                                $(this_search).nextAll("table").append(element);
                            }
                        });
                    } else {
                        mdui.alert({
                            headline: "Error Type",
                            description: "搜索类型错误",
                            confirmText: "OK",
                            onConfirm: () => console.log("confirmed"),
                        });
                    }

                    if (value == "") {
                        load_candidate_words();
                    }

                })

            }

            // 候选词实时检测保存
            function save_candidate_words() {
                const candidate_words_item = $(".candidate-words-item").find(".candidate-word");
                const question_candidate_words = localStorage.getItem('question_candidate_words');
                const answer_candidate_words = localStorage.getItem('answer_candidate_words');
                if (!question_candidate_words && !answer_candidate_words) { return; }
                // 暂时存储到变量中，2分钟不操作再保存
                const question_temp_candidate_words = {};
                const answer_temp_candidate_words = {};
                // 定时2分钟保存，期间失去焦点则重置定时器
                setTimeout(function () {
                    // 数据保存到localStorage
                    if (question_candidate_words) {
                        const question_candidate_words_json = JSON.parse(question_candidate_words);
                        question_temp_candidate_words.Import_type = 'question';
                        question_temp_candidate_words.Import_id = question_candidate_words_json.Import_id;
                        question_temp_candidate_words.candidate_words = question_candidate_words_json.candidate_words;
                    }
                    if (answer_candidate_words) {
                        const answer_candidate_words_json = JSON.parse(answer_candidate_words);
                        answer_temp_candidate_words.Import_type = 'answer';
                        answer_temp_candidate_words.Import_id = answer_candidate_words_json.Import_id;
                        answer_temp_candidate_words.candidate_words = answer_candidate_words_json.candidate_words;
                    }
                    // console.log(question_temp_candidate_words);
                    // console.log(answer_temp_candidate_words);
                    localStorage.setItem('question_candidate_words', JSON.stringify(question_temp_candidate_words));
                    localStorage.setItem('answer_candidate_words', JSON.stringify(answer_temp_candidate_words));
                    // console.log(JSON.parse(localStorage.getItem('question_candidate_words')).candidate_words);
                    // console.log(JSON.parse(localStorage.getItem('answer_candidate_words')).candidate_words);
                    // console.log("保存成功");
                }, 120000);

                candidate_words_item.on("blur", function () {
                    const candidate_word_type = $(this).parent().parent().parent().parent().prevAll("mdui-list-item").text();
                    const candidate_word = $(this).val();
                    // 如果没有值，阻止保存
                    if (candidate_word == "") {
                        return;
                    }
                    if (candidate_word_type == "问题描述候选词") {
                        if (question_candidate_words) {
                            const question_candidate_words_json = JSON.parse(question_candidate_words);
                            // 判断是否是localStorage中的数据，如果是，则更新数据
                            // console.log(question_candidate_words_json.Import_id);
                            // console.log($(this).closest("tr").find(".candidate-word-select-td").data('guid'));
                            // console.log(question_candidate_words_json.Import_id == $(this).closest("tr").find(".candidate-word-select-td").data('guid'));

                            if (question_candidate_words_json.Import_id == $(this).closest("tr").find(".candidate-word-select-td").data('guid')) {
                                const index = candidate_words_item.index($(this));
                                // console.log(index);

                                // console.log(question_candidate_words_json.candidate_words[index]);
                                if (index > -1) {
                                    question_candidate_words_json.candidate_words[index] = candidate_word;
                                    // console.log(question_candidate_words_json.candidate_words);
                                    try {

                                        // 数据保存到临时变量中
                                        question_temp_candidate_words.Import_type = 'question';
                                        question_temp_candidate_words.Import_id = question_candidate_words_json.Import_id;
                                        question_temp_candidate_words.candidate_words = candidate_word;
                                        // localStorage.setItem('question_candidate_words', JSON.stringify(question_candidate_words_json));
                                        // 检测localStorage是否已经修改成功，没有则重试
                                        const retry_time = 1;
                                        console.log(JSON.parse(localStorage.getItem('question_candidate_words')).candidate_words[index] == candidate_word);
                                        console.log(JSON.parse(localStorage.getItem('question_candidate_words')).candidate_words[index]);
                                        console.log(candidate_word);

                                        console.log("修改成功：" + candidate_word);

                                    }
                                    catch (e) {
                                        console.log(e);
                                    }
                                } else {
                                    console.log("没有找到");
                                }
                            } else {
                                // 数据保存到临时变量中
                                question_temp_candidate_words.Import_type = 'question';
                                question_temp_candidate_words.Import_id = question_candidate_words_json.Import_id;
                                question_temp_candidate_words.candidate_words = candidate_word;
                                // 否则，新增数据
                                // question_candidate_words_json.candidate_words.push(candidate_word);
                                // localStorage.setItem('question_candidate_words', JSON.stringify(question_candidate_words_json));
                            }
                        } else {
                            console.log("localStorage中没有question_candidate_words数据");
                        }
                    } else if (candidate_word_type == "解决方案候选词") {
                        if (answer_candidate_words) {
                            const answer_candidate_words_json = JSON.parse(answer_candidate_words);
                            // 判断是否是localStorage中的数据，如果是，则更新数据
                            if (answer_candidate_words_json.Import_id == $(this).closest("tr").find(".candidate-word-select-td").data('guid')) {
                                const index = candidate_words_item.index($(this));
                                if (index > -1) {
                                    // 数据保存到临时变量中
                                    answer_temp_candidate_words.Import_type = 'answer';
                                    answer_temp_candidate_words.Import_id = answer_candidate_words_json.Import_id;
                                    answer_temp_candidate_words.candidate_words = candidate_word;
                                    // answer_candidate_words_json.candidate_words[index] = candidate_word;
                                    // localStorage.setItem('answer_candidate_words', JSON.stringify(answer_candidate_words_json));
                                } else {
                                    console.log("没有找到");
                                }
                            } else {
                                // 数据保存到临时变量中
                                answer_temp_candidate_words.Import_type = 'answer';
                                answer_temp_candidate_words.Import_id = answer_candidate_words_json.Import_id;
                                answer_temp_candidate_words.candidate_words = candidate_word;
                                // 否则，新增数据
                                // answer_candidate_words_json.candidate_words.push(candidate_word);
                                // localStorage.setItem('answer_candidate_words', JSON.stringify(answer_candidate_words_json));
                            }
                        } else {
                            console.log("localStorage中没有answer_candidate_words数据");
                        }
                    } else {
                        console.log("候选词类型错误");

                    }
                });
            }

            // 候选词自动加载
            function load_candidate_words() {
                try {
                    const question_candidate_words = localStorage.getItem('question_candidate_words');
                    const answer_candidate_words = localStorage.getItem('answer_candidate_words');
                    const load_num = 10;
                    if (!question_candidate_words && !answer_candidate_words) {
                        return;
                    }
                    // console.warn(JSON.parse(question_candidate_words).candidate_words.length);

                    const question_candidate_words_sum_ = JSON.parse(question_candidate_words).candidate_words;
                    const question_candidate_words_sum = $(question_candidate_words_sum_).length;
                    const answer_candidate_words_sum_ = JSON.parse(answer_candidate_words).candidate_words;
                    const answer_candidate_words_sum = $(answer_candidate_words_sum_).length;
                    const more_btn = `
                                <tr>
                                    <td></td>
                                    <td style="width: 100%; text-align: center;">
                                        <mdui-button class="more-btn" style="display: flex; justify-content: center; align-items: center;">加载更多</mdui-button>
                                    </td>
                                </tr>
                `;
                    if (question_candidate_words) {
                        const question_candidate_words_json = JSON.parse(question_candidate_words);
                        question_candidate_words_json.candidate_words.splice(0, load_num).forEach(function (word) {
                            const element = `<tr>
                                            <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${question_candidate_words_json.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                            <td> 
                                                <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                            </td>
                                        </tr>`;
                            $(".question").append(element);

                        });
                        if (question_candidate_words_sum > load_num && $(".question").nextAll("tr").length == 0) {
                            $(".question").after(more_btn);
                        }
                    }
                    if (answer_candidate_words) {
                        const answer_candidate_words_json = JSON.parse(answer_candidate_words);
                        answer_candidate_words_json.candidate_words.forEach(function (word) {
                            const element = `<tr>
                                            <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${answer_candidate_words_json.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                            <td> 
                                                <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                            </td>    
                                        </tr>`;
                            $(".answer").append(element);
                        });
                        if (answer_candidate_words_sum > load_num && $(".answer").nextAll("tr").length == 0) {
                            $(".answer").after(more_btn);
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }


                $(".more-btn").on('click', load_more_candidate_words);
            }

            function load_more_candidate_words() {
                const load_num = 10;
                const question_candidate_words = JSON.parse(localStorage.getItem('question_candidate_words'));
                const answer_candidate_words = JSON.parse(localStorage.getItem('answer_candidate_words'));
                const show_num = $(this).parent().parent().prevAll().children().length;
                if (question_candidate_words && question_candidate_words.candidate_words.length - show_num > 0) {
                    question_candidate_words.candidate_words.splice(show_num, load_num).forEach(function (word) {
                        const element = `<tr>
                                            <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${question_candidate_words.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                            <td> 
                                                <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                            </td>
                                        </tr>`;
                        $(".question").append(element);
                    });
                } else {
                    $(this).text("没有更多了");
                }
                if (answer_candidate_words && answer_candidate_words.candidate_words.length - show_num > 0) {
                    answer_candidate_words.candidate_words.splice(show_num, load_num).forEach(function (word) {
                        const element = `<tr>
                                            <td><mdui-tooltip content="Ctrl+A全选"><mdui-checkbox class="candidate-word-select-td" data-guid="${answer_candidate_words.Import_id}"></mdui-checkbox></mdui-tooltip></td>
                                            <td> 
                                                <mdui-text-field class="candidate-word" value="${word}"></mdui-text-field>
                                            </td>    
                                        </tr>`;
                        $(".answer").append(element);
                    });
                } else {
                    $(this).text("没有更多了");
                }
            }

            // 按键CTRL+A全选
            $(".candidate-value").on('keydown', function (event) {
                // 按下CTRL+A
                if (event.ctrlKey && event.keyCode == 65) {
                    // 阻止默认按键事件
                    $(".candidate-words")[0].open ? event.preventDefault() : null;
                    // 找到所有checkbox并设置选中
                    console.log($(".candidate-value").val());
                    $(".candidate-value").val() == "item-1" ? $(".candidate-value mdui-collapse-item:first-child").find(".candidate-word-select-td").prop('checked', $(".candidate-value mdui-collapse-item:first-child").find(".candidate-word-select-td").prop('checked') ? false : true) : $(".candidate-value mdui-collapse-item:last-child").find(".candidate-word-select-td").prop('checked', $(".candidate-value mdui-collapse-item:last-child").find(".candidate-word-select-td").prop('checked') ? false : true);
                    // $(".candidate-word-select-td").prop('checked', $(".candidate-word-select-td").prop('checked') ? false : true);
                    // console.log($(".candidate-word-select-td").prop('checked'));

                }
            })

            search_candidate_words();
            load_candidate_words();
            $(".candidate-words-item").ready(save_candidate_words);
        }

        function system_fun() {
            // 系统配置调用（system_config）
            // 控制面板
            $(system_config.element_config.ctrl_switch_element).on('click', function () {
                try {
                    $(system_config.element_config.ctrl_panel_element).toggleClass(system_config.css_config.ctrl_panel_show);
                }
                catch{
                    console.log("error:can not show contrl panel");
                    
                }
            });

            // 关闭控制面板
            $(system_config.element_config.ctrl_panel_cancel_element).on('click', function () {
                $(system_config.element_config.ctrl_panel_element).removeClass(system_config.css_config.ctrl_panel_show);
            });

            function theme_switch() {
                // 主题开关
                $(system_config.element_config.theme_switch_element).on('change', function () {
                    // 获取当前的控制数据
                    let currentConfig = JSON.parse(localStorage.getItem('system_config_ctrl')) || {};

                    // 更新主题状态
                    currentConfig.theme = $(this).prop('checked');

                    // 保存状态
                    localStorage.setItem('system_config_ctrl', JSON.stringify(currentConfig));
                });
            }

            function system_switch() {
                // 系统开关
                $(system_config.element_config.system_switch_element).on('change', function () {
                    // 获取当前的控制数据
                    let currentConfig = JSON.parse(localStorage.getItem('system_config_ctrl')) || {};

                    // 更新系统状态
                    currentConfig.ctrl = $(this).prop('checked');
                    // console.warn(currentConfig.ctrl);
                    // 保存状态
                    localStorage.setItem('system_config_ctrl', JSON.stringify(currentConfig));
                });
            }


            login_fun();

            function_fun();
            question_actions_fun();
            theme_switch();
            system_switch();

        }

        function theme_fun() {
            // 主题配置调用（theme_config）
            // 主题设置
            const dialog = $(theme_config.element_config.theme_dialog)[0];
            const openButton = $(theme_config.element_config.theme_open_button);
            openButton.on("change", function () {
                let theme = $(this).val();
                if (theme == 'Custom mode') {
                    dialog.open = true;
                }
            });




            const theme = $(theme_config.element_config.theme_dialog)
            const logo_url = $(theme_config.element_config.logo_url_element);
            const left_a = $(theme_config.element_config.left_a_element);
            const left_b = $(theme_config.element_config.left_b_element);
            const top_a = $(theme_config.element_config.top_a_element);
            const top_b = $(theme_config.element_config.top_b_element);
            const config = JSON.parse(localStorage.getItem('theme_config')) || {};
            $(theme).find("mdui-text-field").on("blur", function () {
                if ($(this).val() == "") {
                    return;
                }
                // 保存数据到localStorage
                const type = $(this).index() == 1 ? 'logo_url' : $(this).index() == 2 ? 'left_a' : $(this).index() == 3 ? 'left_b' : $(this).index() == 4 ? 'top_a' : 'top_b';
                config[type] = $(this).val();
                localStorage.setItem('theme_config', JSON.stringify(config));
            })

            if (config) {
                $(theme).find("mdui-text-field").each(function (index, element) {
                    // localStorage中包含class则填充对应值
                    $(element).val(config[$(element).prop("class").includes("logo_url") ? 'logo_url' : $(element).prop("class").includes("left_a") ? 'left_a' : $(element).prop("class").includes("left_b") ? 'left_b' : $(element).prop("class").includes("top_a") ? 'top_a' : 'top_b']);

                });
            }
        }


        // 控制台输出FHLOGO红色版本号
        console.info("%c接线助手%c%s", "color:red;font-size:40px;font-weight:bold;", "color:black;font-size:40px;font-weight:normal", system_config.Version);


        // ****************************** 通用回调 ********************************** //
        /**
         * 
         * @returns {string}
         */
        function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        /**
         * @description 调用可以修改加料的input值
         * @param {*} inputDom 
         * @param {*} newText 
         */
        function changeReactInputValue(inputDom, newText) {
            let lastValue = inputDom.value;
            inputDom.value = newText;
            let event = new Event('input', { bubbles: true });
            event.simulated = true;
            let tracker = inputDom._valueTracker;
            if (tracker) {
                tracker.setValue(lastValue);
            }
            inputDom.dispatchEvent(event);
        }

        /**
             * 
             * @param {*} str 
             * @returns Chinese String
             */
        function ChineseStr(str) {
            let patt1 = /[\u4e00-\u9fa5]/g;
            let arr = str.match(patt1);
            let regStr = "";
            if (arr == null) {
                return "";
            }
            for (let i = 0; i < arr.length; i++) {
                regStr += arr[i];
            }
            return regStr;
        }

        /**
         * 
         * @param {*} element 
         * @returns Boolean
         * @description 判断元素是否在视窗内
         */
        function isInViewPort(element) {
            const viewWidth = window.innerWidth || document.documentElement.clientWidth;
            const viewHeight = window.innerHeight || document.documentElement.clientHeight;
            const {
                top,
                right,
                bottom,
                left,
            } = element.getBoundingClientRect();

            return (
                top >= 0 &&
                left >= 0 &&
                right <= viewWidth &&
                bottom <= viewHeight
            );
        }


        // 登录配置
        login_fun();
        // 消息模板
        message_fun();
        // 功能配置
        function_fun();
        // 系统配置
        system_fun();
        // 主题配置
        theme_fun();

}
// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('#app > div > div.login-content > div > div.pic-wrap.pro-banner');
                if (element0) {
                    element0.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
