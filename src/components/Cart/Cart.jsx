import React, { useContext, useEffect } from "react";
import trash from "../../assets/trash.svg";
import {
  ButtonQuantity,
  ButtonsQuantity,
  ButtonTrash,
  ContainerButton,
  DivCart,
  DivItemsCart,
  Total,
} from "./cartStyled";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToCheckOutPage } from "../../routes/coordinator";

export function Cart() {
  // Using useNavigate to change the pages
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { cart, setCart, cartComponents, setCartComponents } = context;

  // Add items on localStorage to save if the page is refreshed
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

  // Caculate the total price of the cart
  let totalValue = 0;
  cart.map(
    (product) => (totalValue = totalValue + product.value * product.quantity)
  );

  // Click to reduce and increase the quantity of an item on cart
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
        const noItemCart = cart.filter((item) => item.id !== id);
        setCart(noItemCart);
      }
    });
  };

  const onClickIncreaseQuantity = (id) => {
    const i = cart.findIndex((item) => item.id === id);
    cart.map((produto) => {
      if (produto.quantity < 10) {
        const newCart = [...cart];
        newCart[i] = {
          ...newCart[i],
          quantity: newCart[i].quantity + 1,
        };
        setCart(newCart);
      } else {
        alert("Só é permitido comprar 10 itens de cada produto por pessoa");
      }
    });
  };

  // Delete item from cart
  const onClickDelete = (id) => {
    const noItemCart = cart.filter((item) => item.id !== id);
    setCart(noItemCart);
    if (cart.length <= 1) {
      setCartComponents({ ...cartComponents, badge: false });
      const emptyArray = JSON.stringify([]);
      localStorage.setItem("cart", emptyArray);
    }
  };

  // Get items added on cart and show them on screen
  const addedToCart = cart.map((product) => {
    return (
      <DivItemsCart key={product.id}>
        <img src={product.img} width="100px" />
        <p>U${product.value},00</p>
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

  return (
    <DivCart>
      {/* Call the function to show the items on cart */}
      {addedToCart}
      <Total>Total = U${totalValue},00</Total>
      <Button
        colorScheme={"red"}
        borderRadius={0}
        onClick={() => {
          goToCheckOutPage(navigate);
        }}
      >
        Concluir compra
      </Button>
    </DivCart>
  );
}
