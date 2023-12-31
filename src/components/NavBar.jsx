import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const navItems = [
  {
    label: "Inicio",
    href: "#",
    to: "/"
  },
  {
    label: "Produto",
    href: "#",
    to: "/produto"
  },
  {
    label: "Planos",
    href: "#",
    to: "/planos"
  },
  {
    label: "Contato",
    href: "#",
    to: "/contatos"
  },
];

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <Box w={"100%"} maxW={"1460px"} marginInline="auto">
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontWeight={700}
            fontSize={"2rem"}
            color={"#2D2D2D"}>
            Idear
          </Text>
          <Flex
            display={{ base: "none", md: "flex" }}
            flex={1}
            px={"10%"}
            alignItems={"center"}
          >
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Menu>
            <MenuButton
              as={Button}
              fontSize={"sm"}
              fontWeight={600}
              variant={"link"}
              color={"#16194F"}
            >
              {language === "pt-BR" ? "Idioma" : "Language"}
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleLanguageChange("pt-BR")}>Português</MenuItem>
              <MenuItem onClick={() => handleLanguageChange("en-US")}>English</MenuItem>
            </MenuList>
          </Menu>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            href={"#"}
            color={"#16194F"}
          >
            <Link to="/login">Entrar</Link>
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"#FDFFFF"}
            bg={"#806CE5"}
            href={"#"}
            _hover={"none"}
          >
            Cadastrar-se
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"lg"}
            fontWeight={600}
            color={"#2D2D2D"}
            _hover={{
              textDecoration: "none",
              color: "#",
            }}
            whiteSpace={"nowrap"}
          >
            <Link to={navItem.to}>{navItem.label}</Link>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
