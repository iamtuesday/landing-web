'use client'

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui'
import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const PaginationSet = ({ totalItems, className }: { totalItems: number; className?: string }) => {
	// Obtenemos los parámetros de búsqueda y la ruta actual
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	// Obtenemos el número de página actual desde los parámetros de búsqueda o usamos 1 por defecto
	const currentPage = Number(searchParams.get('page')) || 1

	// Definimos el tamaño de la página y calculamos el total de páginas
	const pageSize = 10
	const totalPage = Math.ceil(totalItems / pageSize)

	// Calculamos el rango de páginas que se mostrarán en la paginación
	const startPage = Math.floor((currentPage - 1) / 3) * 3 + 1
	const endPage = Math.min(totalPage, startPage + 2)

	// Función para manejar el cambio de página
	const setPaginationValueHandler = (pageNumber: number | string) => {
		// Creamos un nuevo objeto de parámetros de búsqueda
		const params = new URLSearchParams(searchParams)

		// Establecemos el valor de la página en los parámetros
		params.set('page', pageNumber.toString())

		// Actualizamos la URL con los nuevos parámetros y evitamos el desplazamiento de la página
		replace(`${pathname}?${params.toString()}`, { scroll: false })
	}

	return (
		<Pagination className={cn(className)}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => setPaginationValueHandler(Math.max(currentPage - 1, 1))}
						className={cn(currentPage === 1 && 'opacity-50 pointer-events-none')}
					/>
				</PaginationItem>
				{Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
					const pageNumber = startPage + index
					return (
						<PaginationItem key={index}>
							<PaginationLink isActive={pageNumber === currentPage} onClick={() => setPaginationValueHandler(pageNumber)}>
								{pageNumber}
							</PaginationLink>
						</PaginationItem>
					)
				})}
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext
						className={cn(currentPage >= totalPage && 'opacity-50 pointer-events-none')}
						onClick={() => setPaginationValueHandler(Math.min(currentPage + 1, totalPage))}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
