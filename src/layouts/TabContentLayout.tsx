import React from "react";
import { Box, CircularProgress, Divider, Text } from "@chakra-ui/react";
function TabContentLayout({
  children,
  title,
  loading = false,
}: {
  children: React.ReactNode;
  title: string;
  loading?: boolean;
}) {
  return (
    <Box
      bg={"white"}
      borderRadius={"24px"}
      px={8}
      pb={12}
      pt={6}
      border={"1px solid #CACEE133"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontWeight={"500"} fontSize={"20px"}>
          {title}
        </Text>
        {loading && (
          <CircularProgress size="30px" isIndeterminate color="green.300" />
        )}
      </Box>
      <Divider color={"#AEADBE"} mt={3} />
      {children}
    </Box>
  );
}

export default TabContentLayout;
