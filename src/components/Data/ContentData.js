import { useState } from 'react';
import FaqContent from '../FaqContent';
import Header from '../Header/Header';
function ContentData() {
  const [list , setList] = useState(
  [
    {
      question:"1.1 Our Terms & Conditions",
      answer:"Here you can put any text that you think would be suitable and relevant to this particular section of the website.",
      active : 1
    },
    {
      question:"1.2 Collection of personal data",
      answer:"This place is reserved for you to put some text content that you think would make sense here."
    },
    {
      question:"1.3 Purpose of collection of personal data",
      answer:"Here you can put any text that you think would be suitable and relevant to this particular section of the website."
    },
     {
      question:"1.4 Usage of your personal data",
      answer:"This place is reserved for you to put some text content that you think would make sense here."
    },

  ]
  );
const [check , setCheck] =useState(
  [
    {
      question:"2.1 Different payment methods on our website?",
      answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
      active : 1
    },
    {
      question:"2.2 Our right to cancel your payment?",
      answer:"Yes, we do. We have partnered with a few companies that offer such option."
    },
  ]
  );
  const [shop , setShop] =useState(
    [
      {
        question:"3.1 Order processing on our website",
        answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
        active : 1
      },
      {
        question:"3.2 Dispatch and shipping times for different types of orders",
        answer:"Yes, we do. We have partnered with a few companies that offer such option."
      },
      {
        question:"3.3 Return and refund policies for all online orders",
        answer:"All you need to do is to put your own text here and that is going to be it, all done. This section can be used for really long pieces of text that explain a lot of small details that are required."
      },
    ]
    );
    const [discount , setDiscount] =useState(
      [
        {
          question:"4.1 Our right to change Terms & Conditions",
          answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
          active : 1
        },
        {
          question:"4.2 Notice of change in Terms & Conditions",
          answer:"All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
          active : 1
        }
      ]
      );
  return (
    <div className="bg-[#FFFFFF] h-screen mx-10">
      <div><Header/></div>
      <div><h1 className=' mx-10 text-3xl'>1. Introduction</h1></div>
        {/* Begin */}
        <div className='list flex  justify-between mx-40 flex-wrap w-full'>
         {list.map((item , key) =>(
           <FaqContent key={key} datas={item} />
         ))}
        </div>
        <div className='checkout-content'>
          <div>
            <h2 className=' mx-10 text-3xl font-bold m-4'>2. Payment Terms</h2>
          </div>
          <div className='list flex  justify-between mx-40 flex-wrap w-full'>
             {check.map((item , key) =>(
              <FaqContent key={key} datas={item} />
              ))}
          </div>
        </div>
          <div className='shopping'>
            <div>
              <h2 className=' mx-10 text-3xl font-bold m-4'>3. Orders</h2>
          </div>
          <div className='list flex  justify-between mx-40 flex-wrap w-full'>
              {shop.map((item , key) =>(
                <FaqContent key={key} datas={item} />
             ))}
          </div>
          </div>
          <div className='discount-shop'>
          <div>
              <h2 className=' mx-10 text-3xl font-bold m-4'>4. Changes</h2>
          </div>
                <div className='list flex  justify-between mx-40 flex-wrap w-full' >
              {discount.map((item , key) =>(
                <FaqContent key={key} datas={item} />
             ))}
          </div>
          </div>
    </div>
  );
}

export default ContentData;
