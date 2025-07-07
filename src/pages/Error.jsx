import React from 'react'
import { useRouteError } from 'react-router-dom'
// import gsap from 'gsap';
import { NavLink as Navlink } from 'react-router-dom'
import "../error.css"





const Error = () => {

    const error = useRouteError()


    window.onload = function () {
    setTimeout(function () {
      const btn = document.querySelector(".delayed-button");
      if (btn) {
        btn.click(); // Programmatically click the button
      }
    }, 5000); // 7 seconds
  };

    // const timeline = gsap.timeline({ defaults: { duration: 1 } });
    // timeline
    //     .fromTo(
    //         ".search",
    //         { x: "-200px", y: "100px", opacity: 0 },
    //         {
    //             x: "200px",
    //             y: "-100px",
    //             rotate: 40,
    //             opacity: 1,
    //             yoyo: true
    //         }
    //     )
    //     .to("h1", { y: "0", ease: "bounce", opacity: 1 })
    //     .to(".search", { x: "0", y: "0", rotate: 0, ease: "bounce" })
    //     .fromTo("h2", { opacity: 0 }, { opacity: 1, delay: 0.2 });



    return (
        <main className='errr-p'>
            <div class="container"><span class="material-symbols-outlined search">search</span>
                <h1 class="h1">404</h1>
                <h2>Not Found</h2>
                <Navlink to="/" className="delayed-button flex justify-center "><button >Go Home</button></Navlink>
            </div>
        </main>
    )
}

export default Error
