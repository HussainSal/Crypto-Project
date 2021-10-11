
import classes from "./Header.module.css";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderButtons />
    </header>
  );
};

// Page2.scrollIntoView({behaviour:'smooth'})

export default Header;
