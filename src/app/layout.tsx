import '@/styles/index.scss'

export const metadata = {
  title: 'MomCare - Postpartum Support & Recovery',
  description: 'Supporting mothers through their postpartum journey with compassionate care and professional guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
