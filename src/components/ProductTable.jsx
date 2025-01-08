import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Apple MacBook Pro 17"',
    stock: 10,
    category: "Laptop",
    price: "$2999",
    description:
      'The Apple MacBook Pro 17" offers exceptional performance with a large Retina display, making it ideal for professionals who need power and portability.',
  },
  {
    id: 2,
    name: "Microsoft Surface Pro",
    stock: 5,
    category: "Laptop PC",
    price: "$1999",
    description:
      "The Microsoft Surface Pro is a versatile 2-in-1 laptop that combines a high-performance tablet with a detachable keyboard, perfect for work and play.",
  },
  {
    id: 3,
    name: "Magic Mouse 2",
    stock: 20,
    category: "Accessories",
    price: "$99",
    description:
      "The Magic Mouse 2 features a sleek design with multi-touch surface controls, offering a seamless experience for Apple users.",
  },
  {
    id: 4,
    name: "Samsung Galaxy S21",
    stock: 23,
    category: "Smartphone",
    price: "$799",
    description:
      "The Samsung Galaxy S21 delivers flagship features, including a high-quality camera, powerful performance, and a vibrant display in a sleek design.",
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    stock: 15,
    category: "Headphones",
    price: "$348",
    description:
      "The Sony WH-1000XM4 provides industry-leading noise cancellation, exceptional sound quality, and a comfortable fit for all-day wear.",
  },
];

export const ProductTable = () => {
  const [showMenu, setShowMenu] = useState(null); // Menyimpan id produk yang menu-nya ditampilkan
  const navigate = useNavigate();

  const toggleMenu = (id) => {
    setShowMenu(showMenu === id ? null : id); // Menampilkan/menyembunyikan menu berdasarkan id
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold mb-5">Data Products</h1>
        <NavLink to={"/admin/product/add"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Add New Product
          </button>
        </NavLink>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-slate-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleMenu(product.id)}
                    className="font-medium text-black dark:text-blue-500 hover:underline"
                  >
                    <FaEllipsisH size={20} />
                  </button>
                  {showMenu === product.id && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-40">
                      <ul className="py-2">
                        <li>
                          <button
                            onClick={() => navigate("/admin/product/edit")}
                            className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
                          >
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              console.log(`Delete product ${product.id}`)
                            }
                            className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
