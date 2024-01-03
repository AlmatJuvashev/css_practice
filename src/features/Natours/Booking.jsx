import { useForm } from 'react-hook-form';
import Form, { FormInput, FormRowVertical } from '../../ui/Form';
import Button from '../../ui/Button';

function Booking() {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log('submit');
    console.log(data.username);
  }

  function onError(err) {
    console.log('error');
    console.log(err);
  }

  return (
    <section className="p-20 px-32 bg-gradient-to-r from-[var(--primary-natours-light)] to-[var(--primary-natours-dark)]">
      <div
        className=" bg-cover h-[500px] rounded-md shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(105deg,rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%,transparent 50%),url('/img_natours/nat-10.jpg')",
        }}
      >
        <div className="w-1/2">
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRowVertical className="gap-5" error={errors?.name?.message}>
              <FormInput
                type="text"
                id="username"
                placeholder="Your name"
                {...register('username', {
                  required: 'This field is required',
                })}
              />
            </FormRowVertical>
            <Form.FormRowVertical>
              <Button
                type="custom"
                size="custom"
                className="text-lg bg-green-700 text-white"
              >
                Learn more
              </Button>
            </Form.FormRowVertical>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
