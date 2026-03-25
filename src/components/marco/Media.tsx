const outlets = [
  {
    name: "InfoMoney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/InfoMoney_logo.svg/320px-InfoMoney_logo.svg.png",
  },
  {
    name: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/320px-Forbes_logo.svg.png",
  },
  {
    name: "GZH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/GZH_logo.svg/320px-GZH_logo.svg.png",
  },
];

export default function Media() {
  return (
    <section className="bg-white-soft py-[120px]">
      {/* Gold separator */}
      <div className="container mx-auto mb-16">
        <div className="w-full h-[1px] bg-gold/30" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-animate>
          <h2
            className="font-heading font-semibold text-dark-grey"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Marco <span className="text-gold">na mídia.</span>
          </h2>
        </div>

        <div data-animate className="flex items-center gap-14 flex-wrap">
          {outlets.map((outlet) => (
            <img
              key={outlet.name}
              src={outlet.logo}
              alt={outlet.name}
              className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-[250ms] ease grayscale hover:grayscale-0 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
