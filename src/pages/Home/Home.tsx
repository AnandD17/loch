import React, {  useState } from "react";
import { ICONS } from "../../assets/icons";
import { IMAGES } from "../../assets/images";
import TestimonialCard from "../../components/cards/TestimonialCard";
import Input from "../../components/FormFields/Input";
import Button from "../../components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotificationCard from "../../components/cards/NotificationCard";
import SaveCheck from "../../components/Other/SaveCheck";
import { TESTIMONIALS } from "../../contants/constants";
import { validateEmail } from "../../utils/validators";
import { toast } from "react-toastify";
import Testimonial from "../../components/Home/Testimonial";

type Props = {};

const Home = (props: Props) => {
  
 

  const [email, setEmail] = useState("");
  const [leftSlider, setLeftSlider] = useState(0);
  const [rightSlider, setRightSlider] = useState(1);

  


  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //       infinite: true,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //       infinite: true,
    //     }
    //   }
    // ]
  };

  const SliderSettings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
  }

  const handleSubmit = () => {
    if (validateEmail(email)) {
      window.location.replace("https://app.loch.one/welcome");
    } else {
      toast.error("Please enter a valid email", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Main left */}
      <div className="lg:col-span-7 col-span-12 pt-[86px] bg-black">
        <div
          className="text-white grid grid-cols-12 pb-10"
          style={{
            backgroundImage: `url(${IMAGES.BANNER})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="col-span-1 sm:block hidden "></div>
          <div className="sm:col-span-11 col-span-12 sm:px-0 px-4 sm:pr-0 pr-4 grid grid-cols-11 sm:gap-9 gap-5">
            {/* Section 1 */}
            {/* Section1 Left */}
            <div className="sm:col-span-5 col-span-11 flex flex-col gap-4">
              <ICONS.BELL />
              <h4 className="text-[31px] leading-[120%] text-bordered">
                Get notified when a highly correlated whale makes a move
              </h4>
              <h6 className="text-base opacity-70 text-white1 leading-[120%]">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </h6>
            </div>
            {/* Section1 Right Carousol */}
            <div className="sm:col-span-6 col-span-11 ">
              <div className="relative">
                {/* <div className="absolute carosol-shadow w-full h-full top-0 left-0 z-[100]"></div> */}
                <Slider beforeChange={(a,b)=>{console.log(a,b);setLeftSlider(b); setRightSlider(b==2?0:b+1)}}  {...sliderSettings}>
                  <NotificationCard index={0} left={leftSlider} right={rightSlider}>
                    <div className="flex justify-between items-center">
                      <ICONS.BELL_SPACED />
                      <SaveCheck />
                    </div>
                    <p className="text-gray-900 text-sm mt-3.5 mt-4">
                      We’ll be sending notifications to you here
                    </p>
                    <div className="px-3 py-2.5 text-[9px] rounded-[6px] bg-white border border-neutral-300 text-gray-900 mt-4">
                      hello@gmail.com
                    </div>
                  </NotificationCard>
                  <NotificationCard index={1} left={leftSlider} right={rightSlider}>
                    <div className="flex justify-between items-center">
                      <ICONS.BAR_CHART />
                      <SaveCheck />
                    </div>
                    <p className="text-gray-900 text-sm mt-10">
                      Notify me when any wallets move more than
                    </p>
                    <button className="text-gray-800 text-[9px] flex items-center gap-[3px] bg-[#E5E5E6] p-1 rounded-[3px] mt-3.5">
                      $1,000.00 <ICONS.TRIANGLE_DOWN />
                    </button>
                  </NotificationCard>
                  <NotificationCard index={2} left={leftSlider} right={rightSlider}>
                    <div className="flex justify-between items-center">
                      <ICONS.CLOCK />
                      <SaveCheck />
                    </div>
                    <p className="text-gray-900 text-sm mt-10">
                      Notify me when any wallet dormant for
                    </p>
                    <button className="text-gray-800 text-[9px] flex items-center gap-[3px] bg-[#E5E5E6] p-1 rounded-[3px] mt-2">
                      {`>`} 30 days <ICONS.TRIANGLE_DOWN />
                    </button>
                    <p className="text-gray-900 text-sm mt-2">becomes active</p>
                  </NotificationCard>
                </Slider>
              </div>
            </div>
            {/* End of Section 1 */}

            {/* Section 2 */}
            {/* Section 2 left image */}
            <div className="sm:col-span-5 col-span-11 sm:block hidden mt-[40px]">
              <img
                src={IMAGES.BANNERLEFT}
                className="w-full rounded-xl"
                alt=""
              />
            </div>
            {/* Section2 right */}
            <div className="sm:col-span-5 col-span-11 mt-[40px] flex flex-col gap-4 sm:items-end sm:text-right">
              <ICONS.EYE />
              <h4 className="text-[31px] leading-[120%] text-bordered">
                Watch what the whales are doing
              </h4>
              <h6 className="text-base opacity-70 text-white1 leading-[120%]">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </h6>
            </div>
            <div className="sm:col-span-5 col-span-11 block sm:hidden mt-[40px]">
              <img
                src={IMAGES.BANNERLEFT}
                className="w-full rounded-xl"
                alt=""
              />
            </div>
            <div className="col-span-1"></div>
            {/* End of Section 2 */}

            {/* Section 3 Testimonial */}
            {/* Section 3 header */}
            <div className="sm:col-span-10 col-span-11">
              <h4 className="sm:text-right leading-[120%] text-[25px] text-white1">
                Testimonials
              </h4>
              <div className="w-full h-[1px] bg-[#E5E5E6] opacity-50 mt-5"></div>
            </div>
            <div className="sm:block hidden col-span-1"></div>

            {/* Section 3 content */}
            <div className="col-span-11 sm:mt-10 sm:flex gap-10 items-end">
              <div className="w-[60px] h-[60px]">
                <ICONS.LOGO />
              </div>
              <Testimonial />
            </div>
            {/* End of Section 3 */}
          </div>
        </div>
      </div>
      {/* End of Main Left */}

      {/* Main Right */}
      <div className="lg:col-span-5 col-span-12 flex items-center lg:mt-0 py-[100px]">
        <div className="flex w-full flex-col">
          <div className=" w-[320px] mx-auto">
            <h4 className="text-[39px] leading-[120%] text-gray-300">
              Sign up for <br /> exclusive access.
            </h4>
            <Input
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="You Email Address"
            />
            <Button onClick={handleSubmit} label="Get Started" />
          </div>
          <p className="text-center mt-10 font-600 leading-[120%] text-gray-900">
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
