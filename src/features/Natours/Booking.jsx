import { useForm } from "react-hook-form";
import Form, { FormInput, FormRow, FormRowVertical } from "../../ui/Form";
import Heading from "../../ui/Heading";
import RadioButtons from "../../ui/RadioButton";
import AnimatedButton from "../../ui/AnimatedButton";
// import { headerHover } from "./AnimationVariables";

function Booking() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log("submit");
    console.log(data.username);
  }

  function onError(err) {
    console.log("error");
    console.log(err);
  }

  return (
    <section className="p-20 px-32 bg-gradient-to-r from-[var(--primary-natours-light)] to-[var(--primary-natours-dark)]">
      <div className="max-w-7xl p-10 mx-auto bg-cover rounded-md shadow-lg bg-[linear-gradient(105deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_50%,transparent_50%),url('/img_natours/nat-10.jpg')]">
        <div className="w-[45%] pt-12">
          <Heading
            type="h2"
            className="text-center text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-800 uppercase"
            // whileHover={headerHover}
          >
            Book right now
          </Heading>
          <Form
            onSubmit={handleSubmit(onSubmit, onError)}
            customizeForm={true}
            className="px-10 py-10 flex flex-col justify-between gap-8"
          >
            <FormRowVertical
              classNameParentDiv="gap-2 relative"
              classNameLabel="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:left-0"
              label="Full name"
              error={errors?.name?.message}
            >
              <FormInput
                type="text"
                id="username"
                placeholder="Your name"
                className="peer text-lg px-4 py-2 bg-transparent rounded-sm placeholder-transparent focus:outline-none border-b-2 border-gray-300 focus:border-green-700 invalid:border-orange-700"
                {...register("username", {
                  required: "This field is required",
                })}
              />
            </FormRowVertical>
            <FormRowVertical
              classNameParentDiv="gap-2 relative"
              classNameLabel="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:left-0"
              label="Email address"
              error={errors?.name?.message}
            >
              <FormInput
                type="email"
                id="email"
                placeholder="Email Address"
                className="peer text-lg px-4 py-2 bg-transparent rounded-sm placeholder-transparent focus:outline-none border-b-2 border-gray-300 focus:border-green-700 invalid:border-orange-700"
                {...register("email", {
                  required: "This field is required",
                })}
              />
            </FormRowVertical>

            <FormRow
              customizeParentDiv={true}
              classNameParentDiv="flex gap-16 pl-5"
              {...register("checkbox")}
            >
              <RadioButtons>
                <RadioButtons.RadioButton id="large" name="size" value="large">
                  Large tour group
                </RadioButtons.RadioButton>
                <RadioButtons.RadioButton id="small" name="size" value="small">
                  Small tour group
                </RadioButtons.RadioButton>
              </RadioButtons>
            </FormRow>

            <FormRowVertical>
              <AnimatedButton
                type="custom"
                size="custom"
                className="uppercase self-start text-lg font-semibold md:mt-10 text-gray-100 bg-green-700 md:px-8 md:py-3 rounded-full shadow-md"
              >
                Learn more &rarr;
              </AnimatedButton>
            </FormRowVertical>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
