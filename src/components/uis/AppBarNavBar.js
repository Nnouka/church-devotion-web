import React, {Fragment} from "react";
import Dropdown from "../common/DropdownMenuList";

function AppBarNavBar(props) {
    return (
        <Fragment>
            <Dropdown  label='Home' to='home'/>
            <Dropdown
                label='About Us'
                      itemList={[
                          {label: 'Message', to: 'home'},
                          {label: 'Name', to: 'name'}
                      ]}/>
            <Dropdown
                label='Special Projects'
                      itemList={[
                          {label: 'Message', to: 'home'},
                          {label: 'Name', to: 'name'}
                      ]}/>
            <Dropdown
                label='Contact Us' to='contact'/>
        </Fragment>
    );
}

export default AppBarNavBar;