import { Card, CardContent } from "@/components/ui/card";
import { Concept } from "../../components/pages/concept/Concept";
import { Advantages } from "../../components/pages/concept/Advantages";
import { Testimonials } from "../../components/pages/concept/Testimonial";
import { FAQ } from "../../components/pages/concept/Faq";
import { ContactForm } from "../../components/pages/contact/Contact-Form";
import { CallToAction } from "../../components/pages/concept/CallToAction";

export default function concept() {
  return (
    <>
      <div className="container mx-auto py-10">
        <Concept />
        <Advantages />
        <Testimonials />
        <FAQ />
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Contactez-nous
          </h2>
          <Card className="w-full max-w-md mx-auto">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
      <CallToAction />
    </>
  );
}
