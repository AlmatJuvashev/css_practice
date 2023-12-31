import Button from '../../ui/Button';
import Heading from '../../ui/Heading';

function CTA() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.selectWhere.value);
  }
  return (
    <section id="cta">
      <div className="px-8 container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[3fr_2fr] xl:grid-cols-[2fr_1fr] text-left shadow-lg rounded-lg bg-gradient-to-br from-orange-300 to-orange-600 overflow-hidden items-top">
          <div className="p-14 pt-10">
            <Heading type="h2" className="text-orange-950">
              Get your first meal for free
            </Heading>
            <p className="text-lg text-orange-950 mt-3">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8 mt-10"
            >
              <div>
                <label htmlFor="name" className="text-lg font-medium block">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="rounded-md border-none mt-1 w-full p-3 text-lg shadow-sm placeholder:text-stone-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg font-medium block">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="text@example.com"
                  className="rounded-md mt-1 border-none w-full p-3 text-lg shadow-sm
                  text-stone-700 placeholder:text-stone-500"
                />
              </div>
              <div className="sm:max-lg:mb-10">
                <label
                  htmlFor="select-where"
                  className="text-lg font-medium block"
                >
                  Where did you here about us?
                </label>
                <select
                  name="selectWhere"
                  id="select-where"
                  className="rounded-md  self-end border-none mt-1 w-full p-3 text-lg  text-stone-700 placeholder:text-stone-500"
                >
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">You Tube Video</option>
                  <option value="podcast">Podcast</option>
                </select>
              </div>

              <Button
                size="md"
                className="bg-orange-950 text-stone-200 self-end py-3 border-none text-lg"
              >
                Sign up now
              </Button>
            </form>
          </div>
          <div
            className="bg-cta-image bg-cover bg-center max-md:h-[20rem] max-md:row-start-1"
            role="img"
            aria-label="Woman enjoing food"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
