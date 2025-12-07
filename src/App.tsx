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
import {RoutingList} from "./pages/routing/list";
import {Mcc_mncList} from "./pages/mcc_mnc/list";
import {Mcc_mncEdit} from "./pages/mcc_mnc/edit";
import {RoutingEdit} from "./pages/routing/edit";

function App() {
  return (
    <Admin dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}>
      <Resource name="tenant" list={TenantList} edit={EditGuesser}/>
      <Resource name="tenant_rate" list={ListGuesser} edit={EditGuesser} />
      <Resource name="supplier" list={ListGuesser} edit={EditGuesser} />
      <Resource name="supplier_rate" list={ListGuesser} edit={EditGuesser} />
      <Resource name="channel" list={ChannelList} create={ChannelCreate} edit={EditGuesser} />
      <Resource name="customer" list={ListGuesser} edit={EditGuesser} />
      <Resource name="customer_routing" list={Customer_routingList} edit={EditGuesser} />
      <Resource name="customer_rate" list={Customer_rateList} edit={EditGuesser} />
      <Resource name="routing" list={RoutingList} edit={RoutingEdit}/>
      <Resource name="routing_mcc_mnc" list={Routing_mcc_mncList} edit={EditGuesser} />
      <Resource name="routing_channel" list={Routing_channelList} edit={EditGuesser} />
      <Resource name="user" list={ListGuesser} edit={EditGuesser} />
      <Resource name="role" list={ListGuesser} edit={EditGuesser} />
      <Resource name="mcc_mnc" list={Mcc_mncList} edit={Mcc_mncEdit}  recordRepresentation={(record) => `${record.country}:${record.mcc}:${record.mnc}`}/>
      <Resource name="operator" list={ListGuesser} edit={EditGuesser} />
      <Resource name="payment" list={ListGuesser} edit={EditGuesser} />
      <Resource name="operator" list={ListGuesser} edit={EditGuesser} />
      <Resource name="black_list" list={ListGuesser} edit={EditGuesser} />
      <Resource name="content_rule" list={ListGuesser} edit={EditGuesser} />
      <Resource name="permission" list={ListGuesser} edit={EditGuesser} />
      <Resource name="chat" list={ListGuesser} show={ChatShow}/>
      <Resource name="mo_message" list={ListGuesser} edit={EditGuesser} />
      <Resource name="prefix_rule" list={ListGuesser} edit={EditGuesser} />
      <Resource name="ip_pool" list={ListGuesser} edit={EditGuesser} />
      <Resource name="task" list={TaskList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;