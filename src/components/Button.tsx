import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";
import React = require("react");

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={variant === "outline" ? "white" : "pink.500"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="pink.500"
      rounded="sm"
      _pressed={{ bg: variant === "outline" ? "pink.400" : "pink.400" }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "pink.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
