export function Parceiros() {
  const parceiros = [
    { id: 1, nome: "", descricao: "" },
  ]

  return (
    <section id="parceiros" className="py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          <span className="border-b-4 border-secondary -pb2">Parcerias e Associações</span>
        </h2>

        <div className="flex justify-center">
          {parceiros.map((parceiro) => (
            <div
              key={parceiro.id}
              className="bg-primary border border-secondary/20 rounded-lg p-8 text-center hover:border-secondary transition w-full max-w-xs"
            >
              <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-secondary">{parceiro.nome.charAt(0)}</span>
                <img src="/irmaos.bignardi.jpg" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{parceiro.nome}</h3>
              <p className="text-secondary text-sm">{parceiro.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
