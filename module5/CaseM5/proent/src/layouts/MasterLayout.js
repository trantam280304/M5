import React from "react";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Sidebar from "./includes/Sidebar";


function MasterLayout({children}){
    return(
        <div>
            <Sidebar/>
            { children }
            <Header/>
            <Footer/>
        </div>
        )
}
export default MasterLayout;