import React from 'react';
import { toggleMode } from '../Stores/slice1';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import RecipeOfTheDay from '../utils/RecipeOfTheDay';
let CardImage1 = new URL('../assets/image5.jpg',import.meta.url).href;
let CardImage2 = new URL('../assets/image2.jpg',import.meta.url).href;
function Home(){
    let isDark = useSelector((state)=>state.isDark.isDark);
    let Navigate = useNavigate();
    return(
       <>
         <div className={`h-full py-4 ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`}>
           <div className='sm:mx-25 mx-5 text-center'>
              <div>
                <h1 className={`lg:text-6xl sm:text-4xl text-xl pt-8 font-bold flex justify-center items-center ${isDark ? 'text-white' : 'text-black'}`}>Welcome to 
                  <span className="text-amber-600 dark:text-amber-400 font-semibold md:ml-4 ml-2 animate-pulse">Fridge</span><span className='text-red-500 dark:text-orange-400 animate-pulse font-semibold'>Buddy!</span></h1>
              </div>
              <div>
              <p className={`font mx-auto py-7 sm:w-[80%] w-[90%] md:w-[60%] sm:text-2xl text-sm ${isDark?'text-white':'text-gray-800'}`}>
                Let’s turn what’s in your fridge into something delicious!
                Check your ingredients. Get recipe ideas. Cook smarter.
              </p>
              </div>
              <div className='flex md:flex-row flex-col md:justify-center md:mx-0 mx-3 md:mt-15 mt-8 items-center md:gap-20 gap-10'>
              <div className={`text-center border-2 border-gray-900 rounded-2xl hover:scale-95 duration-200 shadow-2xl shadow-gray-900 bg-gray-700 md:w-[45%] lg:w-[40%] sm:w-[90%] w-[100%] overflow-hidden`}>
             {/* Background Image */}
             <div className='relative'>
             <img
           className="w-full relative md:h-50 lg:h-60 sm:h-60 h-44 object-cover rounded-2xl"
             src={CardImage1}
               alt="Card Background"
            />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
          </div>
         {/* Text & Button Content */}
           <div className='text-center bg-white h-30'>
            <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl text-xl font-semibold mb-4">Search Recipes</h2>
             <button onClick={()=>Navigate('/RecommendedPage')} className="bg-blue-700 text-white font-semibold py-2 px-3 border-1 rounded-lg text-2xl border-white">
              Explore ➜
               </button>
            </div>
           </div>

           <div className="text-center border-2 border-gray-900 rounded-2xl hover:scale-95 duration-200 shadow-2xl shadow-gray-900 bg-gray-700 md:w-[45%] lg:w-[40%] sm:w-[90%] w-[100%] overflow-hidden">
             {/* Background Image */}
             <div className='relative'>
             <img
           className="w-full md:h-50 lg:h-60 sm:h-60 h-44 object-cover rounded-2xl"
             src={CardImage2}
               alt="Card Background"
            />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
          </div>
         {/* Text & Button Content */}
         <div className='text-center bg-white h-30'>
            <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl text-xl font-semibold mb-4">Recipes By Ingredients</h2>
             <button onClick={()=>Navigate('SearchByIngredients')} className="bg-red-700 text-white font-semibold py-2 px-3 rounded-lg text-2xl border-1 border-white">
              Explore ➜
               </button>
               </div>
           </div>
              </div>
              <RecipeOfTheDay/>
           </div>
         </div>
       </>
    );
}
export default Home;