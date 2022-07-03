import Console from "../GameConsole.js"

/**
 * SoundService allows you to play audio files.
 */
const SoundService = {
    Play(src) {
        try {
            const audio = new Audio(src)
            audio.play()
        } catch (e) {
            Console.Error(e)
        }
    }
}

export default SoundService