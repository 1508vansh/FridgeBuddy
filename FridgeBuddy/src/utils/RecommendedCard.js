import InformationPage from '../Pages/InformationPage';
import { useNavigate,Link } from 'react-router';
let CardImage = new URL('../assets/image5.jpg',import.meta.url).href;
export default function RecommendedCard({obj}){
  const fallbackImage = CardImage;
  let Navigate = useNavigate();
  return (
    <div className="w-80 bg-white border-2 border-black dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-95 duration-200 hover:shadow-2xl">
      <img
        src={obj?.image || fallbackImage}
        alt={obj?.title}
        className="h-48 w-full object-cover rounded-t-2xl"
        onError={(e) => (e.target.src = fallbackImage)}
      />
      <div className="my-2 mx-2 border-1 border-black rounded-xl">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          {obj?.title}
        </h2>
      </div>
      <div className="text-center my-2">
        <Link to={'/InformationPage/'+obj?.id} className="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition">
      View Recipe
     </Link>
    </div>
    </div>
    </div>
  );
}