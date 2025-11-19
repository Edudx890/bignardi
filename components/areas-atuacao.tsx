import type React from "react"
import { Briefcase, Shield, ShoppingCart, Home, Activity, TrendingUp } from 'lucide-react'

const icones: Record<string, React.ReactNode> = {
  briefcase: <Briefcase className="w-10 h-10" />,
  shield: <Shield className="w-10 h-10" />,
  "shopping-cart": <ShoppingCart className="w-10 h-10" />,
  home: <Home className="w-10 h-10" />,
  activity: <Activity className="w-10 h-10" />,
  "trending-up": <TrendingUp className="w-10 h-10" />,
}

interface AreasAtuacaoProps {
  servicos: Array<{
    id: number
    titulo: string
    descricao: string
    icone: string
  }>
}

export function AreasAtuacao({ servicos }: AreasAtuacaoProps) {
  const areasFixas = [
    {
      id: 1,
      titulo: "Direito Civil",
      descricao: "Atuação em contratos, responsabilidade civil, indenizações e direito de família.",
      icone: "briefcase",
    },
    {
      id: 2,
      titulo: "Direito Penal",
      descricao: "Defesa criminal em todas as instâncias, habeas corpus e recursos.",
      icone: "shield",
    },
    {
      id: 3,
      titulo: "Direito do Consumidor",
      descricao: "Proteção dos direitos consumeristas e ações contra abusos.",
      icone: "shopping-cart",
    },
    {
      id: 4,
      titulo: "Direito Imobiliário",
      descricao: "Regularização, contratos e questões condominiais.",
      icone: "home",
    },
    {
      id: 5,
      titulo: "Direito Trabalhista",
      descricao: "Ações trabalhistas, rescisões e negociações coletivas.",
      icone: "activity",
    },
    {
      id: 6,
      titulo: "Direito Empresarial",
      descricao: "Assessoria jurídica para empresas de todos os portes.",
      icone: "trending-up",
    },
  ]

  return (
    <section id="areas" className="py-20 bg-primary/90 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          <span className="border-b-4 border-secondary pb-2">Áreas de Atuação</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasFixas.map((area) => (
            <div
              key={area.id}
              className="bg-primary border border-secondary/20 p-8 rounded-lg hover:border-secondary transition"
            >
              <div className="text-secondary mb-4">{icones[area.icone] || icones["briefcase"]}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{area.titulo}</h3>
              <p className="text-foreground/80">{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
