import { Input as NativeBaseInput, IInputProps } from "native-base";
import React = require("react");

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="white"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="blue"
      fontFamily="body"
      placeholderTextColor="pink.500"
      mb={4}
      _focus={{
        bg: "white",
        borderWidth: 1,
        borderColor: "pink.400",
      }}
      {...rest}
    />
  );
}
