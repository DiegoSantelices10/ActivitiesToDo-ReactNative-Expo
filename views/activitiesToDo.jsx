import React, { useState, useEffect } from "react";
import { Box, VStack, ScrollView, Button, Text } from "native-base";
import Card from "../components/card";
import { useUser } from '../context/userContext'


export default function ActivitiesToDo() {
  const { activities, deleteActivity, getActivity } = useUser()

  return (
    <ScrollView>
      <Box border="1" borderRadius="md">
        <VStack space="4" p="4">
          {activities && Object.values(activities)?.map((data) => (
                <Card
                  key={data.key}
                  data={data}
                  activityDelete={deleteActivity}
                />
              ))}
        </VStack>   
      </Box>
    </ScrollView>
  );
}
