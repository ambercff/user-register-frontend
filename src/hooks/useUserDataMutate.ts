import axios, { AxiosPromise } from "axios"
import { UserData } from "../interface/UserData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const postData = async(data: UserData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/user', data)
    return response
}

export function useUserDataMutate() {
    const queryClient = useQueryClient()

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2
    });

    return mutate
}