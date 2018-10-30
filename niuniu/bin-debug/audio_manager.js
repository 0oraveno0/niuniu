var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var audio_manager = (function () {
    function audio_manager() {
        this.init = false;
        this.sound = {};
        this.mute_bool = true;
    }
    audio_manager.getAudioManager = function () {
        if (!audio_manager.instance) {
            audio_manager.instance = new audio_manager();
        }
        return audio_manager.instance;
    };
    audio_manager.prototype.mute = function (bool) {
        if (this.sound == null) {
            return;
        }
        if (bool) {
            for (var name in this.sound)
                if (this.sound[name] != null)
                    if (this.sound[name]["channel"] != null)
                        if (this.sound[name]["loop"]) {
                            this.sound[name]["channel"].volume = 0;
                        }
                        else {
                            if (!this.sound[name]["stop"])
                                this.sound[name]["channel"].volume = 0;
                        }
        }
        else {
            for (var name in this.sound)
                if (this.sound[name] != null)
                    if (this.sound[name]["channel"] != null)
                        if (this.sound[name]["loop"] == true) {
                            this.sound[name]["channel"].volume = 1;
                        }
        }
    };
    audio_manager.prototype.play_sound = function (sound_name, loop, action) {
        var _this = this;
        if (loop === void 0) { loop = false; }
        if (action === void 0) { action = null; }
        if (this.init == false) {
            return;
        }
        this.sound[sound_name] = {};
        this.sound[sound_name]["sound"] = RES.getRes(sound_name);
        this.sound[sound_name]["loop"] = loop;
        this.sound[sound_name]["stop"] = false;
        if (loop == true) {
            this.sound[sound_name]["channel"] = this.sound[sound_name]["sound"].play(0, 1);
            if (this.mute_bool == true) {
                this.sound[sound_name]["channel"].volume = 0;
            }
            var Timer_p_1 = new egret.Timer(this.sound[sound_name]["sound"].length * 990, 1);
            Timer_p_1.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                if (_this.sound[sound_name]["loop"]) {
                    Timer_p_1.start();
                    _this.sound[sound_name]["channel"] = _this.sound[sound_name]["sound"].play(0, 1);
                    if (_this.mute_bool == true) {
                        _this.sound[sound_name]["channel"].volume = 0;
                    }
                }
            }, Timer_p_1.start());
        }
        else {
            this.sound[sound_name]["channel"] = this.sound[sound_name]["sound"].play(0, 1);
            if (this.mute_bool == true) {
                this.sound[sound_name]["channel"].volume = 0;
            }
            if (action != null) {
                action();
            }
            this.sound[sound_name]["channel"].addEventListener(egret.Event.SOUND_COMPLETE, function soundComplete(event) {
                this.stop_sound(sound_name);
            }, this);
        }
    };
    audio_manager.prototype.get_length = function (sound_name) {
        if (this.sound[sound_name] != null) {
            return this.sound[sound_name]["sound"].length;
        }
    };
    audio_manager.prototype.stop_sound = function (sound_name) {
        if (this.sound[sound_name] != null) {
            if (this.sound[sound_name]["stop"] == false) {
                this.sound[sound_name]["loop"] = false;
                this.sound[sound_name]["stop"] = true;
                this.sound[sound_name]["channel"].stop();
                this.sound[sound_name]["channel"] = null;
                this.sound[sound_name]["sound"] = null;
            }
        }
    };
    audio_manager.prototype.stop_all_sound = function () {
        if (this.sound == null) {
            return;
        }
        for (var name in this.sound) {
            this.stop_sound(name);
        }
    };
    return audio_manager;
}());
__reflect(audio_manager.prototype, "audio_manager");
//# sourceMappingURL=audio_manager.js.map