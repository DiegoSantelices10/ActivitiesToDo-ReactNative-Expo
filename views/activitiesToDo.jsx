import React, { useState, useEffect } from "react";
import { Box, VStack, ScrollView, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/card";
import { storeData } from "../utils/index";

export default function ActivitiesToDo({ route, navigation }) {
  const userEmail = route.params.params.userEmail;
  const [userData, setUserData] = useState({});
  const [activities, setActivities] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(`${userEmail}`);
      const res = JSON.parse(jsonValue);
      setActivities(res.activities ? res.activities : "")
      console.log(res);
      setUserData(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const activityDelete = async (value) => {
    const res = activities?.filter((e) => e.key != value)
    !res ? setActivities("") : setActivities(res)
      userData.activities.push(res)
    return storeData(userData)
  }

  return (
    <ScrollView>
      <Box safeArea>
        <Button onPress={() => navigation.goBack()}>Volver a home</Button>
      </Box>
      <Box border="1" borderRadius="md">
        <VStack space="4" p="4">
          {activities ? activities?.map((data) => (
                <Card
                  key={data.key}
                  data={data}
                  activityDelete={activityDelete}
                />
              ))
            : console.log("sin actividades")}
        </VStack>
      </Box>
    </ScrollView>
  );
}
