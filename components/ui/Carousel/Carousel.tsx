import React from 'react';
import { Carousel, Button } from 'antd';

import './Carousel.scss';
import Link from 'next/Link';

interface Prop {
  data: Array<any>;
  type?: 'image' | 'text';
}

const OctCarousel: React.SFC<Prop> = ({ data }) => (
  <React.Fragment>
    <Carousel autoplay style={{ position: 'relative' }}>
      {data.map((slide, index) => {
        return <img key={index} src={slide} alt={`octane-${slide}`} />;
      })}
    </Carousel>
    <div className="carousel-detail">
      <Link href="/shop">
        <Button type="danger" shape="round" icon="shopping" size="large">
          Get Shopping
        </Button>
      </Link>
    </div>
  </React.Fragment>
);

export default OctCarousel;