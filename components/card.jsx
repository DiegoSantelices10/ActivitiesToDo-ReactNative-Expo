import React from 'react'
import { Box, HStack, Text, VStack } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { iconType } from '../utils/index'

export default function Card({deleteActivity, data: { key, activity, type, participants }}) {
  return (
        <Box p="4" bg="white" borderRadius="md" key={key} h={180}>
            <Box flex={1} justifyContent="space-between" >
              <VStack justifyContent="center" alignItems="center">
                <Text textAlign="center" fontSize="18" fontWeight="600">{activity}</Text>
                <MaterialIcons  name={iconType(type)} size={40} color="red"  />
              </VStack>
              <HStack justifyContent="space-between" alignItems="flex-end" >
                <HStack  space={4} >
                    <Text fontSize="18" fontWeight={600}>{type}</Text>
                    <Text fontSize="18" fontWeight={400}>{participants} Participants</Text>
                </HStack>
                <MaterialIcons name="delete-forever" size={30} color="red" onPress={() => deleteActivity(key)} />
              </HStack>
            </Box>
        </Box>
  ) 
}
