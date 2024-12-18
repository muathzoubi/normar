import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "د. أحمد محمود",
      role: "طبيب أسنان",
      content: "تعاملت مع معمل الأسنان المتميز لسنوات عديدة، وأنا دائمًا منبهر بجودة عملهم ودقتهم. إنهم يجعلون عملي كطبيب أسنان أسهل بكثير."
    },
    {
      name: "د. فاطمة الزهراء",
      role: "أخصائية تقويم الأسنان",
      content: "الدقة والاهتمام بالتفاصيل اللذان يقدمهما معمل الأسنان المتميز لا مثيل لهما. عملاؤنا دائمًا سعداء بالنتائج."
    },
    {
      name: "د. محمد عبد الرحمن",
      role: "جراح الفم والأسنان",
      content: "سرعة الخدمة وجودة المنتجات من معمل الأسنان المتميز تفوق التوقعات دائمًا. إنهم شريك موثوق به في ممارستي."
    }
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">آراء عملائنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{testimonial.name}</CardTitle>
                <p className="text-gray-500">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

