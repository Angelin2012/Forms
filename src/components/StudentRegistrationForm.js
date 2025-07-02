import { Formik, Form, Field, ErrorMessage } from 'formik';

const StudentRegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    course: "",
    terms: false,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Full name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password and confirm password don't match";
    }

    if (!values.course) {
      errors.course = "Select a course";
    }

    if (!values.terms) {
      errors.terms = "You must agree to terms and conditions.";
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form Submitted successfully");
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Full Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="errors" />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="errors" />
          </div>

          <div>
            <label>Phone:</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" className="errors" />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="errors" />
          </div>

          <div>
            <label>Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="errors" />
          </div>

          <div>
            <label>Course:</label>
            <Field as="select" name="course">
              <option value="">Select course</option>
              <option value="Web Dev">Web Development</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="Data Science">Data Science</option>
            </Field>
            <ErrorMessage name="course" component="div" className="errors" />
          </div>

          <div>
            <Field type="checkbox" name="terms" />
            I agree with the terms and conditions
            <ErrorMessage name="terms" component="div" className="errors" />
          </div>

          <div>
            <button type="submit">Submit Feedback</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentRegistrationForm;