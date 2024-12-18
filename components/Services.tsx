import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Smile, Bone, Ruler } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "التيجان والجسور",
      description: "أطقم أسنان عالية الجودة للترميمات ذات المظهر الطبيعي",
      icon: Crown
    },
    {
      title: "زراعة الأسنان",
      description: "حلول زراعة الأسنان المصممة بدقة لابتسامات دائمة",
      icon: Bone
    },
    {
      title: "أطقم الأسنان",
      description: "أطقم أسنان مخصصة للراحة والوظائف",
      icon: Smile
    },
    {
      title: "تقويم الأسنان",
      description: "أجهزة تقويم الأسنان المتقدمة للمحاذاة المثالية",
      icon: Ruler
    }
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">خدماتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

