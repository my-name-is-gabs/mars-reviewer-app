import Container from '@mui/material/Container';
import Button from '../../components/Button';

const TestResult = () => {
  return (
    <Container>
      <div className="w-11/12 flex flex-col justify-around mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-semibold">Total Score: 11/15</h1>
          <div className="flex gap-4 justify-between items-center">
            <Button className="rounded-md bg-info text-white font-medium text-lg h-12 w-40">
              retake
            </Button>
            <Button className="rounded-md bg-primary text-white font-medium text-lg h-12 w-40">
              back
            </Button>
          </div>
        </div>

        <div className="bg-gray-200 flex justify-around items-center py-6 my-3">
          <div className="block">
            You said:
            <h5 className="text-xl text-danger font-semibold">Your Answer</h5>
          </div>
          <div className="block">
            Correct answer:
            <h5 className="text-success text-xl font-bold">Correct Answer</h5>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestResult;
