import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            src="/twr.png"
            width={550}
            height={400}
            alt="صورة لفريق معمل الأسنان المتميز"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">عن معمل الأسنان المتميز</h2>
              <p className="max-w-[600px] text-gray-700 md:text-lg lg:text-xl">
                مع أكثر من 20 عامًا من الخبرة، كان معمل الأسنان المتميز في طليعة تكنولوجيا طب الأسنان.
                نحن نفخر بتقديم أطقم الأسنان والحلول عالية الجودة لأطباء الأسنان في جميع أنحاء البلاد.
              </p>
              <p className="max-w-[600px] text-gray-700 md:text-lg lg:text-xl">
                يتكون فريقنا من خبراء متخصصين في مجال تقنيات الأسنان، ملتزمين بتقديم أفضل النتائج لعملائنا.
                نستخدم أحدث التقنيات والمواد لضمان الدقة والجودة في كل عمل نقوم به.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

