import Header from "../../components/Header/Header";
import Cards from "./Cards";
import AllItem from "../../components/Testimonial/AllItem";
import Blog from "../../components/Blog/AllBlog";

const Home = () => {
  return (
    <>
      <Header />
      <Cards />
      <Blog />
      <AllItem />
    </>
  );
};

export default Home;
