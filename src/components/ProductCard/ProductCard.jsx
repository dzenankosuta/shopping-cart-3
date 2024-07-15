/* eslint-disable react/prop-types */
import { Card, Image, Text } from "@mantine/core";
import "./ProductCard.css";
import { Button } from "@mantine/core";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ imageUrl, product, description, price }) {
  return (
    <Card
      className="product-card"
      shadow="sm"
      padding="xl"
      component="a"
      target="_blank"
    >
      <Card.Section>
        <Image src={imageUrl} h={60} alt="No way!" className="img" />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {product}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
        {description}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
        {price}
      </Text>
      <Button className="btn-card" onClick={() => {}}>
        <FaShoppingCart className="icon icon-card" />
        Add To Cart
      </Button>
    </Card>
  );
}
