import { BoatItem } from "@/interface/Item"
import { useState } from "react";
import "./charactercard.css"

interface CharacterCardProps {
    boat: BoatItem,
  }

const BoatCard = (props:CharacterCardProps) => {
    const {boat} = props
    const [isFlipped, setIsFlipped] = useState(false);
    
    const flipedCard = () => {
        setIsFlipped((isFlipped) => !isFlipped);
      };
    
    return  (
        <div
          key={boat.id}
          onClick={flipedCard} 
          className={`boat-card group relative w-full h-[300px] perspective cursor-pointer`}
        >
          
          <div
            className={`relative w-full h-full duration-500 transform-style-preserve-3d 
                ${isFlipped ? "rotate-y-180" : ""}`}
          >
            {/* หน้า */}
            <div
              className="absolute w-full h-full backface-hidden bg-[#78350f] bg-opacity-80 p-4 rounded shadow-lg flex flex-col justify-center items-center"
            >
              {/* {boat.character_captain ? (
                <div>
                    <h3>Captain:</h3>
                    <p>Name: {boat.character_captain.name}</p>
                    <p>Job: {boat.character_captain.job}</p>
                    <p>Bounty: {boat.character_captain.bounty}</p>
                    <p>Age: {boat.character_captain.age}</p>
                </div>
                    ) : (
                    <p>No captain information available</p>
                )} */}
              
            </div>
    
            {/* หลัง */}
            <div
              className="absolute w-full h-full backface-hidden bg-[#78350f] bg-opacity-80 p-4 rounded shadow-lg flex flex-col justify-center items-center"
            >
              <h2 className="text-xl font-bold"></h2>
              <h2 className="text-xl font-bold">{boat.name}</h2>
              <p>Name: {boat.name}</p>
              {/* <p>Size: {boat.size}</p>
              <p>Age: {boat.age}</p>
              <p>Job: {boat.job}</p>
              <p>Bounty: {boat.bounty}</p> */}
              {boat.character_captain ? (
                <div>
                    
                    <p>Captain name: {boat.character_captain.name}</p>
                    
                </div>
                    ) : (
                    <p>No captain information available</p>
                )}
            </div>
                
              
              
            
          </div>
        </div>
      );
}

export default BoatCard