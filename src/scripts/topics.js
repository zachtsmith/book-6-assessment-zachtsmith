import { getTopics } from "./dataAccess.js";


export const Topics = () => {
    let topics = getTopics()
    let html = "<ul>"
    let topicsChoices = topics.map(topic => {
        return ` <input type="radio" name="topic" value="${topic.id}" /> ${topic.description}`
    }
    )

    html += topicsChoices.join("")

    html += "</ul>"

    return html
}



