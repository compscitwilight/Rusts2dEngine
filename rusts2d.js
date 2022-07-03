/**
 * Core script behind the Rusts2dEngine main functionality. 
 */

import Console from "./classes/core/GameConsole.js"
import InputService, { Keys } from "./classes/core/services/InputService.js"
import RuntimeService from "./classes/core/services/RuntimeService.js"

const settingsElements = document.querySelectorAll(".rusts2dsetting")
const devObjects = document.querySelectorAll(".dev-obj")
const gameCanvas = document.querySelector("#game-canvas")
const gameOutput = document.querySelector("#game-output")
const devTopbar = document.querySelector("#development-topbar")

let production = false

console.log = () => Console.Print("Please use Console.Print instead of console.log.")
// console.warn and console.error will not be overwritten because they are used by internal javascript functions
// overwriting them will make debugging extremely difficult

document.addEventListener("keydown", (event) => {
    if (event.target != document.body) return
    if (event.key == Keys.Space || event.key == Keys.UpArrow || event.key == Keys.DownArrow)
        event.preventDefault()
})

const ParseSettings = () => {
    settingsElements.forEach(setting => {
        const name = setting.getAttribute("name").toLowerCase()
        const value = setting.getAttribute("value")

        switch (name) {
            case "name":
                document.title = value
                gameCanvas.title = value
                break
            case "production":
                if (value == "false") return
                devObjects.forEach(obj => {
                    obj.style.display = "none"
                })

                production = true
                break
            case "csize":
                if (production) return
                const split = value.split("x")
                const width = Number(split[0])
                const height = Number(split[1])

                gameCanvas.width = width
                gameCanvas.height = height
                break
        }
    })
}

ParseSettings()

gameCanvas.addEventListener("contextmenu", (event) => {
    event.preventDefault()
})

Console.SystemMsg("Successfully loaded enviornment")
