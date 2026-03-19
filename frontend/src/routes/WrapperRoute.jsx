import MainMenu from "../components/MainMenu";
import { Outlet } from 'react-router-dom';

function WrapperRoute() 
{
    return(
        <>
            <MainMenu></MainMenu>
            <Outlet></Outlet>
        </>
    )
}

export default WrapperRoute;