import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";

export const Mo_messageShow = () => (
    <Show>
        <div className="flex flex-col gap-4">
            <RecordField source="channel_id">
                <ReferenceField source="channel_id" reference="channel" />
            </RecordField>
            <RecordField source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </RecordField>
            <RecordField source="sender" />
            <RecordField source="receiver" />
            <RecordField source="content" />
            <RecordField source="status">
                <NumberField source="status" />
            </RecordField>
            <RecordField source="ai_trace_id" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="updated_at">
                <DateField source="updated_at" />
            </RecordField>
            <RecordField source="type">
                <NumberField source="type" />
            </RecordField>
            <RecordField source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </RecordField>
            <RecordField source="session_id">
                <ReferenceField source="session_id" reference="chat" />
            </RecordField>
            <RecordField source="agent_id">
                <ReferenceField source="agent_id" reference="agent" />
            </RecordField>
        </div>
    </Show>
);