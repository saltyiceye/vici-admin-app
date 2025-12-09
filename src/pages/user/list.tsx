import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="username" />
            <DataTable.Col source="name" />
            <DataTable.Col source="role_id">
                <ReferenceField source="role_id" reference="role" />
            </DataTable.Col>
        </DataTable>
    </List>
);