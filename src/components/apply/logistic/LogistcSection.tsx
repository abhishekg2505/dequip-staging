"use client";

export default function LogisticSection() {
  return (
    <section>
      <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          Logistic
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4 mt-10">
          <p className="text-h6 font-montserrat font-medium">
            Can your team commit to a 12-week remote-first incubator between October and December
            2025?
          </p>
          <div className="flex items-center gap-10">
            {["Yes", "No"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input
                  type="radio"
                  value={value}
                  name="remoteFirstIncubator"
                  className="custom-radio"
                />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="explain" className="text-[16px] font-montserrat font-medium">
            Explain
          </label>
          <input
            name="explain"
            id="explain"
            placeholder="Enter here"
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4 mt-10 mb-10">
          <p className="text-h6 font-montserrat font-medium">
            Will at least one founder attend Demo Day?
          </p>
          <div className="flex items-center gap-10">
            {["Yes", "No", "Maybe"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input type="radio" value={value} name="attendDemoDay" className="custom-radio" />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4 mt-10 mb-10">
          <p className="text-h6 font-montserrat font-medium">
            Do you agree to be featured publicly if selected?
          </p>
          <div className="flex items-center gap-10">
            {["Yes", "No"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input
                  type="radio"
                  value={value}
                  name="featuredPublicly"
                  className="custom-radio"
                />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="expectationsAboveQuestion" className="text-h6 font-montserratfont-medium">
            What are your expectations on the above question?
          </label>
          <input
            name="expectationsAboveQuestion"
            id="expectationsAboveQuestion"
            placeholder="Enter here"
            className="input"
            type="text"
          />
        </div>
      </div>
    </section>
  );
}
