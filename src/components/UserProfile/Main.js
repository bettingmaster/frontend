import { Container } from "@chakra-ui/layout";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function Main() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <Container
        display={{ base: "block", md: "flex" }}
        maxW="container.xl"
        marginTop={20}
        paddingTop={20}
      >
        <Sidebar />
        <Content />
      </Container>
    </SimpleBar>
  );
}
