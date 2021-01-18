import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

interface Props {
  isLoading: boolean;
  opacity?: number;
}

const mapStateToProps = ({ loading }: any) => {
  return {
    isLoading: loading.isLoading,
    opacity: loading.opacity,
  };
};

const LoadingOverlay: FunctionComponent<Props> = ({ isLoading, opacity }) => {
  return (
    <Overlay loading={isLoading} opacity={opacity}>
      <CircularProgress />
    </Overlay>
  );
};

export default connect(mapStateToProps)(LoadingOverlay);

const Overlay = styled.div<{ readonly loading: boolean; opacity?: number }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: ${({ loading }: any) => (loading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: ${({ opacity }: any) => {
    if (!opacity) {
      opacity = 0.5;
    }

    return "rgba(255, 255, 255, " + opacity + ")";
  }};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CircularProgress = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  width: 65px;
  height: 65px;
  border: 4px solid #2196f3;
  border-radius: 50%;
  border-top-color: transparent;
`;
