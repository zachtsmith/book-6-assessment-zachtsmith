const applicationState = { bookings: [] }
const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then ( response => response.json())
    .then( 
        (letterAuthors) => {
            applicationState.authors = letterAuthors
        }
    )
}

export const getAuthors = () => {
    return applicationState.authors
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
    .then ( response => response.json())
    .then(
        (letterRecipients) => {
            applicationState.recipients = letterRecipients
        })
}

export const getRecipients = () => {
    return applicationState.recipients
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then ( response => response.topics)
    .then( 
        (letterTopics) => {
            applicationState.topics = letterTopics
        }
    )
}

export const getTopics = () => {
    return applicationState.topics
}
