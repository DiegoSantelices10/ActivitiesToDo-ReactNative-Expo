import React, { useState, useEffect } from "react";
import { Box, VStack, ScrollView, Button, Text } from "native-base";
import Card from "../components/card";
import { useUser } from '../context/userContext'


export default function ActivitiesToDo() {
  const { users, deleteActivity } = useUser()
  
  console.log("activitiesToDo")
  console.log(users)


  return (
    <ScrollView>
      <Box safeArea>
     <Text>Hola</Text>
      </Box>
    </ScrollView>
  );
}
