import React from 'react'
import resume from "../photos/resume_pic.png";

function Resume() {
    const cardStyle = {
        width: '18rem',
        boxShadow: '0 0 20px rgba(71, 175, 165, 0.8)',
        transition: 'transform 0.3s ease',
        borderRadius: '10px',
    };

    const imgStyle = {
        height: '24rem',
        objectFit: 'cover',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)',
    };
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <hr />
                <h1 className='my-4 shine'>Resume</h1>
                <hr className='mb-5'/>



                <div className="col d-flex justify-content-center">
            <a href={resume} target="_blank" rel="noreferrer">
                <div
                    className="card position-relative"
                    style={cardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = cardHoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <img src={resume} className="card-img-top" style={imgStyle} alt="Resume" />
                </div>
            </a>
        </div>


            </div>
        </>

    )
}

export default Resume
