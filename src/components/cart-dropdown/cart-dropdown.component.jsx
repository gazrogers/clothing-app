import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<dov className='cart-items' />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
