import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { User } from "../models/User";
import styles from "../../styles/About.module.css";

interface Props {
  user?: User;
}

const About: FunctionComponent<Props> = () => {
  return (
    <div className="page container">
      <div
        className="mr-auto d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <span className="justify-content-center">

            <b>Amelia Woods</b>
            <br />
            I am a Graphic & Web Designer based in New York, specializing
            <br />
            in User Interface Design and Development

        </span>
      </div>
    </div>
  );
};

export default connect(
  (state: any) => ({
    user: state.auth.user,
  }),
  {}
)(About);
