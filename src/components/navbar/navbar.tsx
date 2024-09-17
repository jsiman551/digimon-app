"use client"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter();
    // choose search option
    const [searchOption, setSearchOption] = useState<string>("");
    // choose level digimon option
    const [digimonLevel, setDigimonLevel] = useState<string>("");
    // input reference
    const inputRef = useRef<HTMLInputElement>(null);

    //function to filter by name
    const onClickFilter = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push(`/?name=${inputRef.current?.value}`)
    }

    //it will listen to digimon level selector
    useEffect(() => {
        if (digimonLevel) {
            router.push(`/?level=${digimonLevel}`)
        }
    }, [digimonLevel])

    return (
        <div className="navbar flex-col sm:flex-row">
            <div className="flex-1">
                <Link href="/">
                    <Image
                        src="svg/the_digimon_logo.svg"
                        alt="Digimon Wiki Logo"
                        width={200}
                        height={200}
                    />
                </Link>
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
                {searchOption != "level" ? <label className="input input-bordered flex items-center gap-2 input-primary">
                    <input
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                onClickFilter(e)
                            }
                            return false;
                        }}
                        ref={inputRef}
                        disabled={!searchOption}
                        type="text"
                        className="grow"
                        placeholder="Buscar"
                    />
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
                </label> : <select
                    className="select select-primary w-full max-w-xs mr-4"
                    defaultValue=""
                    onChange={(e) => setDigimonLevel(e.target.value)}
                >
                    <option disabled value="">Selecciona:</option>
                    <option value="fresh">Fresh</option>
                    <option value="in training">In Training</option>
                    <option value="rookie">Rookie</option>
                    <option value="champion">Champion</option>
                    <option value="ultimate">Ultimate</option>
                    <option value="armor">Armor</option>
                    <option value="mega">Mega</option>
                </select>}
            </div>
        </div >
    )
}

export default Navbar;
