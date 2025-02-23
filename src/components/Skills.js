import React from 'react'
import Carousel from 'react-multi-carousel';

import htmlcss_thumb from "../photos/htmlcss_thumb.jpeg"
import c_thumb from "../photos/c_thumb.png"
import cpp_thumb from "../photos/c++_thumb.png"
import python_thumb from "../photos/pyhton_thumb.png"
import java_thumb from "../photos/java_thumb.jpg"
import nodejs_thumb from "../photos/nodejs_thumb.png"
import opencv_thumb from "../photos/opencv_thumb.jpeg"
import js_thumb from "../photos/js_thumb.png"
import react_thumb from "../photos/react_thumb.png"
// import jquery_thumb from "../photos/jquery_thumb.jpg"
import angular_thumb from "../photos/angular_thumbnail.png"
import nextjs_thumbnail from "../photos/nextjs_thumbnail.png"
import docker_thumbnail from "../photos/docker_icon.png"
import 'react-multi-carousel/lib/styles.css';

const images = [
    { src: python_thumb, alt: 'Python' },
    { src: c_thumb, alt: 'C' },
    { src: cpp_thumb, alt: 'C++' },
    { src: java_thumb, alt: 'Java' },
    { src: js_thumb, alt: 'JavaScript' },
    { src: nodejs_thumb, alt: 'Node.js' },
    { src: htmlcss_thumb, alt: 'HTML & CSS' },
    { src: docker_thumbnail, alt: 'Docker' },
    { src: react_thumb, alt: 'React' },
    { src: angular_thumb, alt: 'Angular' },
    { src: opencv_thumb, alt: 'OpenCV' },
    { src: nextjs_thumbnail, alt: 'Next.js' },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export default function Skills() {
    return (
        <div className="container">
  <br />
            <br />
            <hr />
            <h1 className='my-4 shine'>Skills</h1>
            <hr />

            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1500}
                infinite={true}
            >
                {images.map((image, index) => (
                    <div key={index} className="card mx-3 my-2" style={{ width: "18rem" }}>
                        <img src={image.src} style={{ height: "12rem" }} className="card-img-top" alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
