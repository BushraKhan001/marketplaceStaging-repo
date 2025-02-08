

import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
<>

  <h1 className="flex flex-col items-center justify-center text-4xl font-bold mb-4 pt-20">Get In Touch With Us</h1>
  <p className="flex flex-col items-center justify-center text-medium text-[#9F9F9F] ">
    For more information about our products & services, please feel free to  
  </p>
  <p className='flex flex-col items-center justify-center text-[#9F9F9F] mb-28'>drop us an email. Our staff is always there to help you.</p>

    <div className="flex flex-col md:flex-row gap-32 px-6 md:px-16 bg-white mt-2 mb-11">
    
<section className="pl-44 ml-20">
  {/* Address */}
        <div className="flex items-start gap-4 pb-5 mb-10 pl-20">
          <span className="text-teal-500 text-xl pl-20">&#9679;</span>
          <div>
            <h3 className="text-gray-800 font-semibold">Address</h3>
            <p className="text-gray-500 text-sm">
              736 GB 8th Avenue, New 
              <p>York, NY 10000, United</p>
            <p>States</p>
              </p>
            
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 pb-5 mb-10 pl-20">
          <span className="text-teal-500 text-xl pl-20">&#9742;</span>
          <div>
            <h3 className="text-gray-800 font-semibold">Phone</h3>
            <p className="text-gray-500 text-sm">Mobile: +1 818 854-0129</p>
            <p className="text-gray-500 text-sm">Hotline: +1 484 625-0128</p>
          </div>
        </div>

        {/* Working Time */}
        <div className="flex items-start gap-4 pb-5 mb-10 pl-20">
          <span className="text-teal-500 text-xl pl-20">&#128197;</span>
          <div className="">
            <h3 className="text-gray-800 font-semibold">Working Time</h3>
            <div className="text-gray-500 text-sm">
             <p> Monday-Friday: 7:00 -</p> <br />
              <p>17:00 </p>
              <p>Saturday-Sunday: 9:00 - </p>
              <p>21:00</p>
            </div>
          </div>
        </div>
      </section>
        

      {/* Right Section - Contact Form */}
      <section className=" pl-11">
      <div className="md:w-1/2">
        <form className="space-y-6">
          {/* Input Fields */}
          <div>
            <label className="block text-gray-600 mb-1">Your name</label>
            <input
              type="text"
              placeholder="Abc"
              className="w-96 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Email address</label>
            <input
              type="email"
              placeholder="Abc@gmail.com"
              className="w-96 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Subject</label>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-96 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Message</label>
            <textarea
              
              placeholder="Hi, I'd like to ask about"
              className="w-96 h-24 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-56 bg-teal-500 text-white py-3 rounded-md font-semibold hover:bg-teal-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
      </section>
      
    </div>






    <div className="w-full bg-white">
        {/* Features Section */}
        <section className="w-full bg-gray-100 py-8 px-4 md:px-16 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
            {/* picture 1 */}
            <div className="flex items-center gap-4 text-center md:text-left">
            <Image src="/Group (4).png" alt="Imahe is nt shown" width={10}
        height={10}/> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">High Quality</h3>
                <p className="text-gray-500 text-sm">Crafted from top materials</p>
              </div>
            </div>
  
            {/* picture 2 */}
            <div className="flex items-center gap-4 text-center md:text-left">
            <Image src="/Group (5).png" alt="Image is not shown" width={10}
        height={10}/> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Warranty Protection</h3>
                <p className="text-gray-500 text-sm">Over 2 years</p>
              </div>
            </div>
  
            {/* picture 3 */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <Image src="/Vector.png" alt="Image is not shown" width={10}
        height={10}/>   
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">24 / 7 Support</h3>
                <p className="text-gray-500 text-sm">Dedicated support</p>
              </div>
            </div>
          </div>
        </section>
  
        
      </div>
</>


);
};

export default ContactUs;







