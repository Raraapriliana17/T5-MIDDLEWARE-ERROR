# Tugas 5 — Middleware & Error Handling Terpusat (Varian B: Kantin / `/menu`)

Proyek REST API pengelolaan menu kantin berbasis Node.js/Express dengan pemisahan lapisan (`routes`, `controllers`, `services`, `data`), *middleware* pencatat log, validasi, autentikasi API key, serta penanganan *error* terpusat.

## Menjalankan Aplikasi
1. Masuk ke folder proyek dan pasang dependensi:
   ```bash
   npm install
   ```
2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
3. Server akan berjalan di `http://localhost:3000`.

## Ringkasan Skenario & Endpoint Pengujian
* `GET /menu` — Mengambil daftar seluruh menu (`200 OK`).
* `GET /menu/:id` — Mengambil detail menu berdasarkan ID (`200 OK` jika ada, `404 Not Found` jika tidak ditemukan).
* `POST /menu` — Menambahkan menu baru dengan validasi data dan *header* `x-api-key` (`201 Created` jika berhasil; `401 Unauthorized` jika API key tidak valid/kosong; `422 Unprocessable Entity` / validasi gagal jika input tidak sesuai; `409 Conflict` jika nama menu sudah ada; `500 Internal Server Error` jika terjadi kesalahan tak terduga di server).
* `DELETE /menu/:id` — Menghapus menu berdasarkan ID (`204 No Content` jika berhasil, `404 Not Found` jika ID tidak ditemukan).

## Bukti Tangkapan Layar (`screenshot/`)
* `01-logger-terminal.png`: Menampilkan log *request* dan status respons pada terminal sisi server.
* `02-requests-http.png`: Menampilkan skenario pengujian HTTP pada berkas `requests.http`.
* `03a-hasil-client.png`: Menampilkan hasil pengujian sisi klien untuk skenario sukses dan *error* standar.
* `03b-hasil-client.png`: Menampilkan lanjutan hasil pengujian sisi klien untuk skenario penambahan, duplikasi, penghapusan, dan *error* standar.
* `04-error-500-klien.png`: Menampilkan respons `HTTP/1.1 500 Internal Server Error` dengan pesan error terpusat di sisi klien saat memicu *error* runtime pada penambahan menu.
* `05-error-500-terminal.png`: Menampilkan *stack trace* `TypeError` di `src/data/menu.js` dan log status `500` pada terminal server sebelum kode dikembalikan ke kondisi normal.

## Deklarasi Penggunaan AI
AI digunakan sebagai asisten belajar untuk membantu menyusun langkah pengujian, memeriksa kesesuaian *output* HTTP dan log terminal, serta merapikan struktur dokumentasi `README.md`. Seluruh pengujian dan verifikasi akhir kode dilakukan langsung pada lingkungan pengembangan lokal.

## Kesimpulan & Kendala
* **Kesimpulan:** Pemisahan lapisan aplikasi serta penggunaan *middleware* dan *error handler* terpusat membuat alur validasi, autentikasi, pencatatan log, dan format respons *error* lebih konsisten tanpa membocorkan detail *stack trace* internal ke klien.
* **Kendala:** Sempat memerlukan penyesuaian dalam menemukan baris penambahan data array (`menus.push(baru)`) di `src/data/menu.js` saat memicu Error 500, dan setelah pengujian selesai kode segera dikembalikan ke bentuk normal.