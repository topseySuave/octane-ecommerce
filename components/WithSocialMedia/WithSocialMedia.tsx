import { Button, Icon } from "antd";

const WithSocialMedia = () => {
  return (
    <div>
      <span className="or">or</span>
      <Button className="facebook-signin" type="primary" block>
        <Icon type="facebook" />
        Facebook
      </Button>
    </div>
  );
};

export default WithSocialMedia;
