// Mengimpor komponen Button dari file "../Elements-atom/Button"
import Button from "../Elements-atom/Button";

// Definisi komponen CardProduct yang menerima props
const CardProduct = (props) => {
  // Destrukturisasi props untuk mengambil children
  // children digunakan untuk menampilkan elemen atau komponen lain yang berada di dalam CardProduct saat digunakan.

  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
      {/* // Menampilkan children di dalam div dengan styling */}
    </div>
  );
};

// Definisi komponen Body yang menerima children dan title sebagai props
const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5">
      <a href="#">
        {" "}
        {/* // Membuat link untuk seluruh isi body */}
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
          {/* Menampilkan title sebagai judul */}
        </h5>
        <p className="text-s text-white">{children}</p>
        {/* Menampilkan children sebagai deskripsi */}
      </a>
    </div>
  );
};

// Menambahkan Subkomponen ke CardProduct:
// Header, Body, dan Footer ditambahkan sebagai properti dari CardProduct.
// Ini memungkinkan penggunaan CardProduct.Header, CardProduct.Body, dan CardProduct.Footer di tempat lain.
// Definisi komponen Header yang menerima imageUrl sebagai props
const Header = ({ imageUrl }) => {
  return (
    <a href="">
      <img src={imageUrl} alt="products" className="rounded-t-lg p-8" />
      {/* Menampilkan gambar produk dengan styling */}
    </a>
  );
};

// Definisi komponen Footer yang menerima price sebagai props
const Footer = ({ price }) => {
  return (
    <div className="flex items-center pb-5 justify-between px-5">
      <span className="text-s font-bold text-white">Rp. {price}</span>
      {/* Menampilkan harga produk */}
      <Button classes="bg-blue-600 text-white">Add to cart</Button>
      {/* Menampilkan tombol "Add to cart" */}
    </div>
  );
};

// Menambahkan nested component komponen Header, Body, dan Footer sebagai properti dari CardProduct
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

// Mengekspor CardProduct sebagai default export
export default CardProduct;
