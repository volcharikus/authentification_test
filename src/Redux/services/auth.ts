import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MockedResponse, UserSignUpData} from "../../types";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://656a0cc9de53105b0dd8116a.mockapi.io'}),
    endpoints: (builder) => ({
        postAuthWithPhone: builder.mutation<MockedResponse, { phone: string }>({
            query: (newUserData) => ({
                url: '/auth',
                method: 'POST',
                body: newUserData,
            }),
        }),
        postAuthWithCode: builder.mutation<MockedResponse, { code: string }>({
            query: (newCodeData) => ({
                url: '/auh',
                method: 'POST',
                body: newCodeData,
            }),
        }),
        postUserData: builder.mutation<MockedResponse, UserSignUpData>({
            query: (userData) => ({
                url: '/auth',
                method: 'POST',
                body: userData,
            }),
        }),
        patchUserData: builder.mutation<MockedResponse, { avatar: File | null }>({
            query: (userData) => ({
                url: '/auth',
                method: 'PATCH',
                body: userData,
            }),
        }),
    }),
});

export const {
    usePostAuthWithPhoneMutation,
    usePostAuthWithCodeMutation,
    usePostUserDataMutation,
    usePatchUserDataMutation,
} = authApi;