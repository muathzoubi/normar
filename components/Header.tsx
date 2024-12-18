import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { SmileIcon as Tooth } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <img src='/nor-logo.png' alt='logo' className='w-30 h-16' />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#services">خدماتنا</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#about">من نحن</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#testimonials">آراء العملاء</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#gallery">معرض الأعمال</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#contact">اتصل بنا</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">احصل على عرض سعر</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#services">خدماتنا</Link>
                <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#about">من نحن</Link>
                <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#testimonials">آراء العملاء</Link>
                <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#gallery">معرض الأعمال</Link>
                <Link className="text-gray-700 hover:text-blue-600 transition-colors" href="#contact">اتصل بنا</Link>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">احصل على عرض سعر</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

