import { Button } from "@/components/ui/button";
import Social from "@/components/Social";

// Icon
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col flex-col-reverse lg:flex-row item-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="flex-[3] text-center lg:text-left flex flex-col items-start justify-center">
          <span className="text-sm w-full">Web Developer & WordPress Expert</span>
          <h1 className="h1">
            Hello, I'm <span className="text-accent">AbuHasan Sarkar</span>
          </h1>
          <p className="max-w-[500px] m-auto lg:ml-0 my-5 text-white/80">
            I excel at crafting elegant digital exprience and I am proficient in
            various programming languages and technologies.
          </p>
          {/* Button and Social */}
          <div className="flex flex-col gap-5 w-full items-center justify-center lg:justify-start lg:flex-row">
            <Button
              className="max-w-max xl:justify-start xl:ml-0 "
              variant="outline"
            >
              <span>Download CV</span>
              <FileDownloadOutlinedIcon />
            </Button>

            <Social
              containerStyles="flex gap-4 items-center justify-center"
              iconStyles="text-center border border-accent text-accent hover:text-black hover:bg-accent rounded-full w-[40px] h-[40px] leading-10 flex items-center justify-center transition-all duration-500"
            />
          </div>
        </div>
        {/* Image */}
        <div className="flex-[2] text-center">
          <Photo />
        </div>
      </div>
    </section>
  );
}
