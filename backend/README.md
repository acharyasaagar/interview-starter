- Implement **two endpoints**

  - `POST notes`

    - Request body:
      ```json
      { "title": "string (required, 3–50 chars)", "body": "string (optional)" }
      ```
    - Response:
      ```json
      {
        "id": "generated",
        "title": "...",
        "body": "...",
        "createdAt": "ISO date"
      }
      ```
    - Rules:
      - Title is required, length between 3–50.
      - On validation error → return **400** with `{ "error": "message" }`.

  - `GET notes?q=...`
    - Returns **all notes** if no `q` provided.
    - If `q` is present, return only notes where `title` contains the query (case-insensitive).
