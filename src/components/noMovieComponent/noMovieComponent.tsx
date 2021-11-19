import React from 'react';

import { Flex, Text, Box } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const NoMovieComponent: React.FC = () => {

  return (
    <Flex p={4} bgColor='white' display='block' align='center' flexDirection='column'>
      <Box>
        <Box textAlign='center' mb={4}>
          <Search2Icon color='blue.900' fontSize='4xl' />
        </Box>
        <Box>
          <Text textAlign='center'>Não encontramos um resultado{<br/>} para sua pesquisa.</Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default NoMovieComponent