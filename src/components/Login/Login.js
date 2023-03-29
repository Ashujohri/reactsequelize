import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { postDataAxiosWithoutToken } from "../../middleware/fetchServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleLogin = async () => {
    try {
      let body = {
        principal_email: getEmail,
        password: getPassword,
      };
      let result = await postDataAxiosWithoutToken(
        `principal/loginByPrincipal`,
        body
      );
      if (result.status === true) {
        navigate("/Dashboard", { replace: true });
      } else {
        Swal.fire({
          icon: "error",
          title: "something went wrong",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      handleLogin();
    }
    setValidated(true);
  };

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img
                className="img-fluid"
                src="assets/img/login.png"
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Welcome to Preskool</h1>
                <p className="account-subtitle">
                  Need an account? <a href={false}>Sign Up</a>
                </p>
                <h2>Sign in</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <div class="col-12">
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Email"
                          pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                          value={getEmail}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Enter valid email address
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="password"
                          value={getPassword}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Enter password !
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                  </div>
                  <div className="forgotpass">
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        Remember me
                        <input type="checkbox" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <a href={false}>Forgot Password?</a>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Login
                    </button>
                  </div>
                </Form>
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">or</span>
                </div>
                <div className="social-login">
                  <a href={false}>
                    <i className="fab fa-google-plus-g" />
                  </a>
                  <a href={false}>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href={false}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href={false}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
