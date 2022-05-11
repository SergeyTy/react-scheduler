import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function SmthTable(data){
    return(
    <Table>
	<Thead>
		<Tr>
			<Th>Время</Th>
			<Th>Предмет</Th>
			<Th>Кабинет</Th>
			<Th>Преподователь</Th>
		</Tr>
	</Thead>
	<Tbody>
		<Tr>
			<Td>{data.time} 8:00</Td>
			<Td>{data.sub} Game-design</Td>
			<Td>{data.au} kabinet</Td>
			<Td>Prepod</Td>
		</Tr>
        <Tr>
			<Td>{data.time} 8:00</Td>
			<Td>{data.sub} Game-design</Td>
			<Td>{data.au} kabinet</Td>
			<Td>Prepod</Td>
		</Tr>
        <Tr>
			<Td>{data.time} 8:00</Td>
			<Td>{data.sub} Game-design</Td>
			<Td>{data.au} kabinet</Td>
			<Td>Prepod</Td>
		</Tr>
        <Tr>
			<Td>{data.time} 8:00</Td>
			<Td>{data.sub} Game-design</Td>
			<Td>{data.au} kabinet</Td>
			<Td>Prepod</Td>
		</Tr>
		
	</Tbody>
</Table>)
};

export default SmthTable;
