import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { LoginForm } from '../pages/Login';
import { SignupForm } from '../pages/Signup';

export const router = createBrowserRouter(
    [
        {
            path: "/signup",
            element: <SignupForm />,
        },

        {
            path:"/",
            element: <Home />,
        },

        {
            path: "/login",
            element:<LoginForm />,
        },

        
    ]
)