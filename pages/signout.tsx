import { useEffect } from "react";
import { isWindows } from "lib/constants";
import { getUserData, signOutUser } from "lib/utils";
import Router from "next/router";

const Signout = () => {
  useEffect(() => {
    if (isWindows && getUserData().accessToken) Router.push('/shop');
    if (signOutUser()) Router.push('/shop');
  }, []);

  return (<div>signing out...</div>);
};

export default Signout;
