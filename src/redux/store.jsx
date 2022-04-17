import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from "./contactsApi";

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(contactsApi.middleware)
});