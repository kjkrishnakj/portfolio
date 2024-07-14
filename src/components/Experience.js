import React from 'react';
import bharat_proof from "../photos/bharat_proof.png";
import next24_proof from "../photos/next24_proof.png";
import techplement_proof from "../photos/techplement_proof.png";

const Experience = () => {
    const cardHoverStyle = {
        transform: 'scale(1.05)',
    };

    const experiences = [
        { src: techplement_proof, description: "As a Project Lead in Full stack Web Development project (June - July 2004)" },
        { src: next24_proof, description: "As a Front-End Web Development Intern (June - August 2024)" },
        { src: bharat_proof, description: "As a Full stack Web Development Intern (May - June 2024)" },
    ];

    return (
        <div className='container'>
            <br />
            <br />
            <hr />
            <h1 className='my-4 shine'>Experience</h1>
            <hr />
            <div className='d-flex justify-content-center flex-wrap'>
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="d-flex flex-column align-items-center"
                        style={{ margin: "1rem", width: "18rem", textAlign: 'center' }}
                    >
                        <div
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = cardHoverStyle.transform;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                            style={{ transition: 'transform 0.3s ease' }}
                        >
                            <a href={experience.src} target="_blank" rel="noreferrer">
                                <img
                                    src={experience.src}
                                    alt=""
                                    style={{
                                        height: "12rem",
                                        borderRadius: "0.125rem",
                                        boxShadow: "0 0 12px rgba(71, 175, 165, 0.8)",
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </a>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            {experience.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
