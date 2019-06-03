import React from "react";
import { Carousel, Button } from "antd";

import "./Carousel.scss";
import routes from "lib/routes";

const { Link } = routes;
interface Prop {
  data: Array<any>;
  type?: "image" | "text";
  withDetail?: boolean;
}

const OctCarousel: React.SFC<Prop> = ({ data, withDetail }) => (
  <React.Fragment>
    <Carousel autoplay style={{ position: "relative" }}>
      {data.map((slide, index) => {
        return <img key={index} src={slide} alt={`octane-${slide}`} />;
      })}
    </Carousel>
    {withDetail && <div className="carousel-detail">
      <Link prefetch route="/shop">
        <Button type="danger" shape="round" icon="shopping" size="large">
          Get Shopping
        </Button>
      </Link>
    </div>}
  </React.Fragment>
);

export default OctCarousel;
