import React, { useEffect, useState } from "react";
import { Button, VStack, Box, Text, HStack, Select, Center } from "native-base"
import axios from "axios";
import { iconType, fetchData, setStorageData } from '../utils/index'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useUser } from "../context/userContext"


export default function Home({ navigation }) {
  const [data, setData] = useState({})
  const [types, setTypes] = useState("")
  const { users, activities, addActivity } = useUser()

  useEffect( () => {
   fetchData(setData, types)
   setStorageData(activities, users.id)  
  }, [activities]);
  

  const logOut = () => {
    navigation.navigate("Login")
  }

  const activitiesRamdon = () => {
    types == "all" ?
    (  axios.get("http://www.boredapi.com/api/activity")
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))) : 
    (  axios.get(`http://www.boredapi.com/api/activity?type=${types}`)
            .then((response) => setData(response.data))
            .catch((error) => console.log(error)))
  }

  
  return (
    <Box border="1" borderRadius="md" safeArea>
          <VStack alignItems="flex-end" p={4} bg="white">
            <AntDesign name="logout" size={24} color="black" onPress={() => logOut()} />
        </VStack>     
      <VStack space="4" p="4">
        <Box py="2">
          <HStack space={10} justifyContent="space-between">
            <Text fontSize="18" fontWeight={600}>{users.name} </Text>
            <Text fontSize="18" fontWeight={600}>{users.age} Años </Text>
          </HStack>
        </Box>
        <Center mt="20" p="4" bg="white" borderRadius="md" h={180}>
            <Box flex={1} justifyContent="space-between" >
            <VStack justifyContent="center" alignItems="center">
                <Text textAlign="center" fontSize="18" fontWeight="600">{data.activity}</Text>
                <MaterialIcons  name={iconType(data.type)} size={40} color="red"  />
              </VStack>
              <HStack justifyContent="space-between" alignItems="flex-end">
                <Text fontSize="16"  fontWeight={600}>{data.type}</Text>
                <Text fontSize="16" fontWeight={500}>{data.participants} Participants</Text>
              </HStack>
            </Box>
        </Center>
          <Box w="100%">
            <Select
              selectedValue={types}
              minWidth="200"
              accessibilityLabel="Selected Types"
              placeholder="Selected Types"
              _selectedItem={{
                bg: "teal.600",
                
              }}
              mt={1}
              onValueChange={(itemValue) => setTypes(itemValue)}
            >
              <Select.Item label="all" value="all" />
              <Select.Item label="education" value="education" />
              <Select.Item label="recreational" value="recreational" />
              <Select.Item label="social" value="social" />
              <Select.Item label="diy" value="diy" />
              <Select.Item label="charity" value="charity" />
              <Select.Item label="cooking" value="cooking" />
              <Select.Item label="relaxation" value="relaxation" />
              <Select.Item label="music" value="music" />
              <Select.Item label="busywork" value="busywork" />
            </Select>
        </Box>
        <Box>
          <HStack gap={2} justifyContent="space-between">
            <Button w="45%" onPress={activitiesRamdon}>Actitivies Ramdon</Button>
            <Button w="45%" bg="tertiary.400"  onPress={()=> addActivity(data)}>Add Activity</Button>
           
          </HStack>
      
          <Button mt="5" onPress={() => navigation.navigate("ActivitiesToDo", { params: "santelices.diego@hotmail.com"  })} >
            Actitivies To Do
          </Button>
          
        </Box>
      </VStack>
    </Box>
  );
}
