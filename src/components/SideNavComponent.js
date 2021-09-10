import React, {Component} from 'react';
import {SideNav,SideNavItem,Icon,Button} from 'react-materialize';

class SideNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItem: [
        {
          menuName: 'Kesehatan',
          linkMenu: '#!kesehatan'
        },
        {
          menuName: 'Komputer & Aksesoris',
          linkMenu: '#!komputer'
        },
        {
          menuName: 'Gaming',
          linkMenu: '#!gaming'
        },
        {
          menuName: 'Kamera',
          linkMenu: '#!kamera'
        },
        {
          menuName: 'Olahraga',
          linkMenu: '#!olahraga'
        },
        {
          menuName: 'Fashion Pria',
          linkMenu: '#!pria'
        },
        {
          menuName: 'Fashion Wanita',
          linkMenu: '#!wanita'
        }
      ]
    }
  }
  render() {
    return(
      <>
        <SideNav
          trigger={<Button node='button'><Icon>menu</Icon></Button>}>
          <SideNavItem
            user={{
              background: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
              email: 'saturasstotenkopf@gmail.com',
              image: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              name: 'Satura'
            }}/>
          <SideNavItem href='#!profil' icon={<Icon>account_circle</Icon>}>
            Profil Saya
          </SideNavItem>
          <SideNavItem href='#!kontak' icon={<Icon>help</Icon>}>
            Hubungi Saya
          </SideNavItem>
          <SideNavItem divider/>
          <SideNavItem subheader>
            Products
          </SideNavItem>
          {this.state.navItem.map((value,index)=>{
            return(
              <SideNavItem href={value.linkMenu}>
                {value.menuName}
              </SideNavItem>
            );
          })}
        </SideNav>
      </>
    );
  }
}

export default SideNavComponent;
