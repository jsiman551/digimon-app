"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    // choose search option
    const [searchOption, setSearchOption] = useState<string>("");
    //input reference
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickFilter = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push(`/?${searchOption}=${inputRef.current?.value}`)
    }

    return (
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
            <div className="flex-none mt-3 sm:mt-0">
                <select
                    className="select select-primary w-full max-w-xs mr-4"
                    defaultValue=""
                    onChange={(e) => setSearchOption(e.target.value)}
                >
                    <option disabled value="">Buscar Digimon Por:</option>
                    <option value="name">Nombre</option>
                    <option value="level">Level</option>
                </select>
                <label className="input input-bordered flex items-center gap-2 input-primary">
                    <input ref={inputRef} disabled={!searchOption} type="text" className="grow" placeholder="Buscar" />
                    <button role="button" onClick={(e) => onClickFilter(e)}>
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
}

export default Navbar;
