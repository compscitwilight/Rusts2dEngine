import Console from "../GameConsole.js"

/**
 * RuntimeService is a service that can used to delay a function and store data during runtime (not for a database).
 */
const RuntimeService = {
    /**
     * 
     * @param {*} ms The time to delay the function (milliseconds)
     * @param {*} func The function that will run after the entered milliseconds
     */
    Delay(ms, func) {
        if (typeof ms != "number") {
            Console.Error("Delay ms parameter must be a number")
            return
        }
        if (typeof func != "function") {
            Console.Error("Delay func parameter must be a function")
            return
        }

        setTimeout(func, ms)
    },
    /**
     * Runs a function every (ms)
     * @param {*} ms The amount of time in milliseconds to wait between each invokation of the function
     * @param {*} func The funcrtion that will be ran
     */
    DoEvery(ms, func) {
        if (typeof ms != "number") {
            Console.Error("DoEvery ms parameter must be a number")
            return
        }
        if (typeof func != "function") {
            Console.Error("DoEvery func parameter must be a function")
            return
        }

        const execute = () => {
            func()
            setTimeout(execute, ms)
        }

        setTimeout(execute, ms)
    },
    /**
     * Object that you can store global data in.
     */
    _GLOBAL: {}
}

export default RuntimeService