import axios, { AxiosInstance } from "axios"


const instance: AxiosInstance = axios.create({
  baseURL: "https://app-22c52576-ffaa-44f5-8dc7-968c2c19ecda.cleverapps.io/",
})

export const getData = async ({ queryKey }: any) => {
  const [_key] = queryKey
  const response = await instance.get(`pages/get?page=${_key}`)
  return response.data
}
