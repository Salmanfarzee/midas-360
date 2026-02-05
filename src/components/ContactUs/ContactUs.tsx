import React, { useEffect, useState } from "react";

interface ContactFormData {
  name: string;
  company: string;
  mobile: string;
  countryCode: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    mobile: "",
    countryCode: "+91",
    email: "",
    message: "",
  });

  const [Mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const TextField = ({
    label,
    placeholder,
    marginTop,
    isMobile,
    required,
    name,
  }: {
    label: string;
    placeholder?: string;
    marginTop?: string;
    isMobile?: boolean;
    required?: boolean;
    name: string;
  }) => {
    return (
      <div
        className="md:w-[467px] flex flex-col"
        style={{ marginTop: marginTop }}
      >
        <p className="lead-the-future-form-label">
          {label}
          {required && (
            <span className="lead-the-future-form-label-required">*</span>
          )}
        </p>
        {isMobile ? (
          <div className="w-full md:md:h-[41px] flex items-center">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="lead-the-future-form-value w-[63px] md:md:h-[41px] border-[0.64px] border-[#D3D3D3] rounded-[5.13px] text-sm px-2 bg-[#209CD803] mt-[4px] md:mt-[16px]"
            >

              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="lead-the-future-form-value w-[395px] md:md:h-[41px] ml-[9px] mt-[4px] md:mt-[16px] border-[0.64px] border-[#D3D3D3] rounded-[5.13px] bg-[#209CD803]"
            />
          </div>
        ) : (
          <input
            type="text"
            name={name}
            value={(formData as any)[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="lead-the-future-form-value w-full md:md:h-[41px] mt-[7.14px] rounded-[5.13px] border-[0.64px] border-[#D3D3D3] bg-[#209CD803]"
          />
        )}
      </div>
    );
  };

  return (
    <section className="h-auto w-full grid md:mt-20 grid-cols-1 bg-[#209CD808] md:grid-cols-2">
      <div className="flex flex-col">
        <p className="lead-the-future-title mt-[94px] ml-[6.9vw]">
          Let’s Connect
        </p>
        <p className="lead-the-future-content ml-[6.9vw] md:mt-[10px] mt-[4px] block md:hidden">
          Predict, perform, and power the future of urban mobility.
        </p>
        <p className="lead-the-future-content ml-[6.9vw] mt-[10px] hidden md:block">
          Predict, perform, and power the future
          <br /> of urban mobility.
        </p>
        <img
          src="/assets/lead-the-future.png"
          alt="Lead the future"
          className="w-[608.16px] h-[221.59px] mt-[69px] mb-[97.41px] md:block hidden"
        />
      </div>

      <form
        className="flex flex-col md:mt-[80px] md:mb-[80px] mt-[12px] mb-[20px] mx-[6.9vw] md:mx-0"
        onSubmit={handleSubmit}
      >
        <TextField
          marginTop={Mobile ? "12px" : "31px"}
          label="Name"
          placeholder="Enter your name"
          required
          name="name"
        />

        <TextField
          marginTop={Mobile ? "12px" : "31px"}
          label="Company Name"
          placeholder="Enter your company name"
          name="companyname"
        />

        <TextField
          marginTop={Mobile ? "12px" : "31px"}
          label="Mobile"
          placeholder="12345 67890"
          isMobile
          name="mobile"
        />

        <TextField
          marginTop={Mobile ? "12px" : "31px"}
          label="Business email ID"
          placeholder="Enter your Business email ID"
          required
          name="email"
        />

        {/* ✅ Textarea for "How can we help you" */}
        <div className="md:w-[467px] flex flex-col md:mt-[24px] mt-[12px]">
          <p className="lead-the-future-form-label">How can we help you</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Write your message here..."
            className="lead-the-future-form-value w-full rounded-[5.13px] border-[0.64px] mt-2 border-[#D3D3D3] p-2 bg-[#209CD803]"
          />
        </div>

        <button
          type="submit"
          className="md:w-[11.3vw] md:h-[48px] w-[70px] h-[24px] bg-[#209CD8] rounded-[50px] flex items-center justify-center mt-[3.4vh] cursor-pointer hover:opacity-90"
        >
          <p className="lead-the-future-submit">Submit</p>
        </button>

        <div className="flex flex-col mx-[-6.9vw]">
          <img
            src="/assets/contact-train-mob.svg"
            alt="Lead the future"
            className="w-[60vw]  mt-[32px] mb-[16px] md:hidden block"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
