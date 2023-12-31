import { Box, Heading, Image, Flex, Button } from "@chakra-ui/react";
import bg1 from "../assets/background.svg";
import bg2 from "../assets/background1.svg";
import foguete from "../assets/foguete.svg";
import universo from "../assets/universo.svg";
import { useLanguage } from "../components/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

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
             {language === "pt-BR" ? "A solução ideal para o seu problema" : "The ideal solution for your problem"}
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
              {language === 'pt-BR' ? (
          <>
            Descubra o poder da criatividade com o Idear. Uma ferramenta
            inovadora para geração de ideias e soluções, ajudando a resolver
            problemas de forma eficaz. Com uma interface intuitiva e
            experiência do usuário excepcional, o Idear é a escolha perfeita
            para impulsionar sua criatividade e alcançar resultados
            surpreendentes. <span>Experimente agora mesmo!</span>
          </>
          ) : (
          <>
            Discover the power of creativity with Idear. An innovative tool for
            generating ideas and solutions, helping to solve problems
            effectively. With an intuitive interface and exceptional user
            experience, Idear is the perfect choice to boost your creativity and
            achieve amazing results. <span>Try it now!</span>
          </>
          )}
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
              {language === "pt-BR" ? "Iniciar" : "Start"}
              
            </Button>
          </Flex>

          <Box
            w="600px"
            h="600px"
            position="relative"
            overflow="hidden"
            _hover={{
              "& .rocket": {
                transform: "translate(-30px, -30px)", 
                transition: "transform 0.3s ease-in-out",
              },
              "& .universe": {
                transform: "translate(0, 10px)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Image
              src={foguete}
              h="300px"
              className="rocket"
              position="absolute"
              top="11%"
              left="21%"
              zIndex="2"
            />
            <Image
              src={universo}
              minW="500px"
              className="universe"
              position="relative"
            />


          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;