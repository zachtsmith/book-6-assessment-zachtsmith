import { fetchAuthors, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { Letters } from "./PinPalApp.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
        .then(() => fetchTopics())
        .then(() => fetchRecipients())
        .then(
            () => {
                mainContainer.innerHTML = Letters()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)