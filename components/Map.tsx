import React, { useState, FC } from 'react';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { mapDataDetails, MapProps, TranslateProps } from '../interfaces';
import InfoBox from './InfoBox';
import { AnimatePresence } from 'framer-motion';
import MapButton from './MapButton';

const svgWidth = '100%';
const svgHeight = '100%';

const mapContainerStyle: FlexProps = {
  flexDir: { sm: 'column', md: 'row' },
  alignItems: 'center',
  m: { sm: 'auto', md: '0px' },
};

const Map: FC<MapProps> = ({ MapSvg, mapData, showButtons = true, showInfoBox = true }) => {
  const [selectedPlace, setSelectedPlace] = useState<any>(mapData[0] || []);

  /** Set coordinates and return a children component inside a <g> (group) tag */
  function Translate({ x = 0, y = 0, children }: TranslateProps) {
    return <g transform={`translate(${x},${y})`}>{children}</g>;
  }

  function handleClick(locationInfo: mapDataDetails) {
    if (locationInfo) setSelectedPlace(locationInfo);
  }

  return (
    <Flex id="map" {...mapContainerStyle}>
      {MapSvg && (
        <Box minW="312px" w="312px" h="305px">
          <svg display="block" height="100%">
            <MapSvg />
            {mapData &&
              mapData?.map((item: mapDataDetails) => {
                const { title, y, x } = item;
                if (!showButtons) return;
                return (
                  <Translate
                    key={'title-' + title}
                    x={x}
                    y={y}
                    children={
                      title === selectedPlace.title ? (
                        <MapButton variant="selected" />
                      ) : (
                        <MapButton variant="default" handleClick={() => handleClick(item)} />
                      )
                    }
                  />
                );
              })}
          </svg>
        </Box>
      )}

      {showInfoBox && (
        <AnimatePresence>
          <InfoBox {...selectedPlace} />
        </AnimatePresence>
      )}
    </Flex>
  );
};

export default Map;
