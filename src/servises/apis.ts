import axios, { AxiosInstance } from "axios";
import { BugTrackingApiResponse } from './types/useCase/bug-tracking';
import { HomeApiResponse } from "./types/useCase/home";
import { UserAcceptanceApiResponse } from "./types/useCase/user_acceptance_testing";


const instance: AxiosInstance = axios.create({
  baseURL:
    "https://app-22c52576-ffaa-44f5-8dc7-968c2c19ecda.cleverapps.io/",
})

export const homeData = async (): Promise<HomeApiResponse> => {
  const response = await instance.get(`pages/get?page=home`)
  return response.data
}
export const bugTrackingData = async (): Promise<BugTrackingApiResponse> => {
  const response = await instance.get(`pages/get?page=bug_tracking`)
  return response.data
}
export const userAcceptanceTestingData =
  async (): Promise<UserAcceptanceApiResponse> => {
    const response = await instance.get(
      `pages/get?page=user_acceptance_testing`
    )
    return response.data
  }