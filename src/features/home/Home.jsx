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
import { useNavigate } from "react-router-dom";

function Home({ position }) {
  const { temperature, isLoading, weatherIcon } = useCurrentWeather(position);

  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="always"
          href="#"
          onClick={() => {
            navigate("/");
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
                navigate("/forcast");
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
