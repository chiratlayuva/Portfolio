import React from 'react'

const Footer = () => {
    return (
        <footer className=" bg-gray-900 block">
            <div className=" mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                {/* icons */}
                <div className=" flex justify-center gap-x-6 order-2 text-gray-400 text-2xl">
                    <a href="https://github.com/chiratlayuva" target="_blank" className="">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/chiratlayuva/" target="_blank" className="">
                        <i className="fa-brands fa-square-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/@chiratlayuva" target="_blank" className="">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="mailto:chiratlayuva@gmail.com" target="_blank" className="">
                        <i className="fa-solid fa-inbox"></i>
                    </a>
                </div>
                <p className=" mt-8 text-center text-md text-gray-400 md:order-1 md:mt-0">
                    <i className="fa-regular fa-copyright"></i> 2025 Yuva Sai. All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer