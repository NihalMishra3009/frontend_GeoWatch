import axios from "axios"
import type { Cluster } from "../types/cluster"
import type { Event } from "../types/event"

/*
  Environment variable example (.env)
  VITE_API_BASE_URL=https://geowatch-production.up.railway.app
*/

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://geowatch-production.up.railway.app"

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
})

/* ---------------- ADMIN TYPES ---------------- */

export interface RegisterAdminPayload {
  name: string
  email: string
  password: string
}

export interface LoginAdminPayload {
  email: string
  password: string
}

/* ---------------- EVENT TYPES ---------------- */

export interface OrganizerPayload {
  name: string
  phoneNumber: string
}

export interface CreateEventPayload {
  name: string
  centerLat: number
  centerLng: number
  radius: number
  startTime: string
  endTime: string
  adminId: number
  organizers: OrganizerPayload[]
}

/* ---------------- ADMIN APIs ---------------- */

export const registerAdmin = async (payload: RegisterAdminPayload) => {
  const { data } = await api.post("/admin/register", payload)
  return data
}

export const loginAdmin = async (payload: LoginAdminPayload) => {
  const { data } = await api.post("/admin/login", payload)
  return data
}

/* ---------------- EVENT APIs ---------------- */

export const createEvent = async (payload: CreateEventPayload) => {
  const { data } = await api.post("/events", payload)
  return data
}

export const getEventById = async (eventId: string) => {
  const { data } = await api.get<Event>(`/events/${eventId}`)
  return data
}

export const getActiveEvents = async () => {
  const { data } = await api.get<Event[]>("/events/admin/active")
  return data
}

/* ---------------- CLUSTER APIs ---------------- */

export const getClustersByEventId = async (eventId: string) => {
  const { data } = await api.get<Cluster[]>(`/admin/clusters/${eventId}`)
  return data
}

/* ---------------- ERROR INTERCEPTOR ---------------- */

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api
