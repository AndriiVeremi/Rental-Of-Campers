import { WrapperNav, Logo, ListNav, ListItem, ItemsLink  } from './Header.module';
import { ReactComponent as Van } from '../../images/campVan.svg';

const Header = () => {
  return (
    <WrapperNav>
      <Logo><Van style={{ width: '40px', height: '40px', fill: "#e44848" }} />Rental Of Campers</Logo>
      <ListNav>
        <ListItem>
          <ItemsLink to="/">Home</ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/catalog">Catalog</ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/favorites">Favorites</ItemsLink>
        </ListItem>
      </ListNav>
    </WrapperNav>
  );
};

export default Header;
