"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })
  const [enviando, setEnviando] = useState(false)
  const [mensagemSucesso, setMensagemSucesso] = useState("")
  const [mensagemErro, setMensagemErro] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    setMensagemSucesso("")
    setMensagemErro("")

    try {
      const response = await fetch("/api/enviar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const dados = await response.json()

      if (!response.ok) {
        throw new Error(dados.erro || "Erro ao enviar email")
      }

      setMensagemSucesso("Email enviado com sucesso! Entraremos em contato em breve.")
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      })
    } catch (erro) {
      setMensagemErro(erro instanceof Error ? erro.message : "Erro ao enviar email")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-primary/90 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          <span className="border-b-4 border-secondary pb-2">Entre em Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Endereço eletrônico</h4>
                  <p className="text-foreground/80">veadvogado@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-secondary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Telefone</h4>
                  <p className="text-foreground/80">+55 (63) 9966-7700</p>
                </div>
              </div>

            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Horário de Atendimento</h3>
              <p className="text-foreground/80">Segunda a Sexta: 09h às 18h</p>
              <p className="text-foreground/80">Sábado: 09h às 12h</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-foreground">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-primary border border-secondary/20 rounded-lg px-4 py-3 text-foreground focus:border-secondary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-primary border border-secondary/20 rounded-lg px-4 py-3 text-foreground focus:border-secondary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-foreground">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full bg-primary border border-secondary/20 rounded-lg px-4 py-3 text-foreground focus:border-secondary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full bg-primary border border-secondary/20 rounded-lg px-4 py-3 text-foreground focus:border-secondary focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-secondary text-primary py-3 rounded-lg font-bold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {mensagemSucesso && (
                <div className="bg-green-500/20 border border-green-500 text-foreground p-4 rounded-lg">
                  {mensagemSucesso}
                </div>
              )}

              {mensagemErro && (
                <div className="bg-red-500/20 border border-red-500 text-foreground p-4 rounded-lg">{mensagemErro}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
