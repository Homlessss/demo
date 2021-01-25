import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { User } from "../models/User";
import styles from "../../styles/About.module.css";
import signature from "../../assets/signature.png";
import "../../assets/pe-icon-7-stroke/css/pe-icon-7-stroke.css";
import "../../assets/pe-icon-7-stroke/css/helper.css";

interface Props {
  user?: User;
}

function Number(props: any) {
  return (
    <div className="d-flex col-3 pl-5">
      <i
        className={props.icon + " pe-3x pe-va " + styles.numbers_icon}
        aria-hidden="true"
      />
      <span className="ml-3">
        <span className={"numbers_number " + styles.numbers_number}>
          <b>{props.number}</b>
        </span>
        <br />
        <span className={"numbers_describe " + styles.numbers_describe}>
          {props.describe}
        </span>
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
            <h1 className={styles.h1_title}>Amelia Woods</h1>
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
        <div className="wrap d-flex justify-content-between">
          <Number
            icon="pe-7s-portfolio"
            number="548"
            describe="PROJECT COMPLETE"
          />
          <Number icon="pe-7s-clock" number="1465" describe="WORKING HOURS" />
          <Number
            icon="pe-7s-star"
            number="612"
            describe="POSITIVE FEEDBACKS"
          />
          <Number icon="pe-7s-like" number="735" describe="HAPPY CLIENTS" />
        </div>
      </div>

      <div
        className={
          styles.about_me +
          " no-gutters row justify-content-center align-items-center"
        }
      >
        <div className="wrap no-gutters row justify-content-md-end align-items-center ">
          <div className="ml-5 pl-4 col-6 d-flex align-items-center ">
            <p className="ml-5 pl-5 col-md-9">
              <h1 className={styles.title}>About me</h1>
              <span id={styles.about_content}>
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
        <div className="wrap d-flex justify-content-center align-items-center align-self-center row">
          <span className="text-center col-12">
            <h1 className={styles.title + " m-0"}>Need a Project?</h1>
            <span id={styles.about_content}>
              <br />
              Let us know what you're looking for in an agency. We'll take a
              look and see
              <br />
              if this could be the start of something beautiful
            </span>
          </span>
          <div
            className={
              styles.button + " wrap d-flex justify-content-center col-12"
            }
          >
            <button className={styles.button_btn}>LET'S TALK</button>
          </div>
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
