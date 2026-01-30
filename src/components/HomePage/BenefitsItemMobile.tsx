import { useState } from "react";
import clsx from "clsx";
import { marginMap } from "../../utils/constants";
import { benifitsItemProp } from "../../utils/common.dto";

export const BenifitsItemMobile = ({
  title,
  description,
  marginTop,
}: benifitsItemProp) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={clsx(
        "h-auto md:hidden flex flex-col rounded-[7.63px] cursor-pointer p-3",
        "transition-colors duration-300 ease-in-out",
        isActive
          ? "bg-[#209CDB] bg-opacity-20" // active → light blue
          : "bg-[#D0D0D0] bg-opacity-20" // inactive → grey
      )}
    >
      {/* Title + Dropdown Icon */}
      <div className="flex justify-between items-center">
        <p
          className={clsx(
            "benifits-item-title transition-colors duration-300 ease-in-out",
            isActive ? "text-[#209CDB]" : "text-[#454545]"
          )}
        >
          {title}
        </p>
        {/* Dropdown icon (chevron) */}
        <svg
          className={clsx(
            "w-3 h-3 transition-transform duration-300 ease-in-out",
            isActive
              ? "rotate-180 text-[#209CDB]"
              : "rotate-0 text-[#959595]"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Description with fade/slide transition */}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <p className={clsx("benifits-item-content")}>
          {description}
        </p>
      </div>
    </div>
  );
};