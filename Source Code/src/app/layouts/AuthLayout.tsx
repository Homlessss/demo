import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../helpers";
import styled from "styled-components";

interface AuthLayoutProps {}

export const AuthLayout: FunctionComponent<AuthLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
      {/* begin::Content body */}
      <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
        {children}
      </div>
      {/*end::Content body*/}
    </div>
  );
};

const Aside = styled.div`
  width: 100%;
  background: #52c3d6;
  @media screen and (min-width: 992px) {
    width: 50%;
    background: url(${toAbsoluteUrl("/auth_bg.png")}) no-repeat;
    background-size: cover;
  }
`;
