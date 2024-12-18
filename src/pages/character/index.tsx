import { useEffect, useState } from "react";
import { CharacterDetailService } from "@/services/characterDetail";
import { CharacterItem } from "@/interface/Item";
import { Link } from "react-router";
import ReactLoading from "react-loading";
import CharacterCard from "@/components/characterCard";

const CharacterPage = () => {
  
  const [characters, setCharacters] = useState<CharacterItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name"); // ค่าเริ่มต้น field ที่ค้นหา (เช่น name)
  const [loading, setLoading] = useState(false);
  

  const callDataAll = async () => {
    setLoading(true);

    try {
      const response = await CharacterDetailService.getCharacterAll();
      if (response.status === 200 && response.data) {
        setCharacters(response.data);
        
      }
    } catch (err) {
        console.log(err);
      
    } finally {
      setLoading(false);
    }
  };

  
  const callDataSearch = async () => {
    setLoading(true);
    
    try {
        const searchParams = {[searchField]: searchQuery };
        const response = await CharacterDetailService.getCharacterSearch(searchParams);
        if (response.status === 200 && response.data) {
        setCharacters(response.data);
        } else {
          setCharacters([]);
        }
    } catch (err) {
        console.log(err);
    } finally {
        setLoading(false);
    }
  };

  
  useEffect(() => {
    callDataAll();
  }, []);

  return (
    <div className="character-page">
        <div className="center-page flex-col justify-center w-[90%] m-[auto] max-w-[1400px]">
            <div id="navbarfruitpage" className="fixed w-[90%] rounded-lg z-10 flex justify-center min-w-[270px]  bg-[#020617] shadow-md lg:flex-wrap lg:justify-start lg:py-1 mt-2 shadow-lg shadow-cyan-500/50">
            <div className="flex w-full items-center py-3 px-5 gap-3">
                <img className="max-h-[50px]" src="/images/fruitlogo.png" alt="" />
                <label className="text-3xl font-medium w-[300px] text-left">CHARACTERS</label>
          
                <div  className="flex items-center justify-end w-full">
        
                
                    <select
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                        className="p-2 bg-[#facc15] "
                    >
                        <option value="name">Name</option>
                        <option value="job">Job</option>
                        <option value="bounty">Bounty</option>
                        <option value="age">Age</option>
                        <option value="size">Size</option>
                    </select>

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={`Search by ${searchField}`}
                        className="p-2  bg-[#92400e] "
                    />

                    <button
                        onClick={callDataSearch}
                        className=" text-white p-2 rounded"
                    >
                        Search
                    </button>
      

                    <div>
                        

                        <Link to="/">
                            <button >Home</button> 
                        </Link>
                    </div>
          
        
                </div>
            </div>
        
        
            </div>





        </div>
      <h1 className="text-3xl font-bold pt-[125px] text-[black]">One Piece Characters</h1>

      
      
      <div className="flex justify-center">
        {loading ? (
          <div className='h-[500px] flex items-center'>
            <ReactLoading  type="bars" color="#82EEFD" />
          </div>
          
        ) : (
          <div className="py-[100px] pt-[30px] p-[1%]  w-[85%] justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4   min-h-screen">
            {characters.length > 0 ? (
            characters.map((character) => <CharacterCard character={character} />)) : (
                <p>No characters found.</p>
              )}
            </div>
            )}
          
          
        
        
      </div>
      

      
      {/* <div className="character-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div
              key={character.id}
              className="character-card border p-4 rounded shadow bg-[#E5E7EB] bg-opacity-25"
            >
              <h2 className="text-xl font-bold">{character.name}</h2>
              <p>Job: {character.job}</p>
              <p>Bounty: {character.bounty}</p>
              <p>Age: {character.age}</p>
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div> */}
    </div>
  );
};

export default CharacterPage;
