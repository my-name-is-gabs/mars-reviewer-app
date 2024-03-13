import { Container, Stack } from '@mui/material'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import axiosApi from '../../api/axiosApi'
import { AUTH_TYPE } from '../../constant'

const validateSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})

const Login = () => {
  const navigate = useNavigate()

  const onSubmit = async values => {
    try {
      const { data } = await axiosApi.post('login/', JSON.stringify(values))
      toast.success('Login successfully')

      axiosApi.defaults.headers['Authorization'] =
        AUTH_TYPE + data.user.access_token

      localStorage.setItem('authorize', data.user.status)

      return navigate('/mars-reviewer')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
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
          gap: '50px',
        }}
      >
        <div className="w-100 h-100 lg:flex hidden flex-col justify-center items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-extrabold font-sans">Sign in to</h1>
            <h3 className="text-2xl mb-8 font-medium">M.A.R.S Reviewer</h3>
            <p>
              If you don't have an account registered <br />
              You can{' '}
              <NavLink to="/register" className="text-violet-600 font-semibold">
                Register here!
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
          <h1 className="font-medium text-3xl mb-3">Sign In</h1>

          <Stack gap={2} marginTop={3} width="100%">
            <InputField
              attribs={{
                type: 'text',
                name: 'username',
                placeholder: 'Enter username',
              }}
              className="inputField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <InputField
              attribs={{
                type: 'password',
                name: 'password',
                placeholder: 'Enter Password',
              }}
              className="inputField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Stack>
          <Button
            attribs={{ type: 'submit' }}
            className="mt-10 login-and-register-btn"
            testid="login_test_id"
          >
            Login
          </Button>
        </form>
      </Container>
    </>
  )
}

export default Login
