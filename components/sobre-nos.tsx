export function SobreNos() {
  return (
    <section id="sobre" className="py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          <span className="border-b-4 border-secondary pb-2">Advogados</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-secondary/20">
              <img src="/victor.site.jpg" alt="Dr. Victor Bignardi" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Dr. Victor Bignardi</h3>
            <p className="text-lg text-foreground">
              Profissional especializado em Direito do Trabalho, preparado para defender seus direitos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-secondary/20">
              <img src="/dr-eduardo-bignardi.jpg" alt="Dr. Eduardo Bignardi" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Dr. Eduardo Bignardi</h3>
            <p className="text-lg text-foreground">
              Especialista em Direito Administrativo e Empresarial, Eduardo traz anos de experiência em casos complexos.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Nossa Filosofia</h3>
          <p className="text-lg leading-relaxed text-foreground">
            Acreditamos que cada caso merece atenção única e estratégias personalizadas. Nossa abordagem combina conhecimento técnico com empatia, garantindo que nossos clientes se sintam protegidos e compreendidos em cada etapa do processos, buscando alcançar seus objetivos.
          </p>
        </div>
      </div>
    </section>
  )
}
