"use client"

import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useState } from "react"

export function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="border-b border-secondary/20 sticky top-0 z-50 bg-primary/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-secondary text-2xl font-bold">
            Bignardi
          </Link>

          <div className="hidden md:flex space-x-8 text-foreground">
            <a href="#inicio" className="hover:text-secondary transition">
              Início
            </a>
            <a href="#sobre" className="hover:text-secondary transition">
              Sobre Nós
            </a>
            <a href="#areas" className="hover:text-secondary transition">
              Áreas
            </a>
            <a href="#conteudo" className="hover:text-secondary transition">
              Conteúdo
            </a>
            <a href="#contato" className="hover:text-secondary transition">
              Contato
            </a>
          </div>

          <button className="md:hidden focus:outline-none" onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? <X className="text-secondary" size={24} /> : <Menu className="text-secondary" size={24} />}
          </button>
        </div>

        {menuAberto && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4 text-foreground border-t border-secondary/20 pt-4">
            <a href="#inicio" className="hover:text-secondary transition">
              Início
            </a>
            <a href="#sobre" className="hover:text-secondary transition">
              Sobre Nós
            </a>
            <a href="#areas" className="hover:text-secondary transition">
              Áreas
            </a>
            <a href="#conteudo" className="hover:text-secondary transition">
              Conteúdo
            </a>
            <a href="#contato" className="hover:text-secondary transition">
              Contato
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
