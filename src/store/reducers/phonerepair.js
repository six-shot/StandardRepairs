import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://standard-backend.onrender.com",
});

export const phoneApi = createApi({
  reducerPath: "phoneApi",
  baseQuery: baseQuery,
  tagTypes: ["Phones"],
  endpoints: (builder) => ({
    getPhones: builder.query({
      query: () => "/api/phonerepair",

      providesTags: ["Phones"],
    }),
    getPhone: builder.query({
      query: (id) => `/api/phonerepair/${id}`,
      providesTags: ["Phones"],
    }),
    addPhone: builder.mutation({
      query: (phone) => ({
        url: "/api/phonerepair",
        method: "POST",
        body: phone,
      }),
      invalidatesTags: ["Phones"],
    }),
    updatePhone: builder.mutation({
      query: (id) => ({
        url: `/api/phonerepair/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Phones"],
    }),
    deletePhone: builder.mutation({
      query: ({ id }) => ({
        url: `/api/phonerepair/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Phones"],
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useGetPhoneQuery,
  useAddPhoneMutation,
  useUpdatePhoneMutation,
  useDeletePhoneMutation,
} = phoneApi;
