import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import UpdateAccount from "./UpdateAccount";
import UpdateButton from "./UpdateButton";
import UpdatePassword from "./UpdatePassword";
import BetsTable from "./BetsTable";

const Content = () => {
  const tabs = ["All Bets", "Update Profile", "Update Password"];

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={2}
      borderColor="gray.200"
      style={{ transform: "translateY(-100px)" }}
    >
      <Tabs>
        <TabList px={5}>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: "transparent" }}
              _selected={{ color: "brand.dark", borderColor: "brand.blue" }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <BetsTable />
          </TabPanel>
          <TabPanel>
            <UpdateAccount />
            <UpdateButton />
          </TabPanel>
          <TabPanel>
            <UpdatePassword />
            <UpdateButton />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Content;
