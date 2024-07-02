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
  },
  setUserFamilyDetails(state, value) {
state.familyDetails = value.payload
},
setUserFatherFamily(state, value) {
  state.fatherFamily = value.payload
},
setUserMotherFamily(state, value) {
  state.motherFamily = value.payload

},
setuserFriends(state, value) {
  state.friends = value.payload
},
setProperty(state, value) {
  state.property = value.payload
  },
  setSpecial(state,value){
    state.special = value.payload
  },
  setUserDashboard(state,value){
    state.dashboard = value.payload
  },
  setMainUserDashboard(state,value){
    state.mainUserDashboard = value.payload
  },
  setUsers(state,value){
    state.users = value.payload
  },
  setError(state,value){
    state.error = value.payload}
}
})

export const { setUser, setLoading,setUserContacts ,
   setUserEducation,setUserFamily,
   setUserRelative,setUserWorking,setUserFamilyDetails, setUserMotherFamily,
   setUserFatherFamily,
   setUserDashboard,
  setuserFriends,
  setMainUserDashboard,
setProperty,
setUsers,
setError,
setSpecial} = profileSlice.actions

export default profileSlice.reducer
