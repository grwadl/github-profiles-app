import MainPage from "../pages/mainPage/MainPage";
import AuthPage from '../pages/authPage/AuthPage';
import RigistrPage from '../pages/registrPage/RigistrPage';
import RecentlyViewed from "../pages/recentlyViewedPage/RecentlyViewed";
export const privateRoutes = [
    { path: '/*', component: <MainPage /> },
    { path: '/recently', component: <RecentlyViewed/> }
]
export const publicRoutes = [
    { path: '/*', component: <AuthPage /> },
    { path: '/reg', component: <RigistrPage/> },
]