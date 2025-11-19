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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.968 1.495c-1.53.847-2.771 2.045-3.682 3.469C1.871 10.863 1.33 12.73 1.33 14.654c0 1.923.54 3.79 1.565 5.367l-1.666 6.084 6.255-1.641c1.51.823 3.21 1.26 4.905 1.26 5.445 0 9.868-4.423 9.868-9.868 0-2.639-.955-5.13-2.693-7.088-1.738-1.958-4.066-3.11-6.512-3.11" />
        </svg>
      </a>
    </footer>
  )
}
