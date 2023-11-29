import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about" className="pb-5">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="fs-5 mb-0">About Us</h1>
                           
                            <hr className="w-50"/>
                            <p className="lead mb-4">We provides loan on both the basis mortgage and pawnbroker. Provides loan by taking some of your property as colleteral. Both mortgage and pawnbroker takes some your property as colleteral.But mortgage has more amount of time to repay the loan and the amount of the intrest you need to pay is fixed, but in pawnbroker has less amount of time and the amount of intrest is high and the rate of intrest is not fixed.</p>
                            <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
