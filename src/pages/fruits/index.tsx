import { FruitItem } from "@/interface/Item";

import { useEffect, useState } from "react";

import { FruitDetailService } from "@/services/fruitDetail";
import FruitCard from "@/components/fruitCard";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const FruitsPage = () => {
  const [originalFruits, setOriginalFruits] = useState<FruitItem[]>([]);
  const [fruits, setFruits] = useState<FruitItem[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [ ,setFavFruit] = useState<FruitItem[]>([]);

  const updateFavList = (fruit: FruitItem, isAdd: boolean) => {
    setFavFruit((prevFav) => {
      const updatedFav = isAdd
        ? [...prevFav, fruit]
        : prevFav.filter((fav) => fav.id !== fruit.id);
      localStorage.setItem("favoriteFruits", JSON.stringify(updatedFav));
      return updatedFav;
    });
  };

  const callData = async () => {
    let response = await FruitDetailService.getFruitDetail();
    if (response.status === 200) {
      if (response.data) {
        setFruits(response.data);
        setOriginalFruits(response.data);
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // callData(inputVal);
    // filter data...
    const lowerInput = inputVal.toLowerCase()
    const fruits = originalFruits.filter((fruit)=>fruit.name.toLowerCase().includes(lowerInput));
    setFruits(fruits);
    
  };

  useEffect(() => {
    setIsLoading(true);
    callData();
    const storedFavs = localStorage.getItem("favoriteFruits");
    if (storedFavs) {
      setFavFruit(JSON.parse(storedFavs));
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col justify-center w-[90%] m-[auto] max-w-[1400px] pb-[500px]">
      <div id="navbarfruitpage" className="fixed w-[90%] rounded-lg z-10 flex justify-center min-w-[270px]  bg-[#020617] shadow-md lg:flex-wrap lg:justify-start lg:py-1 mt-2 shadow-lg shadow-cyan-500/50">
        <div className="flex w-full items-center py-3 px-5 gap-3">
          <img className="max-h-[50px]" src="/images/fruitlogo.png" alt="" />
          <label className="text-3xl font-medium w-[300px] text-left">DEVIL FRUITS</label>
          
          <form onSubmit={handleSubmit} className="flex items-center justify-end w-full">
          <input
            className="bg-[#a5f3fc] shadow-lg shadow-cyan-500/50 rounded-lg h-[30px] cursor-text"
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          
          <button>Search</button>

          <div>
          <Link to="/favoritefruit">
            <button >Favorite</button> 
          </Link>

          <Link to="/">
            <button >Home</button> 
          </Link>
          </div>
        </form>
        </div>
        
        
      </div>
      
      <div className="flex justify-center">
        {isLoading ? (
          <div className='h-[500px] flex items-center'>
            <ReactLoading  type="bars" color="#82EEFD" />
          </div>
          
        ) : (
          <div className="py-[100px] pt-[125px] p-[1%]  w-[80%] justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14   min-h-screen">
            {fruits.map((f) => <FruitCard fruit={f} updateFav={updateFavList} />)}
          </div>
            
          
          
        ) 
        }
      </div>
      
    </div>
  );
};

export default FruitsPage;
