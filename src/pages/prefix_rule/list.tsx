import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const PrefixRuleList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="original_prefix" />
            <DataTable.Col source="replacement_prefix" />
            <DataTable.Col source="description" />
            <DataTable.Col source="type" />
            <DataTable.Col source="entity_id" />
            <DataTable.Col source="creator_id">
                <ReferenceField source="creator_id" reference="user" />
            </DataTable.Col>
            <DataTable.Col source="created_at" />
            <DataTable.Col source="updated_at" />
        </DataTable>
    </List>
);