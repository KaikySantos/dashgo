import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Kaiky Santos</Text>
        <Text color="gray.300" fontSize="small">carlos.kaiky62@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Kaiky Santos" src="https://github.com/kaikySantos.png" />
    </Flex>
  );
}