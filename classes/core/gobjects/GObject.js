import Transform from "./Transform.js"
import Rusts2dEvent, { Events } from "../Event.js"
import Console from "../GameConsole.js"
import CanvasService from "../services/CanvasService.js"
import HierachyService from "../services/HierachyService.js"

const gameCanvas = document.getElementById("game-canvas")
const context = gameCanvas.getContext("2d")

let hierachyObj

/**
 * A GObject (GameObject) is an object that can be interacted with in Rusts2dEngine. They contain a transform, events, and children GObjects.
 */
class GObject {
    constructor(name, x, y, w, h) {
        this.name = name
        this.hidden = false
        this.color = ""
        //this.transform = new Transform(x, y, w, h)

        this.children = new Array()
        this.events = new Array()

        /*
        context.fillRect(
            this.transform.position.x,
            this.transform.position.y,
            this.transform.size.w,
            this.transform.size.h
        )
        */

        hierachyObj = CanvasService.GObjects.push(this)
        //HierachyService.RenderList()
        CanvasService.RenderHierachy()
        Console.Print(CanvasService.GObjects.length)
    }

    GetChild(name) {
        const child = this.children.find(child => child.name == name)
        if (!child) {
            Console.Warn("Couldn't find child \"" + name + "\"")
            return null
        }
        return child
    }

    AddEvent(event) {
        if (!Events.find(e => e == event)) {
            Console.Error("Event \"" + event + "\" does not exist.")
            return
        }

        this.events.push(new Rusts2dEvent(event))
    }

    SetColor(hex) {
        if (typeof hex != "string") {
            Console.Error("SetColor hex property must be a string.")
            return
        }

        this.color = hex
        this.transform.Clear()
        context.fillStyle = hex
        this.transform.Render()
        context.fillStyle = "#000"

        if (this.hidden)
            this.transform.Clear()
    }

    ToggleVisibility() {
        if (!this.hidden) {
            this.hidden = true
            this.transform.Clear()
            return
        }

        this.hidden = false
        this.transform.Render()
    }

    Delete() {
        this.transform.Clear()
        hierachyObj = null
        HierachyService.RenderList()
    }
}

export default GObject