import Categories from "../components/Categories";
import SliderHome from "../components/SliderHome";

function Home() {
  return (
    <section className="home">
      <div className="container d_flex">
        <Categories />
        <SliderHome />
      </div>
    </section>
  );
}

export default Home;
