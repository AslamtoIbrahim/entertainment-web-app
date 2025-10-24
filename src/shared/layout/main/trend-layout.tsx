import TrendItem from "./trend-item";

function TrendLayou() {
  return (
    <div className="margin-x py-4">
      <h1 className="text-popover-foreground font-robo text-2xl">Trending</h1>
      <section>
        <TrendItem />
      </section>
    </div>
  );
}

export default TrendLayou;
