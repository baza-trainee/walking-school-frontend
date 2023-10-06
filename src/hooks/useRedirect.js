import { useNavigate } from "react-router-dom";

/**
 * @description hook used to redirect to another page
 *
 * @example
 * const redirect = userRedirect("your path")
 *
 * <AdminButton onCLick={redirect}>
 *   Redirect button
 * </AdminButton>
 */
export default function useRedirect(path) {
  const navigate = useNavigate();

  return () => {
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
    navigate(path);
  };
}
