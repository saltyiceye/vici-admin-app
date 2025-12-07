import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";
import { ReferenceManyField } from "@/components/admin/reference-many-field";
import { DataTable } from "@/components/admin/data-table";

export const ChatShow = () => (
    <Show>
        <div className="flex flex-row gap-4 flex-wrap">
        <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </RecordField>
            <RecordField source="receiver" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="updated_at">
                <DateField source="updated_at" />
            </RecordField>
            <RecordField source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </RecordField>
            <RecordField source="channel_id">
                <ReferenceField source="channel_id" reference="channel" />
            </RecordField>
            <RecordField source="dev_port">
                <NumberField source="dev_port" />
            </RecordField>
            <RecordField source="task_id">
                <ReferenceField source="task_id" reference="task" />
            </RecordField>
            <RecordField source="agent_id">
                <ReferenceField source="agent_id" reference="agent" />
            </RecordField>
        </div>
        <div className="flex flex-col gap-4 mt-4">
                    <ReferenceManyField reference="mo_message" target="session_id">
                        <DataTable>
                            <DataTable.Col source="id" />
                            <DataTable.Col source="content" />
                            <DataTable.Col source="type" />
                            <DataTable.Col source="created_at" />
                        </DataTable>
                    </ReferenceManyField>
                </div>
    </Show>
);