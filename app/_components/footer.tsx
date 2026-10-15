export function Footer() {
  return (
    <footer className="w-full bg-white px-5 pt-8">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[900px]
          flex-col
          rounded-t-[22px]
          border
          border-b-0
          border-[#BE89BD]
          bg-white
          px-8
          py-8
          md:flex-row
          md:items-center
          md:justify-between
          md:px-10
        "
      >

        {/* LOGO */}
        <a
          href="#"
          className="font-vastago text-[16px] font-bold text-[#BE89BD]"
        >
          Apoia<span className="text-[#937FBE]">MulherIFB</span>
        </a>


        {/* LINKS */}
        <nav
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-7
            font-vastago
            text-[12px]
            font-bold
            text-[#BE89BD]
            md:mt-0
            md:gap-9
          "
        >

          <a
            href="#participar"
            className="transition hover:text-[#937FBE]"
          >
            Contato
          </a>

          <a
            href="#participar"
            className="transition hover:text-[#937FBE]"
          >
            Apoiar
          </a>

          <a
            href="#participar"
            className="transition hover:text-[#937FBE]"
          >
            Quero ser ajudada
          </a>

        </nav>

      </div>
    </footer>
  );
}