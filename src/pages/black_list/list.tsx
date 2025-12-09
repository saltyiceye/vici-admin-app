import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const Black_listList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="phone_number" />
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </DataTable.Col>
            <DataTable.Col source="created_at" />
            <DataTable.Col source="updated_at" />
            <DataTable.Col source="creator_id">
                <ReferenceField source="creator_id" reference="user" />
            </DataTable.Col>
        </DataTable>
    </List>
);