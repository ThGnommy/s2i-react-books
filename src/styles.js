import { makeStyles } from "@material-ui/core/styles";

export const searchPageStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(3),
  },
  searchBar: {
    padding: theme.spacing(3),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  buttonSearch: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  freeEbook: {
    padding: theme.spacing(3),
  },
  appBar: {
    padding: "1rem",
    margin: "1rem",
    alignItems: "center",
  },
  title: {
    fontWeight: 400,
    letterSpacing: "1rem",
    fontStyle: "italic",
    color: "#fff",
  },
  loader: {
    width: "50px",
    height: "50px",
  },
}));

export const bookDetailsPageStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  card: {
    margin: "3rem",
  },
  media: {
    height: 500,
    width: 300,
    backgroundSize: "cover",
  },
  appBar: {
    padding: "1rem",
    margin: "1rem",
    alignItems: "center",
  },
  title: {
    fontWeight: 400,
    letterSpacing: "1rem",
    fontStyle: "italic",
    color: "#fff",
  },
  link: {
    textDecoration: "none",
    marginTop: "1rem",
  },
  text: {
    fontSize: "1.5rem",
    margin: "1rem 0",
  },
  description: {
    fontSize: "1.5rem",
    margin: "0.5rem 0",
    fontStyle: "italic",
  },
  fab: {
    margin: "1rem 0",
    width: "8rem",
  },
  fabIcon: {
    marginRight: theme.spacing(1),
  },
}));

export const bookStyles = makeStyles({
  root: {
    padding: "1rem",
    textAlign: "center",
  },
  media: {
    height: 240,
    backgroundSize: "contain",
    margin: "1rem",
  },
  button: {
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
});
