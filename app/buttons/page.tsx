import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="">Hello, world!</h1>
      <div className="p-4 space-y-4 flex flex-col w-[200px]">
        <Button className=""> Nice </Button>
        <Button variant="primary"> Primary </Button>
        <Button variant="primaryOutline"> primaryOutline </Button>
        <Button variant="secondary"> Primary </Button>
        <Button variant="secondaryOutline"> Primary </Button>
        <Button variant="danger"> Primary </Button>
        <Button variant="dangerOutline"> Primary </Button>
        <Button variant="super"> Primary </Button>
        <Button variant="superOutline"> Primary </Button>
        <Button variant="ghost"> Primary </Button>
        <Button variant="sidebar"> Primary </Button>
        <Button variant="sidebarOutline"> Primary </Button>
        {/* <Button> Nice </Button>
        <Button> Nice </Button> */}
      </div>
    </div>
  );
}
