import GObject from "./GObject.js"
import Transform from "./Transform.js"
import CanvasService from "../services/CanvasService.js"

const gameCanvas = document.getElementById("game-canvas")
const context = gameCanvas.getContext("2d")

/**
 * A rectangle shape.
 */
class Rectangle extends GObject {
    constructor(name, x, y, w, h) {
        super(name, x, y, w, h)

        this.type = "Rectangle"
        this.transform = new Transform(this, x, y, w, h)

        context.fillRect(
            this.transform.position.x,
            this.transform.position.y,
            this.transform.size.w,
            this.transform.size.h
        )
    }

    Test() { }
}

export default Rectangle