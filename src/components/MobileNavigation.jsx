import clsx from "clsx";

const MobileNavigation = () => {
  return (
    <nav
      className={clsx(
        "fixed top-[73px] left-0 w-full h-[calc(100%-73px)] md:hidden flex flex-col items-start px-8 py-12 space-y-6 transition-all duration-300 z-40 bg-white text-black",
      )}
    >
      <a href="/howitworks" className="hover:underline text-xl">
        How it works
      </a>
      <a href="/insights" className="hover:underline text-xl">
        Insights
      </a>

      {/* Nested Dropdown */}
      <details className="group w-full">
        <summary className="cursor-pointer hover:underline text-xl">
          About Us
        </summary>
        <div className="pl-4 mt-2 flex flex-col space-y-2">
          <a href="/newsandevents" className="hover:underline text-base">
            News and Events
          </a>
          <a href="/leadership" className="hover:underline text-base">
            Leadership
          </a>
        </div>
      </details>

      <a href="/contactus" className="hover:underline text-xl">
        Contact Us
      </a>
      <div className="ml-[-32px] " style={{ marginTop: "100px" }}>
        <img src="/assets/train-menu.svg" />
      </div>

      <hr
        className="h-[1px] w-[calc(100%-50px)] mt-[80px] mb-[17px] bg-[#A2A2A2] justify-self-center"
        style={{ marginTop: "80px" }}
      />

      <div className="menu-footer" style={{ marginTop: "12px" }}>
        <p>© 2025 midas360. All rights reserved.</p>
      </div>
    </nav>
  );
};

export default MobileNavigation;
