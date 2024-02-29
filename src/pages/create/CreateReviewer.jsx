import Container from '@mui/material/Container';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const CreateReviewer = () => {
  return (
    <Container>
      <form className="mt-5" method="post" onSubmit={(e) => e.preventDefault()}>
        <header className="inline-flex flex-col w-1/3 gap-4">
          <InputField
            attribs={{
              type: 'text',
              name: 'title',
              id: 'title',
              placeholder: 'Set Title',
            }}
            className="text-2xl text-slate-900 py-2 border-b-2 border-slate-700 focus:outline-none"
          />
          <InputField
            attribs={{
              type: 'text',
              name: 'description',
              id: 'description',
              placeholder: 'Description',
            }}
            className="text-lg text-slate-900 py-2 border-b-2 text-wrap border-slate-700  focus:outline-none"
          />
        </header>

        <div className="mt-20 flex justify-end gap-5">
          <Button className="w-36 h-12 bg-primary text-white rounded-md">
            Save
          </Button>
          <Button className="w-36 h-12 bg-danger text-white rounded-md">
            Cancel
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="gradient-color-primary w-full rounded-md p-4 flex flex-col justify-between gap-4">
            <input
              className="p-3"
              placeholder="Term"
              type="text"
              name="term"
              id="term"
            />
            <textarea
              className="resize-none h-48 p-3 text-wrap text-justify"
              name="definition"
              id="definition"
              placeholder="Definition"
            ></textarea>
          </div>
        </div>

        <Button className="bg-primary w-full rounded-md my-4 p-3 text-white text-xl font-medium">
          <AddIcon /> Add New Item
        </Button>
      </form>

      {/* Back to top button */}
      <Button className="text-white bg-primary xl:fixed lg:w-auto w-full bottom-6 right-10 inline-flex justify-center items-center xl:mb-0 mb-5 xl:p-2 p-3">
        <ArrowUpwardIcon /> <span className="xl:hidden block">Back to top</span>
      </Button>
    </Container>
  );
};

export default CreateReviewer;
