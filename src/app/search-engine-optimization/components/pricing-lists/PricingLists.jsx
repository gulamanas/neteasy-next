import './PricingLists.css';
import { FaCheck } from 'react-icons/fa6';
import { pricingListData } from './pricingListData';
import checkoutHandler from '../../../utils/checkoutHandler';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPricing } from '../../../../redux/slice/pricingSlice';

const PricingLists = () => {
  const dispatch = useDispatch();

  const handleBuyNow = (selectedPricing) => {
    dispatch(setPricing(selectedPricing));
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
      <div className='pricing_list_items_wrapper'>
        {pricingListData.map(({ type, price, priceList, amount }, index) => (
          <div key={index} className='pricing_list_items'>
            <p>{type}</p>
            <div className='item_prices'>
              <p>{price}</p>
            </div>
            <Link
              to={`/checkout`}
              onClick={() => handleBuyNow({ type, price, priceList, amount })}
              className='buy_button'
            >
              <button>Buy Now</button>
            </Link>
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

export default PricingLists;
