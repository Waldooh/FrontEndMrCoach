const routes = {
    routines: "/routines",
    exercises: "/exercises",
    pupils: "/pupils",
    blog: "/blog",
    chat: "/chat",
    profile: "/profile",
    login: "/login",
    coachForm: "/signup/coachform",
    studentForm: "/signup/studentform",
    signup: (accountType) => accountType ? `/signup/:${accountType}` : "/signup/:accountType",
    landing: "/landing",
}

export default routes;