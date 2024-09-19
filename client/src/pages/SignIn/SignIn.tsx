import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Form, Formik } from "formik";

type Error = { email?: string; password?: string };

const SignIn = () => (
  <Card className="min-h-screen md:flex md:items-center" shadow={false}>
    <Card className="md:w-6/12 lg:w-4/12 xl:w-3/12 md:m-auto" color="transparent">
      <Typography className="text-center" variant="h4">
        Sign in to your account
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: Error = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            className="w-full flex flex-col p-4 space-y-2"
            onSubmit={handleSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" className="-mb-3">
                Email
              </Typography>
              <Input
                className="w-full p-2 border-solid border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="email"
                name="email"
                size="lg"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Typography className="text-red-500 min-h-6 -mb-3">
                {errors.email && touched.email && errors.email}
              </Typography>
              <Typography variant="h6">Password</Typography>
              <Input
                className="w-full p-2 border-solid border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="password"
                name="password"
                size="lg"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Typography className="text-red-500 min-h-6 -mb-3">
                {errors.password && touched.password && errors.password}
              </Typography>
            </div>
            <Button
              className="bg-gray-400 text-black p-2 rounded-md self-center w-1/2 md:w-3/12"
              type="submit"
              disabled={isSubmitting}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  </Card>
);

export default SignIn;
