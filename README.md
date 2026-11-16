# Notes Management API

A RESTful API developed using Node.js, Express.js, and MongoDB to create, retrieve, update, and delete notes. This project demonstrates backend development, REST API operations, database integration, and modular code organization.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman
- Git and GitHub

## Features

- Create a new note
- Retrieve all notes
- Retrieve a specific note by ID
- Update an existing note
- Delete a note
- Store notes in MongoDB Atlas
- Validate data using Mongoose
- Handle errors with appropriate HTTP status codes

## Project Structure

```text
Notes-Management-API/
│
├── controllers/
│   └── noteController.js
│
├── models/
│   └── Note.js
│
├── routes/
│   └── noteRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Check API status |
| POST | /notes | Create a note |
| GET | /notes | Retrieve all notes |
| GET | /notes/:id | Retrieve a note by ID |
| PUT | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/HxzmanExe/Notes-Management-API.git
```

### 2. Open the project folder

```bash
cd Notes-Management-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add your MongoDB Atlas connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

Keep your `.env` file private. Do not upload database credentials to GitHub.

### 5. Start the server

```bash
node server.js
```

The server runs at:

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

All API endpoints can be tested using Postman by sending GET, POST, PUT, and DELETE requests.

## GitHub Repository

[Notes Management API – GitHub](https://github.com/HxzmanExe/Notes-Management-API)

