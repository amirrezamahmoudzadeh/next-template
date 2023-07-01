import axios, { AxiosInstance } from "axios"

import { ApiResponse } from "./types"

const instance: AxiosInstance = axios.create({
  baseURL:
    "https://app-22c52576-ffaa-44f5-8dc7-968c2c19ecda.cleverapps.io/",
})

export const homeData = async (): Promise<
  ApiResponse<string>
> => {
  const response = await instance.get(
    `pages/get?page=home`
  )
  return response.data
}
