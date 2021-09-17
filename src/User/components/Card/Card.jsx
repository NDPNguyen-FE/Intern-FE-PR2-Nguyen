import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Card.scss";

function CardItem() {
  const dispatch = useDispatch();
  const { filterProduct } = useSelector((state) => state.products);

  return filterProduct.map((product, key) => {
    return (
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 4 }}
        key={key}
        id={product.id}>
        <Card
          className='card'
          cover={<img src={product.image} alt='product' />}
          actions={[
            `$${product.price}`,
            <ShoppingCartOutlined onClick={() => console.log(product.price)} />,
          ]}>
          <Meta
            title={product.name}
            description={`${product.weight}lb`}
            onClick={(e) => console.log(product.id)}
          />
        </Card>
      </Col>
    );
  });
}

export default CardItem;
