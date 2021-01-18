import { FunctionComponent, useEffect } from "react";
import { enableLoading, disableLoading } from "../redux/modules/loading";
import { connect } from "react-redux";

interface Props {
  enableLoading: (opacity?: number) => void;
  disableLoading: () => void;
}

const mapDispatchToProps = {
  enableLoading,
  disableLoading,
};

const BaseSplashScreen: FunctionComponent<Props> = ({
  enableLoading,
  disableLoading,
}) => {
  useEffect(() => {
    enableLoading(1);
    return () => {
      disableLoading();
    };
  });
  return null;
};

export const SplashScreen = connect(null, mapDispatchToProps)(BaseSplashScreen);
