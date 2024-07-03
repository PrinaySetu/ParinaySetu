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
    GET_USER_CONTACTS_API: BASE_URL + "/contact/getUserContacts",

  }

export const documentEndpoints = {
    UPLOAD_DOCUMENT_API: BASE_URL + "/documents/uploadDocuments",
    UPDATE_DOCUMENT_API: BASE_URL + "/documents/updateDocuments",
}

export const educationEndpoitns = {
    CREATE_EDUCATION_API: BASE_URL + "/education/createEducation",
    UPDATE_EDUCATION_API: BASE_URL + "/education/updateEducation",
    GET_USER_EDUCATION_API: BASE_URL + "/education/getUserEducation",
}
export const familyDetailsEndpoints = {
    ADD_FAMILY_DETAILS_API: BASE_URL + "/familyDetails/addFamilyDetails",
    UPDATE_FAMILY_DETAILS_API: BASE_URL + "/familyDetails/updatefamilyDetails",
    GET_USER_FAMILY_DETAILS_API: BASE_URL + "/familyDetails/getUserFamilyDetails",
}

export const fatherFamilyEndpoints = {
    ADD_FATHER_FAMILY_API: BASE_URL + "/fatherFamily/addFatherFamily",
    UPDATE_FATHER_FAMILY_API: BASE_URL + "/fatherFamily/updateFatherFamily",
    GET_USER_FATHER_FAMILY_API: BASE_URL + "/fatherFamily/getUserFatherFamily",
}

export const friendsEndpoints = {
    ADD_FRIEND_API: BASE_URL + "/friends/addFriends",
    UPDATE_FRIEND_API: BASE_URL + "/friends/updateFriends",
    GET_USER_FRIENDS_API: BASE_URL + "/friends/getUserFriends",
}
export const motherFamilyEndpoints = {
    ADD_MOTHER_FAMILY_API: BASE_URL + "/motherFamily/addMotherFamily",
    UPDATE_MOTHER_FAMILY_API: BASE_URL + "/motherFamily/updateMotherFamily",
    GET_USER_MOTHER_FAMILY_API: BASE_URL + "/motherFamily/getUserMotherFamily",

}
export const profileEndpoints = {
        ADD_PROFILE_API:BASE_URL+"/profile/createProfile",
        UPDATE_PROFILE_API:BASE_URL+"/profile/updateProfile",
        DELETE_PROFILE_API:BASE_URL+"profile/deleteProfile",
        GET_PROFILE_BY_ID_API:BASE_URL+"profile/getProfileById",
        ADD_RECOMMENDED_PROFILE_API:BASE_URL+"/profile/addRecommendedProfile",
        REMOVE_RECOMMENDED_PROFILE_API:BASE_URL+"profile/removeRecommendation",
        GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
        GET_USER_ADDITIONAL_DETAILS_API: BASE_URL + "/profile/getUserAdditionalDetails",
        UPDATE_RECOMMENDED_PROFILES_API: BASE_URL + "/profile/updateRecommendedProfiles",
        SHOW_ALL_RECOMMENDED_PROFILES_API: BASE_URL + "/profile/showAllRecommendedProfiles",
        GET_SINGLE_RECOMMENDED_PROFILE_API: BASE_URL + "/profile/getSingleRecommendedProfile",
        UPLOAD_PROFILE_PICTURE_API: BASE_URL + "/profile/uploadProfilePicture",
}
export const propertyEndpoints = {
    ADD_PROPERTY_API: BASE_URL + "/property/addProperty",
    UPDATE_PROPERTY_API: BASE_URL + "/property/updateProperty",
    GET_USER_PROPERTY_API: BASE_URL + "/property/getUserProperty",
}
export const relativeEndpoints = {
    ADD_RELATIVE_API: BASE_URL + "/relative/addRelative",
    UPDATE_RELATIVE_API: BASE_URL + "/relative/updateRelative",
    GET_USER_RELATIVE_API: BASE_URL + "/relative/getUserRelative",
}
export const specialEndpoints = {
    ADD_SPECIAL_API: BASE_URL + "/special/addSpecials",
    UPDATE_SPECIAL_API: BASE_URL + "/special/updateSpecial",
    GET_USER_SPECIAL_API: BASE_URL + "/special/getUserSpecials",
}
export const workingEndpoints = {
    ADD_WORKING_API: BASE_URL + "/working/addWorking",
    UPDATE_WORKING_API: BASE_URL + "/working/updateWorking",
    GET_USER_WORKING_API: BASE_URL + "/working/getUserWorking",
}

export const dashboardEndpoints = {
    GET_ALL_USERS_API: BASE_URL + "/dashboard/getAllUsers",
    GET_MAIN_USER_API: BASE_URL + "/dashboard/getMainUser",
    GET_ALL_OTHER_USERS_API: BASE_URL + "/dashboard/users",
}