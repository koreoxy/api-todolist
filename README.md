# Dokumentasi Simple API Todo List

## Deskripsi
API To-Do List ini memungkinkan pengguna untuk membuat, mengambil, memperbarui, dan menghapus daftar tugas (to-do lists) beserta login dan register user.

## Endpoint Utama
Base URL: https://api-todo-koreoxy.vercel.app/api/


## Endpoints
No      | /api/todos         |      /api/users   |  /api/auth          |
|:-----:|--------------------|-------------------|---------------------|
|1      | GET /todos         | GET /users        | POST /auth/register |
|2      | GET /todos/:id     | GET /users/:id    | POST /auth/login    |
|3      | POST /todos        | POST /users       |                     |
|4      | PATCH /todos/:id   | PATCH /users/:id  |                     |
|5      | DELETE /todos/:id  | DELETE /users/:id |                     |
    

## /api/todos
### 1. GET /todos
- Mendapatkan Semua list todo
   - Metode : GET
   - Endpoint : /todos
   - Deskripsi : Mendapatkan semua list todo yang tersedia.

**Contoh HTTP Request :**
```
GET https://api-todo-koreoxy.vercel.app/api/todos
```

**Contoh Respons :**
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

<hr>



### 2. GET /todos/:id
- Mendapatkan todo berdasarkan id
   - Metode : GET
   - Endpoint : /todos/:id
   - Deskripsi : Mendapatkan todo tertentu berdasarkan id.
 
**Contoh HTTP Request :**
```
GET https://api-todo-koreoxy.vercel.app/api/todos/654bb0367a6513e30435aaff
```

**Contoh Respons :**
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


<hr>



### 3. POST /todos
- Menambahkan todo
   - Metode : POST
   - Endpoint : /todos
   - Deskripsi : Add atau menambahkan todo list baru.

**Contoh HTTP Request :**
```
POST https://api-todo-koreoxy.vercel.app/api/todos
Content-Type: application/json
{
  "task": "Todo Baru",
  "status": false,
  "userRef": "654bab7fc72713fbb9a1a531"
}
```

> [!NOTE]
> data `"userRef"` optional, data tersebut boleh diisi dan boleh tidak.


**Contoh Respons :**
```
Status: 201 Created ✔️
[
   {
	"task": "Todo Baru",
	"status": false,
	"userRef": "654bab7fc72713fbb9a1a531",
	"_id": "654cf9ebb2e620de719bccaa",
	"createdAt": "2023-11-09T15:25:31.262Z",
	"updatedAt": "2023-11-09T15:25:31.262Z",
	"__v": 0
  }
]
```


<hr>



### 4. PATCH /todos/:id
- Update todo
   - Metode : PATCH
   - Endpoint : /todos/:id
   - Deskripsi : Update atau memperbarui todo.

**Contoh HTTP Request :**
```
PATCH https://api-todo-koreoxy.vercel.app/api/todos/654bab7fc72713fbb9a1a531
Content-Type: application/json
{
  "task": "Update Todo Baru",
  "status": false,
}
```

**Contoh Respons :**
```
Status: 200 OK ✔️
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

<hr>


### 5. DELETE /todos/:id
- Delete todo
   - Metode : DELETE
   - Endpoint : /todos/:id
   - Deskripsi : Delete atau menghapus todo.

**Contoh HTTP Request :**
```
DELETE https://api-todo-koreoxy.vercel.app/api/todos/654bab7fc72713fbb9a1a531
```

**Contoh Respons :**
```
Status: 200 OK ✔️
{
  "acknowledged": true,
  "deletedCount": 1
}
```

<hr>
