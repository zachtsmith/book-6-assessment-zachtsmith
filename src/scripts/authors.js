import { getAuthors } from "./dataAccess.js";

export const Authors = () => {
   const authors = getAuthors()
   let html = `
        <ul>
            
            <select class="author" id="author">
        <option value="">Choose</option>
            ${authors.map(author => {
                return `<option value="${author.id}">${author.name}</option>`
            }
        ).join("")
            }
            </select>
            
        </ul>
    `

    return html
}

// need to add a choose drop down menu. 