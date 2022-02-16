const routes = {
    report: "/report",
    calendar: "/calendar",
    gallery: "/gallery",
    routines: "/routines",
    exercises: "/exercises",
    pupils: "/pupils",
    blog: "/blog",
    chat: "/chat",
    profile: "/profile",
    login: "/login",
    explore: "/explore",
    coachForm: "/signup/coachform",
    studentForm: "/signup/studentform",
    signup: (accountType) => accountType ? `/signup/:${accountType}` : "/signup/:accountType",
    landing: "/",
}

export default routes;