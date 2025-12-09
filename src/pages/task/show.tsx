import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";

export const TaskShow = () => (
    <Show>
        <div className="flex flex-col gap-4">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </RecordField>
            <RecordField source="name" />
            <RecordField source="status">
                <NumberField source="status" />
            </RecordField>
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="submit_count">
                <NumberField source="submit_count" />
            </RecordField>
            <RecordField source="submited_count">
                <NumberField source="submited_count" />
            </RecordField>
            <RecordField source="delivered_count">
                <NumberField source="delivered_count" />
            </RecordField>
            <RecordField source="failed_count">
                <NumberField source="failed_count" />
            </RecordField>
            <RecordField source="reply_count">
                <NumberField source="reply_count" />
            </RecordField>
            <RecordField source="sms_content" />
            <RecordField source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </RecordField>
            <RecordField source="description" />
            <RecordField source="submit_result" />
        </div>
    </Show>
);