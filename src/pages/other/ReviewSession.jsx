import Container from '@mui/material/Container';
import Button from '../../components/Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const ReviewSession = () => {
  return (
    <Container>
      <div className="flex justify-end my-4">
        <Button className="bg-info text-white w-40 h-12 rounded-md">
          Take a test
        </Button>
      </div>

      <div className="bg-primary flex justify-center items-center flex-col rounded-md min-h-96 mx-auto relative p-4">
        <Button className="bg-none self-end text-white sm:absolute top-8 right-12">
          <VolumeUpIcon style={{ fontSize: '2rem' }} />
        </Button>

        {/* Term */}
        {/* <Button className="text-white text-2xl">This is a term</Button> */}

        {/* Definition */}
        <Button className="bg-none text-white p-5 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum iste
          soluta quasi minus reprehenderit sapiente voluptatem possimus id,
          veniam dolore eum perspiciatis et necessitatibus deserunt, veritatis
          animi. Saepe debitis, rerum nobis autem accusantium asperiores iusto
          quisquam commodi nesciunt non, aut iste inventore necessitatibus ea
          quibusdam facilis. Commodi aliquid perspiciatis nisi.
        </Button>
      </div>

      <div className="flex flex-row justify-center items-center sm:gap-10 gap-6 my-7">
        <Button className="outline outline-2 outline-danger py-2 px-7 rounded-md text-danger">
          still learning
        </Button>
        <Button className="outline outline-2 outline-success py-2 px-7 rounded-md text-success">
          already know
        </Button>
      </div>
    </Container>
  );
};

export default ReviewSession;
