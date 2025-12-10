import OurteamSwiper from "./OurteamSwiper";

const Ourteam = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto px-4">
      <div className="flex gap-[23.4px] pt-44 max-lg:flex-col max-lg:items-center max-lg:pt-10">
        <div>
          <h2 className="text-[42px] text-[#130017] font-semibold font-[quicksand] max-md:text-center">
            Our Team
          </h2>
          <p className="text-[20px] text-[#253D4E] font-bold font-[quicksand] pt-6  ">
            Meet Our Expert Team
          </p>
          <ul className="max-w-[573.3px] w-full flex flex-col gap-3 pt-4 font-[lato] text-[#253D4E] leading-6">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </li>
          </ul>
        </div>
        <OurteamSwiper/>
      </div>
    </div>
  );
};

export default Ourteam;
