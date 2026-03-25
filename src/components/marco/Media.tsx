const outlets = ["INFOMONEY", "FORBES", "GZH"];

export default function Media() {
  return (
    <section className="bg-white-soft py-20 lg:py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-animate>
          <h2
            className="font-heading font-semibold text-dark-grey"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            Marco <span className="text-gold">na mídia.</span>
          </h2>
        </div>

        <div data-animate className="flex items-center gap-10 flex-wrap">
          {outlets.map((name) => (
            <span
              key={name}
              className="font-body font-semibold uppercase text-xl tracking-wider text-oatmeal hover:text-dark-grey transition-colors duration-200 cursor-pointer"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
