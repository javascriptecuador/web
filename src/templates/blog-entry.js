import React from 'react';

// import PropTypes from 'prop-types';

// export default function BlogEntry({pageContext, children}){
    export default function BlogEntry(){
    return  <div>
                <h1>Blog entry</h1>
                <hr />
                {/* <p>{pageContext.title}</p>
                {children} */}
            </div>
}

// BlogEntry.prototype = {
//     children: PropTypes.object,
//     // pageContext: PropTypes.shape({
//     //     title: PropTypes.string.isRequired,
//     //     date: PropTypes.string.isRequired,
//     //     description: PropTypes.string,
//     // })
//     pageContext: PropTypes.any
// }