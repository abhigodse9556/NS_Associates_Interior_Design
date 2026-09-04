import Image from "next/image";

export function ImageGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={image}
          className={`relative overflow-hidden bg-canvas-mid ${
            index === 0 ? "aspect-[16/10] md:col-span-2" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={image}
            alt={`${title} gallery image ${index + 1}`}
            fill
            sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
