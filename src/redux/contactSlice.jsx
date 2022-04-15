import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";

export const contactSlice = createSlice(
    {
        name: 'contacts',
        initialState: {
            items: JSON.parse(localStorage.getItem('contacts')) ?? [],
            filter: "",
        }, 
        reducers: {
            newItem: (state, action) => {
                state.items.push(
                    {
                        name: action.payload.name,
                        id: nanoid(),
                        number: action.payload.number,
                    }
                );
                window.localStorage.setItem(
                'contacts',
                JSON.stringify(state.items)
                );
            },

            deleteItem(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload)
            },

             changeFilter(state, action) {
            state.filter = action.payload;
            },
        }
    }
);


export const { newItem, deleteItem, changeFilter } = contactSlice.actions;