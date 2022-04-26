import React,{useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    Box,
    Image,
    Text,
    Stack,
    Heading,
    Center,
    Input,
    Grid,
    Container
} from "@chakra-ui/react";

export default function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    // const [filteredItems,setFileteredItems]=useState(products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category, description } = product;
        return (
            <div>
                {/* <Box mt={5} w={200}>
                    <Input onChange={e=>{
                        let f=products.filter(products=>product.title.toLowerCase().includes(e.target.title));
                        setFileteredItems(f);
                    }}
                    placeholder="Search" />
                </Box> */}
                <Container maxW="container.xl" mt={10}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                        <NavLink to={`/product/${id}`}>
                            <Center py={12}>
                                <Box
                                    role={'group'}
                                    p={6}
                                    maxW={'330px'}
                                    w={'full'}
                                    // bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={1}
                                    flex={'20px'}
                                    flexWrap={'wrap'}
                                >
                                    {/* <Link as={ReachLink} to={`/product/${id}`}> */}
                                    <Box
                                        rounded={'lg'}
                                        mt={-12}
                                        pos={'relative'}
                                        height={'400px'}
                                        width={'300px'}
                                        cursor={'pointer'}
                                        _after={{
                                            transition: 'all .3s ease',
                                            content: '""',
                                            w: 'full',
                                            h: 'full',
                                            pos: 'absolute',
                                            top: 5,
                                            left: 0,
                                            backgroundImage: `url(${image})`,
                                            filter: 'blur(15px)',
                                            zIndex: -1,
                                            cursor: 'pointer'
                                        }}
                                        _groupHover={{
                                            _after: {
                                                filter: 'blur(30px)',
                                            },
                                        }}>
                                        <Image
                                            rounded={'lg'}
                                            height={400}
                                            width={400}
                                            objectFit={'contain'}
                                            src={image}
                                            alt={title}
                                        // borderRadius={'30px'}
                                        />
                                    </Box>
                                    {/* </Link> */}
                                    <Stack pt={10} align={'center'}>
                                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                            {category}
                                        </Text>
                                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                            {title.substring(0, 16)}....
                                        </Heading>
                                        <Stack direction={'row'} align={'center'}>
                                            <Text fontWeight={800} fontSize={'xl'}>
                                                ${price}
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </Box>
                                {/* <Box
                                    role={'group'}
                                    p={6}
                                    //  maxW={'330px'}
                                    w={'full'}
                                    // bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    //  pos={'relative'}
                                    zIndex={1}
                                    //  flex={'20px'}
                                    //  flexWrap={'wrap'}
                                    justifyContent={'center'}
                                >
                                    <Text>
                                        {description}
                                    </Text>
                                </Box> */}
                            </Center>
                        </NavLink>
                    </Grid>
                </Container>
            </div>
        );
    });
    return <>{renderList}</>
};

// export default ProductComponent;