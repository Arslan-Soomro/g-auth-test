import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Flex, Text, Image } from "@chakra-ui/react";
import DocViewer from "./DocViewer";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  const fileUrl = "http://localhost:5173/sample.docx";

  useEffect(() => {
    // Only give access, if there is user in location state
    console.log("User: ", user);
    if (!user) navigate("/");
  }, []);

  return (
    <Container px={5} py={10}>
      <Flex direction="row" gap="10px">
        <Image
          borderRadius="md"
          boxSize="60px"
          objectFit="cover"
          src={user?.picture}
        />
        <Flex direction="column" justifyContent="center">
          <Text fontWeight="bold">{user?.name}</Text>
          <Text color="gray" fontSize="sm">
            {user?.email}
          </Text>
        </Flex>
      </Flex>
      <DocViewer fileUrl={fileUrl} />
    </Container>
  );
}

export default Dashboard;
