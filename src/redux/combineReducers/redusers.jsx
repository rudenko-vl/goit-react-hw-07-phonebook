// import { createReducer } from '@reduxjs/toolkit';
// import { newItem, deleteItem, changeFilter } from './actions';

// export const items = createReducer(
//     JSON.parse(localStorage.getItem('contacts')) ?? [],
//     {
//         [newItem]: (state, action) => {
//             window.localStorage.setItem(
//                 'contacts',
//                 JSON.stringify([...state, action.payload])
//             );

//             return [...state, action.payload];
//         },
        
//         [deleteItem]: (state, action) => {
//             return [...state.filter(item => item.id !== action.payload)];
//         },
//     }
// );

// export const filter = createReducer('', {
//   [changeFilter]: (state, action) => {
//     return action.payload;
//   },
// });