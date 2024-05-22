import React = require("react");

import { VStack, Center, Text, Heading, ScrollView, Image } from "native-base";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import Logo from "@assets/logo.png";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
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
            Acesse sua conta
          </Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Acessar conta" />
        </Center>
        <Center>
          <Text color="pink.500" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tenho acesso
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
