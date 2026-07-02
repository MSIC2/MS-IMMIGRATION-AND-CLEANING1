import Image from "next/image";

interface Props{
  title:string;
  subtitle:string;
  image:string;
}

export default function PageBanner({
  title,
  subtitle,
  image
}:Props){
  return(
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#081C3A]/70"/>
      <div className="container relative z-10">
        <h1 className="text-6xl font-extrabold text-white">
          {title}
        </h1>
        <p className="text-white/80 text-xl mt-8 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}