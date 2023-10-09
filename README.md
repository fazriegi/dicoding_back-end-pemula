# Repository IDCamp 2023 Back End Developer - dicoding
### Kelas: Belajar Membuat Aplikasi Back-End untuk Pemula

Pada repository ini terdapat beberapa direktori hasil latihan sesuai arahan materi dan terdapat
direktori tugas akhir, direktori tersebut adalah `bookshelf-api`.

## Bookshelf API
### Submission Akhir Kelas Backend Pemula - dicoding x idCamp 2023

Perlu diingat, data pada API ini hanya bersifat sementara, karna tidak disimpan ke dalam database, hanya pada
memori saat program berjalan.

Proyek API ini menggunakan salah satu Framework Node.js, yaitu Hapi Framework.

#### Fitur
* API dapat menyimpan buku
* API dapat menampilkan seluruh buku
* API dapat menampilkan detail buku
* API dapat mengubah data buku
* API dapat menghapus buku
* API dapat mencari buku sesuai dengan:
  - nama buku
  - buku yang sedang dibaca
  - buku yang sudah selesai dibaca

API ini dapat dijalankan dengan perintah `npm start`. Tersedia juga postman collection yang dapat 
digunakan sebagai dokumentasi dan melakukan testing. Untuk menjalankan test, anda bisa melakukan 
import collection dan environment ke postman GUI dan menjalankan collection tersebut. Selain itu, 
anda juga dapat memanfaatkan tools newman untuk menjalankannya menggunakan CLI, dengan perintah:
```
newman run "test/Bookshelf API Test.postman_collection.json" --environment "test/Bookshelf API Test.postman_environment.json"
``` 
