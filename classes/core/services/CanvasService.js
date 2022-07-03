import Console from "../GameConsole.js"
import Transform from "../gobjects/Transform.js"
import Rectangle from "../gobjects/Rectangle.js"
import GObject from "../gobjects/GObject.js"

const gameCanvas = document.querySelector("#game-canvas")
const gameHierachy = document.querySelector("#game-objects")

let SelectedObject

const Cursors = [
    "alias",
    "all-scroll",
    "auto",
    "cell",
    "col-resize",
    "copy",
    "crosshair",
    "e-resize"
]

/**
 * Rusts2dEngine cursors library. Contains most CSS cursor values.
*/
const CursorsLib = {
    Alias: "alias",
    AllScroll: "all-scroll",
    Auto: "auto",
    Cell: "cell",
    ColResize: "col-resize",
    Copy: "copy",
    Crosshair: "crosshair",
    EResize: "e-resize"
}

/**
 * CanvasService is a Rusts2dEngine service that allows you to change how the canvas behaves, appears, and works.
*/
const CanvasService = {
    GObjects: [],
    /**
     * Sets the game's background colour to the given hex value. RGB is also supported.
     * @param {*} hex The colour value.
     */
    SetBgColor(hex) {
        gameCanvas.style.backgroundColor = hex
    },
    SetBgImg(src) {
        try {
            gameCanvas.style.backgroundImage = `url(${src})`
        } catch (error) {
            Console.Error(error)
        }
    },
    /**
     * Pulsates the canvas background colour.
     * @param {*} pulseHex The colour that the canvas will change to.
     * @param {*} ms The amount of time in milliseconds before the canvas's background colour will change back to normal.
     */
    Pulse(pulseHex, ms) {
        const prevColour = gameCanvas.style.backgroundColor

        gameCanvas.style.backgroundColor = pulseHex
        setTimeout(() => {
            gameCanvas.style.backgroundColor = prevColour
        }, ms);
    },
    /**
     * Changes the game canvas cursor.
     * @param {*} cursor The cursor.
     */
    SetCursor(cursor) {
        if (typeof cursor != "string") {
            Console.Error("Cursor parameter must be a string")
            return
        }

        cursor = cursor.toLowerCase()
        if (!Cursors.find(c => c == cursor)) {
            Console.Error("Invalid cursor \"" + cursor + "\"")
        }

        gameCanvas.style.cursor = cursor
    },
    RenderHierachy() {
        this.ClearHierachy()

        for (var i = 0; i < this.GObjects.length; i++) {
            const obj = this.GObjects[i]
            const element = document.createElement("li")
            element.innerHTML = `${obj.name} (${obj.type})`
            element.classList.add("hierachy-object")

            gameHierachy.appendChild(element)
        }
    },
    ClearHierachy() {
        const gameHierachyChildren = gameHierachy.children

        for (var i = 0; i < gameHierachyChildren.length; i++) {
            const child = gameHierachyChildren[i]
            child.remove()
        }
    }
}

export default CanvasService
export { CursorsLib }