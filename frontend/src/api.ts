import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    healthCheck: builder.query<string, void>({
      query: () => ({
        url: "/healthcheck",
        method: "GET",
        responseHandler: (r) => r.text(),
      }),
    }),
  }),
})
