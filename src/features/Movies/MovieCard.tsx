import { Link } from "react-router-dom";
import css from "./Movies.module.css";

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  popularity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
  return (
    <div className={css.moviesCard}>
      <Link className={css.cardTitle} to={`/movies/${id}`}>
        {title}
      </Link>
      <div className={css.cardOverview}>{overview}</div>
      <div className={css.cardPopularity}>{popularity}</div>
    </div>
  );
}
