

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import image1 from '../assets/Desktop1.jpg';
import image2 from '../assets/shopper1.svg'


// https://fakestoreapi.com/products?sort=desc

const Home = () => {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]);  
  const [menu, setMenu] = useState('all');

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

  return (
    <div>
      {/* Navigation Bar */}
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
          <button className="bg-white w-20 h-6 rounded mt-2 active:bg-gray-300">Login</button>
          <h1 className="bg-green-400 flex tablet:flex laptop:hidden"> &#9776; </h1>
        </div>
      </nav>

      
      <div className="flex flex-row justify-between p-4 w-full bg-amber-300">
        <aside className="w-[16vw] border-solid h-60 bg-white flex flex-col gap-4 pt-4 rounded font-sans text-2xl">
         

<button className="hover:bg-slate-500 hover:text-white" onClick={() => handleMenuClick('all')}>home</button>
        <button  className="hover:bg-slate-500 hover:text-white">About</button>
        <button  className="hover:bg-slate-500 hover:text-white">Services</button>
        <button  className="hover:bg-slate-500 hover:text-white">Contact Us</button>
        </aside>

        <img className="w-[76vw] h-60" src={image1} alt="" />
      </div>

      
      <div className="bg-slate-400 h-auto w-full gap-5 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 mt-5">
        {
          filteredData.map((item) => (
            <div key={item.id} className="bg-white box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);  w-72 h-96 justify-center rounded-md text-center text-amber-950 ">
              <img className="w-60 h-60 rounded pl-6 pt-4" src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <h2>{item.price}</h2>
              <p>{item.rating.rate}</p>
              <p>{item.rating.count}</p>
              <p></p>
            </div>
          ))
  }
      </div>
    </div>
  );
};

export default Home;






