import Navigation from "../components/Navigation.jsx";
import {Outlet} from "react-router-dom";

export default function RootLayoutPage() {
    return(
        <>
            <Navigation />
            <Outlet />
        </>
    )
}