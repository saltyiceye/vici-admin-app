import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const RoutingList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="created_at" />
            <DataTable.Col source="strategy_id" />
            <DataTable.Col source="creator" />
            <DataTable.Col source="description" />
            <DataTable.Col source="is_deleted" />
            <DataTable.Col source="priority" />
        </DataTable>
    </List>
);