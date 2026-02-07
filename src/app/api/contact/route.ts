import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { nom, prenom, email, telephone, formation } = body

    if (!nom || !prenom || !email || !telephone || !formation) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    const phoneRegex = /^[\d\s+\-.()]{8,20}$/
    if (!phoneRegex.test(telephone)) {
      return NextResponse.json(
        { error: 'Numéro de téléphone invalide.' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (SendGrid, Resend, Nodemailer, etc.)
    // For now, log the contact request
    console.log('Nouvelle demande de contact:', {
      nom,
      prenom,
      email,
      telephone,
      formation,
      horaire: body.horaire || 'Non précisé',
      message: body.message || 'Aucun message',
      date: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Votre demande a été envoyée avec succès. Nous vous rappelons sous 24h.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
