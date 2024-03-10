import { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import { ClerkProvider } from "@clerk/nextjs";

interface MarketinglayoutProps {
  children: React.ReactNode;
}

const Marketinglayout: FC<MarketinglayoutProps> = ({ children }) => {
  return (
    // <ClerkProvider>
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <main className="flex-1 flex-col items-center justify-center">
        {children}
      </main>
      {/* <Footer></Footer> */}
    </div>
    // </ClerkProvider>
  );
};

export default Marketinglayout;
