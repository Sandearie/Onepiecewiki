import { useEffect, useState } from "react";
import { FruitItem } from "@/interface/Item";
import { Link } from "react-router-dom";
import FruitCard from "@/components/fruitCard";
import logo from "/images/fruitlogo.png";

const FavoriteFruitPage = () => {
  const [favFruit, setFavFruit] = useState<FruitItem[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favoriteFruits");
    if (storedFavs) {
      setFavFruit(JSON.parse(storedFavs));
    }
  }, []);

  const updateFavList = (fruit: FruitItem, isAdd: boolean) => {
    const updatedFav = isAdd
      ? [...favFruit, fruit]
      : favFruit.filter((fav) => fav.id !== fruit.id);

    setFavFruit(updatedFav);
    localStorage.setItem("favoriteFruits", JSON.stringify(updatedFav));
  };

  return (
    <div>
      <div className="flex  justify-center w-[90%] m-[auto] max-w-[1400px] pb-[200px]">
      <div id="navbarfruitpage" className="fixed w-[90%] rounded-lg z-10 flex justify-center min-w-[270px]  bg-[#020617] shadow-md lg:flex-wrap lg:justify-start lg:py-1 mt-2 shadow-lg shadow-cyan-500/50">
        <div className="flex w-full items-center py-3 px-5 gap-3">
          <img className="max-h-[50px]" src={logo} alt="" />
          <label className="text-3xl font-medium w-[845px] text-left ">FAVORITE DEVIL FRUITS</label>
          
          <div  className="flex items-center justify-end w-full">
        

          <div>
          
          <Link to="/fruits">
            <button >Back</button> 
          </Link>

          <Link to="/">
            <button >Home</button> 
          </Link>

          
          </div>
          
        
        </div>
        </div>
        </div>
        

      
      <div className="flex-col justify-center pt-[110px] items-center">
        <h1 className="text-[#662F23] font-bold">Favorite Fruits List</h1>
        <div className="flex justify-center items-center p-[1%]  w-[full] pt-[30px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10   ">
          {favFruit.length > 0 ? (
          favFruit.map((fruit) => (
            <FruitCard
              key={fruit.id}
              fruit={fruit}
              updateFav={updateFavList}
            />
          ))
          ) : (
          <p className="text-red">No favorite fruits yet!</p>
          )}

        </div>



      </div>
     </div>
      
    </div>
  );
};

export default FavoriteFruitPage;
