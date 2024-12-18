import { CharacterItem } from "@/interface/Item"
import { useState } from "react";
import "./charactercard.css"

interface CharacterCardProps {
    character: CharacterItem,
  }

const CharacterCard = (props:CharacterCardProps) => {
    const {character} = props
    const [isFlipped, setIsFlipped] = useState(false);

    const flipedCard = () => {
        setIsFlipped((isFlipped) => !isFlipped);
      };
    
    return  (
        <div
          key={character.id}
          onClick={flipedCard} // คลิกเพื่อพลิกการ์ด
          className={`character-card group relative w-full h-[300px] perspective cursor-pointer`}
        >
          
          <div
            className={`relative w-full h-full duration-500 transform-style-preserve-3d 
                ${isFlipped ? "rotate-y-180" : ""}`}
          >
            {/* หน้า */}
            <div
              className="absolute w-full h-full backface-hidden bg-[#78350f] bg-opacity-80 p-4 rounded shadow-lg flex flex-col justify-center items-center"
            >
              <h2 className="text-xl font-bold">{character.name}</h2>
              <p>Job: {character.job}</p>
              <p>Bounty: {character.bounty}</p>
              <p>Age: {character.age}</p>
            </div>
    
            {/* หลัง */}
            <div
              className="absolute w-full h-full backface-hidden rotate-y-180 bg-[white] bg-opacity-50 p-4 rounded shadow-lg flex flex-col justify-center items-center"
            >
            {character.fruit ? (
                character.fruit.filename === "https://images.api-onepiece.com/fruits/" ? (
                    <img
                      className="max-w-full max-h-full object-contain"
                      src="/images/logoophead.png"
                      alt="Default Logo"
                    />
                    ) : (
                    <img
                      className="max-w-full max-h-full object-contain"
                      src={character.fruit.filename || "/images/logoophead.png"}  //ถ้าfruit.filenameไม่มีค่า เป็น false จะคืนค่าตัวหลังสุดทันที || ถ้าทุกค่าเป็น false จะส่งคืนค่าตัวสุดท้าย
                      alt={character.fruit.filename || "Fruit"}
                    />
                    )) 
            : (
                <img
                className="h-[200px] w-auto object-contain rounded"
                src="/images/logoophead.png"
                alt="Default Logo"
              />

            )}
              
              <p className="text-black  mt-3">{character.fruit?.name}</p>
            </div>
          </div>
        </div>
      );
}

export default CharacterCard