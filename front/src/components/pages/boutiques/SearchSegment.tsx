import { SearchForm } from "./SearchForm";

export default function SearchSegment() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4 mb-10">
      <h1 className="text-2xl font-bold text-center mb-5">
        Découvrez les vendeurs pres de chez vous!
      </h1>
      <SearchForm />
    </div>
  );
}
