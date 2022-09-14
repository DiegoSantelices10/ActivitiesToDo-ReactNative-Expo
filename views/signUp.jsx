import React from 'react'
import { Center, Box, Heading, VStack, FormControl, Input, Button, Alert } from 'native-base'
import { useFormik } from "formik";
import { storeUser } from "../utils/index"
import { v4 as uuid } from 'uuid'
import 'react-native-get-random-values';
export default function SignUp ({ navigation }) {
  const id = uuid()

  const { handleSubmit, handleChange, values, handleBlur } = useFormik({
    initialValues: {
      id: id,
      name: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await storeUser(values)
        navigation.navigate("Login")
    }
  });

  return (
    <Center my='auto'>
    <Box safeArea p='2' w='90%' maxW='290' py='8'>
      <Heading size='lg' color='coolGray.800' _dark={{ color: "warmGray.50" }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt='1' color='coolGray.600' _dark={{ color: 'warmGray.200' }} fontWeight='medium' size='xs'>
        Sign up to continue!
      </Heading>
      <VStack space={3} mt='5'>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input id="email"
                       name="email"
                       p={2}
                       onBlur={handleBlur("email")}
                       onChangeText={handleChange("email")}
                       value={values.email} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input id="password"
                       name="password"
                       p={2}
                       onBlur={handleBlur("password")}
                       onChangeText={handleChange("password")}
                       value={values.password} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <Input id="name"
                       name="name"
                       p={2}
                       onBlur={handleBlur("name")}
                       onChangeText={handleChange("name")}
                       value={values.name} />
        </FormControl>
        <FormControl>
          <FormControl.Label>LastName</FormControl.Label>
          <Input id="lastName"
                       name="lastName"
                       p={2}
                       onBlur={handleBlur("lastName")}
                       onChangeText={handleChange("lastName")}
                       value={values.lastName} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Age</FormControl.Label>
          <Input id="age"
                       name="age"
                       p={2}
                       onBlur={handleBlur("age")}
                       onChangeText={handleChange("age")}
                       value={values.age} />
        </FormControl>
        <Button onPress={handleSubmit} mt='2' colorScheme='indigo'>
          Sign up
        </Button>
      </VStack>
    </Box>
  </Center>
  )
};