import Console from "../GameConsole.js"
import CanvasService from "./CanvasService.js"

const gameHierachy = document.querySelector("#game-objects")

let SelectedObject

const HierachyService = {
    RenderList() {
        this.ClearList()
        const GObjects = CanvasService.GObjects

        for (var i = 0; i < GObjects.length; i++) {
            const obj = GObjects[i]
            Console.Print(obj.name)
            const element = document.createElement("li")
            element.innerHTML = `${obj.name} (${obj.type})`
            element.classList.add("hierachy-object")
            element.title = obj.name

            Console.Print(obj.name)
            gameHierachy.appendChild(element)

            gameHierachy.addEventListener("mousedown", (event) => {
                Console.Print("hi")
            })
        }
    },
    ClearList() {
        const hierachyChildren = gameHierachy.children

        for (var i = 0; i < hierachyChildren.length; i++) {
            const child = hierachyChildren[i]
            child.remove()
        }
    }
}

export default HierachyService
export { SelectedObject }