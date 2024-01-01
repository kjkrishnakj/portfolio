import React from 'react'

function About() {
    return (
        <div className='container'>
            <br />
            <br />
            <hr />
            <h1 className='my-3 shine'>About</h1>

            <div className="row">
                <div className="col-md-6">
                    <hr />
                    <h4 className='my-4 shine'>Education</h4>
                    <p>
                        <a href="https://stxaviersschoolbhiwadi.com/"  target='_blank' rel="noreferrer"  style={{textDecoration:"none",color:"#47afa5"}}>
                            2005-2019 Intermediate Education St. Xavier School
                        </a>
                    </p>
                    <br />
                    <p>
                    <a href="https://stxaviersschoolbhiwadi.com/"  target='_blank' rel="noreferrer"  style={{textDecoration:"none",color:"#47afa5"}}>
                        2019-2021 Higher School Education
                        St. Xavier School
                    </a>
                    </p>
                    <br />
                    <p>
                    <a href="https://chennai.vit.ac.in/"  target='_blank' rel="noreferrer"  style={{textDecoration:"none",color:"#47afa5"}}>
                        2022-2026 B.Tech Engineering
                        VIT Chennai 
                    </a>
                    </p>
                </div>
                <div className="col-md-6">
                    <hr />
                    <h4 className='my-4 shine' >Contact</h4>
                    <p className='shine'><i className="fa-brands  mx-1 fa-github" style={{color: "#47afa5;"}}></i><a href="https://github.com/kjkrishnakj"  target='_blank' rel="noreferrer"   style={{textDecoration:"none",color:"#47afa5"}}> Github </a></p>
                    <p className='shine'><i className="fa-brands  mx-1 fa-linkedin" style={{color: "#47afa5;"}}></i><a href="https://www.linkedin.com/in/krishna-jaiswal-383122248/"  target='_blank' rel="noreferrer"  style={{textDecoration:"none",color:"#47afa5"}}> Linkedin </a></p>
                    <p className='shinei'><i className="fa-brands  mx-1 fa-instagram" style={{color: "#47afa5;"}}></i><a href="https://www.instagram.com/kj_krishna_kj"  target='_blank' rel="noreferrer"  style={{textDecoration:"none",color:"#47afa5"}}> Instagram</a></p>
                    <p className='shine'><i className="fa-brands  mx-1 fa-x-twitter" style={{color: "#47afa5;"}}></i><a href="https://twitter.com/Krishna37115452"   target='_blank' rel="noreferrer"  style={{textDecoration:"none",color:"#47afa5"}}> Twitter</a></p>

                </div>
            </div>
        </div>
    )
}

export default About
