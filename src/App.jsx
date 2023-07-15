import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider, Layout } from "antd"; 
import MyContextProvider, { MyContext } from "./contexts/MyContext";

// Pages
import Home from "./pages/Home";
import Vendas from "./pages/Vendas";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Layout components
const { Content } = Layout;

function WithAuthentication({ children }) {
  const { rootState } = useContext(MyContext);
  const { isAuth } = rootState;
  return isAuth ? (
    children
  ) : (
    <Navigate to={`${import.meta.env.VITE_REACT_APP_PATH}`} replace />
  );
}

const theme = {
  token: {
    colorPrimary: "#f474d8",
    colorSuccess: "#a3f47a",
    colorWarning: "#FADB14",
    colorError: "#f67c7e",
    colorInfo: "#9cc5ff"
  }
  
}

const App = () => {
  return (
    <ConfigProvider theme={theme}>
    <MyContextProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header theme={theme} />
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              <Route path={`${import.meta.env.VITE_REACT_APP_PATH}`} element={<Home />} />
              <Route
                path={`${import.meta.env.VITE_REACT_APP_PATH}vendas`}
                element={
                  <WithAuthentication>
                    <Vendas theme={theme} />
                  </WithAuthentication>
                }
              />
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </MyContextProvider>
    </ConfigProvider>
  );
};

export default App;