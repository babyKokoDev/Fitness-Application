import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props {
    page : string;
    selectedPage : SelectedPage
    setSelectedPage : (value : SelectedPage) => void
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
    return (
       <AnchorLink
        className={`${selectedPage === lowerCasePage ? 'text-primary-600' : ''}
        transition duration-500 hover:text-primary-400`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
       >
         {page}
       </AnchorLink>
    )
}

export default Link
