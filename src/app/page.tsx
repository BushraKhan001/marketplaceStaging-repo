

import React from 'react'
import Image from 'next/image'


function page() {
  return (
<>


{/* Header */}
{/* Hero section */}
<section className="flex justify-between items-center bg-gray-100 ml-24 mr-24 px-24 py-20">
        {/* Left side Section */}
        <div>
          <span className="uppercase text-xs text-gray-500 tracking-widest">
            Welcome to charity
          </span>
          <h1 className="text-5xl font-semibold text-gray-800 mt-4">
            Best Furniture <br />
            Collection For Your <br />
            Interior.
          </h1>
          <button className="mt-6 bg-[#029FAE] text-white py-3 px-6 rounded hover:bg-teal-500">
            Shop Now →
          </button>
        </div>

        {/* Right side Section */}
        <div className="relative">
          <Image src="/forheader.png" alt="Chair" width={400} height={400} className="object-contain" />
         
        </div>
      </section>






  {/*  Logos*/}
  <section className='px-24 py-20'>

<div className='flex justify-between gap-2'>
    <Image src="/Logo (1).png" alt= "logos not shown" width={100} height={100}/>
    <Image src="/Logo (2).png" alt= "logos not shown" width={100} height={100}/>
    <Image src="/Logo (3).png" alt= "logos not shown" width={100} height={100}/>
    <Image src="/Logo (4).png" alt= "logos not shown" width={100} height={100}/>
    <Image src="/Logo (5).png" alt= "logos not shown" width={100} height={100}/>
    <Image src="/Logo (6).png" alt= "logos not shown" width={100} height={100}/>
</div>

</section>




{/* pro-1 */}
<div className='font-bold text-2xl pl-24 items-center text-[#272343]'><h2 className=''>Featured Products</h2></div>
 

<section className='flex justify-between px-20 py-5 text-[#272343]'>

<div className='relative'>
<div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
    New
  </div>
<Image src="/Image (4).png" alt="image not sHows" width={300} height={300}/>

<div className='p-2' >
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800'>20$</span>
</div>

</div>

<div className='relative'>
<div className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
    Sales
  </div>
<Image src="/Image (5).png" alt="image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800'>20$</span>
</div>
</div>

<div>
<Image src="/Image (6).png" alt="image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span className=''><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800'>20$</span>
</div>

</div>

<div>
<Image src="/Image (7).png" alt= "image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800'>20$</span>
</div>

</div>
</section>



<h2 className='font-bold text-2xl pl-24 items-center pt-5 pb-5 text-[#272343]'>Top Categories</h2>
  
  <section className='flex justify-between gap-10 px-20 items-center '>
  
  
  
  <div className='relative'>
    <Image src= '/Image (10).png' alt= 'not shown' width={400} height={400}/>
    <div className=" absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-[#FFFFFF] text-xs  px-4 py-2">
      <h2 className='font-bold text-lg'>Wing Chair</h2>
      <span className='text-sm text-[#FFFFFF]'>3,854 Products</span>
    </div>
  </div>
  
  
  
  <div className='relative'>
    <Image src= '/Image (9).png' alt= 'not shown' width={400} height={400}/>
   <div className=" absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-[#FFFFFF] text-xs  px-4 py-2">
      <h2 className='font-bold text-lg'>Wooden Chair</h2>
      <span className='text-sm text-[#FFFFFF]'>140 Products</span>
    </div>
    </div>
    
  
  <div className='relative'>
    <Image src= '/Image (8).png' alt= 'not shown' width={400} height={400}/>
    <div className=" absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-[#FFFFFF] text-xs  px-4 py-2">
      <h2 className='font-bold text-lg'>Desk Chair</h2>
      <span className='text-sm text-[#FFFFFF]'>354 Products</span>
    </div>
    </div>
  </section>



  
  <section className='flex justify-between py-20 pr-20 '>

<div className="text-3xl pl-32 font-medium pt-4 ml-44 text-[#272343]">
      <h2 className="writing-mode-vertical">Explore new and popular styles</h2>
    </div>
    
<div className='mr-8'>
<Image src='/Image (6).png' alt='not shown' width={1000} height={500} className='mr-8'/>
</div>


<div className="grid grid-cols-2 gap-3 mr-40 pr-10 md:max-w-4xl">
  {/* First Image */}

    <Image
      src="/Image (7).png" 
      alt="not shown"
      width={450}
      height={450}   
/>

  {/* Second Image */}

    <Image
      src="/item-category-2.png"
      alt="not shown"
      width={450}
      height={450}
     
    />
 

  {/* Third Image */}

    <Image
      src="/Image (4).png"
      alt="not shown"
      width={450}
      height={450}
      
    />
 

  {/* Fourth Image */}

    <Image
      src="/Image (4).png"
      alt="not shown"
      width={450}
      height={450}
     
    />
 
</div>
</section>



<h3 className='font-bold text-3xl text-center text-[#272343] '>Our Products</h3>
<section className='flex justify-between px-20 py-20 text-[#272343]'>

<div className='relative'>
<div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
    New
  </div>
<Image src="/Image (4).png" alt= "image not sHows" width={300} height={300}/>

<div className='p-2' >
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343]'>20$</span>
</div>

</div>

<div className='relative'>
<div className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
    Sales
  </div>
<Image src="/Image (5).png" alt="image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>
</div>

<div>
<Image src="/Image (6).png" alt="image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span className=''><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>

</div>

<div>
<Image src="/Image (7).png" alt= "image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>

</div>
</section>




<section className='flex justify-between px-20 text-[#272343]'>

<div className='relative'>
<div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
    New
  </div>
<Image src="/Image (10).png" alt="image not sHows" width={300} height={300}/>

<div className='p-2' >
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>

</div>

<div className='relative'>
<div className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
    Sales
  </div>
<Image src="/item-category-2.png" alt="image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>
</div>

<div>
<Image src="/Image.png" alt="image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>

</div>

<div>
<Image src="/Image (4).png" alt= "image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>

</div>
</section>





</>
  )
}

export default page