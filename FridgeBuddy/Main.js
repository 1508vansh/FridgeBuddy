import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Header from './src/utils/Header';
import Footer from './src/utils/Footer';
function Main(){
    return(
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    );
}
export default Main;