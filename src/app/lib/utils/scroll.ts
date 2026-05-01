// Smooth scroll utility functions

export function scrollToSection(id: string) {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  callback?: () => void
) {
  e.preventDefault();
  scrollToSection(id);
  if (callback) {
    callback();
  }
}
