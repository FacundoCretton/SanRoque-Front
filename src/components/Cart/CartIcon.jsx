import  { useEffect, useState } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { CartStyled } from '../Navbar/NavbarStyles';
import { toggleCartHidden } from '../../redux/cart/cartSlide';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeTransparent = scrollTop === 0;
      setIsTransparent(shouldBeTransparent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalCartItems = useSelector(state=>state.cart.cartItems).reduce((acc, item) => (acc+=item.quantity),0)

  const dispatch = useDispatch();
  return (
    <CartStyled onClick={() => dispatch(toggleCartHidden())}>
      <RiShoppingBagLine size={30} color={isTransparent ? 'white' : '#777'} />
      <span>{totalCartItems}</span>
    </CartStyled>
  );
};

export default CartIcon;