import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';

import {
  IoRestaurantOutline,
  IoFlameOutline,
  IoStarOutline,
  IoCheckmarkOutline,
} from 'react-icons/io5';

function Meals() {
  const list_of_diets = [
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Gluten-free',
    'Lactose-free',
    'Keto',
    'Paleo',
    'Low FODMAP',
    'Kid-friendly',
  ];

  return (
    <section className="py-20" id="meals">
      <div className="px-8 container mx-auto max-w-6xl">
        <Heading type="sub-heading">Meals</Heading>
        <Heading type="h2" className="mt-2">
          Omnifood AI chooses from 5,000+ recipes
        </Heading>
      </div>
      <div className="sm:mt-10 md:mt-20 px-8  container mx-auto max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-110 hover:shadow-xl transition-all text-left">
          <div>
            <img
              src="/img_omnifood/meals/meal-1.jpg"
              alt="Japanese Gyozas"
              className="w-full"
            />
          </div>
          <div className="p-7">
            <div className="mt-1">
              <Tag className="bg-green-500 text-zinc-700 rounded-xl font-semibold">
                Vegetarian
              </Tag>
            </div>

            <p className="text-xl font-semibold text-stone-800 mt-3">
              Japanese Gyozas
            </p>
            <ul className="text-lg mt-6 flex flex-col gap-2 justify-center">
              <li className="flex items-center gap-2">
                <span>
                  <IoFlameOutline className="stroke-orange-700" />
                </span>
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <IoRestaurantOutline className="stroke-orange-700" />
                </span>
                <span>
                  Nutriscore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <IoStarOutline className="stroke-orange-700" />
                </span>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-110 hover:shadow-xl  transition-all text-left">
          <div>
            <img
              src="/img_omnifood/meals/meal-2.jpg"
              alt="Avocado Salad"
              className="w-full"
            />
          </div>
          <div className="p-7">
            <div className="mt-1 flex gap-2">
              <Tag className="bg-lime-500 text-zinc-700 rounded-xl font-semibold">
                Vegan
              </Tag>
              <Tag className="bg-yellow-500 text-neutral-700 rounded-xl font-semibold">
                Paleo
              </Tag>
            </div>

            <p className="text-xl font-semibold text-stone-800 mt-3">
              Avocado salad
            </p>
            <ul className="text-lg mt-6 flex flex-col gap-2 justify-center">
              <li className="flex items-center gap-2">
                <span>
                  <IoFlameOutline className="stroke-orange-700" />
                </span>
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <IoRestaurantOutline className="stroke-orange-700" />
                </span>
                <span>
                  Nutriscore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <IoStarOutline className="stroke-orange-700" />
                </span>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:max-md:col-span-2">
          <Heading type="h2">Works with any diet</Heading>
          <ul className="flex flex-col gap-4 mt-8">
            {list_of_diets.map((diet_name, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-center sm:max-md:justify-center"
              >
                <span>
                  <IoCheckmarkOutline className="w-7 h-7 stroke-orange-600" />
                </span>
                <span className="text-lg">{diet_name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 px-8  container mx-auto max-w-6xl text-center">
        <a
          href="#"
          className="text-orange-600 hover:text-orange-700 border-b border-b-current pb-[2px] transition-all hover:border-transparent"
        >
          See all recepies &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
