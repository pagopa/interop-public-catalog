import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface PageLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
