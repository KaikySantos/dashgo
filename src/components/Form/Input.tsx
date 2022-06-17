import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, error, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <ChackraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgCOlor: "gray.900"
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      ) }
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);