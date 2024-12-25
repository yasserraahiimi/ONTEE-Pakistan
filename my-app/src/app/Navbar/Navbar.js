"use client"; // Enables client-side rendering in Next.js
import React, { useState, useEffect } from 'react'; // Import useEffect from React


import "./../globals.css";
import Link from 'next/link';
// import { useRef } from 'react';
import { MdOutlineAccountCircle} from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { GiWolfHead } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import page from "@/app/product/[slug]/page";



const Navbar = () => {


  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu=()=>{
    setIsVisible(!isVisible); 
  }

  const [cartMenu,setCartMenu]=useState(false);
const toggleCart=()=>{
  setCartMenu(!cartMenu)
}





//  Load cart from localStorage or initialize to empty array if nothing is saved
 const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
});
const [selectedSize, setSelectedSize] = useState({});

const products = [
  { id: 1, name: "T-Shirt", price: 500, image: "https://thehangerpakistan.com/cdn/shop/files/52C8CA93-09A4-4A0B-9FAC-4153A16F13F5.jpg?v=1732476980&width=500" },
  { id: 2, name: "Jeans", price: 1000, image: "/jeans.jpg" },
];

// Save the cart to localStorage whenever it changes
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("CartMenu rendered");
}, [cart]);

const handleAddToCart = (product) => {
  console.log("yes hadnle add to cart is runnninggngngg")
  const size = selectedSize[product.id] || "M"; // Default size if not selected

  setCart((prevCart) => {
    const itemExists = prevCart.some(
      (item) => item.id === product.id && item.size === size
    );

    if (itemExists) {
      return prevCart.map((item) =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem = { ...product, size, quantity: 1 };
      return [...prevCart, newItem];
    }
  });
};

const handleIncreaseQuantity = (id, size) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const handleDecreaseQuantity = (id, size) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) // Remove items with quantity <= 0
  );
};

