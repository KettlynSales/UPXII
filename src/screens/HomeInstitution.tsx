import { useState } from "react";

import { HomeHeader } from "@components/HomeHeader";
import { VStack, Heading, TextArea, Checkbox, ScrollView } from "native-base";

import React = require("react");
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function HomeInstitution() {
  const [groups, setGroups] = useState([]);

  return (
    <VStack flex={1} bg="yellow.700">
      <HomeHeader />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Heading
          px={8}
          mt={6}
          mb={6}
          fonts="heading"
          color="gray.500"
          size="sm"
          fontFamily="bold"
        >
          Com o que podemos ajudar?
        </Heading>

        <Checkbox.Group
          px={8}
          mb={6}
          onChange={setGroups}
          value={groups}
          accessibilityLabel="choose numbers"
        >
          <Checkbox
            value="zero"
            my={2}
            colorScheme="danger"
            borderColor="pink.500"
          >
            Todas as opções
          </Checkbox>
          <Checkbox
            value="one"
            my={2}
            borderColor="pink.500"
            colorScheme="danger"
          >
            Roupas
          </Checkbox>
          <Checkbox
            value="two"
            my={2}
            borderColor="pink.500"
            colorScheme="danger"
          >
            Alimentos
          </Checkbox>
          <Checkbox
            value="three"
            my={2}
            borderColor="pink.500"
            colorScheme="danger"
          >
            Brinquedos
          </Checkbox>
          <Checkbox
            value="four"
            my={2}
            borderColor="pink.500"
            colorScheme="danger"
          >
            Móveis
          </Checkbox>
        </Checkbox.Group>

        <VStack px={8}>
          <TextArea
            placeholder="Se desejar coloque uma descrição"
            placeholderTextColor="gray.500"
            borderColor="pink.500"
            bg="white"
          />
          <Heading
            fonts="heading"
            color="gray.500"
            size="sm"
            fontFamily="bold"
            mt={8}
            mb={4}
          >
            Como podemos entrar em contato?
          </Heading>
          <Input placeholder="WhatsApp" secureTextEntry />
          <Input placeholder="Email" secureTextEntry />
          <Input placeholder="Telefone" secureTextEntry />
          <Button title="Enviar" mt={4} mb={8} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
