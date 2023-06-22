import { Button, Center, Heading, Text } from "@chakra-ui/react";
import GoogleIcon from "./ui/GoogleIcon";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const glogin = useGoogleLogin({
    onSuccess: async (res: any) => {
      console.log("glogin Res: ", res);
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
            },
          }
        );
        console.log("Data: ", data);
        navigate("/dashboard", { state: { user: data.data } });
      } catch (err) {
        console.log("Data-Error: ", err);
      }
    },
    onError: (res: any) => {
      console.log("error", res);
    },
  });

  return (
    <Center h="100vh" style={{ flexDirection: "column" }}>
      <Heading>Welcome To Home</Heading>
      <Text color={"gray"} mb={5}>
        Signin to continue
      </Text>
      <Button
        leftIcon={<GoogleIcon width={20} />}
        variant="outline"
        onClick={() => glogin()}
      >
        Signin With Google
      </Button>
    </Center>
  );
}

export default Home;
