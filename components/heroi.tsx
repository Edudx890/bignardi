"use client"

export function Heroi() {
  const scrollToContato = () => {
    const elemento = document.getElementById("contato")
    elemento?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center text-center px-4 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7)), url(/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-blond mb-6">
          <span className="gradient-text">Dois irmãos. Um objetivo.</span>
          <br />
          <span className="text-foreground">A sua defesa.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-foreground/90">
          Na Bignardi Assessoria Jurídica, a lealdade não é apenas uma palavra, é o nosso alicerce.
        </p>
        <button
          onClick={scrollToContato}
          className="bg-secondary text-primary px-8 py-3 rounded-full font-blond hover:bg-opacity-90 transition"
        >
          Fale Conosco
        </button>
      </div>
    </section>
  )
}
