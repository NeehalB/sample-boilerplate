import { createLazyFileRoute } from "@tanstack/react-router";
import LoginPage from "../pages/login/login.page";

export const Route = createLazyFileRoute("/login")({
  component: LoginPage,
});
