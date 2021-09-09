import { useEffect } from "react";
import ApiService from "../services/SpotifyAuthentication";

const useTokenEffect = (state, setState) => {
  useEffect(() => {
    let token = sessionStorage.getItem("spotifyToken");

    if (!token) {
      ApiService.getAccessToken()
        .then((res) => {
          sessionStorage.setItem("spotifyToken", res.data.access_token);
          setState(localStorage.getItem("spotifyToken"));
        })
        .catch((err) => console.log(err));
    } else {
      setState(token);
    }
  }, [state, setState]);
};

export default useTokenEffect;
