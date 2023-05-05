import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props {
    page : string;
}

const Link = ({page}: Props) => {
    return (
       <AnchorLink>
         {page}
       </AnchorLink>
    )
}

export default Link
