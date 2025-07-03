import { useRoute, useRouter } from "vue-router";

export function useHomeSectionScroll() {
  const $route = useRoute();
  const $router = useRouter();

  function scrollToHomeSection(section: string) {
    const indexPage = $route.path === "/";
    const isMobile = window.innerWidth < 768;

    if (!indexPage) $router.push("/");

    const delay = indexPage && !isMobile ? 0 : 1000;

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, delay);
  }

  return { scrollToHomeSection };
}