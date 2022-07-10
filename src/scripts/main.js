import { fetchAuthors, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { completeLetter } from "./PinPalApp.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
        .then(() => fetchTopics())
        .then(() => fetchRecipients())
        .then(
            () => {
                mainContainer.innerHTML = completeLetter()
            }
        )
}

render()

// mainContainer.addEventListener(
//     "stateChanged",
//     customEvent => {
//         render()
//     }
// )