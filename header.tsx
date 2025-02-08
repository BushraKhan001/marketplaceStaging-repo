import Link from "next/link"
import Image from "next/image"
import React from 'react'

function Header() {
  return (
   <>
{/* Section:01 Top Bar */}

<section className=' bg-[#272343] text-gray-300 flex justify-between items-center text-sm px-4 py-2'>


<div className="pl-20"><span className='flex items-center gap-2 pl-20'><Image src="/check1.png" alt="Check Icon" width={16} height={16}></Image>Free shipping on all orders over $50</span></div>



<div>
<ul className="pr-20">

<li className='flex gap-x-4 gap-6'>
<Link href = ""><p>Eng</p></Link>
<Link href = ""><p>Faqs</p></Link>
<Link href = ""><p>Need help</p></Link>
</li>

</ul>
</div>



 </section> 


{/* Middle */}

 <section>

<div className="flex justify-between items-center bg-gray-100 p-4 ">

      {/* Left Section: Logo */}
<div className='pl-20'>
<div className="flex items-center gap-2 pl-20 ">
        <Image src="/Logo-Icon.png" alt="Logo" width={38} height={38}/>
        <span className="text-3xl font-normal text-gray-800 pl-16">Comforty</span>
      </div>
</div>
    

      {/* Right Section: Cart */}

      <div className='pr-20'>
      <div className="flex items-center gap-2 bg-white p-2 px-5 rounded-lg shadow-md ">
        <Image src="/cart-Icon.png" alt="Comforty Brand cart" width={24} height={24} />
        <span className="text-gray-800">Cart</span>
        <div className="flex items-center bg-teal-600 text-sm w-5 h-5 justify-center rounded-full text-white">
          2
        </div>
      </div>
      </div>
     
    </div>


</section>


{/* Links */}
<div className='flex justify-between'>
  <div className ="pl-24">

  <ul className="hidden md:flex gap-x-10 px-6 pl-20 pt-4 pb-3 text-sm text-[#636270]">
            <li>
              <Link href="/Homepage" >Home</Link>
            </li>

            <li>
              <Link href="/shop">Shop</Link>
            </li>

            <li>
              <Link href="/products">Product</Link>
            </li>

            <li>
              <Link href="" >Pages</Link>
            </li>

            <li>
              <Link href="/Aboutus" >About</Link>
            </li>

            <li>
              <Link href="/Contact-US">Contact</Link>
            </li>
            <li>
              <Link href="/FAQs" >FAQs</Link>
            </li>
          </ul>

  </div>

          
      <span className='pr-20 pt-4 pb-3'><span className='text-sm text-[#636270]'>Contact: </span>0310 2030400</span>

</div>

<div className="border-b border-gray-200 mt-2" ></div>



   </>
  )
}

export default Header;
