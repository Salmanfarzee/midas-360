const LeadTheFuture = () => {
  const TextField = ({ label, placeholder, marginTop, isMobile }:any) => {
    return (
      <div
        className="md:w-[467px] h-[79.14px] flex flex-col"
        style={{ marginTop: marginTop }}
      >
        <p className="lead-the-future-form-label">
          {label}
          <span className="lead-the-future-form-label-required">*</span>
        </p>
        {isMobile ? (
          <div className="w-full h-[41px] flex items-center">
            {/* Country Code Dropdown */}
            <select
              className="lead-the-future-form-value w-[63px] h-[41px] border-[0.64px] border-[#D3D3D3] rounded-[5.13px] text-sm px-2 bg-white"
              defaultValue="+91"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              {/* Add more as needed */}
            </select>

            {/* Mobile Number Input */}
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="lead-the-future-form-value w-[395px] h-[41px] ml-[9px] border-[0.64px] border-[#D3D3D3] rounded-[5.13px]"
            />
          </div>
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            className="lead-the-future-form-value w-full h-[41px] mt-[7.14px] rounded-[5.13px] border-[0.64px]  border-[#D3D3D3] opacity-100"
          />
        )}
      </div>
    );
  };
  return (
    <section className="h-[636px] w-full grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col mb[10vh]">
        <p className="lead-the-future-title mt-[94px] ml-[6.9vw]">
          Lead the future
        </p>
        <p className="lead-the-future-content ml-[6.9vw] mt-[10px]">
          of urban mobility with midas360 at <br /> the core of your metro
          operations.
        </p>
        <img
          src="/assets/lead-the-future.png"
          alt="Lead the future"
          className="w-[608.16px] h-[221.59px] mt-[69px] mb-[97.41px]"
        />
      </div>
      <div className="flex flex-col">
        <p className="lead-the-future-form-title mt-[107px]">
          Connect with us for a consultation
        </p>
        <TextField
          marginTop={"31px"}
          label={"Name"}
          placeholder={"Enter your name"}
          isMobile={false}
        />
        <TextField
          marginTop={"25.86px"}
          label={"Business email ID"}
          placeholder={"Enter your Business email ID"}
          isMobile={false}
        />
        <TextField
          marginTop={"24.06px"}
          label={"Mobile"}
          placeholder={"12345 67890"}
          isMobile={true}
        />
        <div className="w-[11.3vw] h-[48px] bg-[#209CD8] rounded-[50px] flex items-center justify-center mt-[3.4vh] cursor-pointer hover:opacity-90">
          <p className="lead-the-future-submit">Submit</p>
        </div>
      </div>
    </section>
  );
};

export default LeadTheFuture;
