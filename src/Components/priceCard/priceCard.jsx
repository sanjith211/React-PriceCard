import React from 'react';
import './priceCard.css'


const PriceCard = ({ title, price, features, buttonText }) => {
  return (
   <div>
     <div className='price'>
      <div className="price-card">
        <p>{title}</p>
        <h2>{price}</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              {feature.includes('.')?(
                <span>&#10004; {feature.replace('.','')}</span>
              ):(
                <span>&#10008; {feature.replace(',','')}</span>
              )}
            </li>
          ))}
        </ul>
        <button className='button'>{buttonText}</button>
      </div>
    </div>
   </div>
  );
};

const App1 = () => {
  const priceOptions = [
    {
      title: 'FREE',
      price: '$0/month',
      features: [
        '. Single User',
        '. 50GB Storage',
        '. Unlimited Public Projects',
        '. Community Access',
        ', Unlimited Private Projects',
        ', Dedicated Phone Support',
        ', Free Subdomain',
        ', Monthly Status Reports',
      ],
      buttonText: 'BUTTON',
    },
    {
      title: 'PLUS',
      price: '$9/month',
      features: [
        '. 5 User',
        '. 50GB Storage',
        '. Unlimited Public Projects',
        '. Community Access',
        '. Unlimited Private Projects',
        '. Dedicated Phone Support',
        '. Free Subdomain',
        ', Monthly Status Reports',
      ],
      buttonText: 'BUTTON',
    },
    {
      title: 'PRO',
      price: '$49/month',
      features: [
        '. Unlimited User',
        '. 50GB Storage',
        '. Unlimited Public Projects',
        '. Community Access',
        '. Unlimited Private Projects',
        '. Dedicated Phone Support',
        '. Free Subdomain',
        '. Monthly Status Reports',
      ],
      buttonText: 'BUTTON',
    },
  ];

  return (
    <div className="App">
      {priceOptions.map((option, index) => (
        <PriceCard key={index} {...option} />
      ))}
    </div>
  );
};

export default App1;