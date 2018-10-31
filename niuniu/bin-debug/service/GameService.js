var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameService = (function () {
    function GameService() {
        //private host = "http://192.168.0.101/";
        this.gameInfo = "game/Niuniuinfo";
        this.makeBet = "game/NiuniuBet";
        var protocol = document.location.protocol === 'https:' ? 'https' : 'http';
        this.host = protocol + "://hec-dev-slotback.bigbrothers.info/";
    }
    GameService.prototype.info = function (username, token, onComplete, onIOError, onProgress) {
        var paramJson = {
            "HTTP_TOKEN": token,
            "username": username,
        };
        this.httpReq(this.gameInfo, JSON.stringify(paramJson), token, onComplete, onIOError, onProgress, "application/json");
    };
    GameService.prototype.MakeBet = function (username, bets, token, onComplete, onIOError, onProgress) {
        var paramJson = {
            "HTTP_TOKEN": token,
            "param": JSON.stringify({ "username": username, "bets": bets })
        };
        this.httpReq(this.makeBet, JSON.stringify(paramJson), token, onComplete, onIOError, onProgress, "application/json");
    };
    GameService.prototype.httpReq = function (url, data, token, onComplete, onIOError, onProgress, type) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.setRequestHeader("token", token);
        request.setRequestHeader("content-Type", type);
        request.addEventListener(egret.Event.COMPLETE, onComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, onIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, onProgress, this);
        request.open(this.host + url, egret.HttpMethod.POST);
        request.send(data);
    };
    GameService.getGameService = function () {
        if (!GameService.instance) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    };
    return GameService;
}());
__reflect(GameService.prototype, "GameService");
//# sourceMappingURL=GameService.js.map