import logo from "./logo.svg";
import "./App.css";
import { Card } from "react-bootstrap";
import { Field, Form, Formik } from "formik";

function App() {
  const setValues = () => {};
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="card__title">Let's</div>
          <h2>Sign Up</h2>
          <div>
            <p>
              Use the form below to sign up for this super awesome service.
              You're only a few steps away!
            </p>
            <Formik
              initialValues={{
                firstName: "",
                email: "",
                password: "",
              }}
              onSubmit={setValues()}
            >
              <Form>
                <label>first name</label>
                <Field id="firstName" name="firstName" required />
                <label>email Address</label>
                <Field id="email" name="email" type="email" required />
                <label>password</label>
                <Field id="Password" name="Password" required />
                <div className="position-relative my-4">
                  <button className="submit" type="submit">
                    Sign Up
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
