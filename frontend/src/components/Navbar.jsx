import {Button , Container , Flex , HStack , Text , useColorMode , useColorModeValue , Spinner} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {PlusSquareIcon} from '@chakra-ui/icons'
import {IoMoon} from 'react-icons/io5'
import {LuSun} from "react-icons/lu"
import { useAuthStore } from "../store/auth.store";


const Navbar = () => {
    const {colorMode , toggleColorMode} = useColorMode();
    const { isAuthenticated, logout , isLoading } = useAuthStore();

  return (
    <Container maxW ={"100vw"} px={4} bg={useColorModeValue("gray.100","blue.900")}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "row",
          sm: "row"
        }}
        
        // wrap="wrap"
      >
        <Text
            fontSize={{base:"22",sm:"28"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={{
              base:"left",
              sm:"left",
              md:"center"
            }}
            bgGradient={"linear(to-r , cyan.400,blue.500,purple.600)"}
            bgClip={"text"}
            textShadow="4px 2px 4px rgba(0,0,0,0.3)"
            rounded={5}
            borderBottom="1px" 
            borderStyle="solid"
            borderColor="black"

            
        >
            <Link to={"/"}>Sharma Store 🐘</Link>
            
        </Text>
        <HStack spacing={2} alignItems={"center"}>
        {isLoading ? (
          <Spinner size="sm" />
        ) : isAuthenticated ? (
            <>
                <Link to="/create">
                    <Button><PlusSquareIcon fontSize={20}/></Button>
                </Link>
                <Button onClick={logout}>Logout</Button>
            </>
        ) : (
            <Link to="/login">
                <Button>Login</Button>
            </Link>
        )}
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <LuSun size={20}/> : <IoMoon size={20}/>}
        </Button>
      </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar;
