const ScrollLink = ({ to, children, className = "", offset = 0, as = "a", onClick, onActive }) => {
  const Component = as;

  const handleClick = (e) => {
    e.preventDefault();

    // Scroll to the target element
    if (to === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(to);
      if (!element) return;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    // Update the active link state
    if (onActive) {
      onActive(to);
    }

    window.history.replaceState(null, "", window.location.pathname);

    if (onClick) onClick(to);
  };

  return (
    <Component onClick={handleClick} className={className}>
      {children}
    </Component>
  );
};


export default ScrollLink;
