import React, { useState, FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { mapDataDetails, MapProps, TranslateProps } from '../interfaces';
import InfoBox from './InfoBox';
import { AnimatePresence } from 'framer-motion';
import MapButton from './MapButton';

const svgWidth = 312;
const svgHeight = 305;

const mapContainerStyle: FlexProps = {
  flexDir: { sm: 'column', md: 'row' },
  alignItems: 'center',
  m: { sm: 'auto', md: '0px' },
};

const Map: FC<MapProps> = ({
  MapSvg,
  mapData,
  showButtons = true,
  showInfoBox = true,
  viewBoxWidth = svgWidth,
  viewBoxHeight = svgHeight,
  childSvgWidth = svgWidth,
  childSvgHeight = svgHeight,
}) => {
  const [selectedPlace, setSelectedPlace] = useState(mapData[0] || []);

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
        <svg
          width={childSvgWidth}
          height={childSvgHeight}
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        >
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
