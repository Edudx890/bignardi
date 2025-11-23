"use client"

import type React from "react"

import { Briefcase, Shield, ShoppingCart, Home, Activity, TrendingUp } from 'lucide-react'
import Link from "next/link"

interface Servico {
  id: number
  titulo: string
  descricao: string
  icone: string
  acessos: number
}

interface ServicosProps {
  servicos: Servico[]
}

const icones: Record<string, React.ReactNode> = {
  briefcase: <Briefcase className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  "shopping-cart": <ShoppingCart className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  activity: <Activity className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
}

export function Servicos({ servicos }: ServicosProps) {
  const servicosPrincipais = servicos.slice(0, 4)
  const temMaisServicos = servicos.length > 4

  return (
    <section id="servicos" className="py-20 bg-primary/90 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-blond mb-4 text-foreground">Áreas em Destaque</h2>
          <p className="text-lg text-foreground/60">Conheça as principais áreas em que atuamos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicosPrincipais.map((servico) => (
            <div
              key={servico.id}
              className="bg-primary border border-secondary/20 p-8 rounded-lg hover:border-secondary transition"
            >
              <div className="text-secondary mb-4">{icones[servico.icone] || icones["briefcase"]}</div>
              <h3 className="text-xl font-blond mb-4 text-foreground">{servico.titulo}</h3>
              <p className="text-foreground/80">{servico.descricao}</p>
            </div>
          ))}
        </div>

        {temMaisServicos && (
          <div className="text-center mt-8">
            <Link
              href="/servicos"
              className="bg-secondary text-primary px-8 py-3 rounded-lg font-blond hover:bg-opacity-90 transition inline-block"
            >
              Ver Todas as Áreas
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
