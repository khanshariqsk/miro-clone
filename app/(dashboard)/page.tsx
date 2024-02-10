"use client";
import React from "react";
import Sidebar from "./_components/sidebar";
import { EmptyOrg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
  searchParams: { search: string; favorites: string };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className="p-6 flex-1 h-[calc(100%-80px)]">
      {!organization && <EmptyOrg />}
      {organization && (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashboardPage;
