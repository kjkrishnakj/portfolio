import React from 'react'
import resume from "../photos/resume.png";

function Resume() {
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <hr />
                <h1 className='my-4 shine'>Resume</h1>
                <hr className='mb-5'/>



                <div className="col d-flex justify-content-center">
    <a href="https://drive.google.com/file/d/1IyaQZEsWScCcgQdieWmmGggEwE1FkMZk/view?usp=sharing" target="_blank" rel="noreferrer">
        <div className="card position-relative" style={{ width: "18rem", boxShadow: "0 0 20px rgba(71, 175, 165, 0.8)" }}>
            <img src={resume} className="card-img-top" style={{ height: "24rem", objectFit: "cover", borderRadius: "10px" }} alt="Resume" />
        </div>
    </a>
</div>


            </div>
        </>

    )
}

export default Resume
