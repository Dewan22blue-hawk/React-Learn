// Mengimpor komponen CardProduct dari file yang ditentukan
import CardProduct from "../components/Fragments-organism/CardProduct";

// Mendefinisikan komponen ProductPage yang merupakan halaman produk
const ProductPage = () => {
  return (
    // Menggunakan div sebagai pembungkus utama dengan kelas flex untuk tata letak dan justify-center untuk memusatkan konten secara horizontal
    <div className="flex justify-center py-5">
      {/* Nested Components: CardProduct merupakan komponen induk yang di dalamnya terdapat komponen Header, Body, dan Footer. */}
      {/* // Menggunakan komponen CardProduct untuk menampilkan kartu produk */}
      <CardProduct>
        {/* // Menggunakan CardProduct.Header untuk menampilkan gambar produk */}
        <CardProduct.Header
          // imageUrl berisi URL gambar produk yang akan ditampilkan
          imageUrl={
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        />
        {/* // Menggunakan CardProduct.Body untuk menampilkan judul dan deskripsi
        produk */}
        <CardProduct.Body title="Sepati New Balance">
          {/* Deskripsi produk yang diberikan sebagai children */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat
          eligendi quas ex repellat deserunt id eos nemo eaque? Autem?
        </CardProduct.Body>
        {/* // Menggunakan CardProduct.Footer untuk menampilkan harga produk dan
        tombol Add to cart */}
        <CardProduct.Footer price={1000000} />
      </CardProduct>
    </div>
  );
};

// Mengekspor komponen ProductPage sebagai default export sehingga dapat digunakan di bagian lain aplikasi
export default ProductPage;
