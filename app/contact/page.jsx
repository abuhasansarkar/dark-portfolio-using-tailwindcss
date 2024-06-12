"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@/components/ui/select";

import { motion } from "framer-motion";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

  const contactInfos = [
    {
      icon: <WhatsAppIcon/>,
      title: "Phone",
      desc: "(+880) 17676-03775"
    },
    {
      icon: <EmailOutlinedIcon />,
      title: "Email",
      desc: "abuhasansarkar2@gmail.com"
    },
    {
      icon: <LocationOnOutlinedIcon />,
      title: "Address",
      desc: "Panchagarh, Dhaka, Bangladesh"
    },
  ]


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-between py-12 lg:py-0 "
    >
      <div className="container m-auto">
        <div className="flex flex-col items-center xl:flex-row xl:flex-row-reverse gap-10">
          {/* Info */}
          <div className="w-full">
            {contactInfos.map((info, i) => {
              return (
                <div className="flex items-center gap-4 mb-8" key={i}>
                  <span className="text-accent border border-accent bg-[#1D273B] p-4 rounded-xl w-[60px] h-[60px] flex items-center justify-center ">{info.icon}</span>
                  <div>
                    <h5 className="text-md text-accent">{info.title}</h5>
                    <p className="text-white/60">{info.desc}</p>
                  </div>
                </div>
              );
            })}

          </div>
          {/* form */}
          <div className="w-full">
            <from className="flex flex-col gap-6 p-8 bg-[#1D273B] rounded-xl">
              <h3 className="text-2xl text-accent">Let's work together</h3>
              <p className="text-sm">
                Welcome to my personal portfolio website. If you enjoyed viewing
                my portfolio projects, please feel free to contact me. I'm
                always available and eager to assist you.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="First Name" />
                <Input type="lastName" placeholder="Last Name" />
                <Input type="phone" placeholder="Phone Number" />
                <Input type="email" placeholder="Email Address" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem>Select a Services</SelectItem>
                    <SelectItem value="wordpress">WordPress Website</SelectItem>
                    <SelectItem value="react">React Website</SelectItem>
                    <SelectItem value="mern">MERN Stact Website</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="w-full"
                type="submit"
                placeholder="Write your message..."
              />
              <Button className="w-full">Message Now</Button>
            </from>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact