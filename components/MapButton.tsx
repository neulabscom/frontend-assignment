import React from 'react';
import { Icon } from '@chakra-ui/react';
import DefaultIcon from '../public/svg/DefaultBtn.svg';
import SelectedIcon from '../public/svg/SelectedBtn.svg';
import { CustomButtonProps } from '../interfaces';

const MapButton = ({ variant, handleClick }: CustomButtonProps) => {
  return (
    <>
      {variant === 'default' ? (
        <Icon as={DefaultIcon} cursor="pointer" onClick={() => handleClick && handleClick()} />
      ) : (
        <Icon as={SelectedIcon} />
      )}
    </>
  );
};

export default MapButton;
