type FeatureImgProps = {
  src: string;
  alt: string;
  aspect: string;
};

export default function FeatureImg({ src, alt, aspect }: FeatureImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded md:rounded-2xl ${aspect} mt-5 shadow-2xl shadow-zinc-950 lg:max-w-[900px] xl:mt-0`}
    />
  );
}
