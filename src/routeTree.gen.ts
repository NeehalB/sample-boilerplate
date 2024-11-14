/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const LoginLazyImport = createFileRoute('/login')()
const DashboardLazyImport = createFileRoute('/dashboard')()

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const DashboardLazyRoute = DashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dashboard.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/dashboard': typeof DashboardLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesByTo {
  '/dashboard': typeof DashboardLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/dashboard': typeof DashboardLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/dashboard' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/dashboard' | '/login'
  id: '__root__' | '/dashboard' | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  DashboardLazyRoute: typeof DashboardLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  DashboardLazyRoute: DashboardLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/dashboard",
        "/login"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.lazy.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
