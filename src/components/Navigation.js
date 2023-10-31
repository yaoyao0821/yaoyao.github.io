import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

/**
 * Navigation component
 *
 */
const Navigation = ({ data, navClass }) => (
    <>
        {data.map((navItem, i) => {
            return (
                <Link className={navClass} to={navItem.url} key={i}>
                    {navItem.label}
                </Link>
            );
        })}
    </>
);

Navigation.defaultProps = {
    navClass: `site-nav-item`,
};

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    navClass: PropTypes.string,
};

export default Navigation;