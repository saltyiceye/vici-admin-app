import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const IpPoolList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </DataTable.Col>
            <DataTable.Col source="ip_address" />
            <DataTable.Col source="type" />
            <DataTable.Col source="reason" />
            <DataTable.Col source="creator_id">
                <ReferenceField source="creator_id" reference="user" />
            </DataTable.Col>
            <DataTable.Col source="created_at" />
            <DataTable.Col source="updated_at" />
        </DataTable>
    </List>
);