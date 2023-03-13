import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import { slideIn } from "../utlis/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setFrom] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .send(
        "service_cl2xwko",
        "template_cl1s7ww",
        {
          from_name: form.name,
          to_name: "Muzam",
          from_email: form.email,
          to_email: "muzamdty@gmail.com",
          message: form.message,
        },
        "fCibHMxOG1xNxcabj"
      )
      .then(
        () => {
          setloading(false);
          alert(
            "Thank you for contacting. I will get back to you as soon as possible."
          );
          setFrom({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.log(error);
          alert("Something went wrong. Please mail to : muzamdty@gmail.com");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you wnat to say?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outlined-none border-none font-medium"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWraper(Contact, "contact");
