import { HStack, Heading, Text, VStack, Icon } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import React = require("react");

export function HomeHeader() {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#EE9E8E",
      }}
    >
      <HStack bg="white" pt={16} pb={5} px={8} alignItems="center">
        <VStack flex={1}>
          <Heading color="gray.500" fontSize="md">
            Olá,
          </Heading>
          <Heading color="pink.500" fontSize="md" fontFamily="bold">
            Nome Instituição
          </Heading>
        </VStack>
        <TouchableOpacity>
          <Icon as={MaterialIcons} name="logout" color="pink.500" size={7} />
        </TouchableOpacity>
      </HStack>
    </View>
  );
}
