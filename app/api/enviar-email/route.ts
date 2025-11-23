import { NextRequest, NextResponse } from 'next/server'

// Email de destino - altere para o email que deseja receber
const EMAIL_DESTINO = 'dudugb890@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const { nome, email, telefone, mensagem } = await request.json()

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { erro: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    // Para usar Resend, adicione RESEND_API_KEY na sua conta Vercel
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('[v0] RESEND_API_KEY não configurada')
      // Fallback: apenas log para desenvolvimento
      console.log('[v0] Email que seria enviado:', {
        para: EMAIL_DESTINO,
        de: email,
        nome,
        mensagem,
        telefone,
      })
      return NextResponse.json(
        { sucesso: true, mensagem: 'Email capturado (modo desenvolvimento)' }
      )
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'noreply@bignardi.adv.br',
        to: EMAIL_DESTINO,
        subject: `Novo contato de ${nome}`,
        html: `
          <h2>Novo contato recebido</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      const erro = await response.json()
      console.error('[v0] Erro ao enviar email:', erro)
      throw new Error('Falha ao enviar email')
    }

    return NextResponse.json(
      { sucesso: true, mensagem: 'Email enviado com sucesso!' }
    )
  } catch (erro) {
    console.error('[v0] Erro na rota de email:', erro)
    return NextResponse.json(
      { erro: 'Erro ao processar requisição' },
      { status: 500 }
    )
  }
}
