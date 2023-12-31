import { useState } from 'react';
import { HiCheck, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const accordion_vars = [
  {
    id: 1,
    number: '01',
    title: 'Where are these chairs assembled',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eius minus animi molestias accusamus, aliquid inventore assumenda earum sed unde. Eum repudiandae dolor atque quas dolores maiores provident culpa id?',
    features: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, harum.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatem?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nisi.',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'How long do I have to return my chair?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at molestiae nisi aspernatur, a nostrum officiis voluptates ipsam consequatur, ullam maiores animi neque hic! Corrupti inventore nihil eligendi deleniti ut',
    features: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, harum.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatem?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nisi.',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Do you ship to countries outside the EU',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis. Necessitatibus ea, dolore earum molestias eum praesentium possimus! Cupiditate in dolor nesciunt eligendi quod distinctio eos vitae debitis vel explicabo?',
    features: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, harum.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatem?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nisi.',
    ],
  },
];

function Accordion() {
  const [openAccordionId, setOpenAccordionId] = useState(2);

  return (
    <div className="h-screen w-screen flex flex-col justify-center text-left p-10">
      {accordion_vars.map((el, idx) => (
        <div
          key={idx}
          onClick={() => setOpenAccordionId(el.id)}
          className={`mt-10 shadow-md px-10 py-4 border-t-4 grid grid-cols-[auto_1fr_auto] gap-x-4  items-center ${
            openAccordionId == el.id
              ? 'border-t-green-700/75 gap-y-6'
              : 'border-t-gray-700/75'
          }`}
        >
          <p
            className={`text-xl font-medium ${
              openAccordionId == el.id ? 'text-green-700' : 'text-gray-400'
            }`}
          >
            {el.number}
          </p>
          <p
            className={`text-xl font-medium ${
              openAccordionId == el.id ? 'text-green-700' : 'text-gray-700'
            }`}
          >
            {el.title}
          </p>
          <div>
            {openAccordionId == el.id ? (
              <HiChevronDown className="h-8 w-8 stroke-green-700 text-green-700" />
            ) : (
              <HiChevronUp className="h-8 w-8 stroke-green-700 text-gray-700" />
            )}
          </div>
          <div className="col-start-2">
            {openAccordionId == el.id && (
              <>
                <p>{el.description}</p>
                <ul className="mt-5 text-gray-600 flex flex-col gap-1">
                  {el.features.map((feature, idx2) => (
                    <li key={idx2} className="flex gap-3 items-center text-sm">
                      <span>
                        <HiCheck />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}
      <div className="mt-10 text-center">
        <Link to="/home">Back to home page</Link>
      </div>
    </div>
  );
}

export default Accordion;
