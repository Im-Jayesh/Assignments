export default function ClientLogo({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="
        w-[100px] h-[60px] md:w-[160px] md:h-[150px]
        object-contain
        filter grayscale brightness-75 contrast-200
        hover:brightness-100 hover:contrast-100 hover:grayscale-0
        transition duration-300
      "
    />
  );
}
