import Rectangle from "../classes/core/Rectangle.js"
import InputService, { Keys } from "../classes/core/services/InputService.js"
import SoundService from "../classes/core/services/SoundService.js"
import Console from "../classes/core/GameConsole.js"
import Colours from "../classes/core/ColourLib.js"
import RuntimeService from "../classes/core/services/RuntimeService.js"

import Rusts2dImage from "../classes/core/Image.js"

const KickDrumRect = new Rectangle("Kick", 10, 10, 100, 100)
const SnareDrumRect = new Rectangle("Snare", 115, 10, 100, 100)

InputService.OnKeyDown(Keys.A, function (key, end) {
    SoundService.Play("../assets/sounds/KickDrum.wav")
    KickDrumRect.SetColor(Colours.Red)
    RuntimeService.Delay(100, function () {
        KickDrumRect.SetColor(Colours.Black)
    })

    Console.Print("Kick Drum")
})

InputService.OnKeyDown(Keys.S, function (key, end) {
    SoundService.Play("../assets/sounds/Snare.wav")
    SnareDrumRect.SetColor(Colours.LightBlue)
    RuntimeService.Delay(100, function () {
        SnareDrumRect.SetColor(Colours.Black)
    })

    Console.Print("Snare Drum")
})