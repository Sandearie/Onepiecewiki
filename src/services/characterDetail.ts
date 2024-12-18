import axios from "axios";
import { OP_CHARACTER_LIST_URL } from "@/utils/constants";
import { OP_CHARACTER_SEARCH_URL } from "@/utils/constants";

import { handleResponse, IResponse } from "@/utils/handleResponse";
import { CharacterItem } from "@/interface/Item";

interface IGetCharacterDetailResponse extends IResponse {
    status:number | undefined;
    data?: CharacterItem[];
}


export const CharacterDetailService = {
    getCharacterAll: async (): Promise<IGetCharacterDetailResponse> => {
        try {
            const response = await axios.get(`${OP_CHARACTER_LIST_URL}`);
            return handleResponse.success(response);
          } catch (error: any) {
            return handleResponse.error(error);
          }
    },
    getCharacterSearch: async (
        searchParams: { [key: string]: string } 
      ): Promise<IGetCharacterDetailResponse> => {
        try {
          const query = new URLSearchParams(searchParams).toString();
          const response = await axios.get(`${OP_CHARACTER_SEARCH_URL}?${query}`);
          return handleResponse.success(response);
        } catch (error: any) {
          return handleResponse.error(error);
        }
      },
    
};