import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { VStack, FlatList, Heading } from "native-base";
import { InstitutionCard } from "@components/InstitutionCard";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import React = require("react");

export function Home() {
  const [groups, setGroups] = useState([
    "roupas",
    "alimentos",
    "brinquedos",
    "móveis",
  ]);
  const [groupSelected, setGroupSelected] = useState("roupas");
  const [institutions, setInstitutions] = useState([
    "Alimentos",
    "Roupas",
    "Brinquedos",
    "Móveis",
  ]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenInstitutionDetails() {
    navigation.navigate("institution");
  }

  return (
    <VStack flex={1} bg="white">
      <HomeHeader />
      <Heading
        px={8}
        mt={6}
        fonts="heading"
        color="gray.500"
        size="sm"
        fontFamily="bold"
      >
        Instituições que você pode ajudar com...
      </Heading>
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        mb={4}
      />
      <VStack flex={1} px={8}>
        <FlatList
          data={institutions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <InstitutionCard onPress={handleOpenInstitutionDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
