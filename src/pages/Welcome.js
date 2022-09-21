import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Route path="/products">
        <p>Welcome, new USer</p>
      </Route>
    </section>
  );
};

export default Welcome;
