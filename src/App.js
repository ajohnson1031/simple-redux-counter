import React from "react";
import { connect } from "react-redux";
import { addAction, subtractAction } from "./actions";

function App({ state, addAction, subtractAction }) {
  return (
    <div className="App">
      <h1>Simple Redux Counter</h1>
      <p className="counter">{state.count}</p>
      <button className="add" onClick={() => addAction(state)}>
        +
      </button>
      <button className="subtract" onClick={() => subtractAction(state)}>
        -
      </button>
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  { addAction, subtractAction }
)(App);
