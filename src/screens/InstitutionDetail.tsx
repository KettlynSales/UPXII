import React = require("react");
import { useState } from "react";
import {
  HStack,
  Heading,
  Icon,
  VStack,
  Image,
  Box,
  Text,
  Modal,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Button } from "@components/Button";

export function InstitutionDetail() {
  const [showModal, setShowModal] = useState(false);
  const [placement, setPlacement] = useState(undefined);

  const openModal = (placement: string | React.SetStateAction<undefined>) => {
    setShowModal(true);
    setPlacement(placement);
  };

  const styles = {
    top: {
      marginBottom: "auto",
      marginTop: 0,
    },
    bottom: {
      marginBottom: 0,
      marginTop: "auto",
    },
    left: {
      marginLeft: 0,
      marginRight: "auto",
    },
    right: {
      marginLeft: "auto",
      marginRight: 0,
    },
    center: {},
  };

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack bg="yellow.700" flex={1}>
      <HStack px={7} mt={20}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="pink.500" size={6} />
        </TouchableOpacity>
        <Heading ml={16}>Food institution</Heading>
      </HStack>
      <VStack p={8} mt={8}>
        <Image
          w="full"
          h={80}
          source={{
            uri: "https://i.pinimg.com/736x/2e/6f/c3/2e6fc38b8adf29204eb098bc6f3fedc2.jpg",
          }}
          alt="imagem da instituicao"
          mb={3}
          resizeMode="cover"
          rounded="md"
        />
        <Box bg="pink.400" rounded="md" p={4}>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius
            est modi necessitatibus. Illo excepturi quos ipsum! Odio natus nisi
            provident numquam voluptate aperiam officia possimus quis beatae,
            iure officiis.
          </Text>

          <Button
            title="Ajudar a instituição"
            onPress={() => openModal("bottom")}
            mt={4}
          />
        </Box>
      </VStack>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        safeAreaTop={true}
        size="full"
      >
        <Modal.Content {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>
            <Heading color="gray.500">Entre em contato para doar</Heading>
            <Button title="WhatsApp" rounded="full" mt={4} />
            <Button title="Email" rounded="full" mt={4} />
            <Button title="Telefone" rounded="full" mt={4} mb={4} />
          </Modal.Header>
        </Modal.Content>
      </Modal>
    </VStack>
  );
}
