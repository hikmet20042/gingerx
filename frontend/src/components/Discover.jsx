import React from "react";
import { Link } from "react-router-dom";
const Discover = () => {
  return (
    <section className="discover">
      <h3>Discover</h3>
      <p>The right choice</p>
      <h4>Cocktails</h4>
      <div className="cards">
        <div className="card-item">
          <img
            src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
            alt="drink"
          />
          <Link to="/cocktail">
            <h5>Egg Cream</h5>
          </Link>
        </div>
        <div className="card-item">
          <img
            src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
            alt="drink"
          />
          <Link to="/cocktail">
            <h5>Egg Cream</h5>
          </Link>
        </div>
        <div className="card-item">
          <img
            src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
            alt="drink"
          />
          <Link to="/cocktail">
            <h5>Egg Cream</h5>
          </Link>
        </div>
        <div className="card-item">
          <img
            src="https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg"
            alt="drink"
          />
          <Link to="/cocktail">
            <h5>Egg Cream</h5>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Discover;
