import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Carousel() {

    return (
        <section className='carousle-section'>
            <div className='container '>
                 <h2 className='container-title wow animate__animated animate__fadeInUp mb-5' data-wow-delay="3.5s"
            data-wow-duration="3.5s"     >
            Explore the world, One Country at a Time.
          </h2>
                <OwlCarousel className='owl-theme' loop margin={10} dots={false} nav={false} autoplay autoplayTimeout={2000} smartSpeed={250}>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>;
                
            </div>
        </section>
    )
}

export default Carousel
