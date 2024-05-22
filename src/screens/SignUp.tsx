import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";

import { VStack, Center, Text, Heading, ScrollView, Image } from "native-base";
import Logo from "@assets/logo.png";

import React = require("react");

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="yellow.700" px={10}>
        <Center my={20}>
          <Image source={Logo} w={180} h={180} alt="logo" />

          <Heading color="pink.500" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
