import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
  Stack,
} from "native-base";
import { Text } from "react-native";
import { useFormik } from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { validateUser } from '../utils/index'
import { useUser } from "../context/userContext"


export default function Login({ navigation }) {
  const { setUsers } = useUser()

  
  const { handleSubmit, handleChange, values, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
        await AsyncStorage.setItem("email", JSON.stringify(values.email))
        await validateUser(values, navigation, setUsers)
    }
  })


  return (
    <Center my="auto">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl >
            <Stack space={5}>
              <Stack>
                <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input id="email"
                       name="email"
                       p={2}
                       onBlur={handleBlur("email")}
                       onChangeText={handleChange("email")}
                       value={values.email} />
                </FormControl>
              </Stack>
              <Stack>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input id="password"
                       name="password"
                       p={2}
                       onBlur={handleBlur("password")}
                       onChangeText={handleChange("password")}
                       value={values.password} />
              </FormControl>
              </Stack>
            </Stack>
            <Button mt="5" colorScheme="indigo" onPress={handleSubmit} >
              Sign in
            </Button>
          </FormControl>
          <HStack space={2} mx="auto">
            <Text>I'm a new user.</Text>
            <Button
              p="0"
              variant="ghost"
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text>Sign Up</Text>
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
