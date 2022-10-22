import React, { useRef, useEffect } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

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

  function MyMapComponent({ center, zoom }) {
    const ref = useRef();
    useEffect(() => {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });

      const center2 = { lat: 44.43788842052529, lng: 25.958710712983148 };

      const infowindow = new window.google.maps.InfoWindow({
        content: `Parcarea Carrefour Colentina - Șoseaua Colentina 426-426A, Bucureșt <br/> <a href='https://www.google.com/maps/place/Carrefour/@44.4759576,26.1582653,17z/data=!3m1!4b1!4m5!3m4!1s0x40b1f857b424b053:0xff26141df7e3f763!8m2!3d44.4759576!4d26.160454' target='_blank'>View location</a>`,
        maxWidth: 200,
        ariaLabel: "",
      });

      const infowindow2 = new window.google.maps.InfoWindow({
        content: `Carrefour Militari, A1 km 11-13 In incinta parcului comercial Carrefour, București <br/> <a href='https://www.google.com/maps/place/Carrefour+Militari/@44.437883,25.9562508,18z/data=!4m5!3m4!1s0x40b200d16cd01773:0x14e4c3233dd8bc7b!8m2!3d44.4378286!4d25.9586192' target='_blank'>View location</a>`,
        maxWidth: 200,
        ariaLabel: "",
      });

      const center1 = { lat: 44.476072411516036, lng: 26.160958253733074 };

      var marker = new window.google.maps.Marker(
        {
          position: center1,
        },
        []
      );

      var marker2 = new window.google.maps.Marker(
        {
          position: center2,
        },
        []
      );

      marker.setMap(map);
      marker2.setMap(map);

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });

      marker2.addListener("click", () => {
        infowindow2.open({
          anchor: marker2,
          map,
        });
      });
    }, []);

    return <div ref={ref} id="map" style={{ height: "300px" }} />;
  }

  const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

  const center = { lat: 44.4378043, lng: 26.0245981 };

  const zoom = 10;

  return (
    <div
      className={className}
      id={modalId}
      tabIndex="-1"
      aria-labelledby={"modalLabel" + modalId}
      aria-hidden="true"
      style={style}
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
                <Wrapper
                  apiKey={"AIzaSyBNAST8BtWzEcbMv8TkT225loDIUxK3370"}
                  render={render}
                >
                  <MyMapComponent center={center} zoom={zoom} />
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
