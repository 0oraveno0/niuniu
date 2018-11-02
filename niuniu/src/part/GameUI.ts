class GameUI extends eui.Component {

    private game_gp:eui.Group;
    private card_gp = {"gp":{},"card":{},"toggle":{}};
    private control_gp:eui.Group;
    private btn_gp = {};
    private record_gp:eui.Group;
    private rec_gp = {};
    private pay_table_gp:eui.Group;
    private paytable = {};
	private username: string;
    private balance: number;
    private token: string;
    private chip_range_arr = [1,5,10,25,100,500];
    private card_sprite_arr = ["d","c","h","s"]
    private pay_table_s_rect:eui.Scroller;
    private data = {}
	constructor(private service: GameService, private audio:audio_manager) {
		super();
        this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
		this.load_data();
		this.uiCompHandler();
        this.init()
	}

    public load_data(){
        this.get_game_gp();
        this.get_control_gp();
        this.get_record_gp();
        this.get_paytable_gp();
	}
    private get_game_gp(){
        this.card_gp["gp"]["gp"] = this.game_gp;
        this.card_gp["card"]["first_card"] = this.card_gp["gp"]["gp"].getChildByName("first_card");
        this.card_gp["card"]["deck_card"] = this.card_gp["gp"]["gp"].getChildByName("deck_card");
        this.card_gp["card"]["deck_pos"] = {
            "x":this.card_gp["card"]["deck_card"].$getX(),
            "y":this.card_gp["card"]["deck_card"].$getY()
        };
        this.card_gp["card"]["deck_pos_glo"] = {
            "x":this.card_gp["card"]["deck_card"].globalToLocal().x,
            "y":this.card_gp["card"]["deck_card"].globalToLocal().y
        };
        let toggle_index = 0;
        for(let i = 0;i<4;i++){
            let gp;
            if(i == 0){
                this.card_gp["gp"][String(i)] = this.card_gp["gp"]["gp"].getChildByName("p" + String(i));
                gp = this.card_gp["gp"][String(i)];
            }else{
                this.card_gp["gp"][String(i)] = {}
                this.card_gp["gp"][String(i)]["gp"] = this.card_gp["gp"]["gp"].getChildByName("p" + String(i));
                this.card_gp["gp"][String(i)]["0"] = this.card_gp["gp"][String(i)]["gp"].getChildAt(0);
                gp = this.card_gp["gp"][String(i)]["0"];

                this.card_gp["gp"][String(i)]["1"] = {}
                this.card_gp["gp"][String(i)]["1"]["gp"] = this.card_gp["gp"][String(i)]["gp"].getChildAt(1);

                for(let j = 0;j<2;j++){
                    this.card_gp["toggle"][String(toggle_index)] = {}
                    this.card_gp["gp"][String(i)]["1"][String(j)] = {}
                    this.card_gp["gp"][String(i)]["1"][String(j)]["gp"] = this.card_gp["gp"][String(i)]["1"]["gp"].getChildAt(j);

                    this.card_gp["toggle"][String(toggle_index)] = {}
                    this.card_gp["toggle"][String(toggle_index)]["toggle"] = this.card_gp["gp"][String(i)]["1"][String(j)]["gp"].getChildAt(0);
                    this.card_gp["toggle"][String(toggle_index)]["ratio"] = this.card_gp["gp"][String(i)]["1"][String(j)]["gp"].getChildAt(1);
                    toggle_index++;
                }
            }
            this.card_gp["card"][String(i)] = {}
            for(let j = 0;j<5;j++){
                this.card_gp["card"][String(i)][String(j)] = gp.getChildAt(j);
            }
            this.card_gp["card"][String(i)]["prize"] = {}
            this.card_gp["card"][String(i)]["prize"]["gp"] = gp.getChildAt(5);
            this.card_gp["card"][String(i)]["prize"]["bg"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(0);
            if(i == 0){
                this.card_gp["card"][String(i)]["prize"]["img"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(1);
            }
            else{
                this.card_gp["card"][String(i)]["prize"]["bg_2"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(1);
                this.card_gp["card"][String(i)]["prize"]["img"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(2);
                this.card_gp["card"][String(i)]["prize"]["win"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(3);
            }
        }
        this.card_gp["gp"]["label"] = this.card_gp["gp"]["gp"].getChildByName("lb");
        this.card_gp["gp"]["chip"] = {}
        this.card_gp["gp"]["chip"]["gp"] = this.card_gp["gp"]["gp"].getChildByName("chip");
        for(let i = 0;i<6;i++){
            this.card_gp["toggle"][String(i)]["label"] = {}
            this.card_gp["toggle"][String(i)]["label"]["gp"] = this.card_gp["gp"]["label"].getChildAt(i);
            this.card_gp["toggle"][String(i)]["label"]["img"] = this.card_gp["toggle"][String(i)]["label"]["gp"].getChildAt(0);
            this.card_gp["toggle"][String(i)]["label"]["text"] = this.card_gp["toggle"][String(i)]["label"]["gp"].getChildAt(1);
            this.card_gp["toggle"][String(i)]["chip"] = this.card_gp["gp"]["chip"]["gp"].getChildAt(i);
            this.card_gp["toggle"][String(i)]["count"] = 0;
        }
    }
    private get_control_gp(){
        this.btn_gp["balance"] = this.control_gp.getChildByName("balance");
        this.btn_gp["limit"] = this.control_gp.getChildByName("limit");

        this.btn_gp["record"] = this.control_gp.getChildByName("record");
        this.btn_gp["clear"] = this.control_gp.getChildByName("clear");
        this.btn_gp["play"] = this.control_gp.getChildByName("play");
        this.btn_gp["mute"] = this.control_gp.getChildByName("mute");
        this.btn_gp["pay_table"] = this.control_gp.getChildByName("pay_table");

        this.btn_gp["gp"] = {}
        this.btn_gp["gp"]["next_btn_gp"] = this.control_gp.getChildByName("next_btn_gp");
        this.btn_gp["next"] = this.btn_gp["gp"]["next_btn_gp"].getChildByName("next");
        this.btn_gp["same"] = this.btn_gp["gp"]["next_btn_gp"].getChildByName("same");
        this.btn_gp["double"] = this.btn_gp["gp"]["next_btn_gp"].getChildByName("double");

        this.btn_gp["gp"]["coin_btn_gp"] = this.control_gp.getChildByName("coin_btn_gp");
        this.btn_gp["coin_btn"] = {}
        for(let i = 0;i<6;i++){
            this.btn_gp["coin_btn"][String(i)] = this.btn_gp["gp"]["coin_btn_gp"].getChildAt(i);
        }

        this.btn_gp["gp"]["toggle_gp"] = this.control_gp.getChildByName("toggle_gp");
        this.btn_gp["toggle"] = {}
        for(let i = 0;i<6;i++){
            this.btn_gp["toggle"][String(i)] = this.btn_gp["gp"]["toggle_gp"].getChildAt(i);
        }
    }
    private get_record_gp(){
        this.rec_gp["gp"] = this.record_gp;
        this.rec_gp["gpp"] = this.rec_gp["gp"].getChildByName("gp");
        this.rec_gp["back"] = this.record_gp.getChildAt(2);
        for(let i = 0; i < this.rec_gp["gpp"].numChildren;i++){
            this.rec_gp[String(i)] = {}
            this.rec_gp[String(i)]["gp"] = this.rec_gp["gpp"].getChildAt(i);
            for(let j = 0;j< this.rec_gp[String(i)]["gp"].numChildren;j++){
                this.rec_gp[String(i)][String(j)] = {}
                this.rec_gp[String(i)][String(j)]["gp"] = this.rec_gp[String(i)]["gp"].getChildAt(j);
                this.rec_gp[String(i)][String(j)]["img"] = this.rec_gp[String(i)][String(j)]["gp"].getChildAt(0);
                if(j != 0){
                    this.rec_gp[String(i)][String(j)]["win"] = this.rec_gp[String(i)][String(j)]["gp"].getChildAt(1);
                }
            }
        }
    }
    private get_paytable_gp(){
        this.paytable["gp"] = this.pay_table_gp;
        this.paytable["close"] = this.paytable["gp"].getChildByName("close");
    }

    private init(){
      	//this.username = egret.getOption('username') ? egret.getOption('username') : 'fish036';
		//this.balance = Number(egret.getOption('balance')? egret.getOption('balance') : '1000');
        //this.token = egret.getOption('token') ? egret.getOption('token') : 'AAD4MFJYD40M9BI012MVX5O8RHK6V5';

        //this.username = egret.getOption('username') ? egret.getOption('username') : 'zhangyanli';
        //this.token = egret.getOption('token') ? egret.getOption('token') : '624ee884f9314fd1a7438de68f08474c';
      	
		this.username = egret.getOption('username');
		this.balance = Number(egret.getOption('balance'));
        this.token = egret.getOption('token');

        /*this.service.info(this.username,this.token,
			(function (that:GameUI) {
				return function (event: egret.Event) {
					return that.betCompleteHandler.bind(that)(event);
				}
			}
		)(this),
        (error) => {},() => { });*/

        this.btn_gp["balance"].text = this.get_balance_str(this.balance);
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
    }

    public uiCompHandler(){
        for(let i = 0;i<6;i++){
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

        for(let i = 0;i<6;i++){
            this.btn_gp["coin_btn"][String(i)].addEventListener(egret.TouchEvent.TOUCH_TAP, this.coin_btnBtnHandler, this);
        }

        this.paytable["close"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay_table_closeBtnHandler, this);
    }

    private recordBtnHandler(){
        this.audio.play_sound("BtnClick_wav")
        //let s = egret.localStorage.getItem("record");console.log(s);
        if(egret.localStorage.getItem("record") != null){
            let s_arr = egret.localStorage.getItem("record").split("|");
            let data = []
            for(let i = 0; i < s_arr.length - 1;i++){
                data[i] = s_arr[s_arr.length - 2 - i].split(",");
            }
            for(let i = 0; i < 12;i++){
                if(data[i] != null){
                    for(let j = 0;j< 4;j++){

                        let _j = j;
                        if(_j == 1){
                            _j = 3;
                        }else if(_j == 3){
                            _j = 1;
                        }

                        let rec = this.rec_gp[String(i)][String(_j)];
                        rec.gp.visible = true;

                        let img_cor = "";
                        if(j == 0){
                            img_cor = "b_"
                        }else{
                            img_cor = "p_"
                        }

                        if(data[i][j] == "牛牛" || data[i][j] == "公牛（5花）"){
                            rec.img.visible = true;
                            rec.img.source = "niuniu_niuniu_png";
                        }
                        else if(data[i][j] == "无牛"){
                            rec.img.visible = true;
                            rec.img.source = img_cor + "niuniu_niuno_png";
                        }
                        else{
                            let d = data[i][j].split(" ");
                            rec.img.visible = true;
                            rec.img.source = img_cor + "niuniu_niu" + d[1] + "_png";
                        }
                        if(j != 0){
                            if(data[i][j + 4] == "t"){
                                rec.win.visible = true
                            }else{
                                rec.win.visible = false
                            }
                        }
                    }
                }else{
                    for(let j = 0;j< 4;j++){
                        let rec = this.rec_gp[String(i)][String(j)];
                        rec.gp.visible = false;
                    }
                }
            }
        }else{
            for(let i = 0; i < 12;i++){
                for(let j = 0;j< 4;j++){
                    let rec = this.rec_gp[String(i)][String(j)];
                    rec.img.visible = false;
                    if(j != 0){
                        rec.win.visible = false
                    }
                }
            }
        }
        this.rec_gp["gp"].visible = true;
    }
    private record_backBtnHandler(){
        this.audio.play_sound("BtnClick_wav")
        this.rec_gp["gp"].visible = false;
    }

    private clearBtnHandler(){
        this.audio.play_sound("BtnClick_wav")
        for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            if(tg.toggle.alpha == 1){
                this.clear_tg_count(tg);
                return;
            }
        }

        for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            this.clear_tg_count(tg);
        }
    }
    private clear_tg_count(tg){
        tg.label.gp.visible = false;
        tg.label.img.width = 0;
        tg.label.text.text = "";
        tg.chip.removeChildren();
        tg.ratio.text = "1:1";
        tg.count = 0;
    }

    private muteBtnHandler(){
        if(this.audio.init == false){
			this.audio.init = true;
            this.audio.play_sound("BGM2_mp3",true)
		}
		 
		if (this.audio.mute_bool == true)
		{
			this.audio.mute_bool = false;
			this.btn_gp["mute"].source = "Voice_on.@2x_png";
			this.audio.mute(false);
		}
		else
		{
            this.audio.mute_bool = true;
			this.btn_gp["mute"].source = "Voice_off.@2x_png";
			this.audio.mute(true);
		}
    }
    private pay_tableBtnHandler(){
        this.audio.play_sound("BtnClick_wav")
        this.paytable["gp"].visible = true;
    }
    private pay_table_closeBtnHandler(){
        this.audio.play_sound("BtnClick_wav")
        this.paytable["gp"].visible = false;
    }

    private toggleBtnHandler(evt){
        let img = this.card_gp["toggle"][evt.target.name]["toggle"]
        if(img.alpha == 1){
            img.alpha = 0;
        }else{
            for(let i = 0;i<6;i++){
                let img = this.card_gp["toggle"][String(i)]["toggle"];
                if(img.name == evt.target.name){
                    img.alpha = 1;
                }else{
                    img.alpha = 0;
                }
            }
        }
    }
    private coin_btnBtnHandler(evt){
        this.audio.play_sound("Coin_wav")
        for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            if(tg.toggle.alpha == 1){
                this.coin_bet(evt.target,tg);
            }
        }
    }
    private coin_bet(coin,tg){
        let evt_num = Number(coin.name);

        tg.label.gp.visible = true;
        tg.count += this.chip_range_arr[evt_num];
        if(Number(tg.toggle.name) % 2 == 0){
            tg.label.text.text = "押 " + tg.count;
            tg.label.text.width = tg.label.text.text.length * 9 + 35;
            tg.label.img.width = tg.label.text.text.length * 9 + 35;
        }else{
            tg.label.text.text = "押 " + tg.count + " 预付("  + tg.count * 4 + ")";
            tg.label.text.width = tg.label.text.text.length * 9 +70;
            tg.label.img.width = tg.label.text.text.length * 9 + 70;
        }

        let gp:eui.Group = tg.chip;
        let chip:eui.Image = new eui.Image;
        chip.$setWidth(coin.$getWidth()/5*4);
        chip.$setHeight(coin.$getWidth()/5*4);
        chip.$setAnchorOffsetX(50);
        chip.$setAnchorOffsetY(50);
        gp.addChild(chip);
        chip.$setX(chip.globalToLocal().x - coin.globalToLocal().x);
        chip.$setY(chip.globalToLocal().y - coin.globalToLocal().y);
        chip.source = this.chip_range_arr[evt_num] + "_big.@2x_png";
        let Timer = new egret.Timer(25/3,20);
        let dis = {"x":chip.$getX() + 101 * (Math.random() - 0.5) ,"y":chip.$getY() + 78 * (Math.random() - 0.5)};
        Timer.addEventListener(
            egret.TimerEvent.TIMER,() => {
            chip.$setX(chip.$getX() - dis.x/20);
            chip.$setY(chip.$getY() - dis.y/20);
        },Timer.start())
        Timer.addEventListener(
            egret.TimerEvent.TIMER_COMPLETE,() => {
                Timer.stop();
        },Timer.start())
    }

    private coin_bet_arr(count,double){
        for(let i = 0; i< 6;i++){
            if(count[i] != 0){
               let coin_arr = this.coin_count(count[i] * double);
               for(let j = 0;j < coin_arr.length; j++){
                    for(let k = 0;k < coin_arr[j]; k++){
                        this.coin_bet(this.btn_gp["coin_btn"][String(j)],this.card_gp["toggle"][String(i)]);
                    }
               }
            }
        }
    }
    private coin_count(num){
        let coin_arr = [0,0,0,0,0,0];
        for(let i = 5;i >= 0;i--){
            let count = Math.floor(num / this.chip_range_arr[i]);
            if(count != 0){
                num -= count * this.chip_range_arr[i];
                coin_arr[i] = count;
            }
        }
        return coin_arr
    }

    private disable_btn(bool){
        this.btn_gp["gp"]["coin_btn_gp"].visible = bool
        this.btn_gp["gp"]["toggle_gp"].visible = bool
        this.btn_gp["clear"].visible = bool
        this.btn_gp["play"].visible = bool
        this.btn_gp["gp"]["next_btn_gp"].visible = bool;
        this.btn_gp["record"].visible = bool;
        this.btn_gp["mute"].visible = bool;
        this.btn_gp["pay_table"].visible = bool;
    }

    private nextBtnHandler(){
        this.audio.play_sound("BtnClick_wav")
        this.btn_gp["clear"].visible = true;
        this.btn_gp["gp"]["coin_btn_gp"].visible = true;
        this.btn_gp["gp"].next_btn_gp.visible = false;

        for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            this.clear_tg_count(tg);
        }
        this.card_gp["card"]["first_card"].visible = false;
        for(let i = 0; i < 4 ; i++){
            let prize = this.card_gp["card"][String(i)]["prize"];
            prize.gp.visible = false;
            if(i != 0){
                prize.win.text = ""
            }
            for(let j = 0;j<5;j++){
                this.card_gp["card"][String(i)][String(j)].visible = false;
            }
        }
    }

    private sameBtnHandler(){
        this.audio.play_sound("Coin_wav")
        let count = [];
        for(let i = 0; i< 6;i++){
            count[i] = this.card_gp["toggle"][String(i)]["count"];
        }
        this.nextBtnHandler();
        this.coin_bet_arr(count,1);
        this.btn_gp["gp"]["next_btn_gp"].visible = false;
    }
    private doubleBtnHandler(){
        this.audio.play_sound("Coin_wav")
        let count = [];
        for(let i = 0; i< 6;i++){
            count[i] = this.card_gp["toggle"][String(i)]["count"];
        }
        this.nextBtnHandler();
        this.coin_bet_arr(count,2);
        this.btn_gp["gp"]["next_btn_gp"].visible = false;
    }
    
    private playBtnHandler(){
        this.audio.play_sound("BtnClick_wav")
        let count = 0;
        let total_bet = 0;
        for(let i = 0;i<6;i++){
            let tg_count = this.card_gp["toggle"][String(i)]["count"];
            total_bet += tg_count;
            if(tg_count == 0){
                count++;
            }
            if(tg_count == 1){
                this.show_notice("下注限额为2 - 2000",()=>{this.notice_gp.visible = false});
                return;
            }
        }
        if(total_bet > 2000){
            this.show_notice("下注限额为2 - 2000",()=>{this.notice_gp.visible = false});
            return;
        }
        if(count == 6){
            this.show_notice("下注限额为2 - 2000",()=>{this.notice_gp.visible = false});
            return;
        }

        let bets = [];
        count = 0;
        for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            if(tg.count > 0){
                switch(i){
                    case 0:
                        bets[count] = {"bet_type":"5","amount":tg.count}
                        break;
                    case 1:
                        bets[count] = {"bet_type":"6","amount":tg.count}
                        break;
                    case 2:
                        bets[count] = {"bet_type":"3","amount":tg.count}
                        break;
                    case 3:
                        bets[count] = {"bet_type":"4","amount":tg.count}
                        break;
                    case 4:
                        bets[count] = {"bet_type":"1","amount":tg.count}
                        break;
                    case 5:
                        bets[count] = {"bet_type":"2","amount":tg.count}
                        break;
                }
                count++;
            }
        }
        this.disable_btn(false);
        this.service.MakeBet(this.username,bets,this.token,
            (function (that:GameUI) {
                return function (event: egret.Event) {
                    return that.betCompleteHandler.bind(that)(event);
                }
            }
        )(this),
        (error) => {
            this.show_notice("网络错误",()=>{
                this.disable_btn(true);
                this.btn_gp["gp"]["next_btn_gp"].visible = false;
                this.notice_gp.visible = false
            });
        },() => { });

    }

    private betCompleteHandler(event: egret.Event){
        const request = <egret.HttpRequest>event.currentTarget;
		let gameTotalData = JSON.parse(request.response);
		console.log(gameTotalData);
        if(gameTotalData.code == 0){
            let cards = gameTotalData.data.cards;
            let points = gameTotalData.data.points;
            let results = gameTotalData.data.results;
            for(let i = 0;i<results.length;i++){
                switch(results[i].bet_id){
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
            this.data = {"cards":cards,"points":points,"results":results,"balance":gameTotalData.data.money}
            this.set_record();
            this.card_animation(999,0);
        }else{
            this.show_notice(gameTotalData.message,()=>{
                this.disable_btn(true);
                this.btn_gp["gp"]["next_btn_gp"].visible = false;
                this.notice_gp.visible = false}
            );
        }
    }

    private set_record(){
        let result_money = this.get_result_money();
        let s = ""
        if(egret.localStorage.getItem("record") != null){
            s = egret.localStorage.getItem("record");
        }
        s += this.data["points"]["banker"].description + "," 
            + this.data["points"]["player_three"].description + ","
            + this.data["points"]["player_two"].description + ","
            + this.data["points"]["player_one"].description + ","
        for(let i = 0;i< 3;i++){
            if(result_money[i] >= 0){
                s += "t"
            }else{
                s += "f"
            }

            if(i == 2){
                s += "|"
            }else{
                s += ","
            }
        }
        let s_arr = s.split("|");
        let max = 15
        let s_length = s.split("|").length
        if(s_length > max){
            s = "";
            for(let i = s_length - max; i< s_length - 1; i++){
                s += s_arr[i] + "|";
            }
        }
        egret.localStorage.setItem("record",s);
    }

    private card_animation(num,count_last){
        let _i = Math.floor(num / 5);
        let _j = num % 5
        let player_id = this.get_data_player_id(_i);
        let card = this.card_gp["card"];
        let c_to;
        if(num == 999){
            c_to = card["first_card"];
        }else{
            c_to = card[String(_i)][String(_j)];
        }
        let c_from = card["deck_card"];
        let from_pos = card["deck_pos_glo"];
        
        let Timer = new egret.Timer(25/3,20);//20
        c_from.$setX(card["deck_pos"].x);
        c_from.$setY(card["deck_pos"].y);

        let dis = {x:c_from.localToGlobal().x - c_to.localToGlobal().x - 60, y:c_from.localToGlobal().y - c_to.localToGlobal().y - 25};
        
        c_from.visible = true;
        let x:eui.Image;
        
        this.audio.play_sound("Flip_wav");
        Timer.addEventListener(
            egret.TimerEvent.TIMER,() => {
            c_from.$setX(c_from.x - dis.x/20);
            c_from.$setY(c_from.y - dis.y/20);
        },Timer.start())
        Timer.addEventListener(
            egret.TimerEvent.TIMER_COMPLETE,() => {
                this.audio.stop_sound("Flip_wav");
                c_from.visible = false;
                c_to.visible = true;
                if(num == 999){
                    let sprite_num = this.data["cards"]["first"];
                    c_to.source = this.card_sprite_arr[sprite_num % 4] + [Math.floor((sprite_num - 1) / 4) + 1] + "_png";
                }else{
                    let sprite_num = this.data["cards"][player_id][String(_j)];
                    c_to.source = this.card_sprite_arr[sprite_num % 4] + [Math.floor((sprite_num - 1) / 4) + 1] + "_png";
                    
                    if(_j == 4){
                        let p_des = this.data["points"][player_id].description
                        let c_prize = card[String(_i)]["prize"];

                        let img_cor = "";
                        if(player_id == "banker"){
                            img_cor = "b_"
                        }else{
                            img_cor = "p_"
                        }

                        c_prize.bg.visible = true;
                        if(c_prize.bg_2 != null)
                            c_prize.bg_2.visible = false;

                        if(p_des == "牛牛" || p_des == "公牛（5花）"){
                            c_prize.img.source = "niuniu_niuniu_png";
                        }
                        else if(p_des == "无牛"){
                            c_prize.img.source = img_cor + "niuniu_niuno_png";
                        }
                        else{
                            let d = p_des.split(" ");
                            c_prize.img.source = img_cor + "niuniu_niu" + d[1] + "_png";
                        }

                        c_prize.gp.visible = true;
                    }
                }
                if(count_last < 20){
                    if(num == 999){
                        this.card_animation((Math.floor((this.data["cards"]["first"] - 1) / 4)) % 4 * 5,count_last + 1);
                    }else if(num < 19){
                        this.card_animation(num + 1,count_last + 1);
                    }else{
                        this.card_animation(0,count_last + 1);
                    }
                }else{
                    let result_money = this.get_result_money();
                    for(let i = 0; i < 3; i++){
                        if(result_money[i] != null){
                            this.card_gp["card"][String(i + 1)]["prize"]["bg"].visible = false;
                            this.card_gp["card"][String(i + 1)]["prize"]["bg_2"].visible = true;
                            if(this.card_gp["toggle"][String(i * 2 + 1)]["count"] != 0){
                                let p_des = "";
                                if(result_money[i] >= 0){
                                    p_des = this.data["points"][this.get_data_player_id(i + 1)].description
                                }else{
                                    p_des = this.data["points"][this.get_data_player_id(0)].description
                                }
                                if(p_des == "公牛（5花）"){
                                    this.card_gp["toggle"][String(i * 2 + 1)]["ratio"].text = "1:5";
                                }
                                else if(p_des == "牛牛"){
                                    this.card_gp["toggle"][String(i * 2 + 1)]["ratio"].text = "1:3";
                                }
                                else if(p_des == "牛 9" || p_des == "牛 8" || p_des == "牛 7"){
                                    this.card_gp["toggle"][String(i * 2 + 1)]["ratio"].text = "1:2";
                                }
                                else{
                                    this.card_gp["toggle"][String(i * 2 + 1)]["ratio"].text = "1:1";
                                }
                            }
                            if(result_money[i] >= 0){
                                this.card_gp["card"][String(i + 1)]["prize"]["win"].text = "羸 :" + String(result_money[i]);
                                this.card_gp["card"][String(i + 1)]["prize"]["win"].textColor = 15668496
                            }else{
                                result_money[i] *= -1;
                                this.card_gp["card"][String(i + 1)]["prize"]["win"].text = "输 :" + String(result_money[i]);
                                this.card_gp["card"][String(i + 1)]["prize"]["win"].textColor = 64548
                            }
                        }else{
                            this.card_gp["card"][String(i + 1)]["prize"]["win"].text = ""
                        }

                    }
                    this.audio.play_sound("BtnClick_wav")
                    this.btn_gp["balance"].text = this.get_balance_str(this.data["balance"]);
                    this.disable_btn(true);
                    this.btn_gp["gp"]["coin_btn_gp"].visible = false;
                    this.btn_gp["clear"].visible = false;
                }
                Timer.stop();
        },Timer.start())
    }

    private get_balance_str(num){
        let s = ""
        num = (num * 100).toFixed(0);
        let _s = num.split("");

        for(let i = 0; i < _s.length; i++){
            s = s + _s[i];
            if(i == _s.length - 3){
                s = s + ".";
            }else if((_s.length - 1 - i) % 3 == 2 &&  _s.length - 3 > i){
                s = s + ",";
            }
        }
        return s;
    }

    private get_result_money(){
        let resut_num = [];
        let win_count = {}
        for (var key in this.data["results"]){
            let id = this.data["results"][key].bet_id;
            if(id % 2 == 0){
                win_count[id] = this.data["results"][key]["pay"]
                    - this.card_gp["toggle"][id]["count"]
            }else{
                win_count[id] = this.data["results"][key]["pay"]
                    - this.card_gp["toggle"][id]["count"] * 5
            }
        }

        for(let i = 0; i < 3; i++){
            if(this.card_gp["toggle"][String(2 * i)]["count"] != 0 || this.card_gp["toggle"][String(2 * i + 1)]["count"] != 0){
                
                let s = 0;
                if(win_count[String(2 * i)] != null){
                    s += win_count[String(2 * i)];
                }
                if(win_count[String(2 * i + 1)] != null){
                    s += win_count[String(2 * i + 1)];
                }
                resut_num[i] = s;
            }
        }
        return resut_num;
    }

    private get_data_player_id(num){
        let s = "";
        switch(num){
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
    }

    private notice_gp:eui.Group;
	private notice_text:eui.Label;
	private notice_btn: eui.Button;
	private show_notice(content:string,confirm_btn){
		this.notice_gp.visible = true;
		this.notice_text.text = content;
		if(confirm_btn != null){
			this.notice_btn.visible = true;
			this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, confirm_btn, this);
		}else{
			this.notice_btn.visible = false;
		}
	}
}