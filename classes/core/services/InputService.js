import Console from "../GameConsole.js"
import Keys from "../KeysList.js"

const gameCanvas = document.querySelector("#game-canvas")

/**
 * Service used to get user input from the keyboard.
 */
const InputService = {
    /**
     * Detects when a key is pressed down and runs a down callback function when the key is pressed down, and an up callback when the key is released.
     * @param {*} key The key that will be detected for.
     * @param {*} downCallback The function that will be invoked when the key is pressed down on
     * @param {*} upCallback The function that will be invoked when the key is released (optional)
     * @returns (Inside of the callback functions) The key that was pressed, and a function to end the event.
     */
    OnKeyDown(key, downCallback, upCallback) {
        if (typeof key != "string") {
            Console.Error("OnKeyDown \"key\" must be a string.")
            return
        }
        if (typeof downCallback != "function") {
            Console.Error("OnKeyDown \"callback\" must be a function.")
            return
        }

        if (key.length < 1)
            key = key.toLowerCase()

        document.addEventListener("keydown", (event) => {
            const eventKey = event.key

            const end = () => event.target.removeEventListener()
            if (eventKey == key) downCallback(eventKey, end)
        })

        if (!upCallback) return
        document.addEventListener("keyup", (event) => {
            const eventKey = event.key
            const end = () => event.target.removeEventListener()

            if (eventKey == key) upCallback(eventKey, end)
        })
    },
    OnMouseButtonDown(mouseBtn, downCallback, upCallback) {
        if (typeof mouseBtn != "string") {
            Console.Error("OnMouseButtonDown \"mouseBtn\" must be a string.")
            return
        }
        if (typeof downCallback != "function") {
            Console.Error("OnMouseButtonDown \"downCallback\" must be a function.")
            return
        }

        document.addEventListener("mousedown", (event) => {
            Console.Print(event.key)
        })
    },
    /**
     * Gets any key that was pressed down and returns it.
     */
    GetKeyDown() {
        document.addEventListener("keydown", (event) => {
            return event.key
        })
    }
}

export default InputService
export { Keys }