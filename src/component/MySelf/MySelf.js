import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornaments}) => {
    return (
        <div>
            <h4>my self</h4>
            <p>House:{house}</p>
            <Special ></Special>
        </div>
    );
};

export default MySelf;