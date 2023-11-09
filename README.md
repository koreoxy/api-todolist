# Dokumentasi Simple API Todo List

## Deskripsi
API To-Do List ini memungkinkan pengguna untuk membuat, mengambil, memperbarui, dan menghapus daftar tugas (to-do lists) beserta login dan register user.

## Endpoint Utama
Base URL: https://api-todo-koreoxy.vercel.app/api/


## Endpoints
| /api/todos         |      /api/users   |  /api/auth          |
|--------------------|-------------------|---------------------|
| GET /todos         | GET /users        | POST /auth/register |
| GET /todos/:id     | GET /users/:id    | POST /auth/login    |
| POST /todos        | POST /users       |                     |
| PATCH /todos/:id   | PATCH /users/:id  |                     |
| DELETE /todos/:id  | DELETE /users/:id |                     |
    

## /api/todos
### 1. GET /todos
- Mendapatkan Semua list todo
   - Metode : GET
   - Endpoint : /todos
   - Deskripsi : Mendapatkan semua list todo yang tersedia.

**Contoh HTTP Request:**
```
GET https://api-todo-koreoxy.vercel.app/api/todos
```

**Contoh Respons:**
```
Status: 200 OK ✔️
[
    {
        "_id": "654baaefaa3431f77757f228",
        "task": "Belajar react",
        "status": false,
        "userRef": "654b64e2277400aa4ece38c3",
        "createdAt": "2023-11-08T15:36:15.873Z",
        "updatedAt": "2023-11-08T15:36:15.873Z",
        "__v": 0
    },
    {
        "_id": "654bb0367a6513e30435aaff",
        "task": "Belajar cara membuat game",
        "status": false,
        "userRef": "654bab7fc72713fbb9a1a531",
        "createdAt": "2023-11-08T15:58:46.210Z",
        "updatedAt": "2023-11-08T15:58:46.210Z",
        "__v": 0
    }
]
```

### 2. GET /todos/:id
- Mendapatkan todo berdasarkan id
   - Metode : GET
   - Endpoint : /todos/:id
   - Deskripsi : Mendapatkan todo tertentu berdasarkan id.
 
**Contoh HTTP Request:**
```
GET https://api-todo-koreoxy.vercel.app/api/todos/654bb0367a6513e30435aaff
```

**Contoh Respons:**
```
Status: 200 OK ✔️
[
    {
        "_id": "654bb0367a6513e30435aaff",
        "task": "Belajar cara membuat game",
        "status": false,
        "userRef": "654bab7fc72713fbb9a1a531",
        "createdAt": "2023-11-08T15:58:46.210Z",
        "updatedAt": "2023-11-08T15:58:46.210Z",
        "__v": 0
    }
]
```
