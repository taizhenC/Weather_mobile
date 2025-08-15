import {
  Button,
  LinearProgress,
  CircularProgress,
  Box,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import styles from "./Home.module.css";
import { useCurrentWeather } from "../../hooks/useCurrentWeather";
import Day from "./Day";
import Loading from "../../ui/Loading";

function Home({ setIsHome, position }) {
  const { temperature, isLoading, weatherIcon } = useCurrentWeather(position);
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="always"
          href="#"
          onClick={() => {
            setIsHome(true);
          }}
        >
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Forecast
        </Link>
      </Breadcrumbs>

      <section className={styles.section}>
        {!isLoading ? (
          <>
            <Day temperature={temperature} icon={weatherIcon} />
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setIsHome(false);
              }}
            >
              Get Start
            </Button>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
export default Home;
