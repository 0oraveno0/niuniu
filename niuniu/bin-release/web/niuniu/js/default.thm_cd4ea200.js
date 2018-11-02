window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","chip":"resource/eui_skins/chip.exml"};generateEUI.paths['resource/custom_skin/gameUISkin_v0.exml'] = window.gameUISkin_v0 = (function (_super) {
	__extends(gameUISkin_v0, _super);
	var gameUISkin_v0$Skin1 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin1, _super);
		function gameUISkin_v0$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start_hover.@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "start.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin1;
	})(eui.Skin);

	var gameUISkin_v0$Skin2 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin2, _super);
		function gameUISkin_v0$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","next_hover.@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "next.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin2;
	})(eui.Skin);

	var gameUISkin_v0$Skin3 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin3, _super);
		function gameUISkin_v0$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","normal_hover.@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "normal.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin3;
	})(eui.Skin);

	var gameUISkin_v0$Skin4 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin4, _super);
		function gameUISkin_v0$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","-double_hover.@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "-double.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin4;
	})(eui.Skin);

	var gameUISkin_v0$Skin5 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin5, _super);
		function gameUISkin_v0$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "history_off.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin5;
	})(eui.Skin);

	var gameUISkin_v0$Skin6 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin6, _super);
		function gameUISkin_v0$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","help_hover.@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "help.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin6;
	})(eui.Skin);

	var gameUISkin_v0$Skin7 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin7, _super);
		function gameUISkin_v0$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","clear_hover.@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "clear.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin7;
	})(eui.Skin);

	var gameUISkin_v0$Skin8 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin8, _super);
		function gameUISkin_v0$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "history_on.@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin8;
	})(eui.Skin);

	var gameUISkin_v0$Skin9 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin9, _super);
		function gameUISkin_v0$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","close_hover_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin9;
	})(eui.Skin);

	var gameUISkin_v0$Skin10 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin10, _super);
		function gameUISkin_v0$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ok_hover_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ok_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin10;
	})(eui.Skin);

	function gameUISkin_v0() {
		_super.call(this);
		this.skinParts = ["game_gp","control_gp","record_gp","pay_table_s_rect","pay_table_gp","notice_text","notice_btn","notice_gp"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group100_i()];
	}
	var _proto = gameUISkin_v0.prototype;

	_proto._Group100_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.game_gp_i(),this.control_gp_i(),this.record_gp_i(),this.pay_table_gp_i(),this.notice_gp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 720;
		t.source = "bg_png";
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.game_gp_i = function () {
		var t = new eui.Group();
		this.game_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.width = 1095;
		t.x = 90;
		t.y = 196;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Group2_i(),this._Group8_i(),this._Group14_i(),this._Group20_i(),this._Group27_i(),this._Group34_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.name = "first_card";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 376.5;
		t.y = -107;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.name = "deck_card";
		t.rotation = 110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 931;
		t.y = -142;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.name = "p0";
		t.width = 282;
		t.x = 446.33;
		t.y = -107.68;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Group1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 11.5;
		t.paddingLeft = 5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 15;
		t.y = 15;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 25;
		t.y = 25;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 35;
		t.y = 35;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 17;
		t.y = 45;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 125;
		t.x = -305.63906795570557;
		t.y = 140.24450128708145;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "Banker_bg.@2x_png";
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.source = "niuniu_niuniu_png";
		t.width = 55;
		t.x = 38;
		t.y = 11;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.name = "p1";
		t.width = -242;
		t.x = 750;
		t.y = 0;
		t.elementsContent = [this._Group4_i(),this._Group7_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145;
		t.rotation = -12;
		t.width = 170;
		t.x = 4.93;
		t.y = 76.94;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Group3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 35.52;
		t.y = 0.99;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 92.52;
		t.y = 0.99;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 7.35;
		t.y = 74.86;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 64;
		t.y = 75;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 121.3;
		t.y = 75.28;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 125;
		t.x = 141.36093204429443;
		t.y = 43.24450128708145;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Label1_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "Banker_bg.@2x_png";
		t.visible = false;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "Player_bg.@2x_png";
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.source = "niuniu_niuniu_png";
		t.width = 55;
		t.x = 38;
		t.y = 11;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 20.08;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "top";
		t.width = 85;
		t.x = 25;
		t.y = 62;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 198;
		t.width = 382;
		t.x = -52.67;
		t.y = 159.33;
		t.elementsContent = [this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 157;
		t.width = 208.5;
		t.x = 15.5;
		t.y = 32;
		t.elementsContent = [this._Image19_i(),this._Label2_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 151.5;
		t.name = "0";
		t.source = "Selected_5.@2x_png";
		t.width = 192.66;
		t.x = 6.67;
		t.y = 22.3;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 43;
		t.rotation = -8;
		t.size = 35;
		t.text = "1:1";
		t.textAlign = "center";
		t.textColor = 0x686868;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 43.95;
		t.y = 62.1;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 172.5;
		t.width = 209;
		t.x = 188.77;
		t.y = -9.64;
		t.elementsContent = [this._Image20_i(),this._Label3_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 163.17;
		t.name = "1";
		t.source = "Selected_6.@2x_png";
		t.width = 201.17;
		t.x = 3.33;
		t.y = 24;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 43;
		t.rotation = -12;
		t.size = 35;
		t.text = "1:1";
		t.textAlign = "center";
		t.textColor = 0x686868;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 34.83;
		t.y = 74.23;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 319;
		t.name = "p2";
		t.width = 370;
		t.x = 360;
		t.y = 61;
		t.elementsContent = [this._Group10_i(),this._Group13_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.x = 105;
		t.y = 26;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Group9_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 34.5;
		t.y = 1;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 91.5;
		t.y = 1.5;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 7;
		t.y = 75;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 63;
		t.y = 75;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 120;
		t.y = 75;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 125;
		t.x = 141.36093204429443;
		t.y = 43.24450128708145;
		t.elementsContent = [this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Label4_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "Banker_bg.@2x_png";
		t.visible = false;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "Player_bg.@2x_png";
		t.visible = false;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.source = "niuniu_niuniu_png";
		t.width = 55;
		t.x = 38;
		t.y = 11;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 20.08;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "top";
		t.width = 85;
		t.x = 25;
		t.y = 62;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 198;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 382;
		t.x = 4;
		t.y = 109;
		t.elementsContent = [this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136;
		t.width = 181.5;
		t.x = 7;
		t.y = 53.5;
		t.elementsContent = [this._Image29_i(),this._Label5_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.67;
		t.name = "2";
		t.source = "Selected_3.@2x_png";
		t.width = 182.17;
		t.x = -5;
		t.y = 17.33;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 43;
		t.rotation = 2;
		t.size = 35;
		t.text = "1:1";
		t.textAlign = "center";
		t.textColor = 0x686868;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 40.93;
		t.y = 42.45;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136.5;
		t.width = 177.5;
		t.x = 191.27;
		t.y = 53.36;
		t.elementsContent = [this._Image30_i(),this._Label6_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134.5;
		t.name = "3";
		t.source = "Selected_4.@2x_png";
		t.width = 182.83;
		t.x = -5;
		t.y = 17;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 43;
		t.rotation = -2;
		t.size = 35;
		t.text = "1:1";
		t.textAlign = "center";
		t.textColor = 0x686868;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 27;
		t.y = 45.45;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 382;
		t.name = "p3";
		t.rotation = 0;
		t.width = 412;
		t.x = 4;
		t.y = -15;
		t.elementsContent = [this._Group16_i(),this._Group19_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145;
		t.rotation = 12;
		t.width = 170;
		t.x = 171.26;
		t.y = 54.28;
		t.elementsContent = [this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Group15_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 34.84;
		t.y = 1.47;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 90.87;
		t.y = 1.69;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 6.14;
		t.y = 75.89;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 62.53;
		t.y = 75.3;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "card_back_png";
		t.visible = false;
		t.width = 45;
		t.x = 119.02;
		t.y = 75.19;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 125;
		t.x = 141.36093204429443;
		t.y = 43.24450128708145;
		t.elementsContent = [this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Label7_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "Banker_bg.@2x_png";
		t.visible = false;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "Player_bg.@2x_png";
		t.visible = false;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.source = "niuniu_niuniu_png";
		t.width = 55;
		t.x = 38;
		t.y = 11;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 20.08;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "top";
		t.width = 85;
		t.x = 25;
		t.y = 62;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 198;
		t.width = 382;
		t.x = -2;
		t.y = 170.33;
		t.elementsContent = [this._Group17_i(),this._Group18_i()];
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.width = 207;
		t.x = 3;
		t.y = 1;
		t.elementsContent = [this._Image39_i(),this._Label8_i()];
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 162.66;
		t.name = "4";
		t.source = "Selected_1.@2x_png";
		t.width = 199.01;
		t.x = 6.33;
		t.y = 17.67;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.height = 43;
		t.rotation = 12;
		t.size = 35;
		t.text = "1:1";
		t.textAlign = "center";
		t.textColor = 0x686868;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 69.71;
		t.y = 45.47;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.width = 202;
		t.x = 179.77;
		t.y = 42.86;
		t.elementsContent = [this._Image40_i(),this._Label9_i()];
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 152.01;
		t.name = "5";
		t.source = "Selected_2.@2x_png";
		t.width = 194.67;
		t.x = 6.33;
		t.y = 14.99;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.height = 43;
		t.rotation = 9;
		t.size = 35;
		t.text = "1:1";
		t.textAlign = "center";
		t.textColor = 0x686868;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 57.58;
		t.y = 39.39;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.name = "chip";
		t.touchThrough = true;
		t.width = 1095;
		t.x = 0;
		t.y = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Group21_i(),this._Group22_i(),this._Group23_i(),this._Group24_i(),this._Group25_i(),this._Group26_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.touchThrough = true;
		t.width = 1;
		t.x = 830;
		t.y = 314;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.touchThrough = true;
		t.width = 1;
		t.x = 1001;
		t.y = 277;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.touchThrough = true;
		t.width = 1;
		t.x = 478;
		t.y = 332;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.touchThrough = true;
		t.width = 1;
		t.x = 653;
		t.y = 332;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.touchThrough = true;
		t.width = 1;
		t.x = 132;
		t.y = 281;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.touchThrough = true;
		t.width = 1;
		t.x = 305;
		t.y = 312;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 210;
		t.name = "lb";
		t.touchThrough = true;
		t.width = 1095;
		t.x = 0;
		t.y = 170;
		t.elementsContent = [this._Group28_i(),this._Group29_i(),this._Group30_i(),this._Group31_i(),this._Group32_i(),this._Group33_i()];
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.rotation = 345.59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 100;
		t.x = 800.44;
		t.y = 46.53;
		t.elementsContent = [this._Image41_i(),this._Label10_i()];
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.source = "money_bg.@2x3_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 19;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.rotation = 345.59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 215;
		t.x = 888;
		t.y = 24;
		t.elementsContent = [this._Image42_i(),this._Label11_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.source = "money_bg.@2x3_png";
		t.width = 215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 19;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 100;
		t.x = 472;
		t.y = 55;
		t.elementsContent = [this._Image43_i(),this._Label12_i()];
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "money_bg.@2x3_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 19;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 215;
		t.x = 557;
		t.y = 55;
		t.elementsContent = [this._Image44_i(),this._Label13_i()];
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "money_bg.@2x3_png";
		t.width = 215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 19;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.rotation = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 100;
		t.x = 137.41;
		t.y = 14.36;
		t.elementsContent = [this._Image45_i(),this._Label14_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "money_bg.@2x3_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 19;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.rotation = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 215;
		t.x = 222.11;
		t.y = 32.19;
		t.elementsContent = [this._Image46_i(),this._Label15_i()];
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "money_bg.@2x3_png";
		t.width = 215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 19;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.control_gp_i = function () {
		var t = new eui.Group();
		this.control_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.touchThrough = true;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Button1_i(),this._Group35_i(),this._Group36_i(),this._Group37_i(),this._Image59_i(),this._Button5_i(),this._Label16_i(),this._Image60_i(),this._Button6_i(),this._Button7_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.label = "";
		t.name = "play";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 1097;
		t.y = 533;
		t.skinName = gameUISkin_v0$Skin1;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.name = "coin_btn_gp";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 1280;
		t.x = 0;
		t.y = 550;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 8;
		t.paddingLeft = 350;
		t.paddingTop = 40;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.name = "0";
		t.source = "1_big.@2x_png";
		t.width = 90;
		t.x = 340;
		t.y = 0;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.name = "1";
		t.source = "5_big.@2x_png";
		t.width = 90;
		t.x = 440;
		t.y = 10;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.name = "2";
		t.source = "10_big.@2x_png";
		t.width = 90;
		t.x = 540;
		t.y = 20;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.name = "3";
		t.source = "25_big.@2x_png";
		t.width = 90;
		t.x = 640;
		t.y = 20;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.name = "4";
		t.source = "100_big.@2x_png";
		t.width = 90;
		t.x = 740;
		t.y = 20;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.name = "5";
		t.source = "500_big.@2x_png";
		t.width = 90;
		t.x = 840;
		t.y = 10;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.name = "toggle_gp";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 1095;
		t.x = 90;
		t.y = 196;
		t.layout = this._BasicLayout3_i();
		t.elementsContent = [this._Image53_i(),this._Image54_i(),this._Image55_i(),this._Image56_i(),this._Image57_i(),this._Image58_i()];
		return t;
	};
	_proto._BasicLayout3_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.alpha = 0.001;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.name = "0";
		t.source = "Selected_5.@2x_png";
		t.touchEnabled = true;
		t.width = 203.5;
		t.x = 713.56;
		t.y = 209.54;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.alpha = 0.001;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 172.5;
		t.name = "1";
		t.source = "Selected_6.@2x_png";
		t.touchEnabled = true;
		t.width = 209.5;
		t.x = 883.92;
		t.y = 169.67;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.alpha = 0.001;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136;
		t.name = "2";
		t.source = "Selected_3.@2x_png";
		t.touchEnabled = true;
		t.width = 183.02;
		t.x = 365.73;
		t.y = 238.48;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.alpha = 0.001;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136.5;
		t.name = "3";
		t.source = "Selected_4.@2x_png";
		t.touchEnabled = true;
		t.width = 185.08;
		t.x = 550.74;
		t.y = 237.5;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.alpha = 0.001;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 171.52;
		t.name = "4";
		t.source = "Selected_1.@2x_png";
		t.touchEnabled = true;
		t.width = 207;
		t.x = 5.77;
		t.y = 169.72;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.alpha = 0.001;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.name = "5";
		t.source = "Selected_2.@2x_png";
		t.touchEnabled = true;
		t.width = 202;
		t.x = 183.07;
		t.y = 211.01;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372.72;
		t.name = "next_btn_gp";
		t.touchThrough = true;
		t.visible = false;
		t.width = 180.3;
		t.x = 1072.59;
		t.y = 316.44;
		t.elementsContent = [this._Button2_i(),this._Button3_i(),this._Button4_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.height = 150;
		t.label = "";
		t.name = "next";
		t.width = 150;
		t.x = 25;
		t.y = 217;
		t.skinName = gameUISkin_v0$Skin2;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "";
		t.name = "same";
		t.width = 100;
		t.x = 75;
		t.y = 100;
		t.skinName = gameUISkin_v0$Skin3;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "";
		t.name = "double";
		t.rotation = 0;
		t.width = 100;
		t.x = 75;
		t.y = -15;
		t.skinName = gameUISkin_v0$Skin4;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.75;
		t.name = "limit";
		t.source = "tips.@2x_png";
		t.width = 328.4;
		t.x = 475;
		t.y = 683.48;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.height = 60;
		t.label = "";
		t.name = "record";
		t.width = 150;
		t.x = 12;
		t.y = 577;
		t.skinName = gameUISkin_v0$Skin5;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "balance";
		t.text = "999999+";
		t.textAlign = "center";
		t.textColor = 0xb7b7b7;
		t.verticalAlign = "middle";
		t.width = 215;
		t.x = 78.8;
		t.y = 657.8;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.name = "mute";
		t.source = "Voice_off.@2x_png";
		t.width = 65;
		t.x = 1125;
		t.y = 17;
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.label = "";
		t.name = "pay_table";
		t.width = 65;
		t.x = 1200;
		t.y = 17;
		t.skinName = gameUISkin_v0$Skin6;
		return t;
	};
	_proto._Button7_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "clear";
		t.width = 150;
		t.x = 166;
		t.y = 577;
		t.skinName = gameUISkin_v0$Skin7;
		return t;
	};
	_proto.record_gp_i = function () {
		var t = new eui.Group();
		this.record_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.visible = false;
		t.width = 1280;
		t.x = 0;
		t.y = 419;
		t.elementsContent = [this._Image61_i(),this._Group98_i(),this._Button8_i()];
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.source = "history_bg.@2x_png";
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group98_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.name = "gp";
		t.width = 1120;
		t.x = 141;
		t.y = 16;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Group42_i(),this._Group47_i(),this._Group52_i(),this._Group57_i(),this._Group62_i(),this._Group67_i(),this._Group72_i(),this._Group77_i(),this._Group82_i(),this._Group87_i(),this._Group92_i(),this._Group97_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 7;
		t.paddingLeft = 0;
		t.paddingRight = 0;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = -1.6;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group38_i(),this._Group39_i(),this._Group40_i(),this._Group41_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image62_i()];
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image63_i(),this._Image64_i()];
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image65_i(),this._Image66_i()];
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image67_i(),this._Image68_i()];
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 8.4;
		t.y = 10;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group43_i(),this._Group44_i(),this._Group45_i(),this._Group46_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image69_i()];
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image70_i(),this._Image71_i()];
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image72_i(),this._Image73_i()];
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image74_i(),this._Image75_i()];
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 18.4;
		t.y = 20;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Group48_i(),this._Group49_i(),this._Group50_i(),this._Group51_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image76_i()];
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image77_i(),this._Image78_i()];
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image79_i(),this._Image80_i()];
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image81_i(),this._Image82_i()];
		return t;
	};
	_proto._Image81_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image82_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group57_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 28.4;
		t.y = 30;
		t.layout = this._VerticalLayout4_i();
		t.elementsContent = [this._Group53_i(),this._Group54_i(),this._Group55_i(),this._Group56_i()];
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image83_i()];
		return t;
	};
	_proto._Image83_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image84_i(),this._Image85_i()];
		return t;
	};
	_proto._Image84_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image85_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group55_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image86_i(),this._Image87_i()];
		return t;
	};
	_proto._Image86_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image87_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group56_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image88_i(),this._Image89_i()];
		return t;
	};
	_proto._Image88_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image89_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group62_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 38.4;
		t.y = 40;
		t.layout = this._VerticalLayout5_i();
		t.elementsContent = [this._Group58_i(),this._Group59_i(),this._Group60_i(),this._Group61_i()];
		return t;
	};
	_proto._VerticalLayout5_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group58_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image90_i()];
		return t;
	};
	_proto._Image90_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group59_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image91_i(),this._Image92_i()];
		return t;
	};
	_proto._Image91_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image92_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group60_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image93_i(),this._Image94_i()];
		return t;
	};
	_proto._Image93_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image94_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group61_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image95_i(),this._Image96_i()];
		return t;
	};
	_proto._Image95_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image96_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group67_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 48.4;
		t.y = 50;
		t.layout = this._VerticalLayout6_i();
		t.elementsContent = [this._Group63_i(),this._Group64_i(),this._Group65_i(),this._Group66_i()];
		return t;
	};
	_proto._VerticalLayout6_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group63_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image97_i()];
		return t;
	};
	_proto._Image97_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group64_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image98_i(),this._Image99_i()];
		return t;
	};
	_proto._Image98_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image99_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group65_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image100_i(),this._Image101_i()];
		return t;
	};
	_proto._Image100_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image101_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group66_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image102_i(),this._Image103_i()];
		return t;
	};
	_proto._Image102_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image103_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group72_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 58.4;
		t.y = 60;
		t.layout = this._VerticalLayout7_i();
		t.elementsContent = [this._Group68_i(),this._Group69_i(),this._Group70_i(),this._Group71_i()];
		return t;
	};
	_proto._VerticalLayout7_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group68_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image104_i()];
		return t;
	};
	_proto._Image104_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group69_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image105_i(),this._Image106_i()];
		return t;
	};
	_proto._Image105_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image106_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group70_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image107_i(),this._Image108_i()];
		return t;
	};
	_proto._Image107_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image108_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group71_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image109_i(),this._Image110_i()];
		return t;
	};
	_proto._Image109_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image110_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group77_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 68.4;
		t.y = 70;
		t.layout = this._VerticalLayout8_i();
		t.elementsContent = [this._Group73_i(),this._Group74_i(),this._Group75_i(),this._Group76_i()];
		return t;
	};
	_proto._VerticalLayout8_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group73_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image111_i()];
		return t;
	};
	_proto._Image111_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group74_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image112_i(),this._Image113_i()];
		return t;
	};
	_proto._Image112_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image113_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group75_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image114_i(),this._Image115_i()];
		return t;
	};
	_proto._Image114_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image115_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group76_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image116_i(),this._Image117_i()];
		return t;
	};
	_proto._Image116_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image117_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group82_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 78.4;
		t.y = 80;
		t.layout = this._VerticalLayout9_i();
		t.elementsContent = [this._Group78_i(),this._Group79_i(),this._Group80_i(),this._Group81_i()];
		return t;
	};
	_proto._VerticalLayout9_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group78_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image118_i()];
		return t;
	};
	_proto._Image118_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group79_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image119_i(),this._Image120_i()];
		return t;
	};
	_proto._Image119_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image120_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group80_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image121_i(),this._Image122_i()];
		return t;
	};
	_proto._Image121_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image122_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group81_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image123_i(),this._Image124_i()];
		return t;
	};
	_proto._Image123_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image124_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group87_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 88.4;
		t.y = 90;
		t.layout = this._VerticalLayout10_i();
		t.elementsContent = [this._Group83_i(),this._Group84_i(),this._Group85_i(),this._Group86_i()];
		return t;
	};
	_proto._VerticalLayout10_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group83_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image125_i()];
		return t;
	};
	_proto._Image125_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group84_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image126_i(),this._Image127_i()];
		return t;
	};
	_proto._Image126_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image127_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group85_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image128_i(),this._Image129_i()];
		return t;
	};
	_proto._Image128_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image129_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group86_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image130_i(),this._Image131_i()];
		return t;
	};
	_proto._Image130_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image131_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group92_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 98.4;
		t.y = 100;
		t.layout = this._VerticalLayout11_i();
		t.elementsContent = [this._Group88_i(),this._Group89_i(),this._Group90_i(),this._Group91_i()];
		return t;
	};
	_proto._VerticalLayout11_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group88_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image132_i()];
		return t;
	};
	_proto._Image132_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group89_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image133_i(),this._Image134_i()];
		return t;
	};
	_proto._Image133_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image134_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group90_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image135_i(),this._Image136_i()];
		return t;
	};
	_proto._Image135_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image136_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group91_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image137_i(),this._Image138_i()];
		return t;
	};
	_proto._Image137_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image138_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group97_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.width = 87;
		t.x = 108.4;
		t.y = 110;
		t.layout = this._VerticalLayout12_i();
		t.elementsContent = [this._Group93_i(),this._Group94_i(),this._Group95_i(),this._Group96_i()];
		return t;
	};
	_proto._VerticalLayout12_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8.5;
		t.paddingLeft = 0;
		return t;
	};
	_proto._Group93_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 67.6;
		t.y = 70;
		t.elementsContent = [this._Image139_i()];
		return t;
	};
	_proto._Image139_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Group94_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 77.6;
		t.y = 80;
		t.elementsContent = [this._Image140_i(),this._Image141_i()];
		return t;
	};
	_proto._Image140_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image141_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group95_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 87.6;
		t.y = 90;
		t.elementsContent = [this._Image142_i(),this._Image143_i()];
		return t;
	};
	_proto._Image142_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image143_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group96_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.4;
		t.width = 87;
		t.x = 97.6;
		t.y = 100;
		t.elementsContent = [this._Image144_i(),this._Image145_i()];
		return t;
	};
	_proto._Image144_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "niuniu_niuniu_png";
		t.width = 60;
		t.x = 16;
		t.y = 13;
		return t;
	};
	_proto._Image145_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "win_icon.@2x_png";
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button8_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.17;
		t.label = "";
		t.width = 159.17;
		t.x = 12.66;
		t.y = -64.84;
		t.skinName = gameUISkin_v0$Skin8;
		return t;
	};
	_proto.pay_table_gp_i = function () {
		var t = new eui.Group();
		this.pay_table_gp = t;
		t.height = 720;
		t.visible = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image146_i(),this._Button9_i(),this.pay_table_s_rect_i()];
		return t;
	};
	_proto._Image146_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 584.67;
		t.source = "rules_bg_png";
		t.width = 883.34;
		t.x = 203.66;
		t.y = 69.33;
		return t;
	};
	_proto._Button9_i = function () {
		var t = new eui.Button();
		t.height = 50;
		t.label = "";
		t.name = "close";
		t.width = 50;
		t.x = 1035;
		t.y = 63.5;
		t.skinName = gameUISkin_v0$Skin9;
		return t;
	};
	_proto.pay_table_s_rect_i = function () {
		var t = new eui.Scroller();
		this.pay_table_s_rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 507.87;
		t.scrollPolicyH = "off";
		t.width = 860.67;
		t.x = 216;
		t.y = 127.79;
		t.viewport = this._Group99_i();
		return t;
	};
	_proto._Group99_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 452;
		t.width = 839.33;
		t.elementsContent = [this._Image147_i()];
		return t;
	};
	_proto._Image147_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3000;
		t.source = "Manual_jpg";
		t.width = 838;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.notice_gp_i = function () {
		var t = new eui.Group();
		this.notice_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.visible = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image148_i(),this._Image149_i(),this.notice_text_i(),this.notice_btn_i()];
		return t;
	};
	_proto._Image148_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.source = "grey_png";
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image149_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 425;
		t.source = "tips_bg_png";
		t.width = 590;
		t.x = 360;
		t.y = 150;
		return t;
	};
	_proto.notice_text_i = function () {
		var t = new eui.Label();
		this.notice_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 510;
		t.x = 400;
		t.y = 240;
		return t;
	};
	_proto.notice_btn_i = function () {
		var t = new eui.Button();
		this.notice_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 230;
		t.x = 540;
		t.y = 471.01;
		t.skinName = gameUISkin_v0$Skin10;
		return t;
	};
	return gameUISkin_v0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.height = 200;
		this.minHeight = 20;
		this.minWidth = 20;
		this.width = 200;
		this.elementsContent = [this.horizontalScrollBar_i(),this._Image1_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.right = 0;
		t.source = "track_sb_png";
		t.width = 30;
		t.y = 0;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.anchorOffsetX = 0;
		t.autoVisibility = false;
		t.percentHeight = 100;
		t.right = 0;
		t.width = 30;
		t.y = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "white_png";
		t.width = 30;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);