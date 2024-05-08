import CategoryList from "@/components/CategoryList";
import Products from "@/components/Products";
// import { allCategory } from "@/data.jsx";

export default function Category({ params: { cateName } }) {
  // const catList = allCategory();
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <CategoryList cateName={cateName} />
      <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        <Products cateName={cateName} />
      </div>
    </section>
  );
}
