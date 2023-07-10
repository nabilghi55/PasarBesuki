/** @format */

import NavBar from "./Navbar/Navbar";
import hubungi from "../assets/hubungis.png";
import hp from "../assets/hp.png";

import Table from "./Hubungi/Table";

const Hubungi = () => {
  return (
    <>
      <div className='hubungi  ' id='#hubungi'>
        <div className="z-10 relative">
          <img className='w-full' src={hubungi} alt='' />
        </div>
        <div>
          <div className='text-center border-2 border-white'>
            <h1 className='text-4xl font-extrabold border-t-4 border-white z-20 relative -mt-1'>Hubungi Kami</h1>
          </div>
          <div className='lg:flex md:px-44  md:py-20 py-10'>
            <img src={hp} className="w-2/3 md:w-1/3 text-center mx-auto" width="" alt='' />
             <Table/>
           
          
          </div>
        </div>
      </div>
    </>
  );
};
export default Hubungi;
