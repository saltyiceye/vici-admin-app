import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomerList } from "./list"
import { CustomerRateList } from "../customer_rate/list"

export const CustomerIndex = () => {
    return (
        <Tabs defaultValue="customer">
        <TabsList>
            <TabsTrigger value="customer">Customer</TabsTrigger>
            <TabsTrigger value="customer_rate">CustomerRate</TabsTrigger>
        </TabsList>
        <TabsContent value="customer">
            <CustomerList />
        </TabsContent>
        <TabsContent value="customer_rate">
            <CustomerRateList />
        </TabsContent>
        </Tabs>
    )
}