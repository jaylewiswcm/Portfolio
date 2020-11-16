import {  useEffect  } from 'react';
import { useLocation } from 'react-router-dom';

 const ScrollToTop = () => {
   const { pathname } = useLocation();
   // Once route has changed scroll page top top
   useEffect(() => {
     window.scrollTo(0,0);
   }, [pathname]);

  return null;
}

export default ScrollToTop;