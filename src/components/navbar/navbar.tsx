import Image from "next/image";

const Navbar = () => (
    <div className="navbar flex-col sm:flex-row">
        <div className="flex-1">
            <a className="btn">
                <Image
                    src="svg/the_digimon_logo.svg"
                    alt="Digimon Wiki Logo"
                    width={150}
                    height={150}
                />
            </a>
        </div>
        <div className="flex-none">
            <h6 className="mr-6">
                Digimon Favorito:
            </h6>
            <label className="input input-bordered flex items-center gap-2 input-primary">
                <input type="text" className="grow" placeholder="Search" />
                <button role="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </button>
            </label>
        </div>
    </div>
)

export default Navbar;
