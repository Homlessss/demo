import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/index.css";
import { Link } from "react-router-dom";

function FooterChild(props: any) {
  return (
    <div className={props.position + " align-self-center element-position"}>
      <Link to={"/" + props.element1} className="text-light">
        <span className="content">{props.element1}</span>
      </Link>
      <br />
      <Link to={"/" + props.element2} className="text-light">
        <span className="content">{props.element2}</span>
      </Link>
      <br />
      <Link to={"/" + props.element3} className="text-light">
        <span className="content">{props.element3}</span>
      </Link>
      <br />
      <Link to={"/" + props.element4} className="text-light">
        <span className="content">{props.element4}</span>
      </Link>
    </div>
  );
}

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer d-flex justify-content-center ">
        <div className="wrap footer row justify-content-around text-light align-items-center no-gutters">
          <div className="col-3 ml-5">
            <b className="author">Piroll Design, Inc.</b>
            <br />
            <span className="content">
              <FontAwesomeIcon icon={faCopyright} />
              2017 Piroll. All rights reserved.
            </span>
            <br />
            <span className="content">Design by robirurk.</span>
          </div>

          <div className="col-3">
            <span className="content">hello@pirolltheme.com</span>
            <br />
            <span className="content">+44 987 065 908</span>
          </div>

          <FooterChild
            position="col-1"
            element1="Projects"
            element2="About"
            element3="Services"
            element4="Carreer"
          />

          <FooterChild
            position="col-2"
            element1="News"
            element2="Events"
            element3="Contact"
            element4="Legals"
          />

          <FooterChild
            position="col-1"
            element1="Facebook"
            element2="Twitter"
            element3="Instagram"
            element4="Dribbble"
          />
        </div>
      </div>
    );
  }
}
