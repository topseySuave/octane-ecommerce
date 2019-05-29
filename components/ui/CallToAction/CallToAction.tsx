import React from "react";

import "./CallToAction.scss";
import { Button } from "antd";
import { Link } from "lib/routes";

const backgroundImage =
  "http://fab.oxygenna.com/fashion/wp-content/uploads/sites/2/2016/02/bg9-notinclude.jpg";

const CallToAction = () => (
  <div
    className="call-to-action"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Link prefetch route="/shop">
      <a>
        <Button type="primary" shape="round" icon="shopping" size="large">
          Get Shopping
        </Button>
      </a>
    </Link>
  </div>
);

export default CallToAction;
