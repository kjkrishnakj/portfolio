import React from 'react'

import htmlcss_thumb from "../photos/htmlcss_thumb.jpeg"
import c_thumb from "../photos/c_thumb.png"
import cpp_thumb from "../photos/c++_thumb.png"
import python_thumb from "../photos/pyhton_thumb.png"
import java_thumb from "../photos/java_thumb.jpg"
import bootsrap_sthumb from "../photos/bootstrap_sthumb.png"
import nodejs_thumb from "../photos/nodejs_thumb.png"
import opencv_thumb from "../photos/opencv_thumb.jpeg"
import matlab_thumb from "../photos/matlab_thumb.png"
import js_thumb from "../photos/js_thumb.png"
import react_thumb from "../photos/react_thumb.png"
import jquery_thumb from "../photos/jquery_thumb.jpg"


function Skills() {
    return (
        <div className='container'>
            <br />
            <br />
            <hr />
            <h1 className='my-3 shine'>Skill Set</h1>
            <hr />


            <div className='row mt-5 '>
                <div className="col-md-4">

                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={python_thumb} style={{ height: "12rem" }} className="card-img-top" alt="..." />

                    </div>
                

                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={c_thumb} style={{ height: "12rem" }} className="card-img-top shine2" alt="..." />

                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={cpp_thumb} className="card-img-top shine2" alt="..." />

                    </div>

                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">

                    <div className="card  mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={java_thumb} style={{ height: "12rem" }} className="card-img-top  " alt="..." />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={js_thumb} style={{ height: "12rem" }} className="card-img-top  " alt="..." />

                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={nodejs_thumb} style={{ height: "12rem" }} className="card-img-top shine2 hover-zoom " alt="..." />

                    </div>

                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">

                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={htmlcss_thumb} style={{ height: "12rem" }} className="card-img-top shine2 " alt="..." />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={bootsrap_sthumb} style={{ height: "12rem" }} className="card-img-top shine2 " alt="..." />

                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={react_thumb} style={{ height: "12rem" }} className="card-img-top shine2 " alt="..." />

                    </div>

                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">

                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={jquery_thumb} style={{ height: "12rem" }} className="card-img-top shine2 " alt="..." />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={opencv_thumb} style={{ height: "12rem" }} className="card-img-top shine2 " alt="..." />

                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={matlab_thumb} style={{ height: "12rem" }} className="card-img-top shine2 " alt="..." />

                    </div>

                </div>
            </div>


        </div>




    )
}

export default Skills
