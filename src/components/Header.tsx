import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../public/icons";
import { useAuth } from "@/context/authContext";

function Header() {
  const { user, logout } = useAuth();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position={"sticky"}
      top={0}
      p={5}
      zIndex={100}
      bg={"white"}
    >
      <Logo width={150} />
      {user && (
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Box>
            <Text fontSize="16px" fontWeight="bold">
              {user?.name}
            </Text>
            <Text fontSize="14px" fontWeight="400">
              {user?.email}
            </Text>
          </Box>

          <Avatar name={user?.name} src={user?.picture} />
        </Box>
      )}
    </Box>
  );
}

export default Header;
