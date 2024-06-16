import axios from "axios";



export interface IDashBoardResponse{
    vouchers: number,
    campaigns: number,
    customers: number,
    redemptions: number,
    rewards: number,
}

export interface IDashBoardError {
    status: number,
}


class FetchDashBoard {

    public API_URL = import.meta.env.VITE_API_URL;
    
    constructor() {}
    /**
     * GetStats
     */
    public GetStats() : Promise<IDashBoardResponse | IDashBoardError> {
        return new Promise<IDashBoardResponse | IDashBoardError>(async (resolve, reject) => {
            const res = await axios.post(`${this.API_URL}/api/dashboard`);
            if(res.status === 200){
                resolve( res.data as IDashBoardResponse)
            }else{
                reject( { status : res.status } as IDashBoardError)
            }
        })
    }
}


const fetchDashBoard = new FetchDashBoard();

export default fetchDashBoard;