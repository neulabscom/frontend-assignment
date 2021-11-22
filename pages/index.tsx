import React from 'react';
import {
  Box,
  BoxProps,
  Heading,
  HeadingProps,
  Container,
  ContainerProps,
  Flex,
  FlexProps,
} from '@chakra-ui/react';
import Map from '../components/Map';
import { mapDataDetails } from '../interfaces';
import MapOne from '../public/maps/MapOne.svg';

const containerStyleProps: ContainerProps = {
  id: 'app-wrapper',
  d: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxW: { sm: '100%', md: '1600px' },
  p: { sm: '24px', md: '44px' },
  bg: '#ece8d5',
};

const discoverPlaceTitleStyle: HeadingProps = {
  id: 'discoverPlaceTitle',
  as: 'h1',
  size: 'lg',
  fontWeight: 'normal',
  textAlign: 'center',
  mb: { sm: '24px', md: '30px' },
};

const discoverPlaceContainerStyle: BoxProps = {
  display: 'inline-block',
  margin: 'auto',
};

const Index = () => {
  const mapData: mapDataDetails[] = [
    {
      level: 1,
      title: 'The Hotel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',

      y: 52,
      x: 105,
      levelImageUrl: '/lvl_one.png',
    },
    {
      level: 2,
      title: 'The Church',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',

      y: 100,
      x: 245,
      levelImageUrl: '/lvl_two.png',
    },
    {
      level: 3,
      title: 'The Graveyard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',

      y: 250,
      x: 155,
      levelImageUrl: '/lvl_three.png',
    },
  ];

  return (
    <Container {...containerStyleProps}>
      <Heading {...discoverPlaceTitleStyle}>Scopri i luoghi del mistero</Heading>
      <Box id="discoverPlaceContainer" {...discoverPlaceContainerStyle}>
        <Map MapSvg={MapOne} mapData={mapData} showInfoBox showButtons />
      </Box>
    </Container>
  );
};

export default Index;
