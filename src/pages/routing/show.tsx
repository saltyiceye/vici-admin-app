import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import { ReferenceManyField } from "@/components/admin/reference-many-field";
import { DataTable } from "@/components/admin/data-table";

export const RoutingShow = () => (
    <Show>
        <div className="flex flex-row gap-4 flex-wrap">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="name" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="strategy_id" />
            <RecordField source="creator">
                <NumberField source="creator" />
            </RecordField>
            <RecordField source="description" />
            <RecordField source="priority">
                <DateField source="priority" />
            </RecordField>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <ReferenceManyField reference="customer" target="id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="created_at" />
                </DataTable>
            </ReferenceManyField>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <ReferenceManyField reference="channel" target="id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="created_at" />
                </DataTable>
            </ReferenceManyField>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <ReferenceManyField reference="mcc_mnc" target="id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="created_at" />
                </DataTable>
            </ReferenceManyField>
        </div>
    </Show>
);