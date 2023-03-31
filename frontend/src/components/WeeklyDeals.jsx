import React from 'react';
import { Link } from 'react-router-dom';

const WeeklyDeals = () => {
    return (
        <section className='weekly-deals'>
            <h3>Weekly Deals</h3>
            <p>The place of quality</p>
            <div className='image-tab'>
                <img
                    src='https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg'
                    alt='drink'
                />
                <img
                    src='https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg'
                    alt='drink'
                />
                <img
                    src='https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg'
                    alt='drink'
                />
                <img
                    src='https://www.thecocktaildb.com//images//media//drink//mvis731484430445.jpg'
                    alt='drink'
                />
            </div>
            <div className='short-menu'>
                <h5>Menu</h5>
                <section className='menu-content'>
                    <div className='menu-item'>
                        <h5>Egg Cream </h5>
                        <p>
                            Mix syrup and milk in a fountain glass. Add soda
                            water, serve with a straw.
                        </p>
                    </div>
                    <div className='menu-item'>
                        <h5>Egg Cream </h5>
                        <p>
                            Mix syrup and milk in a fountain glass. Add soda
                            water, serve with a straw.
                        </p>
                    </div>
                    <div className='menu-item'>
                        <h5>Egg Cream </h5>
                        <p>
                            Mix syrup and milk in a fountain glass. Add soda
                            water, serve with a straw.
                        </p>
                    </div>
                    <div className='menu-item'>
                        <h5>Egg Cream </h5>
                        <p>
                            Mix syrup and milk in a fountain glass. Add soda
                            water, serve with a straw.
                        </p>
                    </div>
                    <div className='menu-item'>
                        <h5>Egg Cream </h5>
                        <p>
                            Mix syrup and milk in a fountain glass. Add soda
                            water, serve with a straw.
                        </p>
                    </div>
                    <div className='menu-item'>
                        <h5>Egg Cream </h5>
                        <p>
                            Mix syrup and milk in a fountain glass. Add soda
                            water, serve with a straw.
                        </p>
                    </div>
                </section>
                <Link className='menu-btn' to='/menu'>
                    View the full menu
                </Link>
            </div>
        </section>
    );
};

export default WeeklyDeals;
