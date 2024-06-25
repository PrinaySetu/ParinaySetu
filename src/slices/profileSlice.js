import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  loading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
    setUserContacts(state, value) {
      state.contacts = value.payload
  },
  setUserEducation(state, value) {
    state.education = value.payload 
  },
  setUserWorking(state, value) {
    state.working = value.payload
  },
  setUserRelative(state, value) {
    state.relative = value.payload
  },
  setUserFamily(state, value) {
    state.family = value.payload
  }

}
})

export const { setUser, setLoading,setUserContacts , setUserEducation,setUserFamily,setUserRelative,setUserWorking} = profileSlice.actions

export default profileSlice.reducer
