import React, { useState } from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import { Field, Form, Formik, useFormik } from "formik";
import Confirmation from "./Confirmation";

function App(touched) {
  const [submit, setSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    // onSubmit: (values) => {
    //   setFirstName(values.firstName);
    //   setEmail(values.email);
    //   setPassword(values.password);
    //   setSubmit(true);
    // },
  });

  const handleSubmit = () => {
    setFirstName(formik.values.firstName);
    setEmail(formik.values.email);
    setPassword(formik.values.password);
    setSubmit(true);
  };
  return (
    <div>
      {!submit ? (
        <Card>
          <Card.Body>
            <div className="card__title">Let's</div>
            <h2>Sign Up</h2>
            <div>
              <p>
                Use the form below to sign up for this super awesome service.
                You're only a few steps away!
              </p>
              <Formik>
                <Form>
                  <label>first name</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    touched={touched}
                  />
                  {formik.touched.firstName && !formik.values.firstName && (
                    <div className="font-small text-danger">
                      First Name is Required
                    </div>
                  )}

                  <label>email Address </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    touched={touched}
                  />
                  {formik.touched.email && !formik.values.email ? (
                    <div className="font-small text-danger">
                      Email is Required
                    </div>
                  ) : (
                    formik.touched.email &&
                    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
                      formik.values.email
                    ) && (
                      <div className="font-small text-danger">
                        Invalid Email Format!
                      </div>
                    )
                  )}
                  <label>password</label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    touched={touched}
                  />
                  {formik.errors.password && (
                    <span className="error">{formik.errors.password}</span>
                  )}

                  <div className="position-relative my-4">
                    <button
                      className="submit"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Confirmation firstName={firstName} email={email} />
      )}
    </div>
  );
}

export default App;
