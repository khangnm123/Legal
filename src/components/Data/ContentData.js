import { useState } from 'react';
import FaqContent from '../FaqContent';
import Header from '../Header/Header';
import ListContent from '../List/ListContent';
function ContentData() {
  const [list , setList] = useState(
  [
    {
      question:"1. How do I place an order on your website?",
      answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
      active : 1
    },
    {
      question:"2. What is your return policy?",
      answer:"A return policy indicates rules and conditions about if, when, and for how long your customers can return a purchase and receive reimbursement. It includes information about how long your customer has to make the return and which items are included or excluded from the policy."
    },
    {
      question:"3. Do you offer an option to send a product as a gift?",
      answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.."
    }

  ]
  );
const [check , setCheck] =useState(
  [
    {
      question:"1. What payment methods do you accept?",
      answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
      active : 1
    },
    {
      question:"2. Do you offer an option to pay for the product over time?",
      answer:"Yes, we do. We have partnered with a few companies that offer such option."
    },
  ]
  );
  const [shop , setShop] =useState(
    [
      {
        question:"1. Do I have to pay for the shipping?",
        answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
        active : 1
      },
      {
        question:"2. How long does it take for you to dispatch my order?",
        answer:"Yes, we do. We have partnered with a few companies that offer such option."
      },
      {
        question:"3. What shipping company do you use?",
        answer:"Yes, we do. We have partnered with a few companies that offer such option."
      },
      {
        question:"4. How long does it usually take for my order to arrive?",
        answer:"Yes, we do. We have partnered with a few companies that offer such option."
      },
    ]
    );
    const [discount , setDiscount] =useState(
      [
        {
          question:"1. Do you offer any discounts on your website?",
          answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
          active : 1
        },
      ]
      );
      const [other , setOther] =useState(
        [
          {
            question:"1. Where can I find the reviews?",
            answer:"Please visit our reviews page to find out more about that.",
            active : 1
          },
          {
            question:"2. How do I contact you?",
            answer:"Please visit our reviews page to find out more about that.",
            active : 1
          }
        ]
        );
  return (
    <div className="bg-[#FFFFFF] h-screen mx-10">
      <div><Header/></div>
      <div><ListContent/></div>
      <div><h1 className=' mx-10 text-3xl'>General</h1></div>
        {/* Begin */}
        <div className='list flex  justify-between mx-40 flex-wrap w-full'>
         {list.map((item , key) =>(
           <FaqContent key={key} datas={item} />
         ))}
        </div>
        <div className='checkout-content'>
          <div>
            <h2 className=' mx-10 text-3xl font-bold m-4'>Check Out</h2>
          </div>
          <div className='list flex  justify-between mx-40 flex-wrap w-full'>
             {check.map((item , key) =>(
              <FaqContent key={key} datas={item} />
              ))}
          </div>
        </div>
          <div className='shopping'>
            <div>
              <h2 className=' mx-10 text-3xl font-bold m-4'>Shopping</h2>
          </div>
          <div className='list flex  justify-between mx-40 flex-wrap w-full'>
              {shop.map((item , key) =>(
                <FaqContent key={key} datas={item} />
             ))}
          </div>
          </div>
          <div className='discount-shop'>
          <div>
              <h2 className=' mx-10 text-3xl font-bold m-4'>Shopping</h2>
          </div>
                <div className='list flex  justify-between mx-40 flex-wrap w-full' >
              {discount.map((item , key) =>(
                <FaqContent key={key} datas={item} />
             ))}
          </div>
          </div>
          <div className='other-shop'>
          <div>
              <h2 className=' mx-10 text-3xl font-bold m-4'>Other</h2>
          </div>
                <div className='list flex  justify-between mx-40 flex-wrap w-full'>
              {other.map((item , key) =>(
                <FaqContent key={key} datas={item} />
             ))}
          </div>
          </div>
    </div>
  );
}

export default ContentData;
