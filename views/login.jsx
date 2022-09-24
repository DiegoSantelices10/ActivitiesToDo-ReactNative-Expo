import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  Stack,
} from "native-base";
import { validateUser } from '../utils/index'
import { useUser } from "../context/userContext"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

export default function Login({ navigation }) {
  const { setUsers, getActivities } = useUser()

  const message = "*El campo es requerido";
  let schema = yup.object().shape({
    email: yup.string().email("Correo electronico invalido").required(message),
    password: yup.string().required(message),
  }).required()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });


    const onSubmit = async (data) => {
        await validateUser(data, navigation, setUsers, getActivities)
    }



  return (
    <Center my="auto">
      <Box safeArea  w="100%" maxW="350">
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
                
            </Stack>
            <Button mt="5" colorScheme="indigo"  onPress={handleSubmit(onSubmit)} >
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
