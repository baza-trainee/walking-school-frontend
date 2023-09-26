import { useNavigate } from "react-router-dom";

export default function useRedirect(path) {
  const navigate = useNavigate();
  return () => navigate(path);
}
