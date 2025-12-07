import { Resource } from "ra-core";
import { ListGuesser, EditGuesser, ShowGuesser } from "@/components/admin";
import { Admin } from "@/components/admin/admin";
import { LoginPage } from "./login-page";
import { dataProvider } from "@/dataProvider.ts";
import { authProvider } from "@/authProvider.ts";

import { TenantShow } from "./pages/tenant/show";
import {TenantList} from "./pages/tenant/list";
import { CustomerShow } from "./pages/customer/show";
import { SupplierShow } from "./pages/supplier/show";
import { ChannelShow } from "./pages/channel/show";
import { RoutingShow } from "./pages/routing/show";
import { ChannelCreate } from "./pages/channel/create";
import { ChannelList } from "./pages/channel/list";
import { Customer_routingList } from "./pages/customer_routing/list";
import { Customer_rateList } from "./pages/customer_rate/list";
import { Routing_mcc_mncList } from "./pages/routing_mcc_mnc/list";
import { Routing_channelList } from "./pages/routing_channel/list";

import {ChatShow} from "./pages/chat/show";

import {TaskList} from "./pages/task/list";

function App() {
  return (
    <Admin dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}>
      <Resource name="tenant" list={TenantList} edit={EditGuesser} show={TenantShow}/>
      <Resource name="tenant_rate" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="supplier" list={ListGuesser} edit={EditGuesser} show={SupplierShow}/>
      <Resource name="supplier_rate" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="channel" list={ChannelList} create={ChannelCreate} edit={EditGuesser} show={ChannelShow}/>
      <Resource name="customer" list={ListGuesser} edit={EditGuesser} show={CustomerShow}/>
      <Resource name="customer_routing" list={Customer_routingList} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="customer_rate" list={Customer_rateList} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="routing" list={ListGuesser} edit={EditGuesser} show={RoutingShow}/>
      <Resource name="routing_mcc_mnc" list={Routing_mcc_mncList} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="routing_channel" list={Routing_channelList} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="user" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="role" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="mcc_mnc" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} recordRepresentation={(record) => `${record.country}:${record.mcc}:${record.mnc}`}/>
      <Resource name="operator" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="payment" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="operator" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="black_list" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="content_rule" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="permission" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="chat" list={ListGuesser} show={ChatShow}/>
      <Resource name="mo_message" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="prefix_rule" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="ip_pool" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
      <Resource name="task" list={TaskList} edit={EditGuesser} show={ShowGuesser}/>
    </Admin>
  );
}

export default App;