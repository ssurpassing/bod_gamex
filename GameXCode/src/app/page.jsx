"use client";
import NewGame from "@/components/block/newGame";
import Category from "@/components/block/category";
import TopArea from "@/components/block/topArea";
import React from "react";

export default function Home() {
  return (
    <div className="mx-6 py-10">
      <div>
        <TopArea />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">New Games</h1>
        <NewGame />
      </div>
      <div className="my-6">
        <Category />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Action Games</h1>
        <NewGame filterData="Action" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Recommended this week</h1>
        <NewGame />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Car Games</h1>
        <NewGame filterData="Car" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Multiplayer Games</h1>
        <NewGame filterData="Multiplayer" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Shooting Games</h1>
        <NewGame filterData="Shooting" />
      </div>
    </div>
  );
}
