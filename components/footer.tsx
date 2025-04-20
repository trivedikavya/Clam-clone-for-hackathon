import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
    {
      title: "Offers",
      links: [
        { name: "Buy Gift", href: "/buy-gift" },
        { name: "Redeem Gift", href: "/redeem-gift" },
        { name: "Family Plan", href: "/family-plan" },
        { name: "Student Discount", href: "/student-discount" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact" },
        { name: "Terms", href: "/terms" },
        { name: "Privacy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ]

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Calm</span>
            </Link>
            <div className="flex space-x-4 mb-6">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
          <p>&copy; {currentYear} Calm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
