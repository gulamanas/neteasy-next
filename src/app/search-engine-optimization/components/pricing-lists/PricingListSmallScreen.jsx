import './PricingLists.css';
import { FaCheck } from 'react-icons/fa6';
import { pricingListData } from './pricingListData';
import { useState } from 'react';
import checkoutHandler from '../../../utils/checkoutHandler';

const PricingListsSmallScreen = () => {
  const [selectedType, setSelectedType] = useState('Smaller');

  const handleDropdownChange = (event) => {
    setSelectedType(event.target.value);
  };
  return (
    <div className='pricing_list_wrapper'>
      <h3>
        Our search engine optimization core services include: Organic Search,
        On-Page SEO, Link Building, Keyword Research / Strategy and Activity
        Report.
      </h3>
      <p>SEO and Marketing Pricing Lists</p>
      {/* <button className='test_for_amount' onClick={() => checkoutHandler(1)}>
        Click Here to pay ₹1
      </button> */}

      {/* <select onChange={handleDropdownChange}>
        <option value={'Small'}>Select Type</option>
        {pricingListData.map(({ listType }, index) => (
          <option key={index} value={listType}>
            {listType}
          </option>
        ))}
      </select> */}

      <div className='pricing_list_items_wrapper'>
        {pricingListData
          .filter(({ type }) => type === selectedType)
          .map(({ price, priceList, amount }, index) => (
            <div key={index} className='pricing_list_items'>
              <p>
                <select onChange={handleDropdownChange} value={selectedType}>
                  <option value={null} disabled>
                    Select Package
                  </option>
                  {pricingListData.map(({ type }, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </p>
              <div className='item_prices'>
                <p>{price}</p>
              </div>
              <div className='buy_button'>
                <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
              </div>{' '}
              <ul style={{ padding: '10px' }}>
                {priceList.map((data, i) => (
                  <li key={i} style={{ marginTop: '8px' }}>
                    <FaCheck style={{ color: 'blue' }} /> {data}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PricingListsSmallScreen;
