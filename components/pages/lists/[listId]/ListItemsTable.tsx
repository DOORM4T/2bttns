import { Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { ListItemAttributes } from '../../../../db/models/ListItemModel'
import { ListItemField } from './ListByIdView'

export type ListItemsTableProps = {
    listItems: ListItemAttributes[]
    fields: ListItemField[]
    handleAddListItem: () => void
    handleAddField: (field: ListItemField) => void
}

export default function ListItemsTable(props: ListItemsTableProps) {
    const { listItems, fields, handleAddListItem, handleAddField } = props

    const [viewListItems, setViewListItems] = useState<ListItemAttributes[]>([])

    useEffect(() => {
        setViewListItems(listItems)
    }, [listItems])

    // TODO: Sort asc/desc by field
    // const sortListItems = (field: ListItemField, order: 'asc' | 'desc') => {
    //     const sortedListItems = [...viewListItems].sort((a, b) => {
    //         if (a[field] < b[field]) {
    //             return -1
    //         }
    //         if (a[field] > b[field]) {
    //             return 1
    //         }
    //         return 0
    //     })
    //     setViewListItems(sortedListItems)
    // }

    return (
        <Table variant="striped">
            <Thead
                sx={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Tr>
                    {fields.map((field) => (
                        <Td key={field}>
                            <Text
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                {field}
                            </Text>
                        </Td>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {viewListItems.map((item) => {
                    return (
                        <Tr key={item.id} sx={{ marginTop: '50rem' }}>
                            {fields.map((field) => (
                                <Td key={`${item.id}-${field}`}>
                                    {item[field as keyof ListItemAttributes]}
                                </Td>
                            ))}
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}
