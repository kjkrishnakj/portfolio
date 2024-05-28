import React from 'react'


import solve_thon from "../photos/solve_thon.png"
import math_certificate from "../photos/math_certificate.png"
import eco_urban from "../photos/eco_urban.png"

export default function Projects() {
    return (
        <div className='container'>
            <br />
            <br />
            <hr />
            <h1 className='my-4 shine'>Certificates</h1>
            <hr />

            <div className='row mt-5'>
                
                <div className="col-md-4">
                    <a href="https://drive.google.com/file/d/1I-z8effsEeTnUbdUtsIxkmRfbfUotphP/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                            <img src={solve_thon} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">Solve-a-Thon</div>
                            </div>
                        </div>
                    </a>

                </div>
                <div className="col-md-4">
                    <a href="https://drive.google.com/file/d/1HznweY7qmB_I-Z8DAWu08vB11d3mTH-S/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                            <img src={eco_urban} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">EcoUrban Nexus Hackathon</div>
                            </div>
                        </div>
                    </a>

                </div>
                <div className="col-md-4">
                    <a href="https://drive.google.com/file/d/1RLqsYBP6OiVRgVhacvgWQRrQegGRI9Ma/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                            <img src={math_certificate} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">Mathematical Research</div>
                            </div>

                        </div>
                    </a>

                </div>
            </div>


        </div>



    )
}
