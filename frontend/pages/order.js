import PleaseSignIn from "../components/PleaseSignin.js";
import Order from "../components/Order.js";

const OrderPage = props => (
  <div>
    <PleaseSignIn>
      <Order id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default OrderPage;
