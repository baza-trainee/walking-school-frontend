import React from "react";
import { Form, Formik } from "formik";
import ImageInput from "./ImageInput";

const From = () => {
  return (
    <>
      <Formik
        initialValues={{ image: "" }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          resetForm();
        }}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <ImageInput
              id="image"
              name={"image"}
              variant={"project"}
              value={values.image}
              onChange={(img) => setFieldValue("image", img)}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default From;
