import Image from "next/image"

interface Props {
    name: string,
    level: string,
    img: string,
}

const DigimonCard = ({ name, level, img }: Props) => (
    <div className="card bg-cyan-950 shadow-xl">
        <figure>
            <Image
                src={img}
                alt={name}
                width={400}
                height={400}
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title mx-auto text-accent text-xl">{name}</h2>
            <p className="text-center">Level: <span className="text-accent font-medium">{level}</span></p>
        </div>
    </div>
)

export default DigimonCard;
