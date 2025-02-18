import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FilePlus2Icon } from "lucide-react";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-sm border-b border-gray-100 ">
      <Link className="text-xl sm:text-2xl" href="/">
        Chat with <span className="text-blue-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} hidden md:block`}
            href={"/dashboard/upgrade"}
          >
            Pricing
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "outline",
            })} `}
            href={"/dashboard"}
          >
            My Documents
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "outline",
            })} `}
            href={"/dashboard/upload"}
          >
            <FilePlus2Icon />
          </Link>

          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
};
export default Header;
