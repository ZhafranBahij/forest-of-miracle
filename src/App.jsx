import Page01 from "./page/Page01"
import Page02 from "./page/Page02"
import Page03 from "./page/Page03"
import Page04 from "./page/Page04"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function App() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <>
      <Page01></Page01>
      <Page02></Page02>
      <Page03></Page03>
      <Page04></Page04>

      <footer className="text-black bg-green-400 px-4 py-2 text-center text-desc">
        Created by Zhafran Bahij. All images from Unsplash.
      </footer>
    </>
  )
}