import React from 'react';

const HomePage = () => {
  return (
    <div className="p-8">
      <header className="text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Unique Services!</h1>
        <p className="mt-4 text-lg">
          Your solution for innovative and personalized services. We specialize in bringing your ideas to life!
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white shadow-xl p-4 duration-500 rounded-xl transition-all hover:scale-105
          colors hover:bg-red-900 hover:text-white ">
            <h3 className="text-xl font-semibold">Custom Web Development</h3>
            <p> 

              customize web solutions to meet your specific business need ensuring a seamless online experience.
            </p>
          </div>

          <div className="bg-white shadow-xl p-4 duration-500 rounded-xl transition-all hover:scale-105
          colors hover:bg-red-900 hover:text-white ">
            <h3 className="text-xl font-semibold">Creative Design Services</h3>
            <p>
              Unique and engaging designs that captivate your audience and elevate your brand.
            </p>
            
          </div>

          <div className="bg-white shadow-xl p-4 duration-500 rounded-xl transition-all hover:scale-105
          colors hover:bg-red-900 hover:text-white ">
            <h3 className="text-xl font-semibold">Expert SEO Strategies</h3>
            <p>
              Enhance your visibility online with our SEO services that deliver results.
            </p>

          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
        <p className="mt-4 text-center">
          We are committed to providing topnotch services that align with your vision. Our team of experts is here to support you every step of the way.
        </p>
      </section>


    </div>
  );
};

export default HomePage;
