"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
  SelectGroup,
} from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+33) 6 25 85 28 34",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anthony.becarne@gmail.com",
    link: "mailto:anthony.becarne@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Lille, France",
  },
];

import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action="https://formspree.io/f/mwkggyda"
              method="POST"
              encType="multipart/form-data"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Thank you for reaching out! Please provide some details about your project idea so I can better understand your needs and how I can help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" />
                <Input name="lastname" type="text" placeholder="Lastname" />
                <Input name="email" type="email" placeholder="Email address" />
                <Input name="phone" type="tel" placeholder="Phone number" />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Software Development">
                      Software Development
                    </SelectItem>
                    <SelectItem value="Video Game Development">
                      Video Game Development
                    </SelectItem>
                    <SelectItem value="Other">
                      Other
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                type="text"
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infos.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-xl text-accent hover:underline"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
