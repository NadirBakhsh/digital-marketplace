import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";

const NavBar = ({}) => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="borer-b border-gray-200">
            <div className="h-16 flex items-center">
              {/* mobile menu TODO */}

              <div className="ml-4 flex lg:ml-0">
                <Icons.logo className="h-10 w-10" />
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default NavBar;
