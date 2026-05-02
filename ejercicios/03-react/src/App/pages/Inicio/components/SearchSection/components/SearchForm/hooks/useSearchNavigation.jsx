import { useRouter } from "./../../../../../../../shared/hooks/useRouter.jsx";
import { PATHS } from "./../../../../../../../config/paths.js";

export function useSearchNavigation() {
  const { navigateTo } = useRouter();

  const searchJobs = (searchTerm) => {
    const cleanTerm = searchTerm?.toString().trim();

    const url = cleanTerm
      ? `${PATHS.SEARCH}?text=${encodeURIComponent(cleanTerm)}`
      : PATHS.SEARCH;

    navigateTo(url);
  };

  return { searchJobs };
}
