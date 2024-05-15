import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";

import { VStack, Center, Text, Heading, ScrollView } from "native-base";

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
      <VStack flex={1} bg="coolGray.700" px={10} pb={16}>
        <Center my={24}>
          <Text color="gray.100" fontSize="lg">
            UPX Doações
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" mb={6} fontFamily="heading">
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
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
