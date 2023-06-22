import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Container,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || {
    name: "Arslan Jan",
    email: "Arslanjs.dev@gmail.com",
    picture:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  };

  useEffect(() => {
    // Only give access, if there is user location state
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
    </Container>
  );
}

export default Dashboard;
