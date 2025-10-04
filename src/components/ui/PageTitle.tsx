import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-800 dark:text-white">
      {children}
    </h1>
  );
};

export default PageTitle;