import React from 'react';
import {connect} from 'react-redux';
import _ from "lodash";
import Apple from "../Apple/Apple";
import PropTypes from 'prop-types';

class Basket extends React.Component
{

    static propTypes = {
        basket: PropTypes.array
    };


    render() {
        const {basket} = this.props;

        return(
            <div className={"basket"}>
                <div className="apples">
                    <img alt='Basketball-Basket' style={{zIndex: 1,position: 'relative'}} width={200} height={150} src={require('./basket.svg')} />
                    {basket.length > 0 &&
                        // Place apples in basket
                    _.map(basket, (index,indis) =>
                        <Apple key={index} style={{top: `${((indis - indis % 5) / 5 * 15) + 23}%`,left:`${((indis % 5) * 11) + 20}%`,zIndex: 3}} />)
                    }
                </div>
            </div>
        )
    }
}

// Setup Redux
const mapStateToProps = (state, ownProps) => ({
    basket: state.basket.basket
});

Basket = connect(mapStateToProps)(Basket);

export default Basket;