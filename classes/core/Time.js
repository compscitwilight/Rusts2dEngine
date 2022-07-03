const Time = {
    GetFormattedLocalTime() {
        const date = new Date()
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    Epoch() {
        return Date.now()
    }
}

export default Time