import React, { useState } from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import { Field, Form, Formik, useFormik } from "formik";
import Confirmation from "./Confirmation";

function App(touched) {
  // The submit varible will trigger the conformation card.
  const [submit, setSubmit] = useState(false);
  // Variables where the input values will be store in state.
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Initial form values.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
  });

  // What will happen when the submit button is clickes.
  const handleSubmit = () => {
    setFirstName(formik.values.firstName);
    setEmail(formik.values.email);
    setPassword(formik.values.password);
    // Triggers the confirmation card.
    setSubmit(true);
  };
  return (
    <div>
      {/* I check if the confirmation card is set if not then we show the form card. */}
      {!submit ? (
        // Used card element from boostrap to handle some of the syling.
        <Card>
          <Card.Body>
            <div className="card__title">Let's</div>
            <h2>Sign Up</h2>
            <div>
              <p>
                Use the form below to sign up for this super awesome service.
                You're only a few steps away!
              </p>
              {/* Used Formik to help with some of the form stuff but can be just a form 
              since I'm not using Yup for validation or any other logic */}
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
                  {/* Simple logic to make the field required. */}
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
                  {/* Simple logic to make the field required but it will also validate 
                  the email field agaist some regex. */}
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
                  {/* Simple logic to make the field required but it will also validate 
                  the password field agaist some regex. */}
                  {formik.touched.password && !formik.values.password ? (
                    <div className="font-small text-danger">
                      Password is Required
                    </div>
                  ) : (
                    formik.touched.password &&
                    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(
                      formik.values.password
                    ) && (
                      <div className="font-small text-danger">
                        Password length must be between 8 and 15 characters,
                        contian atleast a symbol, a number, an uppercase and
                        lowercase letter. Hint: Password!123
                      </div>
                    )
                  )}
                  {/* Test Password that: Password!123 */}
                  <div className="position-relative my-5">
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
        // Once the form is set and submit is true then we show the confirmation card
        // that comes form a different component. Where it needs 2 parameters firstName and email.
        <Confirmation firstName={firstName} email={email} />
      )}
    </div>
  );
}

export default App;
