import React from 'react'
import chathub_proof from "../photos/chathub_proof.png"
import newzter_proof from "../photos/newzter_proof.png"
import notebook_proof from "../photos/notebook_proof.png"
import text_proof from "../photos/text_proof.png"
import mm_proof from "../photos/mm_proof.png"
import tooooodles_proof from "../photos/tooooodles_pic.png"
// import bmi_proof from "../photos/bmi_proof.png"
import cv_proof from "../photos/cv_proof.png"
import amikart_proof from "../photos/amikart_proof.jpg"
// import tinddog_proof from "../photos/tinddog_proof.png"
import wm_proof from "../photos/wm_proof.png"
// import valo_proof from "../photos/valo_proof.png"
// import drum_proof from "../photos/drum_proof.png"
// import card_bg from "../photos/card_bg.jpg"



export default function Projects() {
    // const [image, setImage] = useState()
    return (
        <div className='container'>
            <h1 className='my-4 shine'>Projects</h1>
            <hr />

            <div className='row mt-5'>
                <div className="col-md-4">
                    <a href="https://github.com/kjkrishnakj/amikart.git" target="_blank" rel="noreferrer">
                    <div className="card mx-3 my-2" style={{ width: "18rem;"  }}>
                            <img src={amikart_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">Amikart</div>
                            </div>

                        </div>
                    
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://658fd24d541fd545e1004f2d--heroic-beignet-20354d.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={wm_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                        <div class="overlay">
                            <div class="text">GMS</div>
                        </div>
                    </div>
                    </a>

                </div>
                <div className="col-md-4">
                    <a href="https://github.com/kjkrishnakj/ChatHub.git" target="_blank" rel="noreferrer">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={chathub_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                        <div class="overlay">
                            <div class="text">ChatHub</div>
                        </div>

                    </div>
                    </a>

                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">
                    <a href="https://newzter.vercel.app/" target="_blank" rel="noreferrer">

                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={newzter_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                        <div class="overlay">
                            <div class="text">Newzter</div>
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://notebook-amber.vercel.app/login" target="_blank" rel="noreferrer">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={notebook_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                        <div class="overlay">
                            <div class="text">Notebook</div>
                        </div>

                    </div>
                    </a>

                </div>
                <div className="col-md-4">
                    <a href="https://github.com/kjkrishnakj/Text_Manipiulator.git" target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                            <img src={text_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">Text Manipulator</div>
                            </div>

                        </div>
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">
                    <a href="https://murder-mystery-tawny.vercel.app/" target="_blank" rel="noreferrer">
                    <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                        <img src={mm_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                        <div class="overlay">
                            <div class="text">Murder Mystrey</div>
                        </div>

                    </div>
                        
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://tooooodles.vercel.app/" target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>
                            <img src={tooooodles_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">Tooooodles</div>
                            </div>

                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://kjkrishnakj.github.io/CV/" target="_blank" rel="noreferrer">
                        <div className="card mx-3 my-2" style={{ width: "18rem;" }}>

                            <img src={cv_proof} style={{ height: "12rem" }} className="card-img-top image" alt="..." />
                            <div class="overlay">
                                <div class="text">CV</div>
                            </div>

                        </div>
                    </a>


                </div>
            </div>

            <div className="row">
                <div className='col-md-12' style={{ marginTop: "4rem" }}>
                    <h3 className='shine'>Minor Projects</h3>
                    <br />
                    <div className="fade-in-left" style={{ textAlign: "left", fontSize: "0.4cm" }}>

                        <p className='d-flex'>< strong> Virtual Keyboard Using OpenCV  </ strong> <p className='typing'> - Created an virtual keyboard which can be controlled by your hand gestures.</p></p>
                        <p className='d-flex'>< strong> Virtual Mouse Using OpenCV</ strong>  <p className='typing'> - Designed an virtual mouse which can be moved and controlled by your fingers.</p></p>
                        <p className='d-flex'>< strong> Virtual Volumer Regulator Using OpenCV</ strong>  <p className='typing'> - Build an virtual volume controller which can be regulated by your hand gestures.</p></p>
                        <p className='d-flex'>< strong> Multipurpose Chrome Extention</ strong> <p className='typing'> - Generated an extention which can give daily gags and daily weather updates.</p></p>
                        <p className='d-flex'>< strong> DrumKit using JavaScript</ strong><p className='typing'> - Made a small Drum kit which can be played using both keys and mouse.</p></p>
                        <p className='d-flex'>< strong> TinDog using JavaScript</ strong> <p className='typing'> - Constructed a fun spoof of Tinder App where dogs can find their love partners. </p></p>
                        <p className='d-flex'>< strong> Parking System using JavaScript</ strong> <p className='typing'> - Build an effecient parking management system for multiple cars. </p></p>

                    </div>

                </div>
            </div>

        </div>



    )
}
