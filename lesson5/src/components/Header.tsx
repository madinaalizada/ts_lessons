import { Link, NavLink } from "react-router-dom";

interface ILink {
    name: string;
    path: string;
}

const Header = () => {
    const links: ILink[] = [
        {
            name: "Actors",
            path: "/",
        },
        {
            name: "Best Films",
            path: "/films",
        },
    ];

    return (
        <nav className="w-full bg-white flex justify-between items-center py-4">
            <Link to={"/"}>
                <h1 className="text-4xl font-bold text-amber-500">IMDb</h1>
            </Link>
            <ul className="flex gap-8">
                {links.map(({ name, path }, idx) => (
                    <li key={idx} className="group">
                        <NavLink to={path} className="group-hover:text-amber-400">
                            {name}
                        </NavLink>
                        <div className="flex justify-center">
                            <div className="h-0.5 w-0 group-hover:w-full bg-amber-400 duration-500 transition-all"></div>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;