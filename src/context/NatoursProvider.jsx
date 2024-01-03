import { createContext, useContext } from 'react';

const NatourContext = createContext();

function NatourProvider({ children }) {
  const popular_tours = [
    {
      cat: 'sea',
      title: `The sea<br/>explorer`,
      img_src: '/img_natours/nat-5.jpg',
      description: [
        '3 day tour',
        'Up to 30 people',
        '2 hour guides',
        'Sleep in cozy hostels',
      ],
    },
    {
      cat: 'forest',
      title: `<span>The forest</span><br/><span>hiker</span>`,
      img_src: '/img_natours/nat-6.jpg',
      description: [
        '7 day tour',
        'Up to 40 people',
        '6 hour guides',
        'Sleep in provided tents',
      ],
    },
    {
      cat: 'winter',
      title: `<span>The snow</span><br/><span>adventurer</span>`,
      img_src: '/img_natours/nat-7.jpg',
      description: [
        '5 day tour',
        'Up to 15 people',
        '3 hour guides',
        'Sleep in provided tents',
      ],
    },
  ];
  return (
    <NatourContext.Provider value={{ popular_tours }}>
      {children}
    </NatourContext.Provider>
  );
}

function useNatourData() {
  const context = useContext(NatourContext);
  if (!context)
    throw new Error('NatourContext is used outside of the NatourProvider');
  return context;
}

export { NatourProvider, useNatourData };
