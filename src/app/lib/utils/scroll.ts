// Smooth scroll utility functions

export function scrollToSection(id: string) {
  const element = document.querySelector(id);
  if (element) {
    // Get header height for offset calculation
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;

    // Calculate position with header offset
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  callback?: () => void
) {
  e.preventDefault();
  e.stopPropagation();

  // Close mobile menu first if callback provided
  if (callback) {
    callback();
    // Small delay to let menu close animation complete
    setTimeout(() => {
      scrollToSection(id);
    }, 150);
  } else {
    scrollToSection(id);
  }
}
