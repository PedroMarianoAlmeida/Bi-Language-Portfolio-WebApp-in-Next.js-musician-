import Link from 'next/link'
import {DropdownMenu, DropdownItem} from 'reactstrap'

const SubMenu = () => {
    return (
        <DropdownMenu right>
            <MyDropDownItem name="Pop / Singersongwriter" path="/projects/pop-singersongwriter" />
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