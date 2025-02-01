import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "../../components/pages/contact/Contact-Form"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  )
}
