import { useState } from "react";
import Router from "next/router";
import { Input, Icon, Button, Typography } from "antd";
import WithSocialMedia from "components/WithSocialMedia";
import { Link } from "lib/routes";

const SigninForm = () => {
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Router.push("/");
    }, 5000);
  };

  return (
    <>
      <form>
        <Input
          placeholder="Enter your Email"
          type="email"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <Input.Password
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="input password"
        />
        <Button type="primary" loading={loading} onClick={login} block>
          Sign In
        </Button>
      </form>
      <Typography.Text style={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <Link prefetch href="/signup">
          <a>sign up</a>
        </Link>
      </Typography.Text>
      <WithSocialMedia />
    </>
  );
};

export default SigninForm;
