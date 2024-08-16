import { StrictMode } from "react";
// Mengimpor komponen StrictMode dari React untuk membantu mendeteksi potensi masalah di aplikasi.

import { createRoot } from "react-dom/client";
// Mengimpor fungsi createRoot dari react-dom untuk merender aplikasi React ke dalam DOM.

import "./index.css";
// Mengimpor file CSS untuk menerapkan gaya pada aplikasi.

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Mengimpor fungsi createBrowserRouter dan komponen RouterProvider dari react-router-dom
// untuk mengatur routing dalam aplikasi.

import LoginPage from "./Pages/login.jsx";
// Mengimpor komponen LoginPage dari file login.jsx.

import RegisterPage from "./Pages/register.jsx";
// Mengimpor komponen RegisterPage dari file register.jsx.

import ErrorPage from "./Pages/404.jsx";
import ProductPage from "./Pages/products.jsx";
// Mengimpor komponen ErrorPage dari file 404.jsx yang akan ditampilkan saat terjadi error (misalnya, halaman tidak ditemukan).

// Membuat objek router menggunakan createBrowserRouter.
// Router ini mengatur rute (path) dan elemen yang ditampilkan berdasarkan path.
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>haloo cak</div>,
    // Rute "/" akan menampilkan elemen div dengan teks "haloo cak".
    errorElement: <ErrorPage />,
    // Jika terjadi error saat mengakses rute ini, ErrorPage akan ditampilkan.
  },
  {
    path: "/login",
    element: <LoginPage />,
    // Rute "/login" akan menampilkan komponen LoginPage.
  },
  {
    path: "/register",
    element: <RegisterPage />,
    // Rute "/register" akan menampilkan komponen RegisterPage.
  },
  {
    path: "/products",
    element: <ProductPage />,
    // Rute "/register" akan menampilkan komponen RegisterPage.
  },
]);

// Merender aplikasi React ke dalam elemen dengan id "root" di DOM.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Membungkus aplikasi dalam StrictMode untuk mendeteksi potensi masalah. */}
    {/* RouterProvider digunakan untuk menyediakan router yang telah dikonfigurasi di atas ke seluruh aplikasi. */}
    <RouterProvider router={router} />
  </StrictMode>
);
