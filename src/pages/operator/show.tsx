import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";

export const OperatorShow = () => (
    <Show>
        <div className="flex flex-col gap-4">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="scope" />
            <RecordField source="action" />
            <RecordField source="entity_id" />
            <RecordField source="entity_data" />
            <RecordField source="user_id">
                <ReferenceField source="user_id" reference="user" />
            </RecordField>
            <RecordField source="ip_addr" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
        </div>
    </Show>
);