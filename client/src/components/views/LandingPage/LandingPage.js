import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _auth from './../../../hoc/auth'

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));

  }, []);
  _auth(null)

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        navigate("/login");
      } else {
        return alert("로그아웃 실패");
      }
    });
  };
  _auth(null)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작페이지</h2>
      <button onClick={onClickHandler}>LogOut</button>
    </div>
  );
}

export default LandingPage;
