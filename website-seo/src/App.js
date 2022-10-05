import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { countSelector } from "./redux/selector";
import dataSlice from "./redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  );
}

function HomePage() {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);
  console.log("count " + count);

  return (
    <>
      <h1>Home PAGE</h1>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={() => {
            dispatch(dataSlice.actions.incre());
          }}
        >
          incre
        </button>
        <button
          onClick={() => {
            dispatch(dataSlice.actions.decre());
          }}
        >
          decre
        </button>
      </div>
    </>
  );
}

function NotFoundPage() {
  return <h1>404 Not Found</h1>;
}

export default App;
