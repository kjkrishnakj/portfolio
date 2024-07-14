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
                    <a href={solve_thon} target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                            <img src={solve_thon} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">Solve-a-Thon</div>
                            </div>
                        </div>
                    </a>

                </div>
                <div className="col-md-4">
                    <a href={eco_urban} target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                            <img src={eco_urban} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">EcoUrban Nexus Hackathon</div>
                            </div>
                        </div>
                    </a>

                </div>
                <div className="col-md-4">
                    <a href={{math_certificate}} target="_blank" rel="noreferrer">
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
