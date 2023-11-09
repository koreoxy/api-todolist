# Dokumentasi Simple API Todo List


## Deskripsi
API Todo List ini memungkinkan pengguna untuk membuat, mengambil, memperbarui, dan menghapus daftar tugas (to-do lists) beserta login dan register user.


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


## Jump to
- [/api/todos](#apitodos)
  - [1. GET /todos](#1-get-todos)
  - [2. GET /todos/:id](#2-get-todosid)
  - [3. POST /todos](#3-post-todos)
  - [4. PATCH /todos/:id](#4-patch-todosid)
  - [5. DELETE /todos/:id](#5-delete-todosid)
- [/api/users](#apiusers)
  - [1. GET /users](#1-get-users)
  - [2. GET /users/:id](#2-get-usersid)
  - [3. POST /users](#3-post-users)
  - [4. PATCH /users/:id](#4-patch-usersid)
  - [5. DELETE /users/:id](#5-delete-usersid)
- [/api/auth](#apiauth)
  - [1. POST /auth/register](#1-post-authregister)
  - [2. POST /auth/login](#2-post-authlogin)
  

<br>

## /api/todos

### 1. GET /todos
<details open>
  <summary><b>Mendapatkan Semua list todo : </b></summary>

 
   - Metode : GET
   - Endpoint : /todos
   - Deskripsi : Mendapatkan semua list todo yang tersedia.

**Contoh HTTP Request :**
```
GET https://api-todo-koreoxy.vercel.app/api/todos
```

**Contoh Respons :**
```json
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
</details>
<hr>



### 2. GET /todos/:id
<details open>
	<summary><b>Mendapatkan todo berdasarkan id : </b></summary>

   - Metode : GET
   - Endpoint : /todos/:id
   - Deskripsi : Mendapatkan todo tertentu berdasarkan id.
 
**Contoh HTTP Request :**
```
GET https://api-todo-koreoxy.vercel.app/api/todos/654bb0367a6513e30435aaff
```

**Contoh Respons :**
```json
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
</details>


<hr>



### 3. POST /todos
<details open>
	<summary><b>Menambahkan todo : </b></summary>
	
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

<br>

**Contoh Respons :**
```json
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
</details>

<hr>



### 4. PATCH /todos/:id
<details open>
	<summary><b>Update todo : </b></summary>
	
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
```json
Status: 200 OK ✔️
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```
</details>


<hr>


### 5. DELETE /todos/:id
<details open>
	<summary><b>Delete todo : </b></summary>
	
   - Metode : DELETE
   - Endpoint : /todos/:id
   - Deskripsi : Delete atau menghapus todo.

**Contoh HTTP Request :**
```
DELETE https://api-todo-koreoxy.vercel.app/api/todos/654bab7fc72713fbb9a1a531
```

**Contoh Respons :**
```json
Status: 200 OK ✔️
{
  "acknowledged": true,
  "deletedCount": 1
}
```
</details>


<hr>


<br>
<br>

## /api/users
### 1. GET /users
<details open>
	<summary><b>Mendapatkan semua list User : </b></summary>

   - Metode : GET
   - Endpoint : /users
   - Deskripsi : Mendapatkan semua list user yang tersedia.

**Contoh HTTP Request :**
```
GET https://api-todo-koreoxy.vercel.app/api/users
```

**Contoh Respons :**
```json
Status: 200 OK ✔️
[
    {
        "_id": "654b64e2277400aa4ece38c3",
        "name": "baru1",
        "email": "baru1@gmail.com",
        "password": "$2a$10$SIw9El2CZuG1t.PDdK558epP7MC0R77Rl7cTdP44oQvooDbuSzXEi",
        "createdAt": "2023-11-08T10:37:22.949Z",
        "updatedAt": "2023-11-08T15:13:10.190Z",
        "__v": 0
    },
    {
        "_id": "654bab7fc72713fbb9a1a531",
        "name": "Utaf",
        "email": "Utaf@gmail.com",
        "password": "$2a$10$dnlMDUM.uKRTtADMUxW4/u.An/77ttTDdkvcirvZkvm1JhyO/N7yC",
        "createdAt": "2023-11-08T15:38:39.146Z",
        "updatedAt": "2023-11-08T15:38:39.146Z",
        "__v": 0
    }
]
```

</details>


<hr>


### 2. GET /users/:id
<details open>
	<summary><b>Mendapatkan User berdasarkan id :</b></summary>

   - Metode : GET
   - Endpoint : /users/:id
   - Deskripsi : Mendapatkan user tertentu berdasarkan id.

**Contoh HTTP Request :**
```
GET https://api-todo-koreoxy.vercel.app/api/users/654b64e2277400aa4ece38c3
```

**Contoh Respons :**
```json
Status: 200 OK ✔️
{
  "_id": "654b64e2277400aa4ece38c3",
  "name": "baru1",
  "email": "baru1@gmail.com",
  "password": "$2a$10$SIw9El2CZuG1t.PDdK558epP7MC0R77Rl7cTdP44oQvooDbuSzXEi",
  "createdAt": "2023-11-08T10:37:22.949Z",
  "updatedAt": "2023-11-08T15:13:10.190Z",
  "__v": 0
}

```

</details>


<hr>


### 3. POST /users
<details open>
	<summary><b>Menambahkan User : </b></summary>
	
   - Metode : POST
   - Endpoint : /users
   - Deskripsi : Add atau menambahkan user list baru.

**Contoh HTTP Request :**
```
POST https://api-todo-koreoxy.vercel.app/api/users
Content-Type: application/json
{
  "name" : "User Baru",
  "email": "userbaru@gmail.com",
  "password": "12345"
}
```

**Contoh Respons :**
```json
Status: 201 Created ✔️
{
  "name": "User Baru",
  "email": "userbaru@gmail.com",
  "password": "$2a$10$AQg0IaY.JOKjQYu0lRI.1.jAem9KbQQlpU/ROiNDlhjptkh33AuQe",
  "_id": "654d1a51c73de23671f9961b",
  "createdAt": "2023-11-09T17:43:45.114Z",
  "updatedAt": "2023-11-09T17:43:45.114Z",
  "__v": 0
}
```
</details>

<hr>


### 4. PATCH /users/:id
<details open>
	<summary><b>Update User : </b></summary>
	
   - Metode : PATCH
   - Endpoint : /users/:id
   - Deskripsi : Update atau memperbarui user.

**Contoh HTTP Request :**
```
PATCH https://api-todo-koreoxy.vercel.app/api/users/654d1a51c73de23671f9961b
Content-Type: application/json
{
  "name": "user update",
  "email": "emailupdategmail.com",
  "password": "updatepassword"
}
```
> [!IMPORTANT]
> - Untuk mengupdate data user, harus login terlebih dahulu menggunakan data user yang mau di update.
> - login user melalui endpoint `/api/auth/login` menggunakan method `POST`.
> - data `"name"` `"email"` `"password"` optional, tidak harus mengupdate semua data pada user.

<br>

**Contoh Respons Update user Berhasil :**
```json
Status: 200 OK ✔️
{
  "rest": {
    "_id": "654d1a51c73de23671f9961b",
    "name": "user update",
    "email": "emailupdategmail.com",
    "createdAt": "2023-11-09T17:43:45.114Z",
    "updatedAt": "2023-11-09T17:56:02.653Z",
    "__v": 0
  }
}
```

**Contoh Respons Gagal :**
```json
Status: 401 Unauthorized ❌
{
  "success": false,
  "statusCode": 401,
  "message": "Unauthorized"
}
```
> [!NOTE]
> jika mendapatkan respons seperti contoh diatas, login terlebih dahulu melalui endpoint `/api/auth/login`.

</details>


<hr>


### 5. DELETE /users/:id
<details open>
	<summary><b>Delete User : </b></summary>
	
   - Metode : DELETE
   - Endpoint : /users/:id
   - Deskripsi : Delete atau menghapus user.

**Contoh HTTP Request :**
```
DELETE https://api-todo-koreoxy.vercel.app/api/users/654d1a51c73de23671f9961b
```

**Contoh Respons :**
```json
Status: 200 OK ✔️
{
  "acknowledged": true,
  "deletedCount": 1
}
```
</details>


<br>
<br>

## /api/auth
### 1. POST /auth/register
<details open>
	<summary><b>Register User : </b></summary>
	
   - Metode : POST
   - Endpoint : /auth/register
   - Deskripsi : jika user belum memiliki akun user tersebut dapat melakukan register atau mendaftar.

**Contoh HTTP Request :**
```
POST https://api-todo-koreoxy.vercel.app/api/auth/register
Content-Type: application/json
{
  "name" : "User Daftar",
  "email": "userdaftar@gmail.com",
  "password": "12345"
}
```

**Contoh Respons User berhasil Daftar :**
```json
Status: 201 Created ✔️
{
  "User berhasil di daftarkan!!"
}
```
</details>

<hr>


### 2. POST /auth/login
<details open>
	<summary><b>Login User : </b></summary>
	
   - Metode : POST
   - Endpoint : /auth/login
   - Deskripsi : setelah user berhasil register, user dapat melakukan login.

**Contoh HTTP Request :**
```
POST https://api-todo-koreoxy.vercel.app/api/auth/login
Content-Type: application/json
{
  "email": "userdaftar@gmail.com",
  "password": "12345"
}
```

**Contoh Respons User berhasil Login :**
```json
Status: 200 OK ✔️
{
  "_id": "654d2576108132b25d59a86e",
  "name": "User Daftar",
  "email": "userdaftar@gmail.com",
  "createdAt": "2023-11-09T18:31:18.915Z",
  "updatedAt": "2023-11-09T18:31:18.915Z",
  "__v": 0
}
```

**Contoh Respons User tidak ditemukan :**
```json
Status: 404 Not Found ❌
{
  "success": false,
  "statusCode": 404,
  "message": "User tidak ditemukan!"
}
```

**Contoh Respons Password User salah :**
```json
Status: 401 Unauthorized ❌
{
  "success": false,
  "statusCode": 401,
  "message": "Password Salah!"
}
```
</details>

<hr>
