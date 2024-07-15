/* eslint-disable react/prop-types */
import { Card, Image, Text, Button } from "@mantine/core";
import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductCard({
  imageUrl,
  description,
  title,
  price,
  onClick,
}) {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      target="_blank"
      className="product"
    >
      <Card.Section>
        <Image className="img" src={imageUrl} alt="No way!" />
      </Card.Section>
      <div className="info">
        <Text className="naslov" mt="xs" size="sm">
          {title}
        </Text>
        <Text className="description" mt="xs" size="sm">
          {description}
        </Text>
        <Text className="price" mt="xs" size="lg">
          {price}
        </Text>
        <Button className="cart-button" mt="md" radius="md" onClick={onClick}>
          <FaShoppingCart className="shopping-cart" />
          Add To Cart
        </Button>
      </div>
    </Card>
  );
}
