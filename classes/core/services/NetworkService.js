import Console from "../GameConsole.js"

/**
 * NetworkService is used for making HTTP requests, redirecting, and accessing network information for the user.
 */

const NetworkService = {
    Fetch(url) {
        if (typeof url != "string") {
            Console.Error("NetworkService.Fetch url parameter must be a string.")
            return
        }

        fetch(url)
            .then(res => {
                return res
            })
            .catch(err => {
                Console.Error(err)
                return
            })
    },
    ToJson(res) {
        if (!res.json) {
            Console.Error("NetworkService.ToJson res parameter must be a response body object.")
            return
        }

        res.json()
            .then(json => {
                return json
            })
            .catch(err => {
                Console.Error(err)
                return
            })
    }
}

export default NetworkService