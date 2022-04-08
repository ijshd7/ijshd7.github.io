import React, { useState } from "react";
import { Link } from "gatsby";
import { Dialog } from '@reach/dialog';
import "@reach/dialog/styles.css";
import floating1 from '../images/floatingstl1.png';
import floatingLogo from '../images/float-logo-teal.png';
import dogwood1 from '../images/dogwood1.png';
import dogwoodLogo from '../images/dogwood-advisors-vertical-logo.png';
import rise1 from '../images/risecarousel3.png';
import riseLogo from '../images/rise-logo-white.png';
import coach1 from '../images/mycoachkevin1.png';
import coachLogo from '../images/logo.png';
import movet1 from '../images/movetiphone.png';
import movetLogo from '../images/movetlogowithicon.png'

const ProjectModal = ({ contributions, technologies }) => {
    const [showProject, setShowProject] = useState(false);
    const open = () => setShowProject(true);
    const close = () => setShowProject(false);

    return (
        <div className="my-2">
            <button className="text-white focus:outline-none cursor-pointer no-underline hover:text-green-400 transition-all duration-300 ease-linear" onClick={open}>Learn more</button>
            <Dialog
                className="flex flex-col text-center"
                isOpen={showProject}
                onDismiss={close}
                aria-label="Dialog"
                role="alertdialog"
            >
                <p className="text-black text-sm lg:text-lg"><span className="underline text-green-400">Contributions:</span> {contributions}</p>
                <p className="text-black text-sm lg:text-lg"><span className="underline text-green-400">Technologies:</span> {technologies}</p>
                <button className="text-green-400 hover:text-red-300 focus:outline-none cursor-pointer underline mt-2" onClick={close}>close</button>
            </Dialog>
        </div>
    );
}

const Projects = () => (
    <section className="h-auto w-full flex flex-col bg-gray-900 font-serif">
        <div className="text-center mt-8 lg:hidden">
            <Link to="/" className="underline text-center text-white hover:text-green-400 transition-all duration-300 ease-linear lg:hidden">Home</Link>
        </div>
        <div className="hidden lg:inline-flex space-x-20 pt-8 mx-8">
            <div className="flex-1 group">
            <hr className="border-gray-400 group-hover:border-green-400 transition-all duration-300 ease-linear"/>
            <Link to="/" className="text-white hover:text-green-300 transition-all duration-300 ease-linear">Home</Link>
            </div>
            <div className="flex-1 group">
            <hr className="border-gray-400 group-hover:border-green-400 transition-all duration-300 ease-linear"/>
            <Link to="/contact/" className="text-white hover:text-green-300 transition-all duration-300 ease-linear">Contact</Link>
            </div>
        </div>
        <div className="mt-6 text-center text-white font-mono antialiased">
            <h1 className="mx-auto mt-4 pb-4 text-3xl underline">PROFESSIONAL PROJECTS</h1>
            <div className="flex-col lg:flex lg:flex-row mt-4 mb-4">
                <div className="w-2/3 mb-6 lg:w-1/4 mx-auto">
                    <div className="relative">
                        <img className="rounded-lg" src={floating1} alt="Floating STL screenshot"/>
                        <ProjectModal
                            contributions="Theme customization, plugin integration, gravity forms, advanced custom fields"
                            technologies="WordPress, HTML, CSS, JavaScript, PHP"
                        />
                    </div>
                    <a className="" href="https://www.floatingstl.com/" target="_blank" aria-label="Floating STL" rel="noreferrer">
                        <img className="mt-4 w-1/2 mx-auto" src={floatingLogo} alt="Floating STL logo"/>
                    </a>
                </div>
                <div className="w-2/3 mb-6 lg:w-1/4 mx-auto">
                    <div className="relative">
                        <img className="rounded-lg" src={dogwood1} alt="Dogwood Compliance screenshot"/>
                        <ProjectModal
                            contributions="Rebuilding site to utilize newer technologies"
                            technologies="React, GatsbyJS, Styled Components, TailwindCSS, Node, GraphQL, Firebase, Sanity.io"
                        />
                    </div>
                    <a href="https://dogwoodcompliance.com/" target="_blank" aria-label="Dogwood Compliance" rel="noreferrer">
                        <img className="mt-2 mx-auto" src={dogwoodLogo} alt="Dogwood Compliance logo"/>
                    </a>
                </div>
                <div className="w-2/3 lg:w-1/4 mx-auto">
                    <div className="relative">
                        <img className="rounded-lg" src={rise1} alt="Rise Float Gathering screenshot"/>
                        <ProjectModal
                            contributions="Rebuilding site to utilize newer technologies"
                            technologies="React, GatsbyJS, Styled Components, TailwindCSS"
                        />
                    </div>
                    <a href="https://risefloatgathering.com/" target="_blank" aria-label="Rise Float Gathering" rel="noreferrer">
                        <img className="mt-2 w-1/2 mx-auto" src={riseLogo} alt="Rise Float Gathering logo"/>
                    </a>
                </div>
            </div>
            <div className="flex-col lg:flex lg:flex-row mt-6">
                <div className="w-2/3 lg:w-1/3 mx-auto mb-6">
                    <div className="relative">
                        <img className="rounded-lg" src={coach1} alt="Elevated Coaching screenshot"/>
                        <ProjectModal
                            contributions="Integrated new features, functionality, and provided client support & education"
                            technologies="React, GatsbyJS, Styled Components, TailwindCSS, TypeScript, Firebase, Gitlab CI"
                        />
                    </div>
                    <a href="https://mycoachkevin.com/" target="_blank" aria-label="Elevated Coaching" rel="noreferrer">
                        <img className="mt-2 w-1/2 mx-auto" src={coachLogo} alt="Elevated Coaching logo"/>
                    </a>
                </div>
                <div className="w-2/3 lg:w-1/3 mx-auto mb-6">
                    <div className="relative">
                        <img className="sm:h-1/3 lg:h-2/3 mx-auto rounded-lg" src={movet1} alt="Movet screenshot"/>
                        <ProjectModal
                            contributions="Added new functionality, dependency updates, debugging"
                            technologies="React Native, Android Studio, XCode, Firebase"
                        />
                    </div>
                    <a href="https://movetcare.com/" target="_blank" aria-label="Movet On Demand Pet Services" rel="noreferrer">
                        <img className="mt-2 mx-auto" src={movetLogo} alt="Movet logo"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
)

export default Projects