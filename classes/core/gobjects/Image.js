import GObject from "./GObject.js";
import Console from "../GameConsole.js"
import Transform from "./Transform.js";

const gameCanvas = document.getElementById("game-canvas")
const context = gameCanvas.getContext("2d")

class Rusts2dImage extends GObject {
    constructor(name, img, x, y, w, h) {
        super(name, x, y, w, h)

        this.type = "Image"
        this.transform = new Transform(this, x, y, w, h)

        try {
            const src = document.createElement("img")
            src.src = img
            src.style.width = w
            src.style.height = h

            context.drawImage(src, this.transform.position.x, this.transform.position.y)
        } catch (error) {
            Console.Error(error)
        }
    }
}

export default Rusts2dImage