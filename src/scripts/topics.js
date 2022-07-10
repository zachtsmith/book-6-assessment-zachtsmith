import { getTopics } from "./dataAccess.js";


export const Topics = () => {
    const topics = getTopics()
    let html = "<ul>"
    let topicsChoices = topics.map(topic => {
        return ` <li> <input type="radio" name="topic" value="${topic.id}" /> ${topic.description}</li>`
    }
    )

    html += topicsChoices.join("")

     html += "</ul>"

   return html
}



