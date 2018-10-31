 class LoadingUI extends egret.Sprite {
	private loadingBG: egret.Bitmap;
    private loadingBar: egret.Bitmap;
    private textField: egret.TextField;
    private loadingIcon: egret.Bitmap;

	public constructor() {
        super();
        this.createView();
	}

    private createView(): void {
       this.loadingBG = new egret.Bitmap();
        this.loadingBG.texture = RES.getRes('loading_bg.@2x_png');
        this.loadingBG.width = 1280;
        this.loadingBG.height = 720;
        this.addChild(this.loadingBG);

        /*this.loadingIcon = new egret.Bitmap();
        this.loadingIcon.texture = RES.getRes('loading_bar_zero');
        this.loadingIcon.width = 450;
        this.loadingIcon.y = 1065;
        this.loadingIcon.x = 110;
        this.addChild(this.loadingIcon);*/

        this.loadingBar = new egret.Bitmap();
        this.loadingBar.texture = RES.getRes('yellow_png');
        this.loadingBar.y = 570;
        this.loadingBar.x = 0;
        this.loadingBar.width = 1075;
        this.loadingBar.height = 10;
        this.addChild(this.loadingBar);

        this.textField = new egret.TextField();
        this.textField.width = 300;
        this.textField.y = 640;
        this.textField.x = 1080;
        this.textField.size = 20;
        this.textField.$setTextColor(0xf0bb5e);
        this.textField.textAlign = "center";
        this.addChild(this.textField);
    }
    
	public setProgress(current: number, total: number): void {
        this.loadingBar.width = current / total * 1280;
        this.textField.text =`(${(current / total * 100).toFixed(1)}%)`;
    }
}