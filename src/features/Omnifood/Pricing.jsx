import { IoCheckmarkOutline, IoClose } from 'react-icons/io5';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import { useOmnifood } from '../../context/OmnifoodProvider';

function Pricing() {
  const { pricing_plans } = useOmnifood();

  return (
    <section id="pricing" className="py-20">
      <div className="px-8 container mx-auto max-w-6xl text-left">
        <Heading type="sub-heading">Pricing</Heading>
        <Heading type="h2" className="mt-2">
          Eating well without breaking the bank
        </Heading>
      </div>
      <div className="px-8 container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 max-md:gap-3 justify-center max-md:mt-10 md:mt-20">
        {pricing_plans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center rounded-lg p-10 mx-auto w-5/6 md:w-3/4 relative overflow-hidden ${
              idx % 2 !== 0
                ? 'bg-orange-100 shadow-lg before:content-["Best_value"] before:absolute before:top-[5%] before:-right-[15%] before:bg-yellow-500 before:text-stone-700 before:px-14 before:py-2 before:text-base before:font-bold before:uppercase before:rotate-45'
                : 'border border-orange-100'
            }`}
          >
            <Heading type="sub-heading" className="text-lg">
              {plan.type}
            </Heading>
            <p className="text-6xl font-bold text-stone-700 mt-8">
              <span className="text-4xl font-semibold">$</span>
              <span className="ml-1"> {plan.price}</span>
            </p>
            <p className="mt-2 text-stone-500">
              per month. That's just ${plan.price_per_item} per meal!
            </p>
            <ul className="flex flex-col items-start gap-4 mt-10">
              {plan.description.map((el, idx2) => (
                <li key={idx2}>
                  {el.length === 0 ? (
                    <div className="flex items-center gap-x-3">
                      <span>
                        <IoClose className="text-orange-700" />
                      </span>
                      <span>{el}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-x-3">
                      <span>
                        <IoCheckmarkOutline className="stroke-orange-700" />
                      </span>
                      <span>{el}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button className="font-semibold">Start eating well</Button>
            </div>
          </div>
        ))}
      </div>
      <Features />
    </section>
  );
}

function Features() {
  const { features_list } = useOmnifood();
  return (
    <>
      <div className="px-8 container mx-auto max-w-6xl mt-8">
        <aside>
          Prices include all applicable taxes. Users can cancel at any time.
        </aside>
      </div>
      <div className="px-8 container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 max-md:mt-10 md:mt-24 text-left">
        {features_list.map((feature, idx) => (
          <div key={idx}>
            <div>{feature.icon}</div>
            <Heading type="h3" className="mt-6">
              {feature.title}
            </Heading>
            <p className="text-lg mt-2">{feature.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pricing;
