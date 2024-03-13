import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const Signup = lazy(() => import('./pages/signup/Signup'))
const Login = lazy(() => import('./pages/login/Login'))
const Homepage = lazy(() => import('./pages/home/Homepage'))
const CreateReviewer = lazy(() => import('./pages/create/CreateReviewer'))
const ReviewSession = lazy(() => import('./pages/other/ReviewSession'))
const TestSession = lazy(() => import('./pages/other/TestSession'))
const TestResult = lazy(() => import('./pages/other/TestResult'))
import 'react-toastify/dist/ReactToastify.css'
import LoadingPage from './LoadingPage'
import PrivateRoute from './private/PrivateRoute'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Navigation />
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/mars-reviewer" element={<Homepage />} />
          </Route>
          <Route path="/test" element={<LoadingPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
