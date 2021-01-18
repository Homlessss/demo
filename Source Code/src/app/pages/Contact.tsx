import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { User } from "../models/User";

interface Props {
    user?: User;
  }
const Contact: FunctionComponent<Props> = () => {
    return (
        <div className="page">
        </div>
      );
    
};

export default connect(
  (state: any) => ({
    user: state.auth.user,
  }),
  {
   
  }
)(Contact);
