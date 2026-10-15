import { Hero } from "./_components/hero";
import  About  from "./_components/about";
import { Footer } from "./_components/footer";
import { Formulario } from "./_components/formulario";
import { FAQ } from "./_components/faq";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Formulario />
      <FAQ />
      <Footer />
    </main>
  );
}