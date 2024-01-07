import React from "react";
import "./categories.css";

export default function Categories({ games, reference }) {
  return (
    <section ref={reference} id="categories" className="categories">
      <h1>Categories</h1>
    </section>
  );
}
