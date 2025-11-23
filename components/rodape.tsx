import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Rodape() {
  return (
    <footer className="border-t border-secondary/20 py-8 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-foreground/70 hover:text-secondary transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-foreground/70 hover:text-secondary transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-foreground/70 hover:text-secondary transition">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="text-foreground/50 text-sm">© 2025 Bignardi Assessoria Jurídica. Todos os direitos reservados.</p>
      </div>

      <a
        href="https://wa.me/556399667700"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-40"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </footer>
  )
}
