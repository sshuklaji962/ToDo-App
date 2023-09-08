import React from "react";
import { Toaster } from "react-hot-toast";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeaders";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.css";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
