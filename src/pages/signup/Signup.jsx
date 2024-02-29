import { Container, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
const Signup = () => {
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
        >
          <h1 className="font-medium text-3xl mb-3">Sign Up</h1>

          <Stack gap={2} marginTop={3} width="100%">
            <InputField
              attribs={{
                type: 'email',
                name: 'email',
                placeholder: 'Enter email',
              }}
              className="inputField"
            />
            <InputField
              attribs={{
                type: 'text',
                name: 'username',
                placeholder: 'Create username',
              }}
              className="inputField"
            />
            <div className="inline-flex flex-col">
              <label htmlFor="dob" className="text-sm ml-2 text-primary">
                Enter date of birth
              </label>
              <InputField
                attribs={{
                  type: 'date',
                  name: 'date_of_birth',
                  id: 'dob',
                }}
                className="inputField"
              />
            </div>
            <InputField
              attribs={{
                type: 'password',
                name: 'password',
                placeholder: 'Password',
              }}
              className="inputField"
            />
            <InputField
              attribs={{
                type: 'password',
                name: 'confirm_pass',
                placeholder: 'Confirm password',
              }}
              className="inputField"
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
  );
};

export default Signup;
