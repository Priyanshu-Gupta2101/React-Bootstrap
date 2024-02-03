import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFoundPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div
        className="app"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Container
          className="main"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "7em",
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
