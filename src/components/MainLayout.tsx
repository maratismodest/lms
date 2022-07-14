import React from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
};

export default MainLayout;
