import clsx from "clsx";
import { marginMap } from "../../utils/constants";
import { benifitsItemProp } from "../../utils/common.dto";

export const BenifitsItem = ({
  title,
  description,
  marginTop,
}: benifitsItemProp) => {
  return (
    <div className="w-[299px] h-[309px] flex flex-col bg-[#D1D1D1] bg-opacity-20 hover:bg-benefits-overlay transition-colors duration-300 rounded-[20px]">
      <p className="benifits-item-title w-[214px] mt-[33px] ml-[25px]">
        {title}
      </p>
      <p
        className={clsx(
          "benifits-item-content w-[256px] ml-[26px]",
          marginMap[marginTop]
        )}
      >
        {description}
      </p>
    </div>
  );
};
