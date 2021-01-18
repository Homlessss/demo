import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { logout } from "../redux/modules/auth";
import { User } from "../models/User";
import { ReduxCallbacks } from "../models/redux/Callbacks";
import { Test } from "../components/Test";
import styles from "../../styles/HomePage.module.css";

interface Props {
  user?: User;
  logout: (callbacks?: ReduxCallbacks) => void;
}

const Homepage: FunctionComponent<Props> = ({ user, logout }) => {
  const [text] = useState("From Homepage");

  const handleLogout = () => {
    logout({
      onSuccess: (response: any) => {},
    });
  };

  const handleTextClick = (text: string) => {
    alert(text);
  };

  return (
    <div className={styles.page}>
      <h1>Xin chào, {user?.name}</h1>


      <Button onClick={handleLogout}>Đăng xuất</Button>
    </div>
  );
};

export default connect(
  (state: any) => ({
    user: state.auth.user,
  }),
  {
    logout: logout,
  }
)(Homepage);
