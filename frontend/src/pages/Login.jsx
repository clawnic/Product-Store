import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    useToast,
    Alert,
    AlertIcon
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";



const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const { login, isLoading, error } = useAuthStore();
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { success, message } = await login(credentials);
        
        if (success) {
            toast({
                title: "Login successful",
                status: "success",
                duration: 3000
            });
            navigate("/");
        } else {
            toast({
                title: "Login failed",
                description: message,
                status: "error",
                duration: 3000
            });
        }
    };

    return (
        <Container maxW="container.sm" py={10}>
            <VStack spacing={8}>
                <Heading>Store Owner Login</Heading>
                {error && (
                    <Alert status="error">
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                <Box as="form" w="full" onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input
                                value={credentials.username}
                                onChange={(e) => setCredentials({
                                    ...credentials,
                                    username: e.target.value
                                })}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({
                                    ...credentials,
                                    password: e.target.value
                                })}
                            />
                        </FormControl>
                        <Button type="submit" colorScheme="blue" w="full" isLoading={isLoading} loadingText="Logging in...">
                            Login
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default Login;