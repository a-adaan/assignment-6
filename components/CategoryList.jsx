import { allCategory } from "@/data.jsx";
import Link from "next/link";

export default function CategoryList({ cateName }) {
  const allCatList = allCategory();
  const cateList = allCatList.filter(
    (cate, index) => index === allCatList.indexOf(cate)
  );
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <button
        className={`hover:border-b ${
          cateName === "All" ? "border-b" : ""
        } border-black block h-6 box-border mt-5`}
      >
        <Link href={"/category/All"}>All</Link>
      </button>
      {cateList.map((cate) => (
        <button
          key={cate}
          className={`hover:border-b ${
            cate === cateName ? "border-b" : ""
          } border-black block h-6 box-border mt-5`}
        >
          <Link href={`/category/${cate}`}>{cate}</Link>
        </button>
      ))}
    </div>
  );
}
