import Rectangle from "../classes/core/gobjects/Rectangle.js";
import CanvasService from "../classes/core/services/CanvasService.js";
import ColoursLib from "../classes/core/ColourLib.js"
import Rusts2dImage from "../classes/core/gobjects/Image.js";
import InputService, { Keys } from "../classes/core/services/InputService.js";
import RuntimeService from "../classes/core/services/RuntimeService.js"

let Shooting = false
let BulletExists = false

const Player = new Rectangle("Player", 0, 196, 64, 64)

const LispBoss = new Rusts2dImage("Lisp", "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg", 512, 0, 10, 10)

InputService.OnKeyDown(Keys.UpArrow, function (key, end) {
    Player.transform.Move(0, 10)
})

InputService.OnKeyDown(Keys.DownArrow, function (key, end) {
    Player.transform.Move(0, -10)
})

InputService.OnKeyDown(Keys.Space, function (key, end) {
    if (Shooting) return
    Shooting = true

    RuntimeService.Delay(100, function () {
        Shooting = false
    })
})

RuntimeService.DoEvery(1, function () {
    if (BulletExists) return
    if (Shooting) {
        const bullet = new Rectangle("Bullet", 256, Player.transform.position.y, 100, 20)
        bullet.SetColor(ColoursLib.Orange)
        BulletExists = true

        RuntimeService.DoEvery(1, function () {
            bullet.transform.Move(10, 0)
        })

        RuntimeService.Delay(100, function () {
            BulletExists = false
        })
    }
})