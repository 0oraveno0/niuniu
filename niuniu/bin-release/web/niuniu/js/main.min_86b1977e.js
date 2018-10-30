var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function a(t){try{g(n.next(t))}catch(e){o(e)}}function s(t){try{g(n["throw"](t))}catch(e){o(e)}}function g(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(a,s)}g((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;g;)try{if(r=1,o&&(a=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[0,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return g.label++,{value:i[1],done:!1};case 5:g.label++,o=i[1],i=[0];continue;case 7:i=g.ops.pop(),g.trys.pop();continue;default:if(a=g.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){g=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){g.label=i[1];break}if(6===i[0]&&g.label<a[1]){g.label=a[1],a=i;break}if(a&&g.label<a[2]){g.label=a[2],g.ops.push(i);break}a[2]&&g.ops.pop(),g.trys.pop();continue}i=e.call(t,g)}catch(n){i=[6,n],o=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,o,a,s,g={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var audio_manager=function(){function t(){this.init=!1,this.sound={},this.mute_bool=!0}return t.getAudioManager=function(){return t.instance||(t.instance=new t),t.instance},t.prototype.mute=function(t){if(null!=this.sound)if(t)for(var e in this.sound)null!=this.sound[e]&&null!=this.sound[e].channel&&(this.sound[e].loop?this.sound[e].channel.volume=0:this.sound[e].stop||(this.sound[e].channel.volume=0));else for(var e in this.sound)null!=this.sound[e]&&null!=this.sound[e].channel&&1==this.sound[e].loop&&(this.sound[e].channel.volume=1)},t.prototype.play_sound=function(t,e,i){var n=this;if(void 0===e&&(e=!1),void 0===i&&(i=null),0!=this.init)if(this.sound[t]={},this.sound[t].sound=RES.getRes(t),this.sound[t].loop=e,this.sound[t].stop=!1,1==e){this.sound[t].channel=this.sound[t].sound.play(0,1),1==this.mute_bool&&(this.sound[t].channel.volume=0);var r=new egret.Timer(990*this.sound[t].sound.length,1);r.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){n.sound[t].loop&&(r.start(),n.sound[t].channel=n.sound[t].sound.play(0,1),1==n.mute_bool&&(n.sound[t].channel.volume=0))},r.start())}else this.sound[t].channel=this.sound[t].sound.play(0,1),1==this.mute_bool&&(this.sound[t].channel.volume=0),null!=i&&i(),this.sound[t].channel.addEventListener(egret.Event.SOUND_COMPLETE,function(e){this.stop_sound(t)},this)},t.prototype.get_length=function(t){return null!=this.sound[t]?this.sound[t].sound.length:void 0},t.prototype.stop_sound=function(t){null!=this.sound[t]&&0==this.sound[t].stop&&(this.sound[t].loop=!1,this.sound[t].stop=!0,this.sound[t].channel.stop(),this.sound[t].channel=null,this.sound[t].sound=null)},t.prototype.stop_all_sound=function(){if(null!=this.sound)for(var t in this.sound)this.stop_sound(t)},t}();__reflect(audio_manager.prototype,"audio_manager");var Main=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isThemeLoadEnd=!1,e.isResourceLoadEnd=!1,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this);var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/default.res.json?v="+Math.random(),"resource/")},e.prototype.onConfigComplete=function(t){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);var e=new eui.Theme("resource/default.thm.json",this.stage);e.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),RES.loadGroup("preload"),this.gameService=GameService.getGameService(),this.AudioManager=audio_manager.getAudioManager()},e.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,this.createScene()},e.prototype.onResourceLoadComplete=function(t){"preload"==t.groupName?(this.loadingView=new LoadingUI,this.stage.addChild(this.loadingView),RES.loadGroup("resource")):"resource"==t.groupName&&(this.stage.removeChild(this.loadingView),RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),this.isResourceLoadEnd=!0,this.createScene())},e.prototype.createScene=function(){this.isThemeLoadEnd&&this.isResourceLoadEnd&&this.startCreateScene()},e.prototype.onItemLoadError=function(t){console.warn("Url:"+t.resItem.url+" has failed to load")},e.prototype.onResourceLoadError=function(t){console.warn("Group:"+t.groupName+" has failed to load"),this.onResourceLoadComplete(t)},e.prototype.onResourceProgress=function(t){"resource"==t.groupName&&this.loadingView.setProgress(t.itemsLoaded,t.itemsTotal)},e.prototype.startCreateScene=function(){this.gameUI=new GameUI(this.gameService,this.AudioManager),this.addChild(this.gameUI)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),i.call(n))}var a=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(n,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.loadingBG=new egret.Bitmap,this.loadingBG.texture=RES.getRes("loading_bg.@2x_png"),this.loadingBG.width=1280,this.loadingBG.height=720,this.addChild(this.loadingBG),this.loadingBar=new egret.Bitmap,this.loadingBar.texture=RES.getRes("yellow_png"),this.loadingBar.y=600,this.loadingBar.x=0,this.loadingBar.width=1075,this.loadingBar.height=10,this.addChild(this.loadingBar),this.textField=new egret.TextField,this.textField.width=300,this.textField.y=640,this.textField.x=1080,this.textField.size=20,this.textField.$setTextColor(15776606),this.textField.textAlign="center",this.addChild(this.textField)},e.prototype.setProgress=function(t,e){this.loadingBar.width=t/e*1280,this.textField.text="("+(t/e*100).toFixed(1)+"%)"},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI");var GameUI=function(t){function e(e,i){var n=t.call(this)||this;return n.service=e,n.audio=i,n.card_gp={gp:{},card:{},toggle:{}},n.btn_gp={},n.rec_gp={},n.paytable={},n.chip_range_arr=[1,5,10,25,100,500],n.card_sprite_arr=["diamond","club","heart","spade"],n.data={},n.skinName="resource/custom_skin/gameUISkin_v0.exml",n.load_data(),n.uiCompHandler(),n.init(),n}return __extends(e,t),e.prototype.load_data=function(){this.get_game_gp(),this.get_control_gp(),this.get_record_gp(),this.get_paytable_gp()},e.prototype.get_game_gp=function(){this.card_gp.gp.gp=this.game_gp,this.card_gp.card.first_card=this.card_gp.gp.gp.getChildByName("first_card"),this.card_gp.card.deck_card=this.card_gp.gp.gp.getChildByName("deck_card"),this.card_gp.card.deck_pos={x:this.card_gp.card.deck_card.$getX(),y:this.card_gp.card.deck_card.$getY()},this.card_gp.card.deck_pos_glo={x:this.card_gp.card.deck_card.globalToLocal().x,y:this.card_gp.card.deck_card.globalToLocal().y};for(var t=0,e=0;4>e;e++){var i=void 0;if(0==e)this.card_gp.gp[String(e)]=this.card_gp.gp.gp.getChildByName("p"+String(e)),i=this.card_gp.gp[String(e)];else{this.card_gp.gp[String(e)]={},this.card_gp.gp[String(e)].gp=this.card_gp.gp.gp.getChildByName("p"+String(e)),this.card_gp.gp[String(e)][0]=this.card_gp.gp[String(e)].gp.getChildAt(0),i=this.card_gp.gp[String(e)][0],this.card_gp.gp[String(e)][1]={},this.card_gp.gp[String(e)][1].gp=this.card_gp.gp[String(e)].gp.getChildAt(1);for(var n=0;2>n;n++)this.card_gp.toggle[String(t)]={},this.card_gp.gp[String(e)][1][String(n)]={},this.card_gp.gp[String(e)][1][String(n)].gp=this.card_gp.gp[String(e)][1].gp.getChildAt(n),this.card_gp.gp[String(e)][1][String(n)][0]={},this.card_gp.gp[String(e)][1][String(n)][0].gp=this.card_gp.gp[String(e)][1][String(n)].gp.getChildAt(0),this.card_gp.toggle[String(t)]={},this.card_gp.toggle[String(t)].ratio=this.card_gp.gp[String(e)][1][String(n)][0].gp.getChildAt(1),this.card_gp.toggle[String(t)].toggle=this.card_gp.gp[String(e)][1][String(n)].gp.getChildAt(1),t++}this.card_gp.card[String(e)]={};for(var n=0;5>n;n++)this.card_gp.card[String(e)][String(n)]=i.getChildAt(n);this.card_gp.card[String(e)].prize={},this.card_gp.card[String(e)].prize.gp=i.getChildAt(5),this.card_gp.card[String(e)].prize.bg=this.card_gp.card[String(e)].prize.gp.getChildAt(0),this.card_gp.card[String(e)].prize.text=this.card_gp.card[String(e)].prize.gp.getChildAt(1),this.card_gp.card[String(e)].prize.img=this.card_gp.card[String(e)].prize.gp.getChildAt(2),0!=e&&(this.card_gp.card[String(e)].prize.win=this.card_gp.card[String(e)].prize.gp.getChildAt(3))}this.card_gp.gp.label=this.card_gp.gp.gp.getChildByName("lb"),this.card_gp.gp.chip={},this.card_gp.gp.chip.gp=this.card_gp.gp.gp.getChildByName("chip");for(var e=0;6>e;e++)this.card_gp.toggle[String(e)].label={},this.card_gp.toggle[String(e)].label.gp=this.card_gp.gp.label.getChildAt(e),this.card_gp.toggle[String(e)].label.img=this.card_gp.toggle[String(e)].label.gp.getChildAt(0),this.card_gp.toggle[String(e)].label.text=this.card_gp.toggle[String(e)].label.gp.getChildAt(1),this.card_gp.toggle[String(e)].chip=this.card_gp.gp.chip.gp.getChildAt(e),this.card_gp.toggle[String(e)].count=0},e.prototype.get_control_gp=function(){this.btn_gp.balance=this.control_gp.getChildByName("balance"),this.btn_gp.limit=this.control_gp.getChildByName("limit"),this.btn_gp.record=this.control_gp.getChildByName("record"),this.btn_gp.clear=this.control_gp.getChildByName("clear"),this.btn_gp.play=this.control_gp.getChildByName("play"),this.btn_gp.mute=this.control_gp.getChildByName("mute"),this.btn_gp.pay_table=this.control_gp.getChildByName("pay_table"),this.btn_gp.gp={},this.btn_gp.gp.next_btn_gp=this.control_gp.getChildByName("next_btn_gp"),this.btn_gp.next=this.btn_gp.gp.next_btn_gp.getChildByName("next"),this.btn_gp.same=this.btn_gp.gp.next_btn_gp.getChildByName("same"),this.btn_gp["double"]=this.btn_gp.gp.next_btn_gp.getChildByName("double"),this.btn_gp.gp.coin_btn_gp=this.control_gp.getChildByName("coin_btn_gp"),this.btn_gp.coin_btn={};for(var t=0;6>t;t++)this.btn_gp.coin_btn[String(t)]=this.btn_gp.gp.coin_btn_gp.getChildAt(t);this.btn_gp.gp.toggle_gp=this.control_gp.getChildByName("toggle_gp"),this.btn_gp.toggle={};for(var t=0;6>t;t++)this.btn_gp.toggle[String(t)]=this.btn_gp.gp.toggle_gp.getChildAt(t)},e.prototype.get_record_gp=function(){this.rec_gp.gp=this.record_gp,this.rec_gp.gpp=this.rec_gp.gp.getChildByName("gp"),this.rec_gp.back=this.record_gp.getChildAt(2);for(var t=0;t<this.rec_gp.gpp.numChildren;t++){this.rec_gp[String(t)]={},this.rec_gp[String(t)].gp=this.rec_gp.gpp.getChildAt(t);for(var e=0;e<this.rec_gp[String(t)].gp.numChildren;e++)this.rec_gp[String(t)][String(e)]={},this.rec_gp[String(t)][String(e)].gp=this.rec_gp[String(t)].gp.getChildAt(e),this.rec_gp[String(t)][String(e)].img=this.rec_gp[String(t)][String(e)].gp.getChildAt(0),0!=e&&(this.rec_gp[String(t)][String(e)].win=this.rec_gp[String(t)][String(e)].gp.getChildAt(1))}},e.prototype.get_paytable_gp=function(){this.paytable.gp=this.pay_table_gp,this.paytable.close=this.paytable.gp.getChildByName("close")},e.prototype.init=function(){this.username=egret.getOption("username")?egret.getOption("username"):"fish036",this.balance=Number(egret.getOption("balance")?egret.getOption("balance"):"1000"),this.token=egret.getOption("token")?egret.getOption("token"):"AAD4MFJYD40M9BI012MVX5O8RHK6V5",this.btn_gp.balance.text="$ "+this.balance},e.prototype.uiCompHandler=function(){for(var t=0;6>t;t++)this.btn_gp.toggle[String(t)].addEventListener(egret.TouchEvent.TOUCH_TAP,this.toggleBtnHandler,this);this.btn_gp.record.addEventListener(egret.TouchEvent.TOUCH_TAP,this.recordBtnHandler,this),this.rec_gp.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.record_backBtnHandler,this),this.btn_gp.clear.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clearBtnHandler,this),this.btn_gp.play.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playBtnHandler,this),this.btn_gp.mute.addEventListener(egret.TouchEvent.TOUCH_TAP,this.muteBtnHandler,this),this.btn_gp.pay_table.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pay_tableBtnHandler,this),this.btn_gp.next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextBtnHandler,this),this.btn_gp.same.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sameBtnHandler,this),this.btn_gp["double"].addEventListener(egret.TouchEvent.TOUCH_TAP,this.doubleBtnHandler,this);for(var t=0;6>t;t++)this.btn_gp.coin_btn[String(t)].addEventListener(egret.TouchEvent.TOUCH_TAP,this.coin_btnBtnHandler,this);this.paytable.close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pay_table_closeBtnHandler,this)},e.prototype.recordBtnHandler=function(){if(this.audio.play_sound("BtnClick_wav"),null!=egret.localStorage.getItem("record")){for(var t=egret.localStorage.getItem("record").split("|"),e=[],i=0;i<t.length-1;i++)e[i]=t[t.length-2-i].split(",");for(var i=0;12>i;i++)if(null!=e[i])for(var n=0;4>n;n++){var r=this.rec_gp[String(i)][String(n)];if(r.gp.visible=!0,"牛牛"==e[i][n])r.img.visible=!0,r.img.source="niuniu_niuniu_png";else if("无牛"==e[i][n])r.img.visible=!0,r.img.source="niuniu_niuno_png";else{var o=e[i][n].split(" ");r.img.visible=!0,r.img.source="niuniu_niu"+o[1]+"_png"}0!=n&&("t"==e[i][n+4]?r.win.visible=!0:r.win.visible=!1)}else for(var n=0;4>n;n++){var r=this.rec_gp[String(i)][String(n)];r.gp.visible=!1}}else for(var i=0;12>i;i++)for(var n=0;4>n;n++){var r=this.rec_gp[String(i)][String(n)];r.img.visible=!1,r.text.text="",0!=n&&(r.win.visible=!1)}this.rec_gp.gp.visible=!0},e.prototype.record_backBtnHandler=function(){this.audio.play_sound("BtnClick_wav"),this.rec_gp.gp.visible=!1},e.prototype.clearBtnHandler=function(){this.audio.play_sound("BtnClick_wav");for(var t=0;6>t;t++){var e=this.card_gp.toggle[String(t)];if(1==e.toggle.alpha)return void this.clear_tg_count(e)}for(var t=0;6>t;t++){var e=this.card_gp.toggle[String(t)];this.clear_tg_count(e)}},e.prototype.clear_tg_count=function(t){t.label.gp.visible=!1,t.label.img.width=0,t.label.text.text="",t.chip.removeChildren(),t.count=0},e.prototype.muteBtnHandler=function(){0==this.audio.init&&(this.audio.init=!0,this.audio.play_sound("BGM2_mp3",!0)),1==this.audio.mute_bool?(this.audio.mute_bool=!1,this.btn_gp.mute.source="Voice_on.@2x_png",this.audio.mute(!1)):(this.audio.mute_bool=!0,this.btn_gp.mute.source="Voice_off.@2x_png",this.audio.mute(!0))},e.prototype.pay_tableBtnHandler=function(){this.audio.play_sound("BtnClick_wav"),this.paytable.gp.visible=!0},e.prototype.pay_table_closeBtnHandler=function(){this.audio.play_sound("BtnClick_wav"),this.paytable.gp.visible=!1},e.prototype.toggleBtnHandler=function(t){var e=this.card_gp.toggle[t.target.name].toggle;if(1==e.alpha)e.alpha=0;else for(var i=0;6>i;i++){var n=this.card_gp.toggle[String(i)].toggle;n.name==t.target.name?n.alpha=1:n.alpha=0}},e.prototype.coin_btnBtnHandler=function(t){this.audio.play_sound("Coin_wav");for(var e=0;6>e;e++){var i=this.card_gp.toggle[String(e)];1==i.toggle.alpha&&this.coin_bet(t.target,i)}},e.prototype.coin_bet=function(t,e){var i=Number(t.name);e.label.gp.visible=!0,e.count+=this.chip_range_arr[i],Number(e.toggle.name)%2==0?(e.label.text.text="押 "+e.count,e.label.text.width=9*e.label.text.text.length+35,e.label.img.width=9*e.label.text.text.length+35):(e.label.text.text="押 "+e.count+" 预付("+4*e.count+")",e.label.text.width=9*e.label.text.text.length+70,e.label.img.width=9*e.label.text.text.length+70);var n=e.chip,r=new eui.Image;r.$setWidth(t.$getWidth()/5*4),r.$setHeight(t.$getWidth()/5*4),r.$setAnchorOffsetX(50),r.$setAnchorOffsetY(50),n.addChild(r),r.$setX(r.globalToLocal().x-t.globalToLocal().x),r.$setY(r.globalToLocal().y-t.globalToLocal().y),r.source=this.chip_range_arr[i]+"_big.@2x_png";var o=new egret.Timer(25/3,20),a={x:r.$getX()+101*(Math.random()-.5),y:r.$getY()+78*(Math.random()-.5)};o.addEventListener(egret.TimerEvent.TIMER,function(){r.$setX(r.$getX()-a.x/20),r.$setY(r.$getY()-a.y/20)},o.start()),o.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){o.stop()},o.start())},e.prototype.coin_bet_arr=function(t,e){for(var i=0;6>i;i++)if(0!=t[i])for(var n=this.coin_count(t[i]*e),r=0;r<n.length;r++)for(var o=0;o<n[r];o++)this.coin_bet(this.btn_gp.coin_btn[String(r)],this.card_gp.toggle[String(i)])},e.prototype.coin_count=function(t){for(var e=[0,0,0,0,0,0],i=5;i>=0;i--){var n=Math.floor(t/this.chip_range_arr[i]);0!=n&&(t-=n*this.chip_range_arr[i],e[i]=n)}return e},e.prototype.disable_btn=function(t){this.btn_gp.gp.coin_btn_gp.visible=t,this.btn_gp.gp.toggle_gp.visible=t,this.btn_gp.clear.visible=t,this.btn_gp.play.visible=t,this.btn_gp.gp.next_btn_gp.visible=t,this.btn_gp.record.visible=t,this.btn_gp.mute.visible=t,this.btn_gp.pay_table.visible=t},e.prototype.nextBtnHandler=function(){this.audio.play_sound("BtnClick_wav"),this.btn_gp.clear.visible=!0,this.btn_gp.gp.coin_btn_gp.visible=!0,this.btn_gp.gp.next_btn_gp.visible=!1;for(var t=0;6>t;t++){var e=this.card_gp.toggle[String(t)];this.clear_tg_count(e)}this.card_gp.card.first_card.visible=!1;for(var t=0;4>t;t++){var i=this.card_gp.card[String(t)].prize;i.gp.visible=!1,i.img.visible=!1,i.text.text="",0!=t&&(i.win.text="");for(var n=0;5>n;n++)this.card_gp.card[String(t)][String(n)].visible=!1}},e.prototype.sameBtnHandler=function(){this.audio.play_sound("Coin_wav");for(var t=[],e=0;6>e;e++)t[e]=this.card_gp.toggle[String(e)].count;this.nextBtnHandler(),this.coin_bet_arr(t,1),this.btn_gp.gp.next_btn_gp.visible=!1},e.prototype.doubleBtnHandler=function(){this.audio.play_sound("Coin_wav");for(var t=[],e=0;6>e;e++)t[e]=this.card_gp.toggle[String(e)].count;this.nextBtnHandler(),this.coin_bet_arr(t,2),this.btn_gp.gp.next_btn_gp.visible=!1},e.prototype.playBtnHandler=function(){var t=this;this.audio.play_sound("BtnClick_wav");for(var e=0,i=0,n=0;6>n;n++){var r=this.card_gp.toggle[String(n)].count;if(i+=r,0==r&&e++,1==r)return void this.show_notice("下注限额为2 - 2000",function(){t.notice_gp.visible=!1})}if(i>2e3)return void this.show_notice("下注限额为2 - 2000",function(){t.notice_gp.visible=!1});if(6==e)return void this.show_notice("下注限额为2 - 2000",function(){t.notice_gp.visible=!1});var o=[];e=0;for(var n=0;6>n;n++){var a=this.card_gp.toggle[String(n)];if(a.count>0){switch(n){case 0:o[e]={bet_type:"5",amount:a.count};break;case 1:o[e]={bet_type:"6",amount:a.count};break;case 2:o[e]={bet_type:"3",amount:a.count};break;case 3:o[e]={bet_type:"4",amount:a.count};break;case 4:o[e]={bet_type:"1",amount:a.count};break;case 5:o[e]={bet_type:"2",amount:a.count}}e++}}this.disable_btn(!1),this.service.MakeBet(this.username,o,this.token,function(t){return function(e){return t.betCompleteHandler.bind(t)(e)}}(this),function(e){t.show_notice("网络错误",function(){t.disable_btn(!0),t.btn_gp.gp.next_btn_gp.visible=!1,t.notice_gp.visible=!1})},function(){})},e.prototype.betCompleteHandler=function(t){var e=this,i=t.currentTarget,n=JSON.parse(i.response);if(console.log(n),0==n.code){for(var r=n.data.cards,o=n.data.points,a=n.data.results,s=0;s<a.length;s++)switch(a[s].bet_id){case"1":a[s].bet_id="4";break;case"2":a[s].bet_id="5";break;case"3":a[s].bet_id="2";break;case"4":a[s].bet_id="3";break;case"5":a[s].bet_id="0";break;case"6":a[s].bet_id="1"}this.data={cards:r,points:o,results:a,balance:n.data.money},this.set_record(),this.card_animation(999,0)}else this.show_notice(n.message,function(){e.disable_btn(!0),e.btn_gp.gp.next_btn_gp.visible=!1,e.notice_gp.visible=!1})},e.prototype.set_record=function(){var t=this.get_result_money(),e="";null!=egret.localStorage.getItem("record")&&(e=egret.localStorage.getItem("record")),e+=this.data.points.banker.description+","+this.data.points.player_three.description+","+this.data.points.player_two.description+","+this.data.points.player_one.description+",";for(var i=0;3>i;i++)e+=t[i]>=0?"t":"f",e+=2==i?"|":",";var n=e.split("|"),r=15,o=e.split("|").length;if(o>r){e="";for(var i=o-r;o-1>i;i++)e+=n[i]+"|"}egret.localStorage.setItem("record",e)},e.prototype.card_animation=function(t,e){var i,n=this,r=Math.floor(t/5),o=t%5,a=this.get_data_player_id(r),s=this.card_gp.card;i=999==t?s.first_card:s[String(r)][String(o)];var g=s.deck_card,p=(s.deck_pos_glo,new egret.Timer(25/3,20));g.$setX(s.deck_pos.x),g.$setY(s.deck_pos.y);var l={x:g.localToGlobal().x-i.localToGlobal().x-60,y:g.localToGlobal().y-i.localToGlobal().y-25};g.visible=!0;this.audio.play_sound("Flip_wav"),p.addEventListener(egret.TimerEvent.TIMER,function(){g.$setX(g.x-l.x/20),g.$setY(g.y-l.y/20)},p.start()),p.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){if(n.audio.stop_sound("Flip_wav"),g.visible=!1,i.visible=!0,999==t){var l=n.data.cards.first;i.source=n.card_sprite_arr[l%4]+"_"+[Math.floor((l-1)/4)+1]+"_png"}else{var l=n.data.cards[a][String(o)];if(i.source=n.card_sprite_arr[l%4]+"_"+[Math.floor((l-1)/4)+1]+"_png",4==o){var c=n.data.points[a].description,h=s[String(r)].prize;"niuniu"==n.data.points[a].prize_id?(h.text.text="",h.img.visible=!0):(h.text.text=c,h.img.visible=!1),h.gp.visible=!0}}if(20>e)999==t?n.card_animation(Math.floor((n.data.cards.first-1)/4)%4*5,e+1):19>t?n.card_animation(t+1,e+1):n.card_animation(0,e+1);else{for(var d=n.get_result_money(),_=0;3>_;_++)null!=d[_]?d[_]>=0?(n.card_gp.card[String(_+1)].prize.win.text="羸 :"+String(d[_]),n.card_gp.card[String(_+1)].prize.win.textColor=15668496):(d[_]*=-1,n.card_gp.card[String(_+1)].prize.win.text="输 :"+String(d[_]),n.card_gp.card[String(_+1)].prize.win.textColor=3845):n.card_gp.card[String(_+1)].prize.win.text="";n.audio.play_sound("BtnClick_wav"),n.btn_gp.balance.text="$ "+n.data.balance,n.disable_btn(!0),n.btn_gp.gp.coin_btn_gp.visible=!1,n.btn_gp.clear.visible=!1}p.stop()},p.start())},e.prototype.get_result_money=function(){var t=[],e={};for(var i in this.data.results){var n=this.data.results[i].bet_id;n%2==0?e[n]=this.data.results[i].pay-this.card_gp.toggle[n].count:e[n]=this.data.results[i].pay-5*this.card_gp.toggle[n].count}for(var r=0;3>r;r++)if(0!=this.card_gp.toggle[String(2*r)].count||0!=this.card_gp.toggle[String(2*r+1)].count){var o=0;null!=e[String(2*r)]&&(o+=e[String(2*r)]),null!=e[String(2*r+1)]&&(o+=e[String(2*r+1)]),t[r]=o}return t},e.prototype.get_data_player_id=function(t){var e="";switch(t){case 0:e="banker";break;case 3:e="player_one";break;case 2:e="player_two";break;case 1:e="player_three"}return e},e.prototype.show_notice=function(t,e){this.notice_gp.visible=!0,this.notice_text.text=t,null!=e?(this.notice_btn.visible=!0,this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,e,this)):this.notice_btn.visible=!1},e}(eui.Component);__reflect(GameUI.prototype,"GameUI");var GameService=function(){function t(){this.host="http://192.168.0.101/",this.gameInfo="game/Niuniuinfo",this.makeBet="game/NiuniuBet";"https:"===document.location.protocol?"https":"http"}return t.prototype.info=function(t,e,i,n,r){var o={HTTP_TOKEN:e,username:t};this.httpReq(this.gameInfo,JSON.stringify(o),e,i,n,r,"application/json")},t.prototype.MakeBet=function(t,e,i,n,r,o){var a={HTTP_TOKEN:i,param:JSON.stringify({username:t,bets:e})};this.httpReq(this.makeBet,JSON.stringify(a),i,n,r,o,"application/json")},t.prototype.httpReq=function(t,e,i,n,r,o,a){var s=new egret.HttpRequest;s.responseType=egret.HttpResponseType.TEXT,s.setRequestHeader("token",i),s.setRequestHeader("content-Type",a),s.addEventListener(egret.Event.COMPLETE,n,this),s.addEventListener(egret.IOErrorEvent.IO_ERROR,r,this),s.addEventListener(egret.ProgressEvent.PROGRESS,o,this),s.open(this.host+t,egret.HttpMethod.POST),s.send(e)},t.getGameService=function(){return t.instance||(t.instance=new t),t.instance},t}();__reflect(GameService.prototype,"GameService");