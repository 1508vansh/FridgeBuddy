import React from 'react';
import { toggleMode } from '../Stores/slice1';
import { Heart } from "lucide-react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
const logoUrl = new URL('../assets/FridgeBuddyLogo.png', import.meta.url).href;
function Header(){
    let isDark = useSelector((state) => state.isDark.isDark);
    let dispatch = useDispatch();
    let count = useSelector((state)=>state.CountRecipe.count);
    return(
       <>
       <div className='shadow-2xl shadow-gray-900 bg-gray-700'>
       <div className='flex justify-between items-center bg-gray-700 p-2 md:mx-25 mx-5'>
        <div className='flex items-center justify-center gap-2'>
            <div>
                <img className='sm:h-15 h-10 rounded-full' src={logoUrl} alt="Logo"/>
            </div>
            <div><p className='font-bold md:text-4xl sm:text-3xl sm:inline hidden text-xl text-white'>FridgeBuddy</p></div>
        </div>
        <div className='flex justify-between items-center gap-5'>
        <Link to={'/FavoriteRecipes'} className="relative w-fit hover:scale-115 duration-200">
      <Heart className="sm:w-7 sm:h-7 h-5 w-5 text-red-500" />
        {count > 0 && (
         <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
           {count}
         </span>
       )}
      </Link>
        <button
      onClick={() => dispatch(toggleMode())}
      className={`px-2 py-2 rounded-2xl border text-xs sm:text-xl font-light ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {isDark ? `☀️ Light Mode` : `🌙 Dark Mode`}
    </button>
        </div>
       </div>
       </div>
       </>
    );
}
export default Header;