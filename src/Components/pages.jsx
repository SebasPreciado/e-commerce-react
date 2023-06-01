import React from "react";
import { Routes, Route} from "react-router-dom";
import InitView from "./InitView/InitView";
import { ProductsList } from "./Products/ProductsList";

export default function Page() {
  return (
    <section>
      <Routes>
				<Route path="/" exact Component={InitView} />
				<Route path="/productos" exact Component={ProductsList} />
			</Routes>
    </section>
  );
}
