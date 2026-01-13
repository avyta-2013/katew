import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impressum
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  katew GmbH<br />
                  Allerheiligentor 2-4<br />
                  60311 Frankfurt<br />
                  Deutschland
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
                <p className="text-muted-foreground">
                  Telefon: +49 151 155 612 31<br />
                  E-Mail: support@katew.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Vertreten durch</h2>
                <p className="text-muted-foreground">
                  Geschäftsführer: Max Mustermann
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Registereintrag</h2>
                <p className="text-muted-foreground">
                  Eintragung im Handelsregister<br />
                  Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                  Registernummer: HRB 123456
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                  DE 123 456 789
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="text-muted-foreground">
                  Max Mustermann<br />
                  Allerheiligentor 2-4<br />
                  60311 Frankfurt
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-muted-foreground mt-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Haftung für Inhalte</h2>
                <p className="text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Haftung für Links</h2>
                <p className="text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
                <p className="text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}