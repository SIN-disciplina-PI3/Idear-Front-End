import { NavBar } from "../components/components";
import { Box, Heading, Image, Flex, Button } from "@chakra-ui/react";
import bg1 from "../assets/background.svg";
import bg2 from "../assets/background1.svg";
import foguete from "../assets/foguete.svg";

const Home = () => {
  const backgroundImage = `url(${bg1})`;
  const backgroundImage2 = `url(${bg2})`;

  return (
    <>

      <Flex
        bgImage={backgroundImage}
        bgSize="contain"
        bgRepeat={"no-repeat"}
        bgPosition="right"
        minH="100vh"
        justifyContent="start"
        alignItems="center"
        direction="column"
        px="100px"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgImage: backgroundImage,
          zIndex: -10,
          bgSize: "contain",
          bgRepeat: "no-repeat",
          bgPosition: "right",
        }}
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "10%",
          height: "100%",
          bgImage: backgroundImage2,
          zIndex: -10,
          bgSize: "contain",
          bgRepeat: "no-repeat",
          bgPosition: "bottom",
        }}
      >
        <NavBar />
        <Flex
          align="center"
          justify="space-between"
          w="100%"
          maxW={"1460px"}
          flex={1}
          maxH={"800px"}
        >
          <Flex maxW={"600px"} height="100%" direction="column" gap="60px">
            <Heading as="h1" size="2xl" lineHeight={"60px"}>
              A solução ideal para o seu problema
            </Heading>
            <Heading
              as="h2"
              size="md"
              fontWeight={400}
              letterSpacing={2}
              lineHeight="30px"
              display="flex"
              flexDirection="column"
              gap="30px"
            >
              Descubra o poder da criatividade com o Idear. Uma ferramenta
              inovadora para geração de ideias e soluções, ajudando a resolver
              problemas de forma eficaz. Com uma interface intuitiva e
              experiência do usuário excepcional, o Idear é a escolha perfeita
              para impulsionar sua criatividade e alcançar resultados
              surpreendentes. <span>Experimente agora mesmo!</span>
            </Heading>

            <Button
              w="150px"
              p="28px"
              borderRadius="20px"
              background="none"
              border="4px solid #806CE5"
              color="#806CE5"
              fontSize="1.3rem"
              fontWeight="600"
            >
              Iniciar
            </Button>
          </Flex>

          <Box>
            <Image src={foguete} minW="500px" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
