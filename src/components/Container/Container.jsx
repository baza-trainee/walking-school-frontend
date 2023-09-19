import React from "react"
import PropTypes from "prop-types"
import style from "./Container.module.css"

/**
 * A wrapper for page content
 * @element
 * @returns {React.JSX.Element} react element wrapped inside if this component
 */
export default function Container(props) {
    const {children} = props
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

Container.propTypes = {
    /**
     * a content of the container
     */
    children: PropTypes.elementType.isRequired,
}
