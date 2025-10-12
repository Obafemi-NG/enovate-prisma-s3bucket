import CustomButton from "@/components/CustomButton";
import ArrowRight from "@/public/icons/ArrowRight";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-[1200px] mx-auto min-h-[80vh] relative   ">
      <div className="absolute 2xl:translate-y[-70%] translate-y-[-50%] top-[60%] w-full ">
        <p className=" text-center font-sans text-5xl font-semibold text-title-gray ">
          Whoops! we can&rsquo;t find that page...
        </p>
        <div className=" flex justify-center mt-8 ">
          <CustomButton
            text="Let&rsquo;s take you home"
            variant="solid"
            Icon={<ArrowRight />}
          />
        </div>
      </div>
    </section>
  );
}
