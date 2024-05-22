import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, VStack, Image, Heading, Text } from "native-base";
import React = require("react");

type Props = TouchableOpacityProps & {};

export function InstitutionCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="yellow.700"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/2e/6f/c3/2e6fc38b8adf29204eb098bc6f3fedc2.jpg",
          }}
          alt="Imagem doacao de alimentos"
          w={20}
          h={20}
          rounded="md"
          mr={4}
          resizeMode="center"
        />
        <VStack>
          <Heading fontSize="md" color="pink.500">
            Food institution
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={1} numberOfLines={2}>
            Doação de alimentos
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
