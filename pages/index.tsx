import { Heading, HeadingProps, Container, ContainerProps } from '@chakra-ui/react';
import Map from '../components/Map';
import { mapDataProps } from '../interfaces';
import MapOne from '../public/maps/MapOne.svg';

const containerStyleProps: ContainerProps = {
  id: 'app-wrapper',
  maxW: { sm: 'container.sm', md: 'container.xl' },
  justifyContent: 'center',
  alignItems: 'center',
  p: '24px',
};

const discoverPlaceTitleStyle: HeadingProps = {
  id: 'discoverPlaceTitle',
  as: 'h1',
  size: 'lg',
  textAlign: 'center',
  my: { sm: '24px', md: '30px' },
};

const Index = () => {
  const mapData: mapDataProps = {
    details: [
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
    ],
  };

  return (
    <Container {...containerStyleProps}>
      <Heading {...discoverPlaceTitleStyle}>Scopri i luoghi del mistero</Heading>
      <Map
        MapSvg={MapOne}
        mapData={mapData}
        svgWidth={312}
        svgHeight={305}
        viewBoxWidth={312}
        viewBoxHeight={305}
        showInfoBox
      />
    </Container>
  );
};

export default Index;
