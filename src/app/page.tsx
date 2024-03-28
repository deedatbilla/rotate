"use client";
import Header from "@/components/Header";
import AccountTab from "@/components/tabs/AccountTab";
import UserManagementTab from "@/components/tabs/UserManagementTab";
import { useAuth } from "@/context/authContext";
import { Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
export default function Home() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { login, user, handleAuthCallback, accessToken } = useAuth();

  useEffect(() => {
    if (!user && !code && !accessToken) {
      login("http://localhost:3000");
    }
  }, [user, code, accessToken]);

  useEffect(() => {
    if (code) {
      handleAuthCallback(code);
    }
  }, [code]);

  return (
    <Suspense>
      <Box
        bg="#FBFBFC"
        height={"100vh"}
        overflowY={"scroll"}
        position={"relative"}
      >
        <Header />
        <Box mx={"auto"} maxW={"1100px"} py={10} px={4}>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            Settings
          </Text>

          <Box mt={5}>
            <Tabs>
              <TabList>
                <Tab>Account</Tab>
                <Tab>User management</Tab>
              </TabList>

              <TabPanels mt={5}>
                <TabPanel>
                  <AccountTab />
                </TabPanel>
                <TabPanel>
                  <UserManagementTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
}
