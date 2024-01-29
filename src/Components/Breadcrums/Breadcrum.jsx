// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../../assets/arrow.png'

// const Breadcrum = (props) => {
//     const {prodcut} = props;
//   return (
//     <div className='breadcrum'>
//         HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {prodcut.category} <img src={arrow_icon} alt="" /> {prodcut.name}
//     </div>
//   )
// }

// export default Breadcrum


import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../../assets/arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  // Check if product is undefined or null
  if (!product) {
    return <div className='breadcrum'>HOME</div>;
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
