import { Container, Stack } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import axiosApi from '../../api/axiosApi'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const validateSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Username should be at least 4 minimum characters')
    .max(15, 'Must be 15 character of less')
    .required('Username is required'),
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),
  fullname: Yup.string().required('Full name is required'),
  dob: Yup.date().required('Date of birth is required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters or more')
    .matches(/[A-Z]/, 'Password must contain at least 1 Uppercase letter')
    .matches(/[\d]/, 'Password must contain at least 1 number')
    .matches(/[\W]/, 'Password must contain at least 1 special character')
    .required('Password is required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password not match')
    .required('This field is required'),
})

const Signup = () => {
  const navigate = useNavigate()

  const onSubmit = async values => {
    try {
      const data = await axiosApi.post('register/', JSON.stringify(values))
      if (data.status === 201) {
        toast.success('Account was created successfully')
        navigate('/home')
      }
    } catch (error) {
      toast.error('Error was encountered when creating the account')
    }
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      fullname: '',
      dob: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: validateSchema,
    onSubmit: onSubmit,
  })

  return (
    <>
      <header className="relative top-0 left-0 mx-auto py-4 flex items-center gap-4">
        <img src="/assets/logo.png" alt="Logo" />
        <h1 className="font-sans text-xl antialiased font-bold">
          Mini Application Recognition System
        </h1>
      </header>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          marginTop: '20px',
          gap: '56px',
        }}
      >
        <div className="w-100 h-100 lg:flex hidden flex-col justify-center items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-extrabold font-sans">Sign up to</h1>
            <h3 className="text-2xl mb-8 font-medium">M.A.R.S Reviewer</h3>
            <p>
              If you already have and account <br />
              You can{' '}
              <NavLink to="/" className="text-violet-600 font-semibold">
                Login here!
              </NavLink>
            </p>
          </div>
          <img
            src="/assets/banner.png"
            className="mt-2 ml-40 banner-img"
            alt="banner"
          />
        </div>

        {/* FORM */}
        <form
          autoComplete="off"
          className="flex flex-col lg:w-1/3 w-full lg:px-0 px-7"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="font-medium text-3xl mb-3">Sign Up</h1>

          <Stack gap={2} marginTop={3} width="100%">
            {formik.touched.username && formik.errors.username ? (
              <span className="text-red-500">{formik.errors.username}</span>
            ) : null}
            <InputField
              attribs={{
                type: 'text',
                name: 'username',
                placeholder: 'Create a username',
              }}
              className="inputField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500">{formik.errors.email}</span>
            ) : null}
            <InputField
              attribs={{
                type: 'email',
                name: 'email',
                placeholder: 'Enter your email',
              }}
              className="inputField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.fullname && formik.errors.fullname ? (
              <span className="text-red-500">{formik.errors.fullname}</span>
            ) : null}
            <InputField
              attribs={{
                type: 'text',
                name: 'fullname',
                placeholder: 'Enter your name',
              }}
              className="inputField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.dob && formik.errors.dob ? (
              <span className="text-red-500">{formik.errors.dob}</span>
            ) : null}
            <div className="inline-flex flex-col">
              <label htmlFor="dob" className="text-sm ml-2 text-primary">
                Enter date of birth
              </label>
              <InputField
                attribs={{
                  type: 'date',
                  name: 'dob',
                  id: 'dob',
                }}
                className="inputField"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-500">{formik.errors.password}</span>
            ) : null}
            <InputField
              attribs={{
                type: 'password',
                name: 'password',
                placeholder: 'Password',
              }}
              className="inputField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.password_confirmation &&
            formik.errors.password_confirmation ? (
              <span className="text-red-500">
                {formik.errors.password_confirmation}
              </span>
            ) : null}
            <InputField
              attribs={{
                type: 'password',
                name: 'password_confirmation',
                placeholder: 'Confirm password',
              }}
              className="inputField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Stack>
          <Button
            attribs={{ type: 'submit' }}
            className="mt-10 login-and-register-btn"
            testid="login-signup-test-id"
          >
            Register
          </Button>
        </form>
      </Container>
    </>
  )
}

export default Signup
