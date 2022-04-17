import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['contacts'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://625c358c50128c57020c2e41.mockapi.io/'}),
    endpoints: (build) => ({
        getContacts: build.query({
            query: (filter = '') => `/contacts?${filter && `filter=${filter}`}`,
            providesTags: (result) => result
              ? [
                  ...result.map(({ id }) => ({ type: 'contacts', id })),
                  { type: 'contacts', id: 'LIST' },
                ]
              : [{ type: 'contacts', id: 'LIST' }],
        }),
        newContacts: build.mutation({
            query: (body) => ({
                url: 'contacts',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'contacts', id: 'LIST'}]
        }),
        deleteContact: build.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'contacts', id: 'LIST'}]
        })
    })
});

export const { useGetContactsQuery, useDeleteContactMutation, useNewContactsMutation} = contactsApi;