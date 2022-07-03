import Console from "./GameConsole.js";
import InputService from "./services/InputService.js";
import CanvasService from "./services/CanvasService.js";
import Colours from "./ColourLib.js"

/**
 * An array of the avaliable and supported events.
 */
const Events = [
    "hover"
]
const gameCanvas = document.querySelector("#game-canvas")

/**
 * A Rusts2dEvent that is set to a GObject.
 */
class Rusts2dEvent {
    constructor(eventName) {
        if (typeof eventName != "string") {
            Console.Error("eventName must be a string.")
            return
        }
        if (!Events.find(event => event == eventName)) {
            Console.Error("Event \"" + eventName + "\" does not exist.")
            return
        }

        switch (eventName) {
            case "hover":
                gameCanvas.addEventListener("mouseenter", (event) => {

                })
                break
        }
    }
}

export default Rusts2dEvent
export { Events }