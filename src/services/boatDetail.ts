import axios from "axios";
import { OP_BOAT_LIST_URL } from "@/utils/constants";
import { OP_BOAT_SEARCH_URL } from "@/utils/constants";

import { handleResponse, IResponse } from "@/utils/handleResponse";
import { BoatItem } from "@/interface/Item";

interface IGetBoatDetailResponse extends IResponse {
    status:number | undefined;
    data?: BoatItem[];
}


export const BoatDetailService = {
    getBoatAll: async (): Promise<IGetBoatDetailResponse> => {
        try {
            const response = await axios.get(`${OP_BOAT_LIST_URL}`);
            return handleResponse.success(response);
          } catch (error: any) {
            return handleResponse.error(error);
          }
    },
    getBoatSearch: async (
        searchParams: { name?: string; status?: string } 
      ): Promise<IGetBoatDetailResponse> => {
        try {
          const query = new URLSearchParams(searchParams).toString();
          const response = await axios.get(`${OP_BOAT_SEARCH_URL}?${query}`);
          return handleResponse.success(response);
        } catch (error: any) {
          return handleResponse.error(error);
        }
      },
    
};