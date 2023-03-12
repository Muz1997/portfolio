import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { SectionWraper } from "../hoc";
import { fadeIn, textVariant } from "../utlis/motion";
import { testimonials } from "../constants";
import { brokenlink } from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";

const Feedbacks = () => {
  const FeedbackCard = ({ index, name, designation, link, image }) => (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black-200 p-10 rounded-3xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] flex flex-wrap">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={brokenlink}
                alt="brokenlink"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[16px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14x]">{designation}</p>
        </div>
      </Tilt>
    </motion.div>
  );

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            What certificates achieved so far
          </p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-10 flex justify-center flex-wrap gap-10`}
      >
        {testimonials.map((testimonial, index) => (
          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWraper(Feedbacks, "");
