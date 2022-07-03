import Time from "./Time.js"

const gameLogs = document.querySelector("#game-logs")

const CreateLogElement = (msg, type) => {
    /*
    if (typeof msg == "object") {
        let temp = new String()
        msg.forEach(node => temp += node)
        msg = temp
    }
    */
    //if (typeof msg != "string" || typeof type != "string") Console.Error("Invald type")
    type = type.toLowerCase()

    const element = document.createElement("li")
    element.innerHTML = `${Time.GetFormattedLocalTime()} : ${msg}`
    element.title = msg
    element.setAttribute("message", msg)
    element.setAttribute("type", type)

    element.classList.add(type)

    gameLogs.appendChild(element)
}

/**
 * GameConsole is an object that lets you write, error, warn, and assert to the output.
 */
const Console = {
    /**
     * Prints a message to the output.
     * @param {*} msg The message
     */
    Print(msg) {
        CreateLogElement(msg, "log")
    },
    /**
     * Prints a message in yellow text to the output.
     * @param {*} msg The message
     */
    Warn(msg) {
        CreateLogElement(msg, "warning")
    },
    /**
     * Prints a message in red text to the output, which also halts the runtime.
     * @param {*} msg 
     */
    Error(msg) {
        CreateLogElement(msg, "error")
        alert("There was an error during runtime! : " + msg)
    },
    /**
     * Checks if a condition is false, and if it is then will error the message to the output.
     * @param {*} condition The condition (1 == 1 = true)
     * @param {*} msg The message that will be erorred if the condition is false.
     */
    Assert(condition, msg) {
        if (typeof condition != "boolean") {
            this.Error("Assert condition parameter must be a boolean.")
            return
        }
        if (!condition) this.Error(msg)
    },
    /**
     * Prints a message in blue text to the output.
     * @param {*} msg The message
     */
    SystemMsg(msg) {
        CreateLogElement(msg, "sysmsg")
    }
}

export default Console