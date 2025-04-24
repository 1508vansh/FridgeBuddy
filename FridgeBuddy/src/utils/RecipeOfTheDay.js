import {Link} from 'react-router'
import {useState,useEffect} from 'react';
let CardImage = new URL('../assets/image1.avif',import.meta.url).href;
export default function RecipeOfTheDay(){
      let [apiData,setApiData] = useState({});
       function getRandomNumber(){
       return Math.floor(Math.random()*(65000-1000+1)+1000);
       }
      useEffect(()=>{
            async function getApi() {
                let data = {};
                while (Object.keys(data).length === 0 || data.status === 'failure') {
                  try {
                    const response = await fetch(
                      `https://api.spoonacular.com/recipes/${getRandomNumber()}/information?apiKey=f55da23d38cf47628f4c664311686db3`
                    );
                    data = await response.json();
                  } catch (error) {
                    data = {}; 
                  }
                }
                setApiData(data);
            }
            getApi();
        },[]);
    return(
       <>
      <section className="bg-white sm:my-20 m-10 rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row mx-auto w-[80%]">
      <img
        src={apiData?.image}
        onError={(e) => (e.target.src = CardImage)}
        className="w-full md:w-1/2 h-64 object-cover"
      />
      <div className="p-6 flex flex-col justify-center md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">🥘 Recipe of the Day</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{apiData?.title}</h3>
        <p className="text-gray-600 mb-4">{apiData.description}</p>
        <Link to={'/InformationPage/'+apiData?.id}
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          View Recipe
        </Link>
      </div>
    </section>
       </>
    );
}