import { createBrowserRouter } from 'react-router-dom';
import LogIn from "../pages/authentication/LogIn";
import Wrapper from '../layout/Wrapper';
import Home from '../pages/Home';
import AboutUS from '../pages/AboutUS'
import OurServices from '../pages/OurServices';
import Commiunitis from '../pages/Communities';
import Gallery from '../pages/Gallery';
import Portfolio from '../pages/Portfolio';
import Faq from '../pages/Faq';
import TermsAndConditions from '../pages/TermsAndConditions';
import ContactUS from '../pages/ContactUS';
import SearchResult from '../components/SearchResult';
import ActualPropertyPage from '../components/ActualPropertyPage';

const Routes = createBrowserRouter([
{
    path:"/login",
    element: <LogIn/>,
},
{
    path: "/",
    element: <Wrapper/>,
    children: [
        {
            path:"/",
            element: <Home/>, 
        },
        {
            path:"/aboutUs",
            element: <AboutUS/>, 
        },
        {
            path:"/ourServices",
            element: <OurServices/>, 
        },
        {
            path:"/communities",
            element: <Commiunitis/>, 
        },
        {
            path:"/gallery",
            element: <Gallery/>, 
        },
        {
            path:"/portfolio",
            element: <Portfolio/>, 
        },
        {
            path:"/faq",
            element: <Faq/>, 
        },
        {
            path:"/terms&conditions",
            element: <TermsAndConditions/>, 
        },
        {
            path:"/contactUs",
            element:<ContactUS/>
        },
        {
            path:"/searchResult",
            element:<SearchResult/>
        },
        {
            path: "/property/:id",
            element: <ActualPropertyPage/>
        }
    ],
}
]); 
 

export default Routes