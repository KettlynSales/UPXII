import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Center, Heading, VStack } from "native-base";
import React = require("react");

export function Profile() {
  return (
    <VStack flex={1} bg="yellow.700" pb={6} pt={16}>
      <Heading alignSelf="center" color="pink.500" fontSize="xl" mt={8}>
        Perfil
      </Heading>
      <Center mt={10} px={10}>
        <Input placeholder="Nome" />
        <Input value="email@email.com" isDisabled />
      </Center>
      <VStack px={10} mt={12} mb={9}>
        <Heading color="pink.500" fontSize="md" mb={2}>
          Alterar senha
        </Heading>
        <Input placeholder="Senha atual" secureTextEntry />
        <Input placeholder="Nova senha" secureTextEntry />
        <Input placeholder="Confirme a nova senha" secureTextEntry />
        <Button title="Atualizar" mt={4} />
      </VStack>
    </VStack>
  );
}
