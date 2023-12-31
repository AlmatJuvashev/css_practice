import { createContext, useContext } from 'react';
import {
  IoInfiniteOutline,
  IoLeafOutline,
  IoNutritionOutline,
  IoPauseOutline,
} from 'react-icons/io5';

const OmnifoodContext = createContext();

function OmnifoodProvider({ children }) {
  const description_list = [
    {
      heading: 'Tell us what you like (and what not)',
      description:
        'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
      img_src: '/img_omnifood/app/app-screen-1.png',
    },
    {
      heading: 'Approve your weekly meal plan',
      description:
        'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
      img_src: '/img_omnifood/app/app-screen-2.png',
    },
    {
      heading: 'Receive meals at convenient time',
      description:
        'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
      img_src: '/img_omnifood/app/app-screen-3.png',
    },
  ];

  const footer_links = [
    {
      group: 'Account',
      links: ['Create account', 'Sign in', 'iOS app', 'Android app'],
    },
    {
      group: 'About',
      links: ['About Ominfood', 'For Business', 'Cooking partners', 'Careers'],
    },
    {
      group: 'Resources',
      links: ['Recipe directory', 'Help center', 'Privacy & terms'],
    },
  ];

  const customer_testimonials = [
    {
      img_src: 'dave.jpg',
      testimonial:
        'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical',
      customer_name: 'Dave Bryson',
    },
    {
      img_src: 'ben.jpg',
      testimonial:
        "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
      customer_name: 'Ben Hadley',
    },
    {
      img_src: 'steve.jpg',
      testimonial:
        "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
      customer_name: 'Steve Miller',
    },
    {
      img_src: 'hannah.jpg',
      testimonial:
        'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
      customer_name: 'Hannah Smith',
    },
  ];

  const pricing_plans = [
    {
      type: 'Starter',
      price: '399',
      price_per_item: Math.round(399 / 30),
      description: [
        '1 meal per day',
        'Order times are between  11am and 9pm',
        'Delivery is free',
        '',
      ],
    },
    {
      type: 'Complete',
      price: '649',
      price_per_item: Math.round(649 / 60),
      description: [
        '2 meals per day',
        'Order 24/7',
        'Delivery is free',
        'Get access to latest recipes',
      ],
    },
  ];

  const features_list = [
    {
      title: 'Never cook again!',
      text: 'Our subscriptions cover 365 days per year, even including major holidays.',
      icon: (
        <IoInfiniteOutline className="h-10 w-10 p-2 bg-orange-100 stroke-orange-600 rounded-full" />
      ),
    },
    {
      title: 'Local and organic',
      text: 'Our cooks only use local, fresh, and organic products to prepare your meals.',
      icon: (
        <IoNutritionOutline className="h-10 w-10 p-2 bg-orange-100 stroke-orange-600 rounded-full" />
      ),
    },
    {
      title: 'No waste',
      text: 'All our partners only use reusable containers to package all your meals.',
      icon: (
        <IoLeafOutline className="h-10 w-10 p-2 bg-orange-100 stroke-orange-600 rounded-full" />
      ),
    },
    {
      title: 'Pause anytime',
      text: 'Going on vacation? Just pause your subscription, and we refund unused days.',
      icon: (
        <IoPauseOutline className="h-10 w-10 p-2 bg-orange-100 stroke-orange-600 rounded-full" />
      ),
    },
  ];

  return (
    <OmnifoodContext.Provider
      value={{
        description_list,
        customer_testimonials,
        pricing_plans,
        features_list,
        footer_links,
      }}
    >
      {children}
    </OmnifoodContext.Provider>
  );
}

function useOmnifood() {
  const context = useContext(OmnifoodContext);

  if (context === undefined)
    throw new Error('OmnifoodContext was used outside OmnifoodProvider');
  return context;
}

export { OmnifoodProvider, useOmnifood };
