import "./Layout.scss";

export const Layout = ({ children, gridLayout }) => {
  return (
    <div className={gridLayout ? "gridLayout" : "pageLayout"}>{children}</div>
  );
};
