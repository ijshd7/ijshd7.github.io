import React from "react";
import { Link } from "gatsby";
import ContactForm from "../components/contactForm";

const ContactPage = () => {
    return (
        <section className="h-screen w-full flex text-center bg-gray-900">
            <div className="m-auto">
                <Link to="/" className="text-white hover:text-green-400 transition-all duration-300 ease-linear underline">back</Link>
                <ContactForm />
            </div>
        </section>
    );
}

export default ContactPage;