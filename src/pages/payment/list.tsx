import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const PaymentList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="scope" />
            <DataTable.Col source="scope_id" />
            <DataTable.Col source="balance" />
            <DataTable.Col source="current_balance" />
            <DataTable.Col source="creator_id">
                <ReferenceField source="creator_id" reference="user" />
            </DataTable.Col>
            <DataTable.Col source="description" />
            <DataTable.Col source="created_at" />
        </DataTable>
    </List>
);