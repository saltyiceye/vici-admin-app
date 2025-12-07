import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import { ReferenceManyField } from "@/components/admin/reference-many-field";
import { DataTable } from "@/components/admin/data-table";
import { Label } from "@/components/ui/label";

export const SupplierShow = () => (
    <Show>
        <div className="flex flex-col gap-4">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="name" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="description" />
            <RecordField source="status">
                <DateField source="status" />
            </RecordField>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <Label className="mt-2">
                Fee
            </Label>
            <ReferenceManyField reference="supplier_fee" target="supplier_id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="fee" />
                    <DataTable.Col source="created_at" />
                </DataTable>
            </ReferenceManyField>
        </div>
    </Show>
);