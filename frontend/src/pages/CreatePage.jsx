import { Button,Container, Box, Heading, useColorModeValue, VStack, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { Input } from "@chakra-ui/react"
import { useProductStore } from "@/store/product"

const CreatePage = () => {
    const createProduct = useProductStore((state) => state.createProduct);
    const toast = useToast();
    
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
    const handleAddProduct = async () => {
        if (!createProduct) throw new Error("createProduct not initialized");
        const { success, message } = await createProduct(newProduct);
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                duration:3000,
                isClosable:true
            })
        }else{
            toast({
                title:"Success",
                description:message,
                status:"success",
                duration:3000,
                isClosable:true
            })
        }
        setNewProduct({name:"",price:"",image:""});
        
    }
    
    return (
        <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
            >
                <Heading
                    as={"h1"}
                    size={"2xl"}
                    textAlign={"center"}
                    mb={8}
                >Add New Product</Heading>
                <Box w={"full"} bg={useColorModeValue("gray.100","gray.700")} p={6} rounded={"lg"} shadow={"md"} >
                    <VStack spacing={4}>
                        <Input 
                            placeholder="Product name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <Input 
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        />
                        <Input 
                            placeholder="Image URL"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        />
                        <Button colorScheme='blue'  onClick={handleAddProduct}>
                            Add Product
                        </Button>
                    </VStack>
                    
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage