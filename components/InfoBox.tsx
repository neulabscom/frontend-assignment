import React, { memo, useRef } from 'react';
import { Flex, FlexProps, Image, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { InfoBoxProps } from '../interfaces';

const infoBoxWrapperStyle: FlexProps = {
  alignItems: 'center',
  w: '100%',
  maxW: '575px',
  py: '24px',
  mx: '32px',
  borderTopWidth: '1px',
  borderBottomWidth: '1px',
  borderBottomColor: 'black',
  borderTopColor: 'black',
};

const InfoBoxContent: FlexProps = {
  w: '100%',
  flexDir: { sm: 'column', md: 'row' },
  alignItems: 'center',
};

const infoBoxText: FlexProps = {
  flexDir: 'column',
  maxW: '415px',
  mr: { sm: '0px', md: '12px' },
};

const levelContainer: FlexProps = {
  flexDir: 'column',
  my: { sm: '12px', md: '0px' },
};

const InfoBox = memo(
  ({ title, description, levelImageUrl, level }: InfoBoxProps) => {
    const MotionFlex = motion(Flex);

    return (
      <Flex minH="300px" justifyContent="center" alignItems="center">
        <MotionFlex
          id="infoBoxWrapper"
          initial={{ height: 100 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.4 }}
          {...infoBoxWrapperStyle}
        >
          <MotionFlex
            id="InfoBoxContent"
            transition={{ duration: 2.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            {...InfoBoxContent}
          >
            <Flex id="infoBoxText" {...infoBoxText}>
              <Heading as="h3" size="lg" fontSize="28px" mb="10px" fontWeight="normal">
                {title}
              </Heading>
              <Text id="description" as="p">
                {description}
              </Text>
            </Flex>
            <Flex id="levelContainer" {...levelContainer}>
              <Image src={levelImageUrl} alt={'level-' + title} />
              <Text
                fontWeight="700"
                fontSize="28px"
                whiteSpace="break-spaces"
                textAlign="center"
                mt="4px"
              >
                {'Livello ' + level}
              </Text>
            </Flex>
          </MotionFlex>
        </MotionFlex>
      </Flex>
    );
  },
  (next, prev) => next.title === prev.title,
);

export default InfoBox;
