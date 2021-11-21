import {
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
  maxW: { sm: 'container.sm', md: 'container.xl' },
  justifyContent: 'center',
  alignItems: 'center',
  p: '24px',
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

const discoverPlaceContainerStyle: FlexProps = {
  w: '100%',
  maxW: '1280px',
  justifyContent: 'center',
  alignItems: 'center',
};

const Index = () => {
  const svgW = 312;
  const svgH = 305;
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
      <Flex id="discoverPlaceContainer" {...discoverPlaceContainerStyle}>
        <Map
          MapSvg={MapOne}
          mapData={mapData}
          showInfoBox
          showButtons
          childSvgWidth={svgW}
          childSvgHeight={svgH}
          viewBoxWidth={svgW}
          viewBoxHeight={svgH}
        />
      </Flex>
    </Container>
  );
};

export default Index;
