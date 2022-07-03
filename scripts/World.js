import CanvasService, { Elements, CursorsLib } from "../classes/core/services/CanvasService.js"
import Colours from "../classes/core/ColourLib.js"
import { Player } from "./Player.js"
import InputService, { Keys } from "../classes/core/services/InputService.js"
import Console from "../classes/core/GameConsole.js"
import RuntimeService from "../classes/core/services/RuntimeService.js"

const Rect = new Elements.Rectangle("Platform", 0, 256, 1000, 1000)
CanvasService.SetBgColor(Colours.LightBlue)
Rect.SetColor(Colours.Green)
Rect.AddEvent("hover")

let Jumping = false
CanvasService.SetCursor(CursorsLib.Copy)
InputService.OnKeyDown(Keys.D, function (key, end) {
    Player.transform.Move(3.5, 0)
    Console.Print("Moved right")
})

InputService.OnKeyDown(Keys.A, function (key, end) {
    Player.transform.Move(-3.5, 0)
    Console.Print("Moved left")
})

InputService.OnKeyDown(Keys.Space, function (key, end) {
    if (Jumping) return
    Jumping = true
    Player.transform.Move(0, -10)
    RuntimeService.Delay(200, function () {
        Player.transform.Move(0, 10)
        Jumping = false
    })
    Console.Print("Jump")
})

export { Rect }