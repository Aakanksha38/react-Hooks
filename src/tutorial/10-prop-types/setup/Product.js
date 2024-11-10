import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({name,image,price}) => {
  const imageUrl = image && image.url;

  return(
    <article className='product'>
      <img src={imageUrl || defaultImage} alt={name || "default Image"} />
      <h4>{name}</h4>
      <h4>{price || 10.3}</h4>
    </article>
  );
};




export default Product;
//whatever props we are using , we are specifying their type 
//we use "isRequired" to make sure that a warning message is shown if the prop isn’t provided or if its data type is different from the specified one.
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

/*
Product.defaultProps = {
  name: 'default name', //Failed prop type: Invalid prop `price` of type `string` supplied to `Product`, expected `number`.
  price: "3.99",
  image: defaultImage,  //for image we specified proptype as object, here we r giving "string"...so warning we get in console:Failed prop type: Invalid prop `image` of type `string` supplied to `Product`, expected `object`.
};
*/