import axios, { AxiosPromise} from "axios"
import { useQuery } from "@tanstack/react-query"
import { UserData } from "../interface/UserData"

const API_URL = "http://localhost:8080"

const fetchData = async(): AxiosPromise<UserData[]> => {
    const response = axios.get(API_URL + '/food')
    return response
}

export function useUserData() {
    const query = useQuery ({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    }
}