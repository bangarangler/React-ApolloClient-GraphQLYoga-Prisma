import CreateItem from "../components/CreateItem.js";
import PleaseSignIn from "../components/PleaseSignin.js";

const Sell = props => (
  <div>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default Sell;
