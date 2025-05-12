# 📘 School Management API

A Node.js and MySQL-based REST API to manage school data. Users can add new schools and retrieve a list of schools sorted by proximity to their location.

---

## 🚀 Features

- Add new schools with name, address, latitude, and longitude
- Retrieve schools sorted by distance from user’s location
- Input validation and distance calculation using the Haversine formula
- Hosted on Railway for public access
- Postman collection available for testing

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- Railway (Deployment)
- Postman (API testing)

---

## 📡 API Endpoints

### ➕ Add School
- **Endpoint**: `/api/addSchool`
- **Method**: `POST`
- **Payload**:
```json
{
  "name": "Green Valley School",
  "address": "123 Main St",
  "latitude": 12.9716,
  "longitude": 77.5946
}
````

* **Response**: `School added successfully`

### 📍 List Schools

* **Endpoint**: `/api/listSchools`
* **Method**: `GET`
* **Query Params**: `latitude`, `longitude`
* **Example**:

```
/api/listSchools?latitude=12.9716&longitude=77.5946
```

* **Response**: List of schools sorted by proximity

---

## 🌐 Live Demo

API is hosted at:
`https://school-management-api-production-6277.up.railway.app/`

---

## 📫 Postman Collection

👉https://web.postman.co/workspace/7fb90ddc-319d-47b5-8618-eea6921cea04
---

## 📁 Setup Instructions

```bash
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api
npm install
node index.js
```

Make sure to create a MySQL database with a `schools` table:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
```

---

## ✅ Deliverables

* ✅ Source code on GitHub
* ✅ Live API endpoints
* ✅ Postman Collection for testing

---

