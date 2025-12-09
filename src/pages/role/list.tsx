import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";

export const RoleList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="description" />
            <DataTable.Col source="created_at" />
            <DataTable.Col source="updated_at" />
        </DataTable>
    </List>
);