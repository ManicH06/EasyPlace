import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  // question temporaires
  const faqItems = [
    {
      question: "Comment fonctionne Easy-Place ?",
      answer: "Easy-Place est une plateforme qui met en relation les consommateurs avec des artisans, producteurs et petits commerces locaux. Vous pouvez parcourir les produits, passer des commandes et soit les faire livrer, soit les retirer en magasin."
    },
    {
      question: "Comment puis-je devenir vendeur sur Easy-Place ?",
      answer: "Si vous êtes un artisan, un producteur ou un petit commerçant local, vous pouvez vous inscrire comme vendeur sur notre plateforme. Rendez-vous dans la section \"Devenir Vendeur\" de notre application et suivez les étapes d'inscription."
    },
    {
      question: "Quels types de produits puis-je trouver sur Easy-Place ?",
      answer: "Easy-Place propose une large gamme de produits locaux, allant de l'alimentation à l'artisanat, en passant par les produits de beauté et les articles de décoration. Tous nos produits sont fournis par des vendeurs locaux."
    },
    {
      question: "Comment sont gérés les paiements et les livraisons ?",
      answer: "Easy-Place utilise des méthodes de paiement sécurisées pour toutes les transactions. Pour les livraisons, nous travaillons avec des partenaires locaux pour assurer une livraison rapide et efficace. Vous avez également l'option de retirer vos achats directement chez le vendeur."
    }
  ]
  
  export function FAQ() {
    return (
      <section id="faq" className="text-black w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Foire Aux Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  