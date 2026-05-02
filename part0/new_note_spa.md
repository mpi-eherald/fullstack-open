```mermaid
sequenceDiagram
browser ->> server: POST new_note_spa
server -->> browser: {"message": "note created"}
```