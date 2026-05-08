# School Management API

A RESTful API built using Node.js, Express.js, and MySQL for managing school data.

## Features

- Add new schools
- Get list of schools sorted by proximity
- Input validation
- MySQL database integration
- Hosted live on Render

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Railway
- Render
- Postman

---

# API Endpoints

## 1. Add School API

### Endpoint

POST /addSchool

### Request Body

```json
{
  "name": "ABC School",
  "address": "Bhopal",
  "latitude": 23.2599,
  "longitude": 77.4126
}
```

### Response

```json
{
  "message": "School added successfully"
}
```

---

## 2. List Schools API

### Endpoint

GET /listSchools

### Query Params

/listSchools?latitude=23.2599&longitude=77.4126

### Response

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Bhopal",
    "latitude": 23.2599,
    "longitude": 77.4126,
    "distance": 0
  }
]
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
DB_HOST=YOUR_HOST
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_DATABASE
DB_PORT=YOUR_PORT
PORT=5000
```

## Run Server

```bash
npm run dev
```

---

# Live API

https://school-management-api-vk01.onrender.com

---

# Tech Implementation Details

- Schools are stored in MySQL database
- Distance calculation is done using latitude and longitude
- Schools are sorted based on nearest distance from user location
- REST APIs are created using Express.js
- Database hosted on Railway
- Backend deployed on Render

---

# Postman Testing

The APIs were tested successfully using Postman.

### Sample Add School Request

POST:
https://school-management-api-vk01.onrender.com/addSchool

### Sample List Schools Request

GET:
https://school-management-api-vk01.onrender.com/listSchools?latitude=23.2599&longitude=77.4126

---

# Author

Kunal Choudhary
