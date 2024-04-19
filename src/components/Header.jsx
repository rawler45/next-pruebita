'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        nombre: "Home",
        path: "/"
    },
    {
        nombre: "Ingreso",
        path: "/ingreso"
    },
    {
        nombre: "Dashboard",
        path: "/dashboard/curriculum"
    },
    {
        nombre: "Posts",
        path: "/posts"
    }
]



const Header = () => {
    const pathName = usePathname()
    return(
        <div className='w-full flex items-center justify-center gap-10 h-20 bg-green-600'>
            {links.map((link) => (
                <li className={ `${pathName === link.path ? "bg-orange-300 p-2 ": ""}p-2 rounded-md flex justify-center` }key={link.nombre}>
                    <Link className='bg-transparent' href={link.path}>{link.nombre} </Link>
                </li>
            ))}
        </div>
    )
}

export default Header;