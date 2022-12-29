import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Tooltip,
  Button,
  Text,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

function Card(props) {
  const context = useContext(GlobalContext);
  const {
    spaceTravels,
    cart,
    setCart,
    setCounter,
    cartComponents,
    setCartComponents,
  } = context;

  const { trip } = props;

  const data = {
    imageURL: trip.img,
    name: trip.destination,
    price: trip.value,
    description: trip.description,
  };

  // Calculate the total quantity
  let totalQuantity = 0;
  cart.map((product) => (totalQuantity = totalQuantity + product.quantity));
  setCounter(totalQuantity);

  // Add a product to the cart
  const onClickAdd = (id) => {
    const i = cart.findIndex((item) => item.id === id);
    if (i !== -1) {
      const newCart = [...cart];
      newCart[i] = {
        ...newCart[i],
        quantity: newCart[i].quantity + 1,
      };
      setCart(newCart);
    } else {
      const productFound = spaceTravels.find((trip) => trip.id === id);
      const newProduct = { ...productFound, quantity: 1 };
      setCart([...cart, newProduct]);
      setCartComponents({ ...cartComponents, badge: true });
    }
  };

  return (
    // Using Chakra to create the cards
    <Flex p="1vw" w="25vw" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        h="65vh"
      >
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          h="30vh"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="blue">
              {trip.ship}
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              w="18vw"
            >
              {data.name}
              <Text fontSize="xs">{data.description}</Text>
            </Box>
            <Tooltip
              label="Adicionar ao carrinho"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1em"}
            >
              <Button
                variant="ghost"
                w="0.5vw"
                pl="1vw"
                onClick={() => onClickAdd(trip.id)}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </Button>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;
