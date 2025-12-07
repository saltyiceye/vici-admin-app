import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const Routing_channelList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="routing_id">
                <ReferenceField source="routing_id" reference="routing" />
            </DataTable.Col>
            <DataTable.Col source="channel_id">
                <ReferenceField source="channel_id" reference="channel" />
            </DataTable.Col>
            <DataTable.Col source="id" />
        </DataTable>
    </List>
);