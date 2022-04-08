import React from "react";
import { Link } from "gatsby";
import ContactForm from "../components/contactForm";
// import SEO from '../components/seo';

const ContactPage = () => {
    return (
        <section className="h-screen w-full flex flex-col bg-gray-900 font-serif">
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
                <Link to="/projects/" className="text-white hover:text-green-300 transition-all duration-300 ease-linear">Projects</Link>
                </div>
            </div>
            <div className="m-auto">
                <ContactForm />
            </div>
        </section>
    );
}

export default ContactPage;