const handleRemoveItem = (id, size) => {
  setCart((prevCart) =>
    prevCart.filter((item) => !(item.id === id && item.size === size))
  );
};







  return (
   
      <>
 <nav className='flex items-center  justify-between '>
  <ul className='flex item-center lg:px-7' >
    {/* <li className=''> <MdMenu className='h-[5vh] w-[10vw] lg:h-[4vh] lg:w-[4vw]'/></li> */}
  {/* <li  className='' onClick={() => setIsVisible(true)}>   < IoCloseSharp className='h-[5vh] w-[10vw] lg:block lg:h-[4vh] lg:w-[4vw] z-50'/></li> */}
   <li  className='cursor-pointer' onClick={() => setIsVisible(true)}>  <MdMenu className='h-[5vh] w-[10vw] lg:block lg:h-[4vh] lg:w-[4vw] z-100'/></li> 
    
   {isVisible && (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
  
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold lg:text-2xl text-gray-900 last:border-b border-black " id="slide-over-title">Menu</h2>
             
  
                  <div className="ml-3 flex h-7 items-center">
                    <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setIsVisible(false)}>
                      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
  
                {/* Menu items below */}
                <div className="mt-4 -y-4">
                 
                  <div className="cursor-pointer hover:text-blue-500 font-mono py-1">Oversized T-Shirts</div>
                  <div className="cursor-pointer hover:text-blue-500 font-mono py-1">New Arrivals</div>
                  <div className="cursor-pointer hover:text-blue-500 font-mono py-1">Bottoms</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Pink</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Hoodies & Sweatshirt</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Outerwear</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Hearwear</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Summer Sale</div>
                  <div className="cursor-pointer hover:text-blue-500 last:border-b border-black my-5"></div>
                </div>
  
                {/* Contact Info */}
                <div className="mt-3 space-y-1">
                  <div className="text-gray-700">Login</div>
                  <div className="text-gray-700 last:border-b border-black py-4">Create Account</div>
                </div>
   

                <div className="mt-6 space-y-1">
                  <div className="text-gray-700">Email: example@example.com</div>
                  <div className="text-gray-700 last:border-b border-black ">Phone: +123 456 7890</div>
                </div>


                {/* Social Media Icons */}
                <div className="mt-6 flex space-x-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0H1.325C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.488v-9.294H9.692v-3.622h3.121V9.412c0-3.133 1.845-4.872 4.678-4.872 1.354 0 2.744.27 3.19.406v3.744h-2.26c-1.769 0-2.155.841-2.155 2.107v2.777h4.31l-.56 3.622h-3.75v9.294h7.354c.733 0 1.325-.592 1.325-1.325V1.325C24 .592 23.408 0 22.675 0z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.168 0 3.536.012 4.785.07 1.124.051 1.774.225 2.207.378.608.198 1.07.46 1.523.913.454.454.716.916.913 1.523.153.433.327 1.083.378 2.207.058 1.249.07 1.617.07 4.785s-.012 3.536-.07 4.785c-.051 1.124-.225 1.774-.378 2.207-.198.608-.46 1.07-.913 1.523-.454.454-.916.716-1.523.913-.433.153-1.083.327-2.207.378-1.249.058-1.617.07-4.785.07s-3.536-.012-4.785-.07c-1.124-.051-1.774-.225-2.207-.378-.608-.198-1.07-.46-1.523-.913-.454-.454-.716-.916-.913-1.523-.153-.433-.327-1.083-.378-2.207-.058-1.249-.07-1.617-.07-4.785s.012-3.536.07-4.785c.051-1.124.225-1.774.378-2.207.198-.608.46-1.07.913-1.523.454-.454.916-.716 1.523-.913.433-.153 1.083-.327 2.207-.378 1.249-.058 1.617-.07 4.785-.07zM12 0C8.739 0 8.329.008 7.312.068c-1.029.057-1.886.252-2.604.57-.896.369-1.616.889-2.292 1.565-.676.676-1.196 1.396-1.565 2.292-.318.718-.513 1.576-.57 2.604-.06 1.017-.068 1.428-.068 4.785s.008 3.536.068 4.785c.057 1.029.252 1.886.57 2.604.369.896.889 1.616 1.565 2.292.676.676 1.396 1.196 2.292 1.565.718.318 1.576.513 2.604.57 1.017.06 1.428.068 4.785.068s3.536-.008 4.785-.068c1.029-.057 1.886-.252 2.604-.57.896-.369 1.616-.889 2.292-1.565.676-.676 1.196-1.396 1.565-2.292.318-.718.513-1.576.57-2.604.06-1.017.068-1.428.068-4.785s-.008-3.536-.068-4.785c-.057-1.029-.252-1.886-.57-2.604-.369-.896-.889-1.616-1.565-2.292-.676-.676-1.396-1.196-2.292-1.565-.718-.318-1.576-.513-2.604-.57-1.017-.06-1.428-.068-4.785-.068z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      )}




    <li className='px-4'><FaSearch className='h-[5vh] w-[8vw] lg:hidden lg:h-[3.5vh] lg:w-[3.5vw]'/></li>
 
  </ul>
  <ul className='flex item-center px-1'>
  <GiWolfHead className='h-[8vh] w-[12vw]  lg:h-[10vh] lg:w-[6vw]'/>  <h2 className='py-5 '>A a r a i s h</h2>
  </ul>
        <ul className='flex lg:px-4'>
        <li className=''><FaSearch className='h-[5vh] w-[8vw] hidden lg:block lg:h-[3.5vh] lg:w-[3.5vw]'/></li>
          <li  className=''> <MdOutlineAccountCircle className='h-[5vh] w-[10vw] lg:block lg:h-[4vh] lg:w-[4vw]'/></li>
        
          <li onClick={() => setCartMenu(true)}><IoMdCart className='h-[5vh] w-[10vw] lg:h-[4vh] lg:w-[4vw]'/></li>
      

          {cartMenu && (




          <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    

  <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
   
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="absolute -inset-0.5" onClick={() => setCartMenu(false)}></span>
                    <span className="sr-only">Close panel</span>
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
              {cart.length > 0 ? (
          cart.map((item ) => (
                <div className="flow-root"   key={`${item.id}-${item.size}`} >
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <li className="flex py-6 my-3"  >
                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.image}
                  alt={item.name} className="size-full object-cover"/>
                      </div>
{/*  */}
                     



                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{item.name}</a>
                              {/*  */}
                            </h3>
                            <p className="ml-4">PKR {item.quantity === 1 ? item.price : item.quantity * item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item.size}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty {item.quantity}</p>
                      
                        {/*  */}

                            
                              <div className="flex" > 
                       <button
            onClick={()=>handleDecreaseQuantity(item.id, item.size)}
            className="px-2 py-1"
          >
            <FaMinus />
</button>

         <button
           onClick={() => handleIncreaseQuantity(item.id,item.size)}
          >
           <FaPlus />
         </button>

                        </div>
                        
                       
                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"   onClick={() => handleRemoveItem(item.id, item.size)}
                 >Remove</button>
                          </div>
                        </div>
                        </div>




                    </li>
                   
  
               
                  </ul>
                </div>  ))
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
              </div>
              
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   )}
        </ul>
      </nav>





      <div className="p-4">
       <h1 className="text-xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
         <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
           <p className="text-gray-700">Price: {product.price} PKR</p>
            <div className="mt-2 flex space-x-2">
            {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`px-2 py-1 rounded border ${
                    selectedSize[product.id] === size
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize({ ...selectedSize, [product.id]: size })}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          // </div>
        ))}
      </div>

     <h1 className="text-xl font-bold my-4">Cart</h1>
   
    </div> 

      </>
        
  );
}

export default Navbar;
