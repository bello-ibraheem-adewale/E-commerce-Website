





import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Desktop1 from '../assets/Desktop1.jpg';
import image2 from '../assets/shopper1.svg';

// https://fakestoreapi.com/products?sort=desc

const Home = () => {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]);  
  const [menu, setMenu] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [cart, setCart] = useState([]); // New state for the cart

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      setData(data);
      filterDataByCategory('all', data);
    };

    fetchData();
  }, []);

  const filterDataByCategory = (category, data) => {
    let filtered = [];
    switch (category) {
      case 'electronic':
        filtered = data.filter(item => item.category === 'electronics');
        break;
      case 'men':
        filtered = data.filter(item => item.category === "men's clothing");
        break;
      case 'women':
        filtered = data.filter(item => item.category === "women's clothing");
        break;
      case 'jew':
        filtered = data.filter(item => item.category === 'jewelery');
        break;
      case 'computer':
        filtered = data.filter(item => item.category === 'computers');
        break;
      default:
        filtered = data;
    }
    setFilteredData(filtered);
  };

  const handleMenuClick = (category) => {
    setMenu(category);  
    filterDataByCategory(category, data);  
  };

  // Function to toggle between full text and truncated text
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find(cartItem => cartItem.id === item.id);

      if (isItemInCart) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <nav className="bg-indigo-300 w-screen h-10 border-solid flex justify-around">
        <div className='flex flex-row justify-center items-center gap-10'>
          <img className='w-8 h-8 rounded' src={image2} alt="" />
          <h1>Shopper</h1>
        </div>
        <div className="tablet:justify-evenly laptop:justify-evenly w-auto gap-5 hidden tablet:hidden laptop:flex">
          <button onClick={() => handleMenuClick('all')}>
            All products
            {menu === 'all' && <hr className="border-none w-full h-[3px] rounded-sm bg-red-600" />}
          </button>
          <button onClick={() => handleMenuClick('electronic')}>
            Electronics
            {menu === 'electronic' && <hr className="border-none w-full h-[3px] rounded-sm bg-red-600" />}
          </button>
          <button onClick={() => handleMenuClick('men')}>
            Men's Clothes
            {menu === 'men' && <hr className="border-none w-full h-[3px] rounded-sm bg-red-600" />}
          </button>
          <button onClick={() => handleMenuClick('women')}>
            Women's Clothes
            {menu === 'women' && <hr className="border-none w-full h-[3px] rounded-sm bg-red-600" />}
          </button>
          <button onClick={() => handleMenuClick('jew')}>
            Jewellery
            {menu === 'jew' && <hr className="border-none w-full h-[3px] rounded-sm bg-red-600" />}
          </button>
        </div>
        <div className="flex flex-row align-middle">
          <button className="bg-white hidden tablet:flex laptop:flex w-48 h-6 rounded mt-2 active:bg-gray-300">ADD TO CART</button>
          <h1 className="bg-green-400 flex tablet:flex laptop:hidden"> &#9776; </h1>
        </div>
      </nav>

      <div className="hidden tablet:flex laptop:flex flex-row justify-between p-4 w-full bg-amber-300">
        <aside className="w-[16vw] border-solid h-72 bg-white flex flex-col gap-4 pt-4 rounded font-sans text-2xl">
          <button className="hover:bg-slate-500 hover:text-white" onClick={() => handleMenuClick('all')}>Home</button>
          <button className="hover:bg-slate-500 hover:text-white">About</button>
          <button className="hover:bg-slate-500 hover:text-white">Services</button>
          <button className="hover:bg-slate-500 hover:text-white">Contact Us</button>
        </aside>
        <img className="w-[76vw] h-72 bg-current bg-contain animate-pulse" src={Desktop1} alt="" />
      </div>

      <div className="bg-slate-400 h-auto w-full gap-5 grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 mt-5">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white shadow-lg w-72 h-[70vh] justify-center rounded-md text-center text-amber-950 flex flex-col">
            <img className="w-60 h-60 rounded pl-6 pt-4" src={item.image} alt='' />
            <p onClick={handleToggle} style={{ cursor: 'pointer' }}>
              {isExpanded ? item.title : item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}
            </p>
            <div className='flex flex-row justify-between align-middle items-center gap-4 p-5'>
              <button className='bg-slate-900 rounded text-sm w-48 h-8 hover:bg-gray-400 hover:text-red-700 text-white'>price:#{item.price}</button>
              <button className='bg-slate-900 rounded text-sm w-48 h-8 hover:bg-gray-400 hover:text-red-700 text-white'>rate:{item.rating.rate}</button>
              <button className='bg-slate-900 rounded text-sm w-48 h-8 hover:bg-gray-400 hover:text-red-700 text-white'>count:{item.rating.count}</button>
            </div>
            <button onClick={() => addToCart(item)} className='bg-gray-950 hover:bg-slate-400 hover:w-60 hover:pt-4 hover:h-14 hover w-60 h-12 rounded text-white ml-8 items-center text-center pt-2'>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>

      {/* Display Cart */}
      <div className="bg-gray-100 p-5 mt-5">
        <h2 className="text-lg font-bold">Cart Items:</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id} className="flex justify-between">
                <span>{cartItem.title} (x{cartItem.quantity})</span>
                <span>${cartItem.price * cartItem.quantity}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Home;





