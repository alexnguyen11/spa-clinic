import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AddressCard = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto px-2 py-16 md:flex flex-wrap">
        <div className="w-full m-2 md:flex flex-wrap justify-center items-center">
          <h1 className="tracking widest uppercase text-2xl">Our Location</h1>
        </div>
        <div className="w-full">
          <div className="mx-[8rem] my-10">
            <h2 className="tracking widest uppercase text-xl">
              Come To Visit Us At
            </h2>

            <div className="w-full h-[780px] my-5">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
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
  );
};

export default AddressCard;
