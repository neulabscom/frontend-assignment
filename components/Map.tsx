import React, { useState, useEffect } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { mapDataDetails, MapProps, TranslateProps } from '../interfaces';
import InfoBox from './InfoBox';
import Button from './Button';

const discoverPlaceContainerStyle: FlexProps = {
  id: 'discoverPlaceContainer',
  flexDir: { sm: 'column', md: 'row' },
  w: '100%',
  maxW: '1280px',
  justifyContent: 'center',
  alignItems: 'center',
};

const mapContainerStyle: FlexProps = {
  id: 'map',
  alignItems: 'center',
  m: { sm: 'auto', md: '0px' },
  mr: { md: '60px' },
};

const Map = ({
  MapSvg,
  mapData,
  svgWidth = 312,
  svgHeight = 305,
  viewBoxWidth = 312,
  viewBoxHeight = 305,
  showInfoBox = true,
}: MapProps) => {
  const { details } = mapData;
  const [selectedPlace, setSelectedPlace] = useState<mapDataDetails>(details[1]);

  /** Set coordinates and return a children component inside group tag */
  function Translate({ x = 0, y = 0, children }: TranslateProps) {
    return <g transform={`translate(${x},${y})`}>{children}</g>;
  }

  function handleClick(place: mapDataDetails) {
    if (place) setSelectedPlace(place);
  }

  return (
    <Flex {...discoverPlaceContainerStyle}>
      <Flex {...mapContainerStyle}>
        <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
          <MapSvg />
          {details.map((item, index) => {
            return (
              <Translate
                key={index}
                x={item.x}
                y={item.y}
                children={
                  <>
                    <Button
                      onClick={() => handleClick(item)}
                      isSelected={item.title === selectedPlace.title}
                    />
                  </>
                }
              />
            );
          })}
        </svg>
      </Flex>
      {showInfoBox && <InfoBox {...selectedPlace} />}
    </Flex>
  );
};

export default Map;
