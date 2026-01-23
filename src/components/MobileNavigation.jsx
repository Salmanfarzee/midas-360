import clsx from "clsx";

const MobileNavigation = ({ scrolled }) => {
  return (
    <nav
      className={clsx(
        " nav-text md:hidden px-4 pb-4 flex flex-col space-y-2 transition-all duration-300",
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      )}
    >
      <a href="#" className="hover:underline">
        How it works
      </a>
      <a href="#" className="hover:underline">
        Insights
      </a>

      {/* Nested Dropdown */}
      <details className="group">
        <summary className="cursor-pointer hover:underline">About Us</summary>
        <div className="pl-4 mt-2 flex flex-col space-y-1">
          <a href="#" className="hover:underline">
            News and Events
          </a>
          <a href="#" className="hover:underline">
            Leadership
          </a>
        </div>
      </details>

      <a href="#" className="hover:underline">
        Contact Us
      </a>
    </nav>
  );
};
export default MobileNavigation;
