import { getRecipients } from "./dataAccess.js";

export const Recipients = () => {
   const recipients = getRecipients()
   let html = `
        <ul>
            
            <select class="recipient" id="recipient">
        <option value="">Choose</option>
            ${recipients.map(recipient => {
                return `<option value="${recipient.id}">${recipient.name}</option>`
            }
        ).join("")
            }
            </select>
            
        </ul>
    `

    return html
}