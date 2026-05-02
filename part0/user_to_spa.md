```mermaid
sequenceDiagram
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server -->> browser: the HTML
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server -->> browser: the CSS
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server -->> browser: the JS
browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server -->> browser: the notes data
```