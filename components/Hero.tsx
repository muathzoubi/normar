import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/bgg.png')] bg-no-repeat bg-cover">
      <div className="container px-4 md:px-6">
        <div className="grid ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              مختبرات نورمار
              </h1>
              <p className="max-w-[600px] text-white md:text-xl lg:text-2xl">
                نصنع الابتسامات بتقنية متطورة وخبرة لا مثيل لها. انضم إلينا لتجربة أفضل خدمات معامل الأسنان.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg">تعرف على خدماتنا</Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg">اتصل بنا</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

