export class Player {
    sourceX = 0;
    sourceY = 0;
    frameWidth = 345;
    frameHeight = 150;
    destinationX = 0;
    destinationY = 100;

    fps = 1000 / 12;
    framesLength = 7;
    FrameIndex = 0;
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */

    constructor(ctx) {
        this.image = new Image();
        this.image.src = "./asset/img/player.png";
        this.ctx = ctx;
    }
    draw() {
        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidth,
            this.frameHeight,
            this.destinationX,
            this.destinationY,
            this.frameWidth,
            this.frameHeight
        );
    }

    /**
     *
     * @param {number} timeStamp
     */
    update(timeStamp) {
        const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength;
        this.sourceX = frameIndex * this.frameWidth;
    }
}
