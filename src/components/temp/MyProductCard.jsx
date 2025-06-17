// import React from 'react';


// const MyProductCard = ({ product }) => {
//   return (
//     <div className="w-[270px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col mb-3">
//       {/* Image Wrapper */}
//       <div className="w-full h-[150px] overflow-hidden bg-gray-100 flex items-center justify-center">
//         <img
//           src={`http://localhost:8080/api/product/${product.id}/image`}
//           alt={product.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Card Body */}
//       <div className="flex flex-col justify-between flex-grow p-3">
//         <div>
//           <h5 className="text-lg font-semibold mb-1">
//             {product.name.toUpperCase()}
//           </h5>
//           <p className="italic text-sm text-gray-600">by {product.brand}</p>
//         </div>

//         <div className="mt-2">
//           <h5 className="font-semibold text-green-700 text-base mb-2">
//             ₹{product.price}
//           </h5>
//           <button className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProductCard;

import React from 'react';

const MyProductCard = ({ product }) => {
  return (
    <div className="w-[270px] rounded-xl border-4 bg-sky-400">
      {/* 🔲 Full Card: bg-yellow-200 */}

      {/* 🔲 Image Wrapper */}
      <div className="w-full h-[200px] overflow-hidden bg-pink-300 flex items-center justify-center">
        <img
          src={`http://localhost:8080/api/product/${product.id}/image`}
          alt={product.name}
          className="w-full h-full border-4 border-pink-600"
        />
      </div>

      {/* 🔲 Card Body */}
      <div className="flex flex-col justify-between p-2 flex-grow bg-green-200">
        {/* 🔲 Text Section */}
        <div className="bg-blue-200 p-2 rounded">
          <h5 className="text-lg font-semibold">{product.name.toUpperCase()}</h5>
          <p className="italic text-sm text-gray-600">by {product.brand}</p>
        </div>

        {/* 🔲 Price & Button */}
        <div className="mt-2 bg-purple-200 p-2 rounded">
          <h5 className="text-green-700 font-bold">${product.price}</h5>
          <button className="bg-blue-600 text-white rounded px-4 py-1 mt-1 hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
