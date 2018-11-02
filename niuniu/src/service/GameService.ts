class GameService {
    private host;
    //private host = "http://192.168.0.101/";
	private gameInfo = "game/Niuniuinfo";
	private makeBet = "game/NiuniuBet";

    //private static loginname = "fish001";
    private gameUI: GameUI;

    public static instance?: GameService;

    constructor() {
        const protocol = document.location.protocol === 'https:' ? 'https' : 'http';
        //this.host = protocol + "http://192.168.0.120:8000/";
        //this.host = protocol + "://hec-dev-slotback.bigbrothers.info/";
        this.host = protocol + "://bj.mmht88.com/";
    }

    public info(username, token, onComplete, onIOError, onProgress) {
		let paramJson = {
			"HTTP_TOKEN": token,
            "username": username,
        };
		this.httpReq(this.gameInfo, JSON.stringify(paramJson), token, onComplete, onIOError, onProgress, "application/json");
    }

	public MakeBet(username, bets, token, onComplete, onIOError, onProgress){
        let paramJson = {
			"HTTP_TOKEN":token,
            "param":JSON.stringify({"username":username,"bets":bets})
        };
        this.httpReq(this.makeBet, JSON.stringify(paramJson), token, onComplete, onIOError, onProgress, "application/json");
	}

    private httpReq(url, data, token, onComplete, onIOError, onProgress, type) {
        let request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.setRequestHeader("token", token);
        request.setRequestHeader("content-Type", type);
        request.addEventListener(egret.Event.COMPLETE, onComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, onIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, onProgress, this);
        request.open(this.host + url, egret.HttpMethod.POST);
        request.send(data);
    }

	public static getGameService() {
        if (!GameService.instance) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    }
}