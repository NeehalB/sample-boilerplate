import { createLazyFileRoute } from "@tanstack/react-router";
import Dashboard from "../pages/dashboard/dashboard.page";

export const Route = createLazyFileRoute("/dashboard")({
  component: Dashboard,
});
