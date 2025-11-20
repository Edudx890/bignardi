import { CheckCircle } from 'lucide-react'

export function ConteudoExclusivo() {
  return (
    <section id="conteudo" className="py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          <span className="border-b-4 border-secondary pb-2">Conteúdo Exclusivo</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-secondary">Nossos E-books</h3>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-32 h-32 rounded overflow-hidden flex-shrink-0 bg-secondary/20">
                  <img src="/guia-direitos-consumidor.jpg" alt="E-book 1" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-foreground">Guia de Direitos do Consumidor</h4>
                  <p className="text-foreground/80 mb-3">Saiba como proteger seus direitos nas relações de consumo.</p>
                  <button className="text-secondary hover:underline">Disponível em Breve →</button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-32 h-32 rounded overflow-hidden flex-shrink-0 bg-secondary/20">
                  <img src="/manual-direito-imobili-rio.jpg" alt="E-book 2" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-foreground">Manual de Direito Imobiliário</h4>
                  <p className="text-foreground/80 mb-3">
                    Tudo o que você precisa saber antes de comprar ou vender um imóvel.
                  </p>
                  <button className="text-secondary hover:underline">Disponível em Breve →</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary border border-secondary/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-secondary">Plano de Assinatura</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Acesso a artigos exclusivos mensais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Webinars com os advogados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Consultas profissionais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Modelos de contratos e petições</span>
              </li>
            </ul>
            <button className="w-full bg-secondary text-primary py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
              Disponível em breve.
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
