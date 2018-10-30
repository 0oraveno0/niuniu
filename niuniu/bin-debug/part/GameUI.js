var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI(service, audio) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.audio = audio;
        _this.card_gp = { "gp": {}, "card": {}, "toggle": {} };
        _this.btn_gp = {};
        _this.rec_gp = {};
        _this.paytable = {};
        _this.chip_range_arr = [1, 5, 10, 25, 100, 500];
        _this.card_sprite_arr = ["diamond", "club", "heart", "spade"];
        _this.data = {};
        _this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
        _this.load_data();
        _this.uiCompHandler();
        _this.init();
        return _this;
    }
    GameUI.prototype.load_data = function () {
        this.get_game_gp();
        this.get_control_gp();
        this.get_record_gp();
        this.get_paytable_gp();
    };
    GameUI.prototype.get_game_gp = function () {
        this.card_gp["gp"]["gp"] = this.game_gp;
        this.card_gp["card"]["first_card"] = this.card_gp["gp"]["gp"].getChildByName("first_card");
        this.card_gp["card"]["deck_card"] = this.card_gp["gp"]["gp"].getChildByName("deck_card");
        this.card_gp["card"]["deck_pos"] = {
            "x": this.card_gp["card"]["deck_card"].$getX(),
            "y": this.card_gp["card"]["deck_card"].$getY()
        };
        this.card_gp["card"]["deck_pos_glo"] = {
            "x": this.card_gp["card"]["deck_card"].globalToLocal().x,
            "y": this.card_gp["card"]["deck_card"].globalToLocal().y
        };
        var toggle_index = 0;
        for (var i = 0; i < 4; i++) {
            var gp = void 0;
            if (i == 0) {
                this.card_gp["gp"][String(i)] = this.card_gp["gp"]["gp"].getChildByName("p" + String(i));
                gp = this.card_gp["gp"][String(i)];
            }
            else {
                this.card_gp["gp"][String(i)] = {};
                this.card_gp["gp"][String(i)]["gp"] = this.card_gp["gp"]["gp"].getChildByName("p" + String(i));
                this.card_gp["gp"][String(i)]["0"] = this.card_gp["gp"][String(i)]["gp"].getChildAt(0);
                gp = this.card_gp["gp"][String(i)]["0"];
                this.card_gp["gp"][String(i)]["1"] = {};
                this.card_gp["gp"][String(i)]["1"]["gp"] = this.card_gp["gp"][String(i)]["gp"].getChildAt(1);
                for (var j = 0; j < 2; j++) {
                    this.card_gp["toggle"][String(toggle_index)] = {};
                    this.card_gp["gp"][String(i)]["1"][String(j)] = {};
                    this.card_gp["gp"][String(i)]["1"][String(j)]["gp"] = this.card_gp["gp"][String(i)]["1"]["gp"].getChildAt(j);
                    this.card_gp["gp"][String(i)]["1"][String(j)]["0"] = {};
                    this.card_gp["gp"][String(i)]["1"][String(j)]["0"]["gp"] = this.card_gp["gp"][String(i)]["1"][String(j)]["gp"].getChildAt(0);
                    this.card_gp["toggle"][String(toggle_index)] = {};
                    this.card_gp["toggle"][String(toggle_index)]["ratio"] = this.card_gp["gp"][String(i)]["1"][String(j)]["0"]["gp"].getChildAt(1);
                    this.card_gp["toggle"][String(toggle_index)]["toggle"] = this.card_gp["gp"][String(i)]["1"][String(j)]["gp"].getChildAt(1);
                    toggle_index++;
                }
            }
            this.card_gp["card"][String(i)] = {};
            for (var j = 0; j < 5; j++) {
                this.card_gp["card"][String(i)][String(j)] = gp.getChildAt(j);
            }
            this.card_gp["card"][String(i)]["prize"] = {};
            this.card_gp["card"][String(i)]["prize"]["gp"] = gp.getChildAt(5);
            this.card_gp["card"][String(i)]["prize"]["bg"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(0);
            this.card_gp["card"][String(i)]["prize"]["text"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(1);
            this.card_gp["card"][String(i)]["prize"]["img"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(2);
            if (i != 0) {
                this.card_gp["card"][String(i)]["prize"]["win"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(3);
            }
        }
        this.card_gp["gp"]["label"] = this.card_gp["gp"]["gp"].getChildByName("lb");
        this.card_gp["gp"]["chip"] = {};
        this.card_gp["gp"]["chip"]["gp"] = this.card_gp["gp"]["gp"].getChildByName("chip");
        for (var i = 0; i < 6; i++) {
            this.card_gp["toggle"][String(i)]["label"] = {};
            this.card_gp["toggle"][String(i)]["label"]["gp"] = this.card_gp["gp"]["label"].getChildAt(i);
            this.card_gp["toggle"][String(i)]["label"]["img"] = this.card_gp["toggle"][String(i)]["label"]["gp"].getChildAt(0);
            this.card_gp["toggle"][String(i)]["label"]["text"] = this.card_gp["toggle"][String(i)]["label"]["gp"].getChildAt(1);
            this.card_gp["toggle"][String(i)]["chip"] = this.card_gp["gp"]["chip"]["gp"].getChildAt(i);
            this.card_gp["toggle"][String(i)]["count"] = 0;
        }
    };
    GameUI.prototype.get_control_gp = function () {
        this.btn_gp["balance"] = this.control_gp.getChildByName("balance");
        this.btn_gp["limit"] = this.control_gp.getChildByName("limit");
        this.btn_gp["record"] = this.control_gp.getChildByName("record");
        this.btn_gp["clear"] = this.control_gp.getChildByName("clear");
        this.btn_gp["play"] = this.control_gp.getChildByName("play");
        this.btn_gp["mute"] = this.control_gp.getChildByName("mute");
        this.btn_gp["pay_table"] = this.control_gp.getChildByName("pay_table");
        this.btn_gp["gp"] = {};
        this.btn_gp["gp"]["next_btn_gp"] = this.control_gp.getChildByName("next_btn_gp");
        this.btn_gp["next"] = this.btn_gp["gp"]["next_btn_gp"].getChildByName("next");
        this.btn_gp["same"] = this.btn_gp["gp"]["next_btn_gp"].getChildByName("same");
        this.btn_gp["double"] = this.btn_gp["gp"]["next_btn_gp"].getChildByName("double");
        this.btn_gp["gp"]["coin_btn_gp"] = this.control_gp.getChildByName("coin_btn_gp");
        this.btn_gp["coin_btn"] = {};
        for (var i = 0; i < 6; i++) {
            this.btn_gp["coin_btn"][String(i)] = this.btn_gp["gp"]["coin_btn_gp"].getChildAt(i);
        }
        this.btn_gp["gp"]["toggle_gp"] = this.control_gp.getChildByName("toggle_gp");
        this.btn_gp["toggle"] = {};
        for (var i = 0; i < 6; i++) {
            this.btn_gp["toggle"][String(i)] = this.btn_gp["gp"]["toggle_gp"].getChildAt(i);
        }
    };
    GameUI.prototype.get_record_gp = function () {
        this.rec_gp["gp"] = this.record_gp;
        this.rec_gp["gpp"] = this.rec_gp["gp"].getChildByName("gp");
        this.rec_gp["back"] = this.record_gp.getChildAt(2);
        for (var i = 0; i < this.rec_gp["gpp"].numChildren; i++) {
            this.rec_gp[String(i)] = {};
            this.rec_gp[String(i)]["gp"] = this.rec_gp["gpp"].getChildAt(i);
            for (var j = 0; j < this.rec_gp[String(i)]["gp"].numChildren; j++) {
                this.rec_gp[String(i)][String(j)] = {};
                this.rec_gp[String(i)][String(j)]["gp"] = this.rec_gp[String(i)]["gp"].getChildAt(j);
                this.rec_gp[String(i)][String(j)]["img"] = this.rec_gp[String(i)][String(j)]["gp"].getChildAt(0);
                if (j != 0) {
                    this.rec_gp[String(i)][String(j)]["win"] = this.rec_gp[String(i)][String(j)]["gp"].getChildAt(1);
                }
            }
        }
    };
    GameUI.prototype.get_paytable_gp = function () {
        this.paytable["gp"] = this.pay_table_gp;
        this.paytable["close"] = this.paytable["gp"].getChildByName("close");
    };
    GameUI.prototype.init = function () {
        egret.localStorage.clear();
        this.username = egret.getOption('username') ? egret.getOption('username') : 'fish036';
        this.balance = Number(egret.getOption('balance') ? egret.getOption('balance') : '1000');
        this.token = egret.getOption('token') ? egret.getOption('token') : 'AAD4MFJYD40M9BI012MVX5O8RHK6V5';
        //GameUI.username = egret.getOption('username') ? egret.getOption('username') : 'zhangyanli';
        //GameUI.token = egret.getOption('token') ? egret.getOption('token') : '624ee884f9314fd1a7438de68f08474c';
        //GameUI.username = egret.getOption('username');
        //GameUI.balance = Number(egret.getOption('balance'));
        //GameUI.token = egret.getOption('token');
        /*this.service.info(this.username,this.token,
            (function (that:GameUI) {
                return function (event: egret.Event) {
                    return that.betCompleteHandler.bind(that)(event);
                }
            }
        )(this),
        (error) => {},() => { });*/
        this.btn_gp["balance"].text = "$ " + this.balance;
        //console.log(this.btn_gp["balance"].textColor)
        /*for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            tg.toggle.alpha = 0;
            this.clear_tg_count(tg);
        }

        this.clearBtnHandler();

        this.card_gp["card"]["first_card"].visible = false;
        this.card_gp["card"]["deck_card"].visible = false;
        for(let i = 0; i < 4 ; i++){
            let prize = this.card_gp["card"][String(i)]["prize"];
            prize.gp.visible = false;
            prize.img.visible = false;
            prize.text.text = "";
            if(i != 0){
                prize.win.text = ""
            }
            for(let j = 0;j<5;j++){
                this.card_gp["card"][String(i)][String(j)].visible = false;
            }
        }
        this.btn_gp["gp"].next_btn_gp.visible = false;*/
    };
    GameUI.prototype.uiCompHandler = function () {
        for (var i = 0; i < 6; i++) {
            this.btn_gp["toggle"][String(i)].addEventListener(egret.TouchEvent.TOUCH_TAP, this.toggleBtnHandler, this);
        }
        this.btn_gp["record"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.recordBtnHandler, this);
        this.rec_gp["back"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.record_backBtnHandler, this);
        this.btn_gp["clear"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearBtnHandler, this);
        this.btn_gp["play"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.playBtnHandler, this);
        this.btn_gp["mute"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.muteBtnHandler, this);
        this.btn_gp["pay_table"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay_tableBtnHandler, this);
        this.btn_gp["next"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextBtnHandler, this);
        this.btn_gp["same"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.sameBtnHandler, this);
        this.btn_gp["double"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.doubleBtnHandler, this);
        for (var i = 0; i < 6; i++) {
            this.btn_gp["coin_btn"][String(i)].addEventListener(egret.TouchEvent.TOUCH_TAP, this.coin_btnBtnHandler, this);
        }
        this.paytable["close"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay_table_closeBtnHandler, this);
    };
    GameUI.prototype.recordBtnHandler = function () {
        this.audio.play_sound("BtnClick_wav");
        //let s = egret.localStorage.getItem("record");console.log(s);
        if (egret.localStorage.getItem("record") != null) {
            var s_arr = egret.localStorage.getItem("record").split("|");
            var data = [];
            for (var i = 0; i < s_arr.length - 1; i++) {
                data[i] = s_arr[s_arr.length - 2 - i].split(",");
            }
            for (var i = 0; i < 12; i++) {
                if (data[i] != null) {
                    for (var j = 0; j < 4; j++) {
                        var rec = this.rec_gp[String(i)][String(j)];
                        rec.gp.visible = true;
                        if (data[i][j] == "牛牛") {
                            rec.img.visible = true;
                            rec.img.source = "niuniu_niuniu_png";
                        }
                        else if (data[i][j] == "无牛") {
                            rec.img.visible = true;
                            rec.img.source = "niuniu_niuno_png";
                        }
                        else {
                            var d = data[i][j].split(" ");
                            rec.img.visible = true;
                            rec.img.source = "niuniu_niu" + d[1] + "_png";
                        }
                        if (j != 0) {
                            if (data[i][j + 4] == "t") {
                                rec.win.visible = true;
                            }
                            else {
                                rec.win.visible = false;
                            }
                        }
                    }
                }
                else {
                    for (var j = 0; j < 4; j++) {
                        var rec = this.rec_gp[String(i)][String(j)];
                        rec.gp.visible = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < 12; i++) {
                for (var j = 0; j < 4; j++) {
                    var rec = this.rec_gp[String(i)][String(j)];
                    rec.img.visible = false;
                    if (j != 0) {
                        rec.win.visible = false;
                    }
                }
            }
        }
        this.rec_gp["gp"].visible = true;
    };
    GameUI.prototype.record_backBtnHandler = function () {
        this.audio.play_sound("BtnClick_wav");
        this.rec_gp["gp"].visible = false;
    };
    GameUI.prototype.clearBtnHandler = function () {
        this.audio.play_sound("BtnClick_wav");
        for (var i = 0; i < 6; i++) {
            var tg = this.card_gp["toggle"][String(i)];
            if (tg.toggle.alpha == 1) {
                this.clear_tg_count(tg);
                return;
            }
        }
        for (var i = 0; i < 6; i++) {
            var tg = this.card_gp["toggle"][String(i)];
            this.clear_tg_count(tg);
        }
    };
    GameUI.prototype.clear_tg_count = function (tg) {
        tg.label.gp.visible = false;
        tg.label.img.width = 0;
        tg.label.text.text = "";
        tg.chip.removeChildren();
        tg.count = 0;
    };
    GameUI.prototype.muteBtnHandler = function () {
        if (this.audio.init == false) {
            this.audio.init = true;
            this.audio.play_sound("BGM2_mp3", true);
        }
        if (this.audio.mute_bool == true) {
            this.audio.mute_bool = false;
            this.btn_gp["mute"].source = "Voice_on.@2x_png";
            this.audio.mute(false);
        }
        else {
            this.audio.mute_bool = true;
            this.btn_gp["mute"].source = "Voice_off.@2x_png";
            this.audio.mute(true);
        }
    };
    GameUI.prototype.pay_tableBtnHandler = function () {
        this.audio.play_sound("BtnClick_wav");
        this.paytable["gp"].visible = true;
    };
    GameUI.prototype.pay_table_closeBtnHandler = function () {
        this.audio.play_sound("BtnClick_wav");
        this.paytable["gp"].visible = false;
    };
    GameUI.prototype.toggleBtnHandler = function (evt) {
        var img = this.card_gp["toggle"][evt.target.name]["toggle"];
        if (img.alpha == 1) {
            img.alpha = 0;
        }
        else {
            for (var i = 0; i < 6; i++) {
                var img_1 = this.card_gp["toggle"][String(i)]["toggle"];
                if (img_1.name == evt.target.name) {
                    img_1.alpha = 1;
                }
                else {
                    img_1.alpha = 0;
                }
            }
        }
    };
    GameUI.prototype.coin_btnBtnHandler = function (evt) {
        this.audio.play_sound("Coin_wav");
        for (var i = 0; i < 6; i++) {
            var tg = this.card_gp["toggle"][String(i)];
            if (tg.toggle.alpha == 1) {
                this.coin_bet(evt.target, tg);
            }
        }
    };
    GameUI.prototype.coin_bet = function (coin, tg) {
        var evt_num = Number(coin.name);
        tg.label.gp.visible = true;
        tg.count += this.chip_range_arr[evt_num];
        if (Number(tg.toggle.name) % 2 == 0) {
            tg.label.text.text = "押 " + tg.count;
            tg.label.text.width = tg.label.text.text.length * 9 + 35;
            tg.label.img.width = tg.label.text.text.length * 9 + 35;
        }
        else {
            tg.label.text.text = "押 " + tg.count + " 预付(" + tg.count * 4 + ")";
            tg.label.text.width = tg.label.text.text.length * 9 + 70;
            tg.label.img.width = tg.label.text.text.length * 9 + 70;
        }
        var gp = tg.chip;
        var chip = new eui.Image;
        chip.$setWidth(coin.$getWidth() / 5 * 4);
        chip.$setHeight(coin.$getWidth() / 5 * 4);
        chip.$setAnchorOffsetX(50);
        chip.$setAnchorOffsetY(50);
        gp.addChild(chip);
        chip.$setX(chip.globalToLocal().x - coin.globalToLocal().x);
        chip.$setY(chip.globalToLocal().y - coin.globalToLocal().y);
        chip.source = this.chip_range_arr[evt_num] + "_big.@2x_png";
        var Timer = new egret.Timer(25 / 3, 20);
        var dis = { "x": chip.$getX() + 101 * (Math.random() - 0.5), "y": chip.$getY() + 78 * (Math.random() - 0.5) };
        Timer.addEventListener(egret.TimerEvent.TIMER, function () {
            chip.$setX(chip.$getX() - dis.x / 20);
            chip.$setY(chip.$getY() - dis.y / 20);
        }, Timer.start());
        Timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            Timer.stop();
        }, Timer.start());
    };
    GameUI.prototype.coin_bet_arr = function (count, double) {
        for (var i = 0; i < 6; i++) {
            if (count[i] != 0) {
                var coin_arr = this.coin_count(count[i] * double);
                for (var j = 0; j < coin_arr.length; j++) {
                    for (var k = 0; k < coin_arr[j]; k++) {
                        this.coin_bet(this.btn_gp["coin_btn"][String(j)], this.card_gp["toggle"][String(i)]);
                    }
                }
            }
        }
    };
    GameUI.prototype.coin_count = function (num) {
        var coin_arr = [0, 0, 0, 0, 0, 0];
        for (var i = 5; i >= 0; i--) {
            var count = Math.floor(num / this.chip_range_arr[i]);
            if (count != 0) {
                num -= count * this.chip_range_arr[i];
                coin_arr[i] = count;
            }
        }
        return coin_arr;
    };
    GameUI.prototype.disable_btn = function (bool) {
        this.btn_gp["gp"]["coin_btn_gp"].visible = bool;
        this.btn_gp["gp"]["toggle_gp"].visible = bool;
        this.btn_gp["clear"].visible = bool;
        this.btn_gp["play"].visible = bool;
        this.btn_gp["gp"]["next_btn_gp"].visible = bool;
        this.btn_gp["record"].visible = bool;
        this.btn_gp["mute"].visible = bool;
        this.btn_gp["pay_table"].visible = bool;
    };
    GameUI.prototype.nextBtnHandler = function () {
        this.audio.play_sound("BtnClick_wav");
        this.btn_gp["clear"].visible = true;
        this.btn_gp["gp"]["coin_btn_gp"].visible = true;
        this.btn_gp["gp"].next_btn_gp.visible = false;
        for (var i = 0; i < 6; i++) {
            var tg = this.card_gp["toggle"][String(i)];
            this.clear_tg_count(tg);
        }
        this.card_gp["card"]["first_card"].visible = false;
        for (var i = 0; i < 4; i++) {
            var prize = this.card_gp["card"][String(i)]["prize"];
            prize.gp.visible = false;
            prize.img.visible = false;
            prize.text.text = "";
            if (i != 0) {
                prize.win.text = "";
            }
            for (var j = 0; j < 5; j++) {
                this.card_gp["card"][String(i)][String(j)].visible = false;
            }
        }
    };
    GameUI.prototype.sameBtnHandler = function () {
        this.audio.play_sound("Coin_wav");
        var count = [];
        for (var i = 0; i < 6; i++) {
            count[i] = this.card_gp["toggle"][String(i)]["count"];
        }
        this.nextBtnHandler();
        this.coin_bet_arr(count, 1);
        this.btn_gp["gp"]["next_btn_gp"].visible = false;
    };
    GameUI.prototype.doubleBtnHandler = function () {
        this.audio.play_sound("Coin_wav");
        var count = [];
        for (var i = 0; i < 6; i++) {
            count[i] = this.card_gp["toggle"][String(i)]["count"];
        }
        this.nextBtnHandler();
        this.coin_bet_arr(count, 2);
        this.btn_gp["gp"]["next_btn_gp"].visible = false;
    };
    GameUI.prototype.playBtnHandler = function () {
        var _this = this;
        this.audio.play_sound("BtnClick_wav");
        var count = 0;
        var total_bet = 0;
        for (var i = 0; i < 6; i++) {
            var tg_count = this.card_gp["toggle"][String(i)]["count"];
            total_bet += tg_count;
            if (tg_count == 0) {
                count++;
            }
            if (tg_count == 1) {
                this.show_notice("下注限额为2 - 2000", function () { _this.notice_gp.visible = false; });
                return;
            }
        }
        if (total_bet > 2000) {
            this.show_notice("下注限额为2 - 2000", function () { _this.notice_gp.visible = false; });
            return;
        }
        if (count == 6) {
            this.show_notice("下注限额为2 - 2000", function () { _this.notice_gp.visible = false; });
            return;
        }
        var bets = [];
        count = 0;
        for (var i = 0; i < 6; i++) {
            var tg = this.card_gp["toggle"][String(i)];
            if (tg.count > 0) {
                switch (i) {
                    case 0:
                        bets[count] = { "bet_type": "5", "amount": tg.count };
                        break;
                    case 1:
                        bets[count] = { "bet_type": "6", "amount": tg.count };
                        break;
                    case 2:
                        bets[count] = { "bet_type": "3", "amount": tg.count };
                        break;
                    case 3:
                        bets[count] = { "bet_type": "4", "amount": tg.count };
                        break;
                    case 4:
                        bets[count] = { "bet_type": "1", "amount": tg.count };
                        break;
                    case 5:
                        bets[count] = { "bet_type": "2", "amount": tg.count };
                        break;
                }
                count++;
            }
        }
        this.disable_btn(false);
        this.service.MakeBet(this.username, bets, this.token, (function (that) {
            return function (event) {
                return that.betCompleteHandler.bind(that)(event);
            };
        })(this), function (error) {
            _this.show_notice("网络错误", function () {
                _this.disable_btn(true);
                _this.btn_gp["gp"]["next_btn_gp"].visible = false;
                _this.notice_gp.visible = false;
            });
        }, function () { });
    };
    GameUI.prototype.betCompleteHandler = function (event) {
        var _this = this;
        var request = event.currentTarget;
        var gameTotalData = JSON.parse(request.response);
        console.log(gameTotalData);
        if (gameTotalData.code == 0) {
            var cards = gameTotalData.data.cards;
            var points = gameTotalData.data.points;
            var results = gameTotalData.data.results;
            for (var i = 0; i < results.length; i++) {
                switch (results[i].bet_id) {
                    case "1":
                        results[i].bet_id = "4";
                        break;
                    case "2":
                        results[i].bet_id = "5";
                        break;
                    case "3":
                        results[i].bet_id = "2";
                        break;
                    case "4":
                        results[i].bet_id = "3";
                        break;
                    case "5":
                        results[i].bet_id = "0";
                        break;
                    case "6":
                        results[i].bet_id = "1";
                        break;
                }
            }
            this.data = { "cards": cards, "points": points, "results": results, "balance": gameTotalData.data.money };
            this.set_record();
            this.card_animation(999, 0);
        }
        else {
            this.show_notice(gameTotalData.message, function () {
                _this.disable_btn(true);
                _this.btn_gp["gp"]["next_btn_gp"].visible = false;
                _this.notice_gp.visible = false;
            });
        }
    };
    GameUI.prototype.set_record = function () {
        var result_money = this.get_result_money();
        var s = "";
        if (egret.localStorage.getItem("record") != null) {
            s = egret.localStorage.getItem("record");
        }
        s += this.data["points"]["banker"].description + ","
            + this.data["points"]["player_three"].description + ","
            + this.data["points"]["player_two"].description + ","
            + this.data["points"]["player_one"].description + ",";
        for (var i = 0; i < 3; i++) {
            if (result_money[i] >= 0) {
                s += "t";
            }
            else {
                s += "f";
            }
            if (i == 2) {
                s += "|";
            }
            else {
                s += ",";
            }
        }
        var s_arr = s.split("|");
        var max = 15;
        var s_length = s.split("|").length;
        if (s_length > max) {
            s = "";
            for (var i = s_length - max; i < s_length - 1; i++) {
                s += s_arr[i] + "|";
            }
        }
        egret.localStorage.setItem("record", s);
    };
    GameUI.prototype.card_animation = function (num, count_last) {
        var _this = this;
        var _i = Math.floor(num / 5);
        var _j = num % 5;
        var player_id = this.get_data_player_id(_i);
        var card = this.card_gp["card"];
        var c_to;
        if (num == 999) {
            c_to = card["first_card"];
        }
        else {
            c_to = card[String(_i)][String(_j)];
        }
        var c_from = card["deck_card"];
        var from_pos = card["deck_pos_glo"];
        var Timer = new egret.Timer(25 / 3, 20); //20
        c_from.$setX(card["deck_pos"].x);
        c_from.$setY(card["deck_pos"].y);
        var dis = { x: c_from.localToGlobal().x - c_to.localToGlobal().x - 60, y: c_from.localToGlobal().y - c_to.localToGlobal().y - 25 };
        c_from.visible = true;
        var x;
        this.audio.play_sound("Flip_wav");
        Timer.addEventListener(egret.TimerEvent.TIMER, function () {
            c_from.$setX(c_from.x - dis.x / 20);
            c_from.$setY(c_from.y - dis.y / 20);
        }, Timer.start());
        Timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            _this.audio.stop_sound("Flip_wav");
            c_from.visible = false;
            c_to.visible = true;
            if (num == 999) {
                var sprite_num = _this.data["cards"]["first"];
                c_to.source = _this.card_sprite_arr[sprite_num % 4] + "_" + [Math.floor((sprite_num - 1) / 4) + 1] + "_png";
            }
            else {
                var sprite_num = _this.data["cards"][player_id][String(_j)];
                c_to.source = _this.card_sprite_arr[sprite_num % 4] + "_" + [Math.floor((sprite_num - 1) / 4) + 1] + "_png";
                if (_j == 4) {
                    var p_des = _this.data["points"][player_id].description;
                    var c_prize = card[String(_i)]["prize"];
                    if (_this.data["points"][player_id].prize_id == "niuniu") {
                        c_prize.text.text = "";
                        c_prize.img.visible = true;
                    }
                    else {
                        c_prize.text.text = p_des;
                        c_prize.img.visible = false;
                    }
                    c_prize.gp.visible = true;
                }
            }
            if (count_last < 20) {
                if (num == 999) {
                    _this.card_animation((Math.floor((_this.data["cards"]["first"] - 1) / 4)) % 4 * 5, count_last + 1);
                }
                else if (num < 19) {
                    _this.card_animation(num + 1, count_last + 1);
                }
                else {
                    _this.card_animation(0, count_last + 1);
                }
            }
            else {
                var result_money = _this.get_result_money();
                for (var i = 0; i < 3; i++) {
                    if (result_money[i] != null) {
                        if (result_money[i] >= 0) {
                            _this.card_gp["card"][String(i + 1)]["prize"]["win"].text = "羸 :" + String(result_money[i]);
                            _this.card_gp["card"][String(i + 1)]["prize"]["win"].textColor = 15668496;
                        }
                        else {
                            result_money[i] *= -1;
                            _this.card_gp["card"][String(i + 1)]["prize"]["win"].text = "输 :" + String(result_money[i]);
                            _this.card_gp["card"][String(i + 1)]["prize"]["win"].textColor = 3845;
                        }
                    }
                    else {
                        _this.card_gp["card"][String(i + 1)]["prize"]["win"].text = "";
                    }
                }
                _this.audio.play_sound("BtnClick_wav");
                _this.btn_gp["balance"].text = "$ " + _this.data["balance"];
                _this.disable_btn(true);
                _this.btn_gp["gp"]["coin_btn_gp"].visible = false;
                _this.btn_gp["clear"].visible = false;
            }
            Timer.stop();
        }, Timer.start());
    };
    GameUI.prototype.get_result_money = function () {
        var resut_num = [];
        var win_count = {};
        for (var key in this.data["results"]) {
            var id = this.data["results"][key].bet_id;
            if (id % 2 == 0) {
                win_count[id] = this.data["results"][key]["pay"]
                    - this.card_gp["toggle"][id]["count"];
            }
            else {
                win_count[id] = this.data["results"][key]["pay"]
                    - this.card_gp["toggle"][id]["count"] * 5;
            }
        }
        for (var i = 0; i < 3; i++) {
            if (this.card_gp["toggle"][String(2 * i)]["count"] != 0 || this.card_gp["toggle"][String(2 * i + 1)]["count"] != 0) {
                var s = 0;
                if (win_count[String(2 * i)] != null) {
                    s += win_count[String(2 * i)];
                }
                if (win_count[String(2 * i + 1)] != null) {
                    s += win_count[String(2 * i + 1)];
                }
                resut_num[i] = s;
            }
        }
        return resut_num;
    };
    GameUI.prototype.get_data_player_id = function (num) {
        var s = "";
        switch (num) {
            case 0:
                s = "banker";
                break;
            case 3:
                s = "player_one";
                break;
            case 2:
                s = "player_two";
                break;
            case 1:
                s = "player_three";
                break;
        }
        return s;
    };
    GameUI.prototype.show_notice = function (content, confirm_btn) {
        this.notice_gp.visible = true;
        this.notice_text.text = content;
        if (confirm_btn != null) {
            this.notice_btn.visible = true;
            this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, confirm_btn, this);
        }
        else {
            this.notice_btn.visible = false;
        }
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map