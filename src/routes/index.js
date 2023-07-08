// Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";


// Public routes
const publicRoutes = [
    { name: 'Home', path: '/', component: Home },
    { name: 'Following', path: '/following', component: Following },
    { name: 'Profile', path: '/profile', component: Profile },
    { name: 'Upload', path: '/upload', component: Upload, layout: HeaderOnly },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }