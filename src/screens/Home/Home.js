import React, {useState} from "react";
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
import Modal from "../../components/Modal/Modal";

const Home = () => {

  const [visible, setVisible] = useState(false)


  return (
    <div className="container-fluid homewrapper pt-0 pl-0 pr-0 position-relative">
      <div className="position-relative">
        <Header />
        <div className="container-lg position-relative containerwrapper">
          <div className="row m-0 justify-content-start justify-content-lg-between justify-content-xl-between gap-lg-3 gap-xl-3">
            <div className="col-12 col-lg-5 col-xl-5 col-md-6">
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
              <div className="mobileimgs">
                <img src={cone} alt="" className="imgcone" />
                <img src={window} alt="" className="imgwindow" />
                <img src={cloud3} alt="" className="imgcloud" />
              </div>
              <div className="cardwrapper mt-5 col-12 col-lg-8 col-xl-8 col-md-8">
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
                  <button className="btn mapbtn" onClick={()=>{setVisible(true)}}>
                    Deschide locații în Hartă <img src={pin} alt="" />
                  </button>
                </div>
              </div>
              <div>
                <img src={phone} alt="" className="phone" />
              </div>
            </div>
            <div className="col-3 col-lg-6 col-xl-6 col-md-5 imgwrapper">
              <img src={comingsoon} alt="" className="comingsoon" />
              <div className="d-flex align-items-center justify-content-between conewrapper">
                <img src={cone} alt="" className="cone" />
                <img src={window} alt="" className="window" />
                <img src={cone} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        <img src={cloud1} alt="" className="cloud1" />
        <img src={cloud2} alt="" className="cloud2" />
        <img src={cloud3} alt="" className="cloud3" />
      </div>
      {visible === true && <Modal visible={visible} modalId='#map' setIsVisible={()=>{setVisible(false)}}/>}
    </div>
  );
};

export default Home;
