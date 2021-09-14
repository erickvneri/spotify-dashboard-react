import { useHistory } from "react-router";
import { useEffect } from "react";
import ApiService from "../services/ApiService";

const useTokenEffect = (state, setState) => {
  const redirect = useHistory().push;
  useEffect(() => {
    let token = sessionStorage.getItem("spotifyToken");

    if (!token) {
      ApiService.getAccessToken()
        .then((res) => {
          sessionStorage.setItem("spotifyToken", res.data.access_token);
          setState(localStorage.getItem("spotifyToken"));
        })
        .catch((err) => {
          alert(err);
          redirect("/oauth");
        });
    } else {
      setState(token);
    }
  }, [state, setState]);
};

export default useTokenEffect;
