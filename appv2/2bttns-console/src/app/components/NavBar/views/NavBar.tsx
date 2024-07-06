export type NavBarProps = {
  navbarEndContent?: React.ReactNode;
};

export default function NavBar(props: NavBarProps) {
  const { navbarEndContent = null } = props;
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-end">{navbarEndContent}</div>
    </div>
  );
}
