
# Notes Management API

A RESTful API built using Node.js, Express.js, and MongoDB to create, view, update, and delete notes.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman

## Features
- Create a new note
- Retrieve all notes
- Retrieve a note by ID
- Update an existing note
- Delete a note

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Check API status |
| POST | /notes | Create a note |
| GET | /notes | Get all notes |
| GET | /notes/:id | Get a note by ID |
| PUT | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

## Setup Instructions

1. Clone this repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add:

   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the server:

   ```bash
   node server.js
   ```

6. Open the API at:

   `http://localhost:3003`

## Example Request Body

Use this JSON when creating or updating a note:

```json
{
  "title": "My First Note",
  "content": "This is my first note."
}
```

## Testing

All API endpoints can be tested using Postman.
