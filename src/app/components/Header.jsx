import Link from 'next/link'

const links = [
    {
        nombre: "Home",
        href: "/"
    },
    {
        nombre: "Ingreso",
        href: "/ingreso"
    },
]



const Header = () => {
    return(
        <div className='w-full flex items-center justify-center gap-10 h-20 bg-gray-600'>
            {links.map((link) => (
                <li className=' flex justify-center bg-red-400' key={link.nombre}>
                    <Link href={link.href}>{link.nombre} </Link>
                </li>
            ))}
        </div>
    )
}

export default Header;