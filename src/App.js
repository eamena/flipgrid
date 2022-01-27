import logo from "./logo.svg";
import "./App.css";
import { Card } from "react-bootstrap";
import { Field, Form, Formik } from "formik";

function App() {
  const setValues = () => {};
  return (
    <div className="d-flex stify-content-center align-items-center">
      <Card>
        <Card.Body>
          <Card.Title>Let's</Card.Title>
          <h1>Sign Up</h1>
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
                <label>First Name</label>
                <Field id="firstName" name="firstName" />
                <label>Email Address</label>
                <Field id="email" name="email" type="email" />
                <label>Password</label>
                <Field id="Password" name="Password" />
                <button type="submit">Sign Up</button>
              </Form>
            </Formik>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
