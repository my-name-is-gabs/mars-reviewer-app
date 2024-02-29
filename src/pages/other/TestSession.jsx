import Container from '@mui/material/Container';
import Button from '../../components/Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import InputField from '../../components/InputField';
import MicIcon from '@mui/icons-material/Mic';

const TestSession = () => {
  return (
    <Container>
      <div className="block my-4">
        <p>
          <strong>Important:</strong> You need to enable your mic to be able to
          run speech recognition
        </p>
        <p>
          <strong>Info:</strong> You need to click the mic button before you say
          your answer
        </p>
      </div>
      <div className="bg-primary flex justify-center items-center flex-col rounded-md min-h-96 mx-auto relative p-4">
        <Button className="bg-none self-end text-white sm:absolute top-8 right-12">
          <VolumeUpIcon style={{ fontSize: '2rem' }} />
        </Button>

        {/* Definition */}
        <p className="bg-none text-white p-5 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum iste
          soluta quasi minus reprehenderit sapiente voluptatem possimus id,
          veniam dolore eum perspiciatis et necessitatibus deserunt, veritatis
          animi. Saepe debitis, rerum nobis autem accusantium asperiores iusto
          quisquam commodi nesciunt non, aut iste inventore necessitatibus ea
          quibusdam facilis. Commodi aliquid perspiciatis nisi.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-5">
        <h5 className="text-success font-medium">You're right</h5>
        <InputField
          attribs={{ readOnly: 'readOnly', placeholder: 'This is readonnly' }}
          className="outline outline-3 outline-info rounded-md w-full p-3 text-center"
        />
        <Button className="text-white bg-info w-32 h-12 mb-12 rounded-md">
          <MicIcon />
        </Button>
      </div>
    </Container>
  );
};

export default TestSession;
