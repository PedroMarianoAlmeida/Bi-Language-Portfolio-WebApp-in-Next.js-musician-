import { useContext } from 'react';

import Link from 'next/link'
import {DropdownMenu, DropdownItem} from 'reactstrap'

import { LanguageContext } from '../../contexts/LanguageContext';
import text from '../../data/header-text';

const texts = {
    soloArtists: {pt:"Artistas Solo", eng:"Solo Artists"}
}

const SubMenu = () => {
    const { language } = useContext(LanguageContext);

    return (
        <DropdownMenu right>
            <MyDropDownItem name={texts.soloArtists[language]} path="/projects/solo-artists" />
            <MyDropDownItem name="Stock Music" path="/projects/stock-music" />
            <MyDropDownItem name="Rock" path="/projects/rock" />
            <MyDropDownItem name="Math Rock" path="/projects/math-rock" />
        </DropdownMenu>
    );
}

export default SubMenu;

const MyDropDownItem = (props) => {
    return (
        <Link href={props.path}>
            <DropdownItem>
                <span className="text-dark">{props.name}</span>
            </DropdownItem>
        </Link >
    );
}