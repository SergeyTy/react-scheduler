import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "./Tabel/components/index";
import "./Tabel/SuperResponsiveTableStyle.css";
import { ri01, ri02 } from "../data/ri-0";

function SmthTable(props) {
    console.log(props.data.scheduler_1.mon);
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Время</Th>
                    <Th>Предмет</Th>
                    <Th>Тип</Th>
                    <Th>Кабинет</Th>
                    <Th>Преподователь</Th>
                </Tr>
            </Thead>
			{props.data.scheduler_1.map((day) => (
				<Tbody>
					{day.map((i) => (
					<Tr>
						<Td>{i.time}</Td>
						<Td>{i.sub}</Td>
						<Td>{i.type}</Td>
						<Td>{i.place}</Td>
						<Td>{i.prepod}</Td>
					</Tr>
					))}
				<hr></hr>
				</Tbody>
				))}

        </Table>
    );
}

export default SmthTable;
