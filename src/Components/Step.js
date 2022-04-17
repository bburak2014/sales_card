import React from "react";
import "../App.css";

function Step() {
  return (
    <>
      <div className="row d-none d-lg-block mt-5 mb-5 ">
        <div className="col-md-6 offset-md-3 text-center ">
          <span className="step">Sepet</span>
          <span className="p-2 stepPoint">-------------</span>
          <span>
            Adres <span className="p-2 stepPoint">-------------</span>
          </span>
          <span>
            Ödeme<span className="p-2 stepPoint">-------------</span>
          </span>
          <span>Onay</span>
        </div>
      </div>
      <div className="row d-block d-lg-none mt-5 mb-5 m-2">
        <div className="col-md-6 offset-md-3 text-center ">
          <div className="card">
            <div className="card-header">Sipariş Adımları</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  <span className="step">Sepet / </span> Adres / Ödeme /Onay
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step;
