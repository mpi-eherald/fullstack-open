sequenceDiagram
browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server -->> browser: the HTML
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server -->> browser: the CSS
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server -->> browser: the JS
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server -->> browser: the notes data