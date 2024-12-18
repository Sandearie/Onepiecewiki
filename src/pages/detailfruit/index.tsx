import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FruitItem } from "@/interface/Item";
import { FruitDetailService } from "@/services/fruitDetail";
import ReactLoading from "react-loading";


const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [fruit, setFruit] = useState<FruitItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const storedFavs = localStorage.getItem("favoriteFruits");
    if (storedFavs) {
      const favList: FruitItem[] = JSON.parse(storedFavs);
      setIsFavorite(favList.some((f) => f.id === Number(id || "0")));
    }
  }, [id]);

  
  useEffect(() => {
    const callData = async () => {
      try {
        const response = await FruitDetailService.getFruitDetail();
        if (response.status === 200 && response.data) {
          const foundFruit = response.data.find(
            (item) => item.id === Number(id || "0")
          );
          setFruit(foundFruit || null);
        }
      } catch (error) {
        console.error("Error fetching fruit:", error);
      } finally {
        setIsLoading(false);
      }
    };

    callData();
  }, [id]);

  
  const updateFavorite = () => {
    const storedFavs = localStorage.getItem("favoriteFruits");
    let favList: FruitItem[] = storedFavs ? JSON.parse(storedFavs) : [];

    if (isFavorite) {
      favList = favList.filter((f) => f.id !== fruit?.id);

    } else {
      if (fruit) favList.push(fruit);
      
    }

    localStorage.setItem("favoriteFruits", JSON.stringify(favList));
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <ReactLoading type="bars" color="#82EEFD" />
      </div>
    );
  }

  if (!fruit) {
    return <div>Fruit not found</div>;
  }
  
  
    
 

  

  return (
    <div className="flex-col justify-center w-[90%] m-[auto] max-w-[1400px] ">
      <div
        id="navbarfruitpage"
        className="fixed w-[90%] rounded-lg z-10 flex justify-center min-w-[270px] bg-[#020617] shadow-md lg:flex-wrap lg:justify-start lg:py-1 mt-2 shadow-lg shadow-cyan-500/50"
      >
        <div className="flex w-full items-center py-3 px-5 gap-3">
        {fruit.filename === "https://images.api-onepiece.com/fruits/" ? (
              <img
                className=" max-h-[50px] object-contain"
                src="/images/logoophead.png"
                alt="Default Logo"
              />
              ) : (
              <img
                className="max-h-[50px] object-contain"
                src={fruit.filename || "/images/logoophead.png"}  //ถ้าfruit.filenameไม่มีค่า เป็น false จะคืนค่าตัวหลังสุดทันที || ถ้าทุกค่าเป็น false จะส่งคืนค่าตัวสุดท้าย
                alt={fruit.name || "Fruit"}
              />
              )}
          <span className="flex flex-start text-3xl font-medium w-[500px]">
            {fruit.name}
          </span>

          <div className="flex items-center justify-end w-full">
            <div>
              <Link to="/favoritefruit">
                <button>Favorite</button>
              </Link>

              <Link to="/">
                <button>Home</button>
              </Link>

              <div>
                <button onClick={() => navigate(-1)}>Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex pt-[130px] p-10 w-[70%]">
          {/* การ์ด */}
          <div className="flex-col bg-[#D5A769] p-[20px] px-[50px] rounded-lg">
            <h1 className="text-[#662F23]">{fruit.name}</h1>
            <div className="flex justify-center ">
            
            {/* รูป */}
            <div className="relative w-[200px] h-[200px] mt-[25px] flex items-center justify-center  rounded-md">
              {fruit.filename === "https://images.api-onepiece.com/fruits/" ? (
              <img
                className="max-w-full max-h-full object-contain"
                src="/images/logoophead.png"
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
                  src={isFavorite ? "/images/RedHeart.png" : "/images/BlackHeart.png"}
                  alt="Heart"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
            </div>

            {/* ข้อมูล */}
            <div className="grid grid-cols-1 gap-x-[20px] gap-y-[25px] ">
              <div>
                <div className="flex gap-x-[10px] mt-[25px]">
                  <div className="text-[#662F23] font-semibold text-left">Roman Name</div>
                  <div className="text-white text-left"> {fruit.roman_name} </div>
                </div>
                <div className="flex gap-x-[10px]">
                  <div className="text-[#662F23] font-semibold">Type</div>
                  <div className="text-white"> {fruit.type} </div>
                </div>
                <div className="flex  ">
                  <div className="text-[#662F23]  font-semibold">Description :</div>
                </div>
                <div className="flex">
                  <div className="text-white text-left leading-relaxed indent-4">
                    {fruit.description}
                  </div>
                </div>
              </div>
            </div>

            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
