import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToHomePage } from "../../routes/coordinator";
import {
  Container,
  NavStyled,
  DivItemsCart,
  ContainerButton,
  ButtonsQuantity,
  ButtonQuantity,
  ButtonTrash,
  Deliver,
  TitleDeliver,
  Cart,
  TitleCart,
  DivTotalButton,
} from "./CheckOutPageStyled";
import trash from "../../assets/trash.svg";
import Footer from "../../components/Footer/Footer";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { cart, setCart, cartComponents, setCartComponents } = context;

  // Add items on localStorage
  useEffect(() => {
    if (cart.length > 0) {
      const cartString = JSON.stringify(cart);
      localStorage.setItem("cart", cartString);
    }
  }, [cart]);

  useEffect(() => {
    const newCart = JSON.parse(localStorage.getItem("cart"));
    if (newCart !== null) {
      setCart(newCart);
    }
    setCartComponents({ ...cartComponents, badge: true });
  }, []);

  // Caculate total price of cart
  let totalValue = 0;
  cart.map(
    (product) => (totalValue = totalValue + product.value * product.quantity)
  );

  // Click to decrease or increase quantity of an cart item
  const onClickReduceQuantity = (id) => {
    const i = cart.findIndex((item) => item.id === id);
    cart.map((product) => {
      if (product.quantity > 1) {
        const newCart = [...cart];
        newCart[i] = {
          ...newCart[i],
          quantity: newCart[i].quantity - 1,
        };
        setCart(newCart);
      } else {
        const cartNoItem = cart.filter((item) => item.id !== id);
        setCart(cartNoItem);
      }
    });
  };

  const onClickIncreaseQuantity = (id) => {
    const i = cart.findIndex((item) => item.id === id);
    cart.map((product) => {
      if (product.quantity < 10) {
        const newCart = [...cart];
        newCart[i] = {
          ...newCart[i],
          quantity: newCart[i].quantity + 1,
        };
        setCart(newCart);
      } else {
        alert("Só é permitido comprar 10 itens de cada product por pessoa");
      }
    });
  };

  //Delete item of cart
  const onClickDelete = (id) => {
    const cartNoItem = cart.filter((item) => item.id !== id);
    setCart(cartNoItem);
    if (cart.length <= 1) {
      setCartComponents({ ...cartComponents, badge: false });
      const emptyArray = JSON.stringify([]);
      localStorage.setItem("cart", emptyArray);
    }
  };

  // Display cart items on page
  const showCart = cart.map((product) => {
    return (
      <DivItemsCart key={product.id}>
        <img src={product.img} width="100px" />
        <div>
          <p>{product.destination}</p>
          <p>U${product.value},00</p>
        </div>

        <ContainerButton>
          <ButtonsQuantity>
            <ButtonQuantity onClick={() => onClickReduceQuantity(product.id)}>
              -
            </ButtonQuantity>
            <p>{product.quantity}</p>
            <ButtonQuantity onClick={() => onClickIncreaseQuantity(product.id)}>
              +
            </ButtonQuantity>
          </ButtonsQuantity>
          <ButtonTrash onClick={() => onClickDelete(product.id)}>
            <img src={trash} width="20px" />
          </ButtonTrash>
        </ContainerButton>
      </DivItemsCart>
    );
  });

  // Click to finalize the order and reset cart
  const onClickCloseOrder = () => {
    if (cart.length >= 1) {
      alert("Compra concluída com sucesso!");
      setCart([]);
      const emptyArray = JSON.stringify([]);
      localStorage.setItem("cart", emptyArray);
      setCartComponents({ ...cartComponents, divCart: false });
      goToHomePage(navigate);
    } else {
      alert(
        "Por favor, adicione algum item ao carrinho para concluir a compra."
      );
    }
  };

  return (
    <div>
      <Header />
      <NavStyled>
        <Button
          colorScheme={"blue"}
          onClick={() => {
            goToHomePage(navigate);
          }}
        >
          Voltar para página inicial
        </Button>
      </NavStyled>

      <Container>
        <Deliver>
          <TitleDeliver>
            <p>Entrega</p>
          </TitleDeliver>

          <Stack
            spacing={3}
            mx={"auto"}
            maxW={"lg"}
            py={8}
            px={4}
            borderBottom={"1px"}
            borderColor={"gray.200"}
          >
            <Stack spacing={3}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastname" isRequired>
                    <FormLabel>Sobrenome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Endereço</FormLabel>
                <InputGroup>
                  <Input type={"text"} />
                </InputGroup>
              </FormControl>
            </Stack>
          </Stack>

          <TitleDeliver>
            <p>Pagamento</p>
          </TitleDeliver>

          <Stack
            spacing={3}
            mx={"auto"}
            py={8}
            px={4}
            borderBottom={"1px"}
            borderColor={"gray.200"}
          >
            <Stack spacing={3}>
              <Box>
                <FormControl id="card" isRequired>
                  <FormLabel>Número do cartão</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="code" isRequired>
                  <FormLabel>CVC</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>

              <FormControl id="date" isRequired>
                <FormLabel>Data de vencimento</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="id" isRequired>
                <FormLabel>CPF</FormLabel>
                <InputGroup>
                  <Input type={"number"} />
                </InputGroup>
              </FormControl>
            </Stack>
          </Stack>
        </Deliver>

        <Cart>
          <TitleCart>
            <p>Meu carrinho:</p>
          </TitleCart>
          {showCart}

          <DivTotalButton>
            <p>Total = U${totalValue},00</p>
            <Button
              colorScheme={"red"}
              borderRadius={0}
              onClick={() => {
                onClickCloseOrder();
              }}
            >
              Concluir pedido
            </Button>
          </DivTotalButton>
        </Cart>
      </Container>

      <Footer />
    </div>
  );
};

export default CheckOutPage;
