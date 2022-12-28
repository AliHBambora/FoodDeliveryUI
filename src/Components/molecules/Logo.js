import React from 'react'
import LogoFoodDelivery from '../../Assets/Images/LogoFoodDelivery.jpg';
import Image from '../atoms/Image';

const Logo = () => {
  return (
    <>
    <Image source={LogoFoodDelivery} height={100} width={100} ObjectFit="contain" />
    </>
  )
}

export default Logo