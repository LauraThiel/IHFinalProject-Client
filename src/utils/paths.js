/* probably needs to be updated with variables once the paths are confirmed */ 

export const HOMEPAGE = "/";
export const SIGNUPPAGE = "/auth/signup";
export const LOGINPAGE = "/auth/login";

export const PROFILEPAGE = "/profile";
export const EDIT_PROFILE = "/profile/edit";
export const DELETE_PROFILE = "/profile/delete";

export const GENQUEST = "/genquest";
export const QUESTION = "/genquest/:questionID"
export const ADD_GENQUEST = "/genquest/add"
export const EDIT_GENQUEST = "/genquest/edit";
/* export const EDIT_GENQUEST = `${QUESTION}/edit"; */
export const DELETE_GENQUEST = "/genquest/delete";

export const INTERVIEWLIST = "/interviewlist"
export const SINGLEINTERVIEW = "/interviewlist/:interviewId"
export const ADD_INTERVIEW = "/interviewlist/add"
export const EDIT_INTERVIEW = "/interviewlist/edit"
export const DELETE_INTERVIEW = "/interviewlist/delete"

export const QUESTIONNAIRE = "/interviewlist/:interviewprofile/questionnaire"



export const PROTECTEDPAGE = "/protected";
