import React from "react";
import Header from "../global/Header";
import Hero from '../hero';
import Achieve from "../achieve";
import Chapter from "../chapter";
import Chapterpreview from "../chapter-preview";
import Pricing from "../pricing";
import Author from "../author";
import Achievements from "../achievements";
import Funfacts from "../fun-facts";
import Books from "../books";
import Reviews from "../reviews";
import Testamonial from "../testamonials";
import Video from "../video";
import Contact from "../contact";
import Footer from "../global/footer";

const MainPage = ({header,footer}) => {
    const {menu} = footer;
    return(
        <>
        <Header header={header}/>
        <Hero isBg = 'yes'/>
        <Achieve isBg = ''/> 
        <Chapter isBg = 'yes'/>
        <Chapterpreview isBg = ''/>
        <Pricing isBg = 'yes'/> 
        <Author isBg= ''/>
        <Achievements isBg='yes'/>
        <Funfacts isBg=''/>
        <Books isBg='yes'/>
        <Reviews isBg=''/>
        <Testamonial isBg='yes'/>
        <Video isBg=''/>
        <Contact isBg=''/>
        <Footer isBg='yes' menu={menu}/>
        </>
    )
}

export default MainPage;