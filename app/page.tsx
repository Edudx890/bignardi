"use client"

import { useEffect, useState } from "react"
import { Navegacao } from "@/components/navegacao"
import { Heroi } from "@/components/heroi"
import { SobreNos } from "@/components/sobre-nos"
import { AreasAtuacao } from "@/components/areas-atuacao"
import { ConteudoExclusivo } from "@/components/conteudo-exclusivo"
import { Depoimentos } from "@/components/depoimentos"
import { Parceiros } from "@/components/parceiros"
import { Contato } from "@/components/contato"
import { Rodape } from "@/components/rodape"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-primary text-foreground">
      <Navegacao />
      <main className="flex-1">
        <Heroi />
        <SobreNos />
        <AreasAtuacao servicos={[]} />
        <ConteudoExclusivo />
        <Depoimentos />
        <Parceiros />
        <Contato />
      </main>
      <Rodape />
    </div>
  )
}
