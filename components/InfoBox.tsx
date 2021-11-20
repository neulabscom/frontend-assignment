import { Flex, FlexProps, Image, Text, Heading } from '@chakra-ui/react';

interface InfoBoxProps {
  title?: string;
  description?: string;
  levelImageUrl?: string;
  level?: Number;
}

const infoBoxWrapperStyle: FlexProps = {
  id: 'infoBox',
  flexDir: { sm: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  w: '100%',
  maxW: '575px',
  minH: '100px',
  py: '24px',
  my: { sm: '12px', md: '0px' },
  borderTopWidth: '1px',
  borderBottomWidth: '1px',
  borderBottomColor: 'black',
  borderTopColor: 'black',
};

const InfoBox = ({ title, description, levelImageUrl, level }: InfoBoxProps) => {
  return (
    <Flex {...infoBoxWrapperStyle}>
      <Flex id="infoBoxText" flexDir="column" mr={{ sm: '0px', md: '12px' }}>
        <Heading as="h3" size="lg" fontSize="28px" mb="10px">
          {title}
        </Heading>
        <Text id="description" as="p">
          {description}
        </Text>
      </Flex>
      <Flex id="levelContainer" flexDir="column" my={{ sm: '12px', md: '0px' }}>
        <Image src={levelImageUrl} alt={'level-' + title} />
        <Text fontWeight="700" fontSize="28px" whiteSpace="nowrap" textAlign="center" mt="4px">
          {'Livello ' + level}
        </Text>
      </Flex>
    </Flex>
  );
};

export default InfoBox;
