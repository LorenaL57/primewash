import React from "react";
import GoogleMapReact from "google-map-react";

const Modal = ({ visible, modalId, setIsVisible }) => {
  let className = "modal fade ";
  let style = {};
  if (visible === true) {
    className = "modal fade show";
    style = { display: "block", background: "rgba(0,0,0, 0.5)" };
  }

  const closeModal = () => {
    setIsVisible(false);
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div
      className={className}
      id={modalId}
      tabIndex="-1"
      aria-labelledby={"modalLabel" + modalId}
      aria-hidden="true"
      style={style}
      onClick={closeModal}
    >
      <div className="modal-dialog tymodal">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center text-center">
              <div style={{ height: "300px", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyB3wNH00MruZszBgSWyOCKusuqWmOPj7-Y" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Modal;
