import GObject from "./GObject.js";
import Transform from "./Transform.js";

const gameCanvas = document.getElementById("game-canvas")
const context = gameCanvas.getContext("2d")

class Circle extends GObject {
    constructor(name, x, y, w, h) {
        super(name, name)

        this.type = "Circle"
        this.transform = new Transform(this, x, y, w, h)

        context.beginPath()
        context.arc(
            this.transform.position.x,
            this.transform.position.y,
            this.transform.size.w,
            0,
            this.transform.size.h * Math.PI
        )
        context.stroke()
    }
}

export default Circle