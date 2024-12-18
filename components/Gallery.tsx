import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: "/twr.png", alt: "صورة لعمل أسنان 1" },
    { src: "/twr.png", alt: "صورة لعمل أسنان 2" },
    { src: "/twr.png", alt: "صورة لعمل أسنان 3" },
    { src: "/twr.png", alt: "صورة لعمل أسنان 4" },
    { src: "/twr.png", alt: "صورة لعمل أسنان 5" },
    { src: "/twr.png", alt: "صورة لعمل أسنان 6" },
  ]

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">معرض أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

