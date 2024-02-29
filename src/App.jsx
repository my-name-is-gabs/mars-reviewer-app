import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
const Signup = lazy(() => import('./pages/signup/Signup'));
const Login = lazy(() => import('./pages/login/Login'));
const Homepage = lazy(() => import('./pages/home/Homepage'));
const CreateReviewer = lazy(() => import('./pages/create/CreateReviewer'));
const ReviewSession = lazy(() => import('./pages/other/ReviewSession'));
const TestSession = lazy(() => import('./pages/other/TestSession'));
const TestResult = lazy(() => import('./pages/other/TestResult'));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navigation />
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/test" element={<TestResult />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
