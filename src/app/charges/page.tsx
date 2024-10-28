import React from 'react';

const ChargesPage = () => {
  return (
    <div className="p-8 text-center">


        
      <h1 className="text-4xl font-bold">Our Charges</h1>
      <p className="mt-4 text-lg">

        We offer competitive pricing according to your needs. Our package s start at:
      </p>
      <ul className="mt-4 space-y-2">
        <li className="bg-white shadow-xl p-4 duration-500 rounded-xl transition-all hover:scale-95
          colors hover:bg-red-900 hover:text-white ">
          <h2 className="text-xl font-semibold">Basic Package</h2>
          <p>$5000 - Ideal for small projects.</p>
        </li>

        <li className="bg-white shadow-lg p-4 rounded-xl transition-all hover:scale-95
         duration-500 hover:bg-red-800 hover:text-white">
          <h2 className="text-xl font-semibold">Standard Package</h2>
          <p>$10000 - Comprehensive solutions for medium-sized projects.</p>
        </li>

        <li className="bg-white shadow-lg p-4 rounded-xl transition-all hover:scale-95
         duration-500 hover:bg-red-900 hover:text-white">
          <h2 className="text-xl font-semibold">Premium Package</h2>
          <p>$20000 - All-inclusive services for large projects.</p>
        </li>

      </ul>



    </div>
  );
};

export default ChargesPage;
