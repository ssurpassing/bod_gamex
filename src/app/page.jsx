"use client";
import NewGame from "@/components/block/newGame";
import Category from "@/components/block/category";
import TopArea from "@/components/block/topArea";

const GAME_CATEGORIES = [
  { title: "New Games", filter: null },
  { title: "Action Games", filter: "Action" },
  { title: "Car Games", filter: "Car" },
  { title: "Multiplayer Games", filter: "Multiplayer" },
  { title: "Shooting Games", filter: "Shooting" }
];

export default function Home() {
  return (
    <div className="mx-6 py-10 space-y-8">
      <TopArea />
      <Category />

      {GAME_CATEGORIES.map(({ title, filter }) => (
        <section key={title} className="space-y-4">
          <h2 className="font-semibold text-xl text-gray-900">{title}</h2>
          <NewGame filterData={filter} limit={12} />
        </section>
      ))}
    </div>
  );
}
