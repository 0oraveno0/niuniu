class audio_manager{
	public static instance?: audio_manager;
	public init = false;
	public sound = {};
	public mute_bool = false;
	public static getAudioManager() {
        if (!audio_manager.instance) {
            audio_manager.instance = new audio_manager();
        }
        return audio_manager.instance;
    }

	constructor() {
		
    }
	
	public mute(bool){
		if(this.sound == null){
			return;
		}
		if(bool){
			for (var name in this.sound)
				if(this.sound[name] != null)
					if(this.sound[name]["channel"] != null)
						if(this.sound[name]["loop"]){
							this.sound[name]["channel"].volume = 0;
						}else{
							if(!this.sound[name]["stop"])
								this.sound[name]["channel"].volume = 0;
						}
		}else{
			for (var name in this.sound)
				if(this.sound[name] != null)
					if(this.sound[name]["channel"] != null)
						if(this.sound[name]["loop"] == true){
							this.sound[name]["channel"].volume = 1;
						}
		}
	}

	public play_sound(sound_name:string,loop = false,action = null){
		if(this.init == false){
			return;
		}

		this.sound[sound_name] = {};
		this.sound[sound_name]["sound"] = RES.getRes(sound_name);
		this.sound[sound_name]["loop"] = loop;
		this.sound[sound_name]["stop"] = false;

		if(loop == true){
			this.sound[sound_name]["channel"] = this.sound[sound_name]["sound"].play(0,1);
			if(this.mute_bool == true){
				this.sound[sound_name]["channel"].volume = 0;
			}
			let Timer_p = new egret.Timer(this.sound[sound_name]["sound"].length * 990,1);
			Timer_p.addEventListener(
				egret.TimerEvent.TIMER_COMPLETE,() => {
					if(this.sound[sound_name]["loop"]){
						Timer_p.start();
						this.sound[sound_name]["channel"] = this.sound[sound_name]["sound"].play(0,1);
						if(this.mute_bool == true){
							this.sound[sound_name]["channel"].volume = 0;
						}
					}
				},Timer_p.start()
			);
		}else{
			this.sound[sound_name]["channel"] = this.sound[sound_name]["sound"].play(0,1);
			if(this.mute_bool == true){
				this.sound[sound_name]["channel"].volume = 0;
			}
			if(action != null){
				action();
			}
			this.sound[sound_name]["channel"].addEventListener(egret.Event.SOUND_COMPLETE, function soundComplete(event:egret.Event) {
				this.stop_sound(sound_name);
			}, this);
		}
	}

	public get_length(sound_name){
		if(this.sound[sound_name] != null){
			return this.sound[sound_name]["sound"].length;
		}
	}

	public stop_sound(sound_name:string){
		if(this.sound[sound_name] != null){
			if(this.sound[sound_name]["stop"] == false){
				this.sound[sound_name]["loop"] = false;
				this.sound[sound_name]["stop"] = true;
				this.sound[sound_name]["channel"].stop();
				this.sound[sound_name]["channel"] = null;
				this.sound[sound_name]["sound"] = null;
			}
		}
	}

	public stop_all_sound(){
		if(this.sound == null){
			return;
		}
		for (var name in this.sound){
			this.stop_sound(name);
		}
	}
}

 