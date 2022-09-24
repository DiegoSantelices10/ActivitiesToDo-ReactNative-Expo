import React from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
} from "native-base";
import { storeUser } from "../utils/index";
import { v4 as uuid } from "uuid";
import "react-native-get-random-values";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

export default function SignUp({ navigation }) {
  const id = uuid();
 
  const message = "*El campo es requerido";
  let schema = yup.object().shape({
    name: yup.string().required(message),
    lastName: yup.string().required(message),
    age: yup.number().required(message).positive().integer(),
    email: yup.string().email("Por favor escribi tu correo electronico").required(message),
    password: yup.string().required(message),
  }).required()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: id,
      name: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await storeUser(data)
      alert("Tu cuenta ha sido creada con exito!")
      navigation.navigate("Login")
  }

  console.log("render")
  return (
    <Center my="auto">
      <Text>{counter}</Text>
      <Box safeArea w="100%" maxW="350">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{ color: "warmGray.50" }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{ color: "warmGray.200" }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              {errors.email && <Text>{errors.email.message}</Text>}
            </FormControl>


            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    type="password"  
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
                
              />
              {errors.password && <Text>This is required.</Text>}
            </FormControl>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="name"
              />
              {errors.name && <Text>This is required.</Text>}
            </FormControl>

            <FormControl>
              <FormControl.Label>LastName</FormControl.Label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="lastName"
              />
              {errors.lastName && <Text>This is required.</Text>}
            </FormControl>
            <FormControl>
              <FormControl.Label>Age</FormControl.Label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="age"
              />
              {errors.age && <Text>This is required.</Text>}
            </FormControl>
            <Button
              onPress={handleSubmit(onSubmit)}
              mt="10"
              colorScheme="indigo"
            >
              Sign up
            </Button>
          </FormControl>
        </VStack>
      </Box>
    </Center>
  );
}
