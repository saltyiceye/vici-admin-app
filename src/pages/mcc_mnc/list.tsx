import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";

export const Mcc_mncList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="mcc" />
            <DataTable.Col source="mnc" />
            <DataTable.Col source="prefix" />
            <DataTable.Col source="created_at" />
            <DataTable.Col source="updated_at" />
            <DataTable.Col source="country" />
            <DataTable.Col source="is_deleted" />
        </DataTable>
    </List>
);