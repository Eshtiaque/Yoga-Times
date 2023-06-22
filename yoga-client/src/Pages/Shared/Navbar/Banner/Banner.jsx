import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import {  Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
        <>
            <Carousel className="bg-black pb-3">
                <div>

                    <img src="https://i.ibb.co/qYgvz7W/wallpaperflare-com-wallpaper-1.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/frd8mMy/women-model-brunette-ponytail-wallpaper-preview.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/TwD9Ztb/pose-group-workout-yoga-wallpaper-preview.jpg" />

                </div>
            </Carousel>
            <div className="">
                <div className='text-white space-y-7 w-full pl-4  ps-7  items-center bg-black '>
                <Slide> <h2 className='lg:text-8xl text-4xl md:text-6xl font-bold '>Let<span className="text-cyan-400">&#39;</span>s <span className="text-cyan-400">Yoga </span>!</h2></Slide>
                    <Slide className="  text-xl" >
                        <p >Yoga is a type of exercise in which you move your body <br />into various positions in order to become more fit <br /> or flexible, to improve your breathing,<br /> and to relax your mind.
                        </p>
                    </Slide>
                    <div >
                        <Link to="/login"><button className='text-lg w-2/4 mb-3  btn btn-outline text-cyan-400'>LOG-IN</button></Link>

                    </div>

                </div>

            </div>
        </>

    );
};

export default Banner;




















