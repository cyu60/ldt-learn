import { Button } from "@/components/ui/button";
// import {  } from "@clerk/clerk-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="h-20 border-b-2 w-full border-slate-400 px-4">
      <div className=" 1g: max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          {/* <Image src="/mascot.svg" height={40} width=
{40} alt="Mascot" /> */}
          <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">
            Learn LDT
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant={"ghost"}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
