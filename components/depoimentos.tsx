import { Star } from "lucide-react"

export function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      nome: "",
      cargo: "",
      texto:
        "A Bignardi foi essencial para resolver meu caso de forma rápida e profissional. Recomendo para todos que precisam de um escritório sério e competente.",
      estrelas: 5,
    },
    {
      id: 2,
      nome: "",
      cargo: "",
      texto:
        "Excelente atendimento e resultado além das expectativas. Os advogados têm profundo conhecimento e tratam cada cliente com muita atenção.",
      estrelas: 5,
    },
    {
      id: 3,
      nome: "",
      cargo: "",
      texto:
        "Parceria de longo prazo com a Bignardi. Sua assessoria jurídica é imprescindível para nossa empresa. Muito profissionais!",
      estrelas: 5,
    },
  ]

  return (
    <section id="depoimentos" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-blond mb-16 text-center">
          <span className="border-b-4 border-secondary pb-2">Depoimentos de Clientes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento) => (
            <div key={depoimento.id} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {Array(depoimento.estrelas)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">"{depoimento.texto}"</p>
              <div>
                <p className="font-blond text-foreground">{depoimento.nome}</p>
                <p className="text-sm text-secondary">{depoimento.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
