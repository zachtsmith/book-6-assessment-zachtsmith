import { Authors } from "./authors.js"
// import { Letter } from "./letters.js"
 import { Topics } from "./topics.js"
 import { Recipients } from "./recipients.js"

// I need to display Authors, with a choice drop down. 
// Then have a Letter Title, with a Open Field to write text. 
// Next Topics Title, with Topics listed as radio button selections. 
// Then a recipients title, with another dropdown of choices.  
// Then a "send letter" button.
// Then a title of "Letter" that displays the entire letter, (recipient, body, author, date sent, topic)
export const completeLetter = () => {
    return `
        <h1>Pin Pals</h1>
        <section class="authors">
            <h2>Authors</h2>
            ${Authors()}
        </section>
        <section>
            <h2>Topics</h2>
            ${Topics()}
        </section>

        <section class="recipients">
            <h2>Recipients</h2>
            ${Recipients()}
        </section>
    ` 
}

//         <section class="letters">
//             <h2>Letter</h2>
//             ${Letter()}
//         </section>
  