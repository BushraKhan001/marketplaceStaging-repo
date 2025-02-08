import Image from 'next/image';

 function AboutUs() {
  return (
    <>



    <main className="bg-white text-gray-800 pt-44">
       
      {/* About Us Section */}
      <section className="flex justify-center flex-col md:flex-row items-stretch gap-4 p-6 md:p-10 w-full ml-40">
        
        {/* Text Section */}

        <div className="w-1/3 h-96 bg-teal-700 text-white p-6 flex flex-col justify-center shadow-md">
  <h2 className="text-xl md:text-2xl font-bold mb-4 pt-16 pl-5">
    About Us - Comforty
  </h2>
  <p className="text-sm pl-5 mb-4 leading-snug">
    At Comforty, we believe the right chair can transform your space and elevate comfort. Our ergonomic designs blend style with functionality.
  </p>
  <div className='pt-28'>
  <button className="bg-[#F9F9F926] text-[#FFFFFF] px-3 py-2 rounded-md hover:bg-teal-600 transition">
    View Collection
  </button>
  </div>

</div>


        
        
        {/* //Image */}
        <div className="flex-1 relative rounded-md overflow-hidden h-96">
          <Image
          src="/Image (4).png" 
          alt="Comforty Chair"
         width={450}
          height={300}
           className='object-cover' 
          
          />
         </div>
      </section>



      {/* Brand Features */}
      <section className="text-center my-12 px-4">
        <h3 className="text-[#272343] text-2xl md:text-3xl font-semibold mb-8">
          What Makes Our Brand Different
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-[#007580]">
          {/* Feature Cards */}
          <div className="bg-gray-50 p-6 shadow-md rounded-md">
            <h4 className="font-bold mb-2">Next day as standard</h4>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>
          <div className="bg-gray-50 p-6 shadow-md rounded-md">
            <h4 className="font-bold mb-2">Made by true artisans</h4>
            <p>
              Handmade crafted goods made with meticulous precision and craftsmanship.
            </p>
          </div>
          <div className="bg-gray-50 p-6 shadow-md rounded-md">
            <h4 className="font-bold mb-2">Unbeatable prices</h4>
            <p>Pay for materials and quality, not unnecessary brand prices anywhere.</p>
          </div>
          <div className="bg-gray-50 p-6 shadow-md rounded-md">
            <h4 className="font-bold mb-2">Recycled packaging</h4>
            <p>
              We use 100% recycled packaging, so it&apos;s kinder to the environment.
            </p>
          </div>
        </div>
      </section>

{/* Products Section */}
<section className="py-12 px-6 md:px-12">
  <h3 className=" text-[#272343] text-2xl md:text-3xl font-semibold pl-32 mb-8">
    Our Popular Products
  </h3>

  {/* Product Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
    {/* Product 1 */}
    <div className=" items-center text-[#2A254B]">
      <Image
        src="/Large.png"
        alt="The Poplar Suede Sofa"
        width={300}
        height={200}
        className="object-cover"
      />
      <h4 className="font-bold text-lg mt-4">The Poplar Suede Sofa</h4>
      <p className="text-[#2A254B] mt-1">$99.00</p>
    </div>

    {/* Product 2 */}
    <div className=" items-center text-[#2A254B]">
      <Image
        src="/photo.png"
        alt="The Dandy Chair"
        width={300}
        height={200}
        className="object-cover"
      />
      <h4 className="font-bold text-lg mt-4">The Dandy Chair</h4>
      <p className="text-[#2A254B] mt-1">$99.00</p>
    </div>

    {/* Product 3 */}
    <div className=" items-center text-[#2A254B]">
      <Image
        src="/Photo (1).png"
        alt="The Dandy Chair"
        width={300}
        height={200}
        className="object-cover"
      />
      <h4 className="font-bold text-lg mt-4">The Dandy Chair</h4>
      <p className="text-[#2A254B] mt-1">$99.00</p>
    </div>
  </div>
</section>





    </main></>
    
  );
}
export default AboutUs