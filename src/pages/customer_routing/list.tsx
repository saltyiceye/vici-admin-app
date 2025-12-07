import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const Customer_routingList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="routing_id">
                <ReferenceField source="routing_id" reference="routing" />
            </DataTable.Col>
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </DataTable.Col>
            <DataTable.Col source="id" />
        </DataTable>
    </List>
);