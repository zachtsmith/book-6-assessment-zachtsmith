import { getAuthors } from "./dataAccess.js";

export const Authors = () => {
   const authors = getAuthors()
   let html = `
        <ul>
            ${authors.map(author => {
                return `<option value="${author.id}">${author.name}</option>`
            }
        ).join("")
            }
    
        </ul>
    `

    return html
}

// need to add a choose drop down menu. 