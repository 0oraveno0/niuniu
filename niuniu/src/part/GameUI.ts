class GameUI extends eui.Component {

    
    private game_gp:eui.Group;
    private card_gp = {"gp":{},"card":{},"toggle":{}};
    private control_gp:eui.Group;
    private btn_gp = {};
    private record_gp:eui.Group;
    private rec_gp = {};
    private pay_table_gp:eui.Group;
    private paytable = {};
	private static username: string;
    private static balance: number;
    private static token: string;
    private betObjects = [];
    private sprite_gp = {};
    private chip_range_arr = [1,5,10,25,100,500];
    private pay_table_s_rect:eui.Scroller;
    private BetParams = 
    {
        "username":null,
        "bets":null,
        "Bet":
        {
            "bet_type":null,
            "amount":null
        }
    }
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

    private init(){

      	GameUI.username = egret.getOption('username') ? egret.getOption('username') : 'fish001';
		GameUI.balance = Number(egret.getOption('balance')? egret.getOption('balance') : '1000');
        GameUI.token = egret.getOption('token') ? egret.getOption('token') : 'AAD4MFJYD40M9BI012MVX5O8RHK6V5';
        //GameUI.username = egret.getOption('username') ? egret.getOption('username') : 'zhangyanli';
        //GameUI.token = egret.getOption('token') ? egret.getOption('token') : '624ee884f9314fd1a7438de68f08474c';
      	
		//GameUI.username = egret.getOption('username');
		//GameUI.balance = Number(egret.getOption('balance'));
        //GameUI.token = egret.getOption('token');

        this.btn_gp["balance"].text = "$ " + GameUI.balance;

        for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            tg.toggle.alpha = 0;
            tg.label.gp.visible = false;
            tg.label.img.width = 0;
            tg.label.text.text = "";
            tg.chip.removeChildren();
            tg.count = 0;
        }
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
        this.btn_gp["clear"].visible = false;
        this.btn_gp["gp"].next_btn_gp.visible = false;
    }

    private get_game_gp(){
        this.card_gp["gp"]["gp"] = this.game_gp;
        this.card_gp["card"]["first_card"] = this.card_gp["gp"]["gp"].getChildByName("first_card");
        this.card_gp["card"]["deck_card"] = this.card_gp["gp"]["gp"].getChildByName("deck_card");
        this.card_gp["card"]["deck_pos"] = {
            "x":this.card_gp["card"]["deck_card"].$getX(),
            "y":this.card_gp["card"]["deck_card"].$getY()
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
                    this.card_gp["gp"][String(i)]["1"][String(j)]["0"] = {}
                    this.card_gp["gp"][String(i)]["1"][String(j)]["0"]["gp"] = this.card_gp["gp"][String(i)]["1"][String(j)]["gp"].getChildAt(0);

                    this.card_gp["toggle"][String(toggle_index)] = {}
                    this.card_gp["toggle"][String(toggle_index)]["ratio"] = this.card_gp["gp"][String(i)]["1"][String(j)]["0"]["gp"].getChildAt(1);
                    this.card_gp["toggle"][String(toggle_index)]["toggle"] = this.card_gp["gp"][String(i)]["1"][String(j)]["gp"].getChildAt(1);
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
            this.card_gp["card"][String(i)]["prize"]["text"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(1);
            this.card_gp["card"][String(i)]["prize"]["img"] = this.card_gp["card"][String(i)]["prize"]["gp"].getChildAt(2);
            if(i != 0){
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
                this.rec_gp[String(i)][String(j)]["text"] = this.rec_gp[String(i)][String(j)]["gp"].getChildAt(1);
            }
        }
    }

    private get_paytable_gp(){
        this.paytable["gp"] = this.pay_table_gp;
        this.paytable["close"] = this.paytable["gp"].getChildByName("close");
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

    private recordBtnHandler(){
        this.rec_gp["gp"].visible = true;
    }

    private record_backBtnHandler(){
        this.rec_gp["gp"].visible = false;
    }

    private clearBtnHandler(){
        
    }

    private muteBtnHandler(){
        if(this.audio.init == false){
			this.audio.init = true;
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
        this.paytable["gp"].visible = true;
    }

    private nextBtnHandler(){
        
    }

    private sameBtnHandler(){
        
    }

    private doubleBtnHandler(){
        
    }

    private coin_btnBtnHandler(evt){
        for(let i = 0;i<6;i++){
            let tg = this.card_gp["toggle"][String(i)];
            if(tg.toggle.alpha == 1){
                let evt_num = Number(evt.target.name);

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
                chip.$setWidth(evt.target.$getWidth());
                chip.$setHeight(evt.target.$getWidth());
                chip.$setAnchorOffsetX(50);
                chip.$setAnchorOffsetY(50);
                gp.addChild(chip);
                chip.$setX(chip.globalToLocal().x - evt.target.globalToLocal().x);
                chip.$setY(chip.globalToLocal().y - evt.target.globalToLocal().y);
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
        }
    }

    private pay_table_closeBtnHandler(){
        this.paytable["gp"].visible = false;
    }

    private playBtnHandler(){
       let bets = [];
        let i = 0;
        this.betObjects.forEach(betObject=>{
            if (betObject.betAmount < 2 || betObject.betAmount > 2000) {
				this.show_notice("下注限额为2 - 2000",()=>{this.notice_gp.visible = false});
				return;
			}
            this.BetParams.Bet.amount = betObject.betType.bet_id;
            this.BetParams.Bet.bet_type = betObject.betAmount;
            bets[i] = this.BetParams.Bet;
            i++;
        })

        this.service.MakeBet(GameUI.username,null,GameUI.token,
			(function (that:GameUI) {
				return function (event: egret.Event) {
					return that.betCompleteHandler.bind(that)(event);
				}
			}
		)(this),
        (error) => {},() => { });
    }

    private betCompleteHandler(event: egret.Event){
        const request = <egret.HttpRequest>event.currentTarget;
		let gameTotalData = JSON.parse(request.response);
		console.log(gameTotalData);
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