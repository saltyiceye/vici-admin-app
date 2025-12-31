import type { FieldProps } from "@/lib/field.type.ts";
import type { HTMLAttributes } from "react";
import { useFieldValue, useTranslate } from "ra-core";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const LongTextField = <
    RecordType extends Record<string, any> = Record<string, any>,
>({
    defaultValue,
    source,
    record,
    empty,
    ...rest
}: TextFieldProps<RecordType>) => {
    const value = useFieldValue({ defaultValue, source, record });
    const translate = useTranslate();
    if (value == null) {
        if (!empty) {
            return null;
        }

        return (
            <span {...rest}>
                {typeof empty === "string" ? translate(empty, { _: empty }) : empty}
            </span>
        );
    }

    if (value.length <= 30) {
        return <span {...rest}>{value}</span>;
    }
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <span {...rest} className="cursor-pointer text-blue-600 underline">
                    {value.slice(0, 30)}...
                </span>
            </TooltipTrigger>
            <TooltipContent>
                <pre className="whitespace-pre-wrap break-words">{value}</pre>
            </TooltipContent>
        </Tooltip>
    );
}

export interface TextFieldProps<
    RecordType extends Record<string, any> = Record<string, any>,
> extends FieldProps<RecordType>,
    HTMLAttributes<HTMLSpanElement> { }