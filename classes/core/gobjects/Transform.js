import Console from "../GameConsole.js"

const gameCanvas = document.getElementById("game-canvas")
const context = gameCanvas.getContext("2d")

let object

class Transform {
    constructor(obj, x, y, w, h) {
        this.position = {}
        this.size = {}

        object = obj

        this.position.x = x || 0
        this.position.y = y || 0
        this.size.w = w || 0
        this.size.h = h || 0
        this.size.area = this.w * this.h
    }

    SetPosition(x, y) {
        if (typeof x != "number" || typeof y != "number") {
            Console.Error("Transform.SetPosition parameters must be numbers")
            return
        }
        this.Clear()

        this.position.x = x
        this.position.y = y

        this.Render()
    }

    GetFullTransform() {
        return this.position.x, this.position.y, this.size.w, this.size.h
    }

    Clear() {
        context.clearRect(this.position.x, this.position.y, this.size.w, this.size.h)
    }

    Render() {
        if (!object.color) return
        context.fillStyle = object.color
        context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h)
        context.fillStyle = "#000"
    }

    Move(x, y) {
        if (typeof x != "number" || typeof y != "number") {
            Console.Error("Transform.Move parameters must be numbers.")
            return
        }
        if (this.position.x + x > gameCanvas.width) return
        if (this.position.y + y > gameCanvas.height) return
        this.Clear()

        this.position.x += x
        this.position.y -= y

        this.Render()
    }

    Resize(w, h) {
        if (typeof w != "number" || typeof h != "number") {
            Console.Error("Transform.Resize parameters must be numbers.")
            return
        }

        this.Clear()

        this.size.w = w
        this.size.h = h

        this.Render()
    }
}

export default Transform