import { Breadcrumbs, Link } from "@mui/material";

function NavBar({ setIsHome }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        href="#"
        onClick={() => {
          setIsHome(true);
        }}
      >
        Home
      </Link>
      <Link underline="always" color="inherit" href="#">
        Forecast
      </Link>
    </Breadcrumbs>
  );
}
export default NavBar;
