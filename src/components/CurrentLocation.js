import { useEffect, useState } from "react";
import { BiSolidMapPin } from 'react-icons/bi'

const CurrentLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }, []);

  return (
    <div className="flex column currentlocation">
      <p>{latitude} °N</p>
      <p>{longitude} °E <BiSolidMapPin className="pin"/></p>
      </div>
  );
};

export default CurrentLocation;
