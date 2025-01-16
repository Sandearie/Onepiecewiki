import { useEffect, useState } from "react";
import { BoatDetailService } from "@/services/boatDetail";
import {  BoatItem } from "@/interface/Item";
import { Link } from "react-router";
import ReactLoading from "react-loading";
import BoatCard from "@/components/boatCard";
import logo from "/images/sunnyhead.png"

const BoatPage = () => {
  const [boats, setBoats] = useState<BoatItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name"); // ค่าเริ่มต้น field ที่ค้นหา (เช่น name)
  const [loading, setLoading] = useState(false);

  const callDataAll = async () => {
    setLoading(true);
    try {
      const response = await BoatDetailService.getBoatAll();
      if (response.status === 200 && response.data) {
        setBoats(response.data);
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
      const searchParams = { [searchField]: searchQuery };
      const response = await BoatDetailService.getBoatSearch(searchParams);
      if (response.status === 200 && response.data) {
        setBoats(response.data);
      } else {
        setBoats([]);
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
    <div className="boat-page">
      <div className="center-page flex-col justify-center w-[90%] m-[auto] max-w-[1400px]">
        <div
          id="navbarboatpage"
          className="fixed w-[90%] rounded-lg z-10 flex justify-center min-w-[270px] bg-[#020617] shadow-md lg:flex-wrap lg:justify-start lg:py-1 mt-2 shadow-lg shadow-cyan-500/50"
        >
          <div className="flex w-full items-center py-3 px-5 gap-3">
            <img className="max-h-[50px]" src={logo} alt="" />
            <label className="text-3xl font-medium w-[300px] text-left">
              SHIPS
            </label>

            <div className="flex items-center justify-end w-full">
              <select
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                className="p-2 bg-[#facc15]"
              >
                <option value="name">Name</option>
                <option value="status">Status</option>
                <option value="status">Captain</option>
              </select>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search by ${searchField}`}
                className="p-2 bg-[#92400e]"
              />

              <button onClick={callDataSearch} className="text-white p-2 rounded">
                Search
              </button>

              <div>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold pt-[125px] text-[black]"></h1>

      <div className="flex justify-center">
        {loading ? (
          <div className="h-[500px] flex items-center">
            <ReactLoading type="bars" color="#82EEFD" />
          </div>
        ) : (
          <div className="py-[100px] pt-[30px] p-[1%] w-[85%] justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen">
            {boats.length > 0 ? (
              boats.map((boat) => <BoatCard boat={boat} key={boat.id} />)
            ) : (
              <p>No boats found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BoatPage;
