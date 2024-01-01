import React from 'react'
import face from "./face.jpg"
import Projects from './Projects'
const Home = () => {
    return (
        <div className='container'   >
            <div className="row ">
                <div className="col-md-6 my-3 h-100 d-flex align-items-center">
                    <img src={face} alt="Description of the image" style={{width: "8cm", height : "8cm",borderRadius :"8cm"}} />
                </div>

                <div className="col-md-6">
                    <h1  className = "shine" style={{fontSize:"2cm",marginTop:"1.7cm "}}>Krishna Jaiswal</h1>
                    <h2>Full Stack Web Developer</h2>
                    <h6 className='mt-3'>
                        Passionate to Build multiple projects
                        Started my Web Dev journey in 2023,
                        and my mission is to excel it as soon as possible           
                    </h6>
                </div>
                
            </div>
            <br />
            <br />

            <hr />
           
        </div>
    )
}

export default Home
