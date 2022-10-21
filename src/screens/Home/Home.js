import React from "react";
import "./_home.scss";
import titleCloud from "../../assets/titleCloud.svg";
import Header from "../../components/Header/Header";
import phone from "../../assets/phone.png";
import pin from "../../assets/location.svg";
import cloud1 from "../../assets/cloud1.svg";
import cloud2 from "../../assets/cloud2.svg";
import cloud3 from "../../assets/cloud3.svg";
import window from "../../assets/window.svg";
import cone from "../../assets/cone.svg";
import comingsoon from "../../assets/comingsoon.svg";

const Home = () => {
  return (
    <div className="container-fluid homewrapper pt-5 pl-0 pr-0">
      <Header />

      <div className="position-relative">
        <div className="container-lg">
            <div className="row align-items-center m-0 justify-content-between">
          <div className="col-6 position-relative">
            <div>
              <img
                src={titleCloud}
                alt=""
                className="position-absolute titleimg"
              />
              <div>
                <div className="d-flex flex-column ">
                  <h3 className="hometitle">Mașina ta contează!</h3>
                  <span className="homedesc">
                    Prime Wash - spălătoria automată ideală pentru tine!
                  </span>
                </div>
              </div>
            </div>
            <div className="blackbgwrapper mt-4">
              <table>
                <tbody>
                  <tr>
                    <td className="blackbgItem">SIMPLU</td>
                    <td className="blackbgItem">RAPID</td>
                    <td className="blackbgItem">EFICIENT</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cardwrapper mt-5 col-5">
              <p>
                <b>Locatia este:</b>
              </p>
              <p>
                Locatia este: Parcarea Carrefour Colentina - Șoseaua Colentina
                426-426A, Bucureșt
              </p>
              <p>
                Carrefour Militari, A1 km 11-13 In incinta parcului comercial
                Carrefour, București
              </p>

              <div className="btnwrapper position-relative">
                <button className="btn mapbtn">
                  Deschide locații în Hartă <img src={pin} alt="" />
                </button>
              </div>
            </div>
            <div>
              <img src={phone} alt="" className="phone" />
            </div>
          </div>
          <div className="col-5 position-relative">
            <img src={comingsoon} alt="" className="" />
            <img src={window} alt="" className="" />
            <img src={cone} alt="" className="" />
            <img src={cone} alt="" className="" />
          </div></div>
        </div>
        <img src={cloud1} alt="" className="cloud1" />
        <img src={cloud2} alt="" className="cloud2" />
        <img src={cloud3} alt="" className="cloud3" />
      </div>
    </div>
  );
};

export default Home;
