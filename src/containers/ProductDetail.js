import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import * as Yup from "yup";
import TextField from "./TextField";
import {
  Flex,
  Circle,
  Box,
  Image,
  Icon,
  chakra,
  Tooltip,
  Container,
  Grid,
  Button,
  VStack,
  Textarea,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
const data = {
  isNew: true,
  rating: 4.2,
  numReviews: 34,
};
// function handleClick() {
//   { data.numReviews++ };
//   console.log("No. of reviews", data.numReviews);
//   // Rating();
//   ProductDetail();
// };

// interface RatingProps {
//   rating: number;
//   numReviews: number;
// }

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

function ProductDetail() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container maxW="container.xl" >
          <Grid templateColumns="repeat(3,1fr)">
            <Flex pl={50} alignItems="center" justifyContent="center">
              <Box justifyContent="center" alignItems="center"
                // bg={useColorModeValue('white', 'gray.800')}
                // maxW="300px"
                width={'350px'}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mt={-20}
                ml={130}
              // p={50}
              >
                {data.isNew && (
                  <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.200"
                  />
                )}
                <Image
                  src={image}
                  alt={`Picture of ${title}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  {/* <Box d="flex" alignItems="baseline">
                {data.isNew && (
                  <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                    New
                  </Badge>
                )}
              </Box> */}
                  <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                      fontSize="2xl"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated>
                      {title}
                    </Box>
                    <Tooltip
                      label="Add to cart"
                      bg="white"
                      placement={'top'}
                      color={'gray.800'}
                      fontSize={'1.2em'}>
                      <chakra.a href={'#'} display={'flex'}>
                        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                      </chakra.a>
                    </Tooltip>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
                    <Rating rating={data.rating}
                    // numReviews={data.numReviews}
                    />
                    <Box fontSize="2xl"
                    // color={useColorModeValue('gray.800', 'white')}
                    >
                      <Box as="span" color={'gray.600'} fontSize="lg">
                        $
                      </Box>
                      {price.toFixed(2)}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>
            {/* <Flex mt="1">
              <Box justifyContent="justify" alignItems="justify"
                // bg={useColorModeValue('white', 'gray.800')}
                // maxW="300px"
                width={'350px'}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mt={19}
                >
                {description}
              </Box>
            </Flex> */}
            {/* <Box>
              <Box>
                <Textarea placeholder='Your name' mt={10} mr={200} w={500} h={5} mb={-5} />
              </Box>
              <Box>
                <Textarea placeholder='Write your review here' mt={10} mr={200} w={500} h={200} />
              </Box>
              <Box onSubmit={this.handleSubmit}>
                <Button colorScheme='teal' variant='outline' mt={10} mr={200} type="submit">
                  Submit
                </Button>
              </Box>
            </Box> */}
            {/* <Formik
              initialValues={{ name: 'Name' }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
            > */}
            {/* {(props) => (
                <Form>
                  <Field name='name' validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor='name'>First name</FormLabel>
                        <Input {...field} id='name' placeholder='Your name' mt={10}  />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={props.isSubmitting}
                    type='submit'
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik> */}
            <Formik
              initialValues={{ username: "" }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .required("Full Name required")
                  .min(6, "Full name is too short"),
                email: Yup.string().required("Review required"),
              })}
              onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.resetForm();
              }}
            >
              {formik => (
                <VStack
                  as="form"
                  mx="auto"
                  w={{ base: "90%", md: 500 }}
                  h="100vh"
                  onSubmit={formik.handleSubmit}
                  mt={12}
                  mr={40}
                  ml={17}
                  autoComplete="off"
                >
                  <TextField name="username" placeholder="Enter your Full name" />
                  <TextField name="email" placeholder="Write your review" h={300} justifyContent={'center'} />
                  <Button type="submit" variant="outline" colorScheme="teal">
                    Submit
                  </Button>
                </VStack>
              )}
            </Formik>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default ProductDetail;