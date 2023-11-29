import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0"></h3>
              <h1 className="display-6 text-center mb-4">
                <b>Some of our Services</b> 
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Mortgage</h5>
                  <p className="card-text lead">
                    Provides loan by taking some property as collateral and amount of interest is low but the total amount of interest need to pay is decided.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Pawnbroker</h5>
                  <p className="card-text lead">
                  Provides loan by taking some property as collateral and amount of interest is high but the total amount of interest need to pay is not decided.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">We also buy</h5>
                  <p className="card-text lead">
                   We also buy old items which may not be useful to you anymore and the amount is deducted the from the amount you need to pay if you have taken any loan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">We also sell</h5>
                  <p className="card-text lead">
                   We also sell some of the products which are useful to the coustomers at a low price. This one of the Policy provided only to our coustomers.
                  
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Insurance and Policies</h5>
                  <p className="card-text lead">
                   We also provides Insurance policies which includes health,bike and life insurances.There are monthly and yearly payments both were available.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Collateral</h5>
                  <p className="
                  ">
                   We take some of your property as collateral while providing you loan for our security. These properties may include your house,land and jewellery etc..,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
