import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productsActions";
import axios from "axios";
import { Grid, Container, Input } from "@chakra-ui/react";
// import Searchbar from "./SearchBar";
import SearchBar from "./SearchBar";
// import CardList from "./CardList";

const ProductListing = () => {
    const products = useSelector((state) => state);
    // const [state, setState] = useState({
    //     response: []
    // });
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setProducts(response.data));

    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div>
            {/* <Input placeholder="hello"/> */}
            {/* <CardList results={state.response} /> */}
            <Container maxW="container.xl" mt={10}>
            <SearchBar />
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <ProductComponent />
                </Grid>
            </Container>
        </div>
    );
};

export default ProductListing;