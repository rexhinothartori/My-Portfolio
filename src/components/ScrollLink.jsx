const ScrollLink = ({
  to,
  children,
  className = "",
  offset = 0,
  as = "a",
}) => {
  const Component = as;

  const handleClick = (e) => {
    e.preventDefault();

    if (to === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(to);
      if (!element) return;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    // remove #hash from URL
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <Component onClick={handleClick} className={className}>
      {children}
    </Component>
  );
};

export default ScrollLink;
