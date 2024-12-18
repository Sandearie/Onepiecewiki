import axios from "axios";
import { OP_Fruit_list_URL } from "@/utils/constants";
import { handleResponse, IResponse } from "@/utils/handleResponse";
import { FruitItem } from "@/interface/Item";

interface IGetFruitDetailResponse extends IResponse {
    status:number | undefined;
    data?: FruitItem[];
}

export const FruitDetailService = {
    getFruitDetail: async (): Promise<IGetFruitDetailResponse> => {
        try {
            const response = await axios.get(`${OP_Fruit_list_URL}`);
            return handleResponse.success(response);
          } catch (error: any) {
            return handleResponse.error(error);
          }
    },
    
};