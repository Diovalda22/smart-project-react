import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    id: 2,
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    id: 3,
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    id: 4,
    name: "Samsung Galaxy S21",
    color: "Phantom Gray",
    category: "Smartphone",
    price: "$799",
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    color: "Black",
    category: "Headphones",
    price: "$348",
  },
];

export const ProductTable = () => {
  const [showMenu, setShowMenu] = useState(null); // Menyimpan id produk yang menu-nya ditampilkan

  const toggleMenu = (id) => {
    setShowMenu(showMenu === id ? null : id); // Menampilkan/menyembunyikan menu berdasarkan id
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold mb-5">Data Products</h1>\
        <NavLink to={"/product/add"}>
          <button
            type="button"
            class="text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Tambah Data
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
                <td className="px-6 py-4">{product.color}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4 text-center ">
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
                          <a href="#" className="block py-2 text-gray-700">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 text-gray-700">
                            Delete
                          </a>
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
