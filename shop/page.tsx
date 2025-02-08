import Image from 'next/image'


function Prodes1 () {
  return (
  <>
   
   <section className='flex justify-center gap-24 py-20 '>

<div className='pt-20'>
    <Image src = "/Image (5).png" alt ="nt shows" width={450}  height={450} className='object-cover' />
</div>

<div className='pt-24 '>
<h2 className='text-5xl font-semibold text-[#272343]'>Library Stool </h2>
<h2 className='text-5xl font-semibold text-[#272343]'>Chair</h2> <br/>
<span className='bg-[#029FAE] text-white rounded-full p-2 font-medium'>$20.00 USD</span>
<div className='border-b-2 gray-500 py-5'></div>
<div className='text-[#272343] py-10'>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p>Nullam tincidunt erat enim. Lorem ipsum dolor</p>
<p>sit amet, consectetur adipiscing</p>
</div>
 
  
<button className="flex items-center justify-center bg-[#029FAE] gap-2 text-white font-medium py-2 px-5 rounded-lg shadow-md hover:bg-teal-600">
  
      <Image src="/cart-Icon.png" alt="Cart" width={25} height={25}/>
    
      <span>Add To Cart</span>
    </button>

</div>

   </section>




   <h2 className='font-bold text-2xl pl-44 items-center text-[#272343]'>Featured Products</h2>

<section className='flex justify-between px-44 py-11 text-[#272343]'>

<div className='gap-2'>

<Image src="/Image.png" alt="image not sHows" width={200} height={200}/>

<div className='p-2' >
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>
</div>


<div>
<Image src="/Image (4).png" alt="image not sHows" width={200} height={200}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>
</div>


<div>
<Image src="/Image (8).png" alt= "image not sHows" width={200} height={200}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>
</div>


<div>
<Image src="/Image (6).png" alt= "image not sHows" width={200} height={200}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343] '>20$</span>
</div>

</div>


<div>
<Image src="/Image (10).png" alt="image not sHows" width={200} height={200}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt="image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-[#272343]'>20$</span>
</div>

</div>
</section>



   
   
   
  </>
  )
}

export default Prodes1