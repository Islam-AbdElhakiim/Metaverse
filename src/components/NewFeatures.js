import Image from "next/image";

const NewFeatures = ({ ...feature }) => {
  return (
    <div className="flex flex-col flex-1 lg:m-4 max-sm:h-[30vh] items-center mt-5">
      <div className="relative w-[60px] h-[60px] rounded-[20px] bg-white/[0.08] flex justify-center items-center">
        <Image
          src={feature.imgUrl}
          alt="Feature-Image"
          width={0}
          height={0}
          className="w-1/4 h-1/4 object-contain"
        />
      </div>
      <h2 className="text-white text-[24px] my-4">{feature.title}</h2>
      <p className="text-[#B0B0B0] font-normal text-[16px] text-justify">{feature.subtitle}</p>
    </div>
  );
};

export default NewFeatures;
