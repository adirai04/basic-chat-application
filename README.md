# Mongo_with_express

A simple chat application built with Express.js, MongoDB (via Mongoose), and EJS templating. This project demonstrates basic CRUD operations for a "Mini WhatsApp" clone.

## Folder Structure

- `index.js` - Main Express server file. Handles routes for creating, reading, updating, and deleting chat messages.
- `init.js` - Script to initialize the database with sample chat data.
- `package.json` - Project dependencies and metadata.
- `models/chat.js` - Mongoose schema and model definition for chat messages.
- `public/style.css` - Stylesheet for the frontend.
- `views/` - EJS templates for rendering chat pages:
  - `index.ejs` - Lists all chats.
  - `new.ejs` - Form to create a new chat.
  - `edit.ejs` - Form to edit an existing chat.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Initialize the database with sample data (optional):**
   ```sh
   node init.js
   ```

3. **Start the server:**
   ```sh
   node index.js
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:8080/chats
   ```

## Features

- View all chat messages
- Create a new chat
- Edit existing chat messages
- Delete chats

## Dependencies

- express
- mongoose
- ejs
- method-override

##