import { FruitItem } from "@/interface/Item";
import { useState } from "react";
import { Link } from "react-router";
import blackheart from "/images/BlackHeart.png";
import redheart from "/images/RedHeart.png";
import logo from "/images/logoophead.png";

interface FruitCardProps {
    fruit: FruitItem,
    updateFav: (fruit: FruitItem, isAdding: boolean) => void
    

  }

const FruitCard = (props:FruitCardProps) => {
    
    const { fruit , updateFav } = props
    const [isFav,setIsFav] = useState(() => {
      const storedFavs = localStorage.getItem("favoriteFruits");
      if (storedFavs) {
        const favList: FruitItem[] = JSON.parse(storedFavs);
        return favList.some((f) => f.id === fruit.id);
      }else {
        return false
      }
      ;
    });

    const updateFavorite = (e:React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault()
      const newIsFav = !isFav;
      setIsFav(newIsFav);
      updateFav(fruit, newIsFav); 
    };      
      
    

    return (
      // การ์ดทั้งหมด
      <div className="">
        <Link to={`/fruit/${fruit.id}`}>
        
        <div className="bg-[url('/images/worldmapbg.jpg')] bg-cover bg-center bg-fixed  w-[full]  border-0 hover:scale-105 border-gray-200 rounded-lg shadow hover:">
          <div className="w-[95%] flex flex-col justify-center items-center">
            <div className="flex  items-center p-[50px] " > 

            
            <div className="relative w-[100px] h-[100px] flex items-center justify-center  rounded-md">
              {fruit.filename === "https://images.api-onepiece.com/fruits/" ? (
              <img
                className="max-w-full max-h-full object-contain"
                src={logo}
                alt="Default Logo"
              />
              ) : (
              <img
                className="max-w-full max-h-full object-contain"
                src={fruit.filename || "/images/logoophead.png"}  //ถ้าfruit.filenameไม่มีค่า เป็น false จะคืนค่าตัวหลังสุดทันที || ถ้าทุกค่าเป็น false จะส่งคืนค่าตัวสุดท้าย
                alt={fruit.name || "Fruit"}
              />
              )}
              <div className="absolute bottom-0 right-0  p-1 cursor-pointer" onClick={updateFavorite}>
                <img
                  src={isFav ? redheart : blackheart}
                  alt="Heart"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
        


          </div>


          {/* ล่าง */}
          <div className="max-w-[210px] flex justify-center">
            <div className="w-[180px] h-[100px]" > 
              <div className="max-w-full max-h-full mt-2 text-center font-medium text-white text-xl">{fruit.name}</div>
            </div>

          </div>




          </div>
          {/* บน */}
          
          

        </div>
        </Link>
        
        
      </div>
    );

}

export default FruitCard;
