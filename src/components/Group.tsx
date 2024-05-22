import { Text, Pressable, IPressableProps } from "native-base";
import { background } from "native-base/lib/typescript/theme/styled-system";
import React = require("react");

type Props = IPressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={20}
      h={10}
      bg="white"
      rounded="lg"
      borderWidth="1"
      borderColor="pink.500"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderColor: "pink.500",
        borderWidth: 1,
        background: "pink.500",
      }}
      {...rest}
    >
      <Text
        color={isActive ? "white" : "gray.500"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}
