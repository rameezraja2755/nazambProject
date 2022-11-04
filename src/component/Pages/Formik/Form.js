import React from "react";
import { useFormik } from "formik";
import { Boxx } from "./Form.styled";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Form = () => {
  const { values, errors,touched, handleBlur,handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values,  actions) => {
      console.log(errors, "submit" ,  );
    },
  });
  // actions.resetForm();
  console.log(values, "values",errors);
  return (
    <Boxx>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="Name">Name</label>
          <input
            type="name"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ?(<p className="form-errors">{errors.name}</p>) : null}
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && touched.email ?(<p className="form-errors">{errors.email}</p>) : null}

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.password && touched.password ?(<p className="form-errors">{errors.password}</p>) : null}


        <div className="form-row">
          <label htmlFor=" confirmPassword"> confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.confirmPassword && touched.confirmPassword ?(<p className="form-errors">{errors.confirmPassword}</p>) : null}

        <div className="modal-button">
          <button className="input-button" type="submit" onClick={handleSubmit}>
            Registration
          </button>
        </div>
      </form>
    </Boxx>
  );
};
