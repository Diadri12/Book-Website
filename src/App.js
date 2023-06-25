import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './assets/css/margins-paddings.css'
import MainPage from "./components/pages/MainPage";
import AOS from 'aos';
import { useEffect } from "react";
import './assets/css/aos.css';
import HeaderData from './data/header.json';
import FooterData from './data/footer.json';

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);
  return null;
}


function App() {
  const {header} = HeaderData;
  const {footer} = FooterData;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainPage header = {header} footer = {footer} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
