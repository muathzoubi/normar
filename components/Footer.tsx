import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-blue-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">معمل الأسنان المتميز</h3>
            <p className="text-sm">نقدم حلول طب الأسنان الدقيقة منذ أكثر من 20 عامًا.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">روابط سريعة</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#services" className="text-sm hover:underline">خدماتنا</Link>
              <Link href="#about" className="text-sm hover:underline">من نحن</Link>
              <Link href="#contact" className="text-sm hover:underline">اتصل بنا</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">تواصل معنا</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 معمل الأسنان المتميز. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

