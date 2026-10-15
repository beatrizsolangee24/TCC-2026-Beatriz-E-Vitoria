export function FAQ() {
  const perguntas = [
    {
      pergunta: "Esse projeto é para alunas do IFB?",
      resposta:
        "Sim! O Apoia Mulher foi desenvolvido para atender alunas do Instituto Federal de Brasília (IFB), oferecendo uma rede de apoio e acolhimento.",
    },
    {
      pergunta: "Não sou do IFB, mas quero ajudar. Posso?",
      resposta:
        "Sim! Pessoas de fora do IFB também podem ajudar. Você pode participar como apoiadora e contribuir para fortalecer a nossa rede de apoio.",
    },
    {
      pergunta: "Como faço para participar?",
      resposta:
        "Entre em contato preenchendo o formulário. Após o envio dos seus dados, entraremos em contato para orientar você sobre os próximos passos.",
    },
    {
      pergunta: "Como sei se posso receber ajuda?",
      resposta:
        "Após preencher o formulário, seus dados passarão por uma avaliação para verificarmos se você pode receber ajuda. Durante esse processo, poderão ser solicitados alguns documentos e informações necessárias para a avaliação.",
    },
  ];

  return (
    <section
      id="perguntas"
      className="w-full bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* TÍTULO */}
        <h2
          className="
            font-vastago
            text-[32px]
            font-bold
            leading-none
            text-[#303030]
            md:text-[40px]
          "
        >
          <span className="text-[#BE89BD]">
            perguntas
          </span>{" "}
          frequentes
        </h2>


        {/* CONTEÚDO */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            items-center
            gap-10
            md:grid-cols-[0.8fr_1.2fr]
            md:gap-12
          "
        >

          {/* ILUSTRAÇÃO */}
          <div className="flex justify-center">
            <div
              className="
                flex
                h-[260px]
                w-full
                max-w-[360px]
                items-center
                justify-center
                overflow-hidden
                rounded-[22px]
                bg-[#E9E9E9]
              "
            >
              <img
                src="/faq.png"
                alt="Ilustração de uma mulher utilizando um computador"
                className="h-full w-full object-cover"
              />
            </div>
          </div>


          {/* PERGUNTAS */}
          <div className="w-full">

            {perguntas.map((item, index) => (
              <details
                key={index}
                className="
                  group
                  border-b
                  border-[#BE89BD]
                "
              >

                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-4
                    py-4
                    font-urbanist
                    text-[17px]
                    font-bold
                    text-[#BE89BD]
                    transition
                    hover:text-[#937FBE]
                  "
                >
                  <span>
                    {item.pergunta}
                  </span>

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      text-[18px]
                      text-[#937FBE]
                      transition-transform
                      duration-300
                      group-open:rotate-180
                    "
                  >
                   ⌄
                  </span>
                </summary>


                <div
                  className="
                    pb-4
                    pr-8
                    font-urbanist
                    text-[14px]
                    font-medium
                    leading-[1.5]
                    text-[#555555]
                  "
                >
                  {item.resposta}
                </div>

              </details>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}