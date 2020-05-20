import React, { useEffect, useState } from "react";

import API from "../../shared/apis/server-api";
import { Header } from "../../shared/components/header/header.component";
import { Footer } from "../../shared/components/footer/footer.component";
import { PageHeader } from "./components/page-header/page-header.component";

import "./report-missing.styles.css";

export const ReportMissing = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getBreeds = async () => {
      const apiBreeds = await API.get("/breeds");

      setBreeds(apiBreeds.data);
    };

    getBreeds();
  }, []);

  return (
    <div className="report-missing-page">
      <Header />
      <div className="report-missing-wrapper">
        <PageHeader />
      </div>
      <Footer />
    </div>
  );
};
