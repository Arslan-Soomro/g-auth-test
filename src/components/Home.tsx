import { Button, Center, Heading, Text } from "@chakra-ui/react";
import GoogleIcon from "./ui/GoogleIcon";

function Home() {
  return (
    <Center h="100vh" style={{ flexDirection: "column" }}>
      <Heading>Welcome To Home</Heading>
      <Text color={"gray"} mb={5}>
        Signin to continue
      </Text>
      <Button leftIcon={<GoogleIcon width={20} />} variant="outline">
        Signin With Google
      </Button>
    </Center>
  );
}

export default Home;
