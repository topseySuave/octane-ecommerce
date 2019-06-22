import { Button, Card, Typography } from 'antd';
import routes from 'lib/routes';
import { IProduct } from 'lib/types';
import { IMAGE_DIRECTORY_PREFIX } from 'lib/constants';
import { slugify } from 'lib/utils';
import connectComponent from 'lib/connectComponents';
import { addToCart } from 'lib/actions/products.actions';
import './ProductCard.scss';
import { useState, useEffect, memo } from 'react';
const { Link } = routes;
const { Text } = Typography;

interface Props {
  productDetail: IProduct;
  loading?: boolean;
  cart?: any;
  addToCart: (product: IProduct) => Function;
}

const ProductCard = memo(({ productDetail, loading, addToCart, cart }: Props) => {
  const [addingToCart, setAddingToCart] = useState(cart.loading);
  useEffect(() => {
    return () => {
      setAddingToCart(false);
    };
  }, [cart.loading]);

  return (
    <div className="oct-card">
      <Link prefetch route={`/shop/${slugify(productDetail.name)}.htm`}>
        <a>
          <Card
            hoverable
            style={{ width: 220 }}
            loading={loading}
            cover={
              <img alt={`octane-${productDetail.name}`} src={`${IMAGE_DIRECTORY_PREFIX}${productDetail.thumbnail}`} />
            }
          >
            <Text strong className="product-name">{productDetail.name}</Text>
            <Text strong type="warning" className="product-price">${productDetail.price}</Text>
            <Button
              type="danger"
              shape="round"
              className="product-btn"
              loading={addingToCart}
              onClick={() => {
                // e.preventDefault();
                addToCart(productDetail);
                setAddingToCart(true);
              }}
            >
              Bag it
            </Button>
          </Card>
        </a>
      </Link>
    </div>
  );
});

export default connectComponent(ProductCard, {addToCart});
