const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }

  export const contactEndpoints = {
    CREATE_CONTACT_API: BASE_URL + "/contact/createContacts",
    UPDATE_CONTACT_API: BASE_URL + "/contact/updateContacts",

  }

export const documentEndpoints = {
    UPLOAD_DOCUMENT_API: BASE_URL + "/documents/uploadDocuments",
    UPDATE_DOCUMENT_API: BASE_URL + "/documents/updateDocuments",
}

export const educationEndpoitns = {
    CREATE_EDUCATION_API: BASE_URL + "/education/createEducation",
    UPDATE_EDUCATION_API: BASE_URL + "/education/updateEducation",
}
export const familyDetailsEndpoints = {
    ADD_FAMILY_DETAILS_API: BASE_URL + "/familyDetails/addFamilyDetails",
    UPDATE_FAMILY_DETAILS_API: BASE_URL + "/familyDetails/updatefamilyDetails",
    UPDATE_BROTHER_API: BASE_URL + "/familyDetails/updatebrother",
    UPDATE_SISTER_API: BASE_URL + "/familyDetails/updatesister",
    REMOVE_SIBLING_API: BASE_URL + "/familyDetails/removeSibling",
}

export const fatherFamilyEndpoints = {
    ADD_FATHER_FAMILY_API: BASE_URL + "/fatherFamily/addFatherFamily",
    UPDATE_FATHER_FAMILY_API: BASE_URL + "/fatherFamily/updateFatherFamily",
    UPDATE_TAU_API: BASE_URL + "/fatherFamily/updateTau",
    UPDATE_BUA_API: BASE_URL + "/fatherFamily/updateBua",
}

export const friendsEndpoints = {
    ADD_FRIEND_API: BASE_URL + "/friends/addFriends",
    UPDATE_FRIEND_API: BASE_URL + "/friends/updateFriends",
    DELETE_FRIEND_API: BASE_URL + "/friends/deleteFriends",
}
export const profileEndpoints = {
        ADD_PROFILE_API:BASE_URL+"profile/createProfile",
        UPDATE_PROFILE_API:BASE_URL+"profile/updateProfile",
        DELETE_PROFILE_API:BASE_URL+"profile/deleteProfile",
        GET_PROFILE_BY_ID_API:BASE_URL+"profile/getProfileById",
        ADD_RECOMMENDED_PROFILE_API:BASE_URL+"profile/addRecommendedProfile",
        REMOVE_RECOMMENDED_PROFILE_API:BASE_URL+"profile/removeRecommendation",
        GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
}
export const propertyEndpoints = {
    ADD_PROPERTY_API: BASE_URL + "/property/addProperty",
    UPDATE_PROPERTY_API: BASE_URL + "/property/updateProperty",
    // DELETE_PROPERTY_API: BASE_URL + "/property/deleteProperty",
}
export const relativeEndpoints = {
    ADD_RELATIVE_API: BASE_URL + "/relative/addRelative",
    UPDATE_RELATIVE_API: BASE_URL + "/relative/updateRelative",
    DELETE_RELATIVE_API: BASE_URL + "/relative/deleteRelative",
}
export const specialEndpoints = {
    ADD_SPECIAL_API: BASE_URL + "/special/addSpecial",
    UPDATE_SPECIAL_API: BASE_URL + "/special/updateSpecial",
    DELETE_SPECIAL_API: BASE_URL + "/special/deleteSpecial",
}
export const workingEndpoints = {
    ADD_WORKING_API: BASE_URL + "/working/addWorking",
    UPDATE_WORKING_API: BASE_URL + "/working/updateWorking",
    DELETE_WORKING_API: BASE_URL + "/working/deleteWorking",
}