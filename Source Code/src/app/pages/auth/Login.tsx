import React, { FunctionComponent, Component } from "react";
import { Form, Field, Formik } from "formik";
import { Input } from "../../components/Form";
import * as Yup from "yup";
import { toAbsoluteUrl } from "../../helpers";
import { Button } from "react-bootstrap";
import { login } from "../../redux/modules/auth";
import { LoginUser } from "../../models/LoginUser";
import { ReduxCallbacks } from "../../models/redux/Callbacks";
import { connect } from "react-redux";
import { enableLoading, disableLoading } from "../../redux/modules/loading";
import { RoutePaths } from "../../constants";
import { notifySuccess, notifyError } from "../../helpers/notify";
interface Props {
  login: (user: LoginUser, callbacks?: ReduxCallbacks) => void;
  disableLoading: () => void;
  enableLoading: (opacity?: number) => void;
}

const formLogin = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .min(3, "Ít nhất có 3 ký tự")
    .max(50, "Nhiều nhất có 50 ký tự")
    .required("Bắt buộc"),
  password: Yup.string()
    .min(3, "Ít nhất có 3 ký tự")
    .max(50, "Nhiều nhất có 50 ký tự")
    .required("Bắt buộc"),
});

const mapDispatchToProps = {
  login,
  enableLoading,
  disableLoading,
};

const Login: FunctionComponent<Props> = ({
  login,
  enableLoading,
  disableLoading,
}) => {
  const handleSubmit = (user: LoginUser) => {
    enableLoading();
    login(user, {
      onSuccess: () => {
        notifySuccess("Đăng nhập thành công!", {
          autoClose: 1000,
          onClose: () => {
            window.location.href = RoutePaths.MainLayout.HomePage;
          },
        });
        disableLoading();
      },
      onFailed: (error) => {
        notifyError("Đăng nhập thất bại! Kiểm tra lại thông tin đăng nhập.");
        disableLoading();
      },
    });
  };

  return (
    <div className="login-form login-signin w-100" id="kt_login_signin_form">
      <div className="text-center">
        <img
          src={toAbsoluteUrl("/login_logo.png")}
          style={{ maxWidth: "100%" }}
          alt=""
        />
        <h1 className="mt-2 mb-12">Đăng nhập</h1>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          usernameOrEmail: "",
          password: "",
          unitId: 0,
          departmentId: 0,
          unit: "",
          department: "",
        }}
        validationSchema={formLogin}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right" onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                  <div className="form-group">
                    <Field
                      name="usernameOrEmail"
                      component={Input}
                      label="Tài khoản"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      name="password"
                      component={Input}
                      type="password"
                      label="Mật khẩu"
                    />
                  </div>
                  <div className="form-group mt-10 text-center">
                    <Button type="submit" variant="primary">
                      Đăng nhập
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Login);
