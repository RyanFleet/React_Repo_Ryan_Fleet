import React from "react";
import Links from "./links/Links";

const Projects = () => {
    let githubLogo = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    return (
        <div>
            <div className="fadeInPage">
            <div className="bg">
                <div className="projects">
                    <div className="row row-cols-1 row-cols-md-2 g-5">
                        <div className="col">
                            <div id="cardGifDiv" className="card">
                                <img id="cardGif" src={require('./gifs/Screen Recording 2023-05-23 at 7.49.09 PM.gif')} className="card-img-top" alt="ToyVaultGif" />
                                <div id="cardContent" className="card-body">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <h5 className="card-title display-6">The Toy Collector</h5>
                                        <div className="githubLinkDiv">
                                            <a className="githubLink" href="https://github.com/Algos-Group/Main/tree/main/toy_collector">{githubLogo}</a>
                                        </div>
                                    </div>
                                    <p class="card-text">My first group project from Coding Dojo was a small, simple application made for users to collect toys, showcase them, and reserve toys for future purchase.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="cardGifDiv" className="card">
                                <img id="cardGif" src={require('./gifs/Screen Recording 2023-05-24 at 3.51.16 PM.gif')} className="card-img-top" alt="Skate Vault gif" />
                                <div id="cardContent" className="card-body">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <h5 className="card-title display-6">Skate Video Vault</h5>
                                        <div className="githubLinkDiv">
                                            <a className="githubLink" href="https://github.com/RyanFleet/React_Repo_Ryan_Fleet/tree/master/skate-app">{githubLogo}</a>
                                        </div>
                                    </div>
                                    <p class="card-text">My first solo web application for users to watch their favorite skateboarding videos and upload their own. This was a super fun project!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="cardGifDiv" className="card">
                                <img id="cardGif" src={require('./gifs/Screen Recording 2023-05-24 at 5.02.24 PM.gif')} className="card-img-top" alt="Skate Vault gif" />
                                <div id="cardContent" className="card-body">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <h5 className="card-title display-6">ThreeJs Skyscraper</h5>
                                        <div className="githubLinkDiv">
                                            <a className="githubLink" href="https://github.com/RyanFleet/React_Repo_Ryan_Fleet/tree/master/Portfolio-Project/portfolio">{githubLogo}</a>
                                        </div>
                                    </div>
                                    <p class="card-text">A work in progress side project. I have been playing with ThreeJs for a few months now and this is me attempting to create a skyscraper with pure 3js. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div><Links /></div>
        </div>
    )
}

export default Projects