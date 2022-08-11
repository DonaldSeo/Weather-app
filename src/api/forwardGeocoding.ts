import axios from "axios";

async function getCoordinatesOfAddress(address: string) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key:"93d5fc2ead3a4dcfa3608bb00e4057ad",
        q: address,
        language: "en"
      }
    }
  );

  return response;
}

export default getCoordinatesOfAddress;
