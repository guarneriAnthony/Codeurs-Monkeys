import React from "react";
import { Navigation } from "../navigation/navigation";
import { Footer } from "../navigation/footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <>
  <Navigation />
  {children}
  <Footer/>
  </>;
};
