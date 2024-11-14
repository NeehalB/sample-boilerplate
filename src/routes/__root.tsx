import { Outlet, createRootRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>Page Not Found</div>,
});

function RootComponent() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate({ to: "/login" });
    }
  }, [token, navigate]);

  return (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  );
}
