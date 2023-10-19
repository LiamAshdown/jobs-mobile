import { Provider } from "react-redux";

import Boot from "./Boot";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Boot />
    </Provider>
  );
}
