import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { User } from "../models/User";
import styles from "../../styles/About.module.css";
import signature from "../../assets/signature.png";

interface Props {
  user?: User;
}

function Number(props: any) {
  return (
    <div className="d-flex">
      <i
        className={"fa " + props.icon + " fa-3x " + styles.numbers_icon}
        aria-hidden="true"
      />
      <span className="ml-3">
        <span className="numbers_number" style={{fontSize: "18px"}}>
          <b>{props.number}</b>
        </span>
        <br />
        <span className="numbers_describe" style={{fontSize: "12px"}}>{props.describe}</span>
      </span>
    </div>
  );
}

const About: FunctionComponent<Props> = () => {
  return (
    <div className="page">
      <div
        className={
          styles.banner + " d-flex justify-content-center align-items-end"
        }
      >
        <div className="text-center d-flex align-items-center wrap d-flex justify-content-center align-items-end">
          <span>
            <h1 className="h1_title">Amelia Woods</h1>
            <br />
            I am a Graphic &amp; Web Designer based in New York, specializing
            <br />
            in User Interface Design and Development
          </span>
        </div>
      </div>

      <div
        className={
          styles.numbers + " d-flex justify-content-center align-items-center"
        }
      >
        <div className="numbers-content wrap d-flex justify-content-between">
          <Number
            icon="fa-briefcase"
            number="548"
            describe="PROJECT COMPLETE"
          />
          <Number icon="fa-clock-o" number="1465" describe="WORKING HOURS" />
          <Number icon="fa-star-o" number="612" describe="POSITIVE FEEDBACKS" />
          <Number icon="fa-heart-o" number="735" describe="HAPPY CLIENTS" />
        </div>
      </div>

      <div
        className={
          styles.about_me +
          " no-gutters row justify-content-center align-items-center"
        }
      >
        <div className="wrap no-gutters row justify-content-md-end align-items-center ">
          <div className="ml-5 pl-5 col-6 col-md-5 d-flex align-items-center">
            <p>
              <h1 className="title">About me</h1>
              <span className="about-content">
                <br />
                Given let waters air sea had you'll, many seed abundantly fish.
                Were, you'll earth forth winged above brought. Own darkness
                they're him can't fourth sea place have.
                <br />
                <br />
                So the above May stars cattle fruiful face shall. Tree it,
                winged. Every signs male firmament us. Morning him.
                <br />
                <br />
                <img src={signature} alt="signature" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          styles.need_a_project +
          " d-flex justify-content-center align-items-center align-self-center"
        }
      >
        <div className="wrap d-flex justify-content-center align-items-center align-self-center">
          <span className="text-center">
            <h1 className="title">Need a Project?</h1>
            <span className="about-content">
              <br />
              Let us know what you're looking for in an agency. We'll take a
              look and see
              <br />
              if this could be the start of something beautiful
            </span>
          </span>
        </div>
      </div>

      <div className={styles.button + " d-flex justify-content-center"}>
        <div className="wrap d-flex justify-content-center">
          <button className={styles.button_btn}>LET'S TALK</button>
        </div>
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
