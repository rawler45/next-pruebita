'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        label: "Curriculum",
        href: "/dashboard/curriculum"
    },
    {
        label: "Experiencia",
        href: "/dashboard/experiencia"
    },
    {
        label: "Trabajos",
        href: "/dashboard/trabajos"
    },
    {
        label: "Freelance",
        href: "/dashboard/freelance"
    },
    {
        label: "Colaboraciones",
        href: "/dashboard/colaboraciones"
    },
    {
        label: "Estudios",
        href: "/dashboard/estudios"
    },
    {
        label: "Referencias",
        href: "/dashboard/referencias"
    },
    {
        label: "Empresas",
        href: "/dashboard/empresas"
    },
    {
        label: "Emprendimientos",
        href: "/dashboard/emprendimientos"
    },
    {
        label: "Componentes",
        href: "/dashboard/componentes"
    },
    {
        label: "Casos de estudio",
        href: "/dashboard/casosdeestudio"
    },
    {
        label: "Bio",
        href: "/dashboard/bio"
    },
    {
        label:"Modelos",
        href:"/dashboard/modelos"
    }
]

const MenuDelDashboard = () => {
    const pathName = usePathname()

    return(
        <div className=' flex flex-col gap-10 mt-10 ml-11 p-8 w-80 border '>
            {links.map(link => (
                <li key={link.nombre}>
                    <Link  className={`${ pathName === link.href ? "bg-orange-500 p-4 rounded-lg w-60" : ""} p-4 w-60 h-36` } href={link.href} >{link.label} </Link>
                </li>
            ))}
        </div>
    )
}

export default MenuDelDashboard;