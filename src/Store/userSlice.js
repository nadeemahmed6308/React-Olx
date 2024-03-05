import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, data) => {
            console.log('data.payload', data.payload)
            state.user = data.payload
        },
        removeUser: state => {
            state.user = {}
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice
