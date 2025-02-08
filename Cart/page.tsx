import Image from "next/image";

const CartPage = () => {
    return (
      <div className=" min-h-screen p-2 md:p-6 pt-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 ">
          {/* Bag Section */}
          <div className="md:col-span-2 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-6 text-[#111111]">Bag</h2>

            {/* Cart Item 1 */}
            <div className="flex items-center justify-between mb-6 border-b pb-4">

              <div className="flex items-center gap-4">        
              <Image src="/Image (6).png" alt="Not sHoWs" width="30" height="24" className=" object-cover"
                 /> 

                <div>
                  <h3 className="text-sm font-medium">Library Stool Chair</h3>
                  <p className="text-gray-500 text-sm">Amber Scratch-Resistant Base</p>
                  <p className="text-gray-500 text-sm">Size: 1 | Quantity: 1</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-medium">MRP: $50</p>
                <div className="flex justify-end mt-2 text-gray-500 gap-3">
                  <button>❤️</button>
                  <button>🗑</button>
                </div>
              </div>
            </div>
  
            {/* Cart Item 2 */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
              <Image  src="/Image (10).png"  alt="not shown" width="30" height="24" className=" object-cover "
                 
                 />  
               
                 
                <div>
                  <h3 className="text-sm font-medium">Library Stool Chair</h3>
                  <p className="text-gray-500 text-sm">Amber Scratch-Resistant Base</p>
                  <p className="text-gray-500 text-sm">Size: 1 | Quantity: 1</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-medium">MRP: $50</p>
                <div className="flex justify-end mt-2 text-gray-500 gap-3">
                  <button>❤️</button>
                  <button>🗑</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Summary Section */}
          <div className=" p-6  rounded-lg">
            <h2 className="text-lg font-semibold mb-6 text-[#111111]">Summary</h2>
            <div className="flex justify-between text-sm mb-2 text-[#111111]">
              <span>Subtotal ❤️</span>
              <span>$100.00</span>
            </div>

            <div className="flex justify-between text-sm mb-2 text-[#111111]">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-semibold mt-4 pt-4">
              <span>Total</span>
              <span>$100.00</span>
            </div>

            <button
              className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded"
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartPage;
  