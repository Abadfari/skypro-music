import CategoryContent from "@/components/categoryContent/CategoryContent";

async function CategoryTracks({ params }: { params: { id: string } }) {
  return (
    // <div className={s.container}>
    <CategoryContent id={params.id} />
    // </div>
  );
}

export default CategoryTracks;
