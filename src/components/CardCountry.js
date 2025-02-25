import React from 'react';
import Box from './Base/Box';
import Button from './Base/Button';
import Text from './Base/Text';

export default function CardCountry({
  country,
  active,
  deaths,
  recovered,
  navigation,
  placehoder,
}) {
  return (
    <Box
      borderRadius={12}
      bg='white'
      height={70}
      mt={12}
      paddingHorizontal={20}
      boxShadow='0px 7px 14px #00000008'
    >
      <Button
        flex={1}
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        onPress={() => null}
      >
        <Text fontSize={18} fontWeight='bold'>
          {country}
        </Text>

        <Box flexDirection='row'>
          <Box flexDirection='row' alignItems='center'>
            <Box size={10} bg='warning' borderRadius={999} mr={8} />
            <Text mr={10} fontSize={13} color='textdark'>
              {active}
            </Text>
          </Box>
          <Box flexDirection='row' alignItems='center'>
            <Box size={10} bg='success' borderRadius={999} mr={8} />
            <Text mr={10} fontSize={13} color='textdark'>
              {recovered}
            </Text>
          </Box>
          <Box flexDirection='row' alignItems='center'>
            <Box size={10} bg='danger' borderRadius={999} mr={8} />
            <Text mr={10} fontSize={13} color='textdark'>
              {deaths}
            </Text>
          </Box>
        </Box>
      </Button>
    </Box>
  );
}
