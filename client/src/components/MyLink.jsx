import React from 'react';
import {Link} from 'react-router-dom';

const MyLink = ({ link, children }) => (
    <Link to={link}>
        <button variant="outlined">{children}</button>
    </Link>
)

export default MyLink;