import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const OperatorList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="scope" />
            <DataTable.Col source="action" />
            <DataTable.Col source="entity_id" />
            <DataTable.Col source="entity_data" />
            <DataTable.Col source="user_id">
                <ReferenceField source="user_id" reference="user" />
            </DataTable.Col>
            <DataTable.Col source="ip_addr" />
            <DataTable.Col source="created_at" />
        </DataTable>
    </List>
);