import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { JSX } from "react/jsx-runtime";

// Dynamically import all components from the `pages` directory
const pages = import.meta.glob("./pages/**/*.tsx", { eager: true }) as Record<
  string,
  { default: React.ComponentType }
>;

// Import the 404 Not Found page
const NotFound =
  pages["./pages/notFound.tsx"]?.default ||
  (() => <h1>404 - Page Not Found</h1>);

  function generateRoutes() {
    const dynamicRoutes: JSX.Element[] = []; // Store dynamic routes separately
    const staticRoutes: JSX.Element[] = [];
  
    Object.entries(pages).forEach(([path, module]) => {
      const Component = module.default;
  
      // Generate the route path based on the file structure
      const routePath = path
        .replace("./pages", "") // Remove leading './pages'
        .replace(/\/index\.tsx$/, "") // Remove index.tsx for folders
        .replace(/\.tsx$/, "") // Remove '.tsx'
        .replace(/\/+/g, "/"); // Normalize slashes
  
      const finalPath = routePath === "/home" ? "/" : routePath.toLowerCase();
  
      // Check if the path is a dynamic one (e.g., /product/:id)
      if (routePath.includes("[id]")) {
        const dynamicRoute = routePath.replace("[id]", ":id")
        dynamicRoutes.push(
          <Route
            key={finalPath}
            path={dynamicRoute}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      } else {
        staticRoutes.push(
          <Route
            key={finalPath}
            path={finalPath}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      }
    });
  
    return [...staticRoutes, ...dynamicRoutes]; // Return static and dynamic routes combined
  }
  
  

// create tanstack query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: '#141332',
              headerColor: '#8294d3',
              borderColor: '#353570'
            },
            Modal: {
              contentBg: '#1d1d41',
              headerBg: "#1d1d41",
              titleColor: 'white'
            },
            Select: {
              colorText: '#a7b2c0',
              optionActiveBg: '#fe9f43',
              
            },
            Input: {
              colorTextPlaceholder: '#a7b2c0',
            }
          },
          token: {
            colorBgContainer: '#1d1d41',
            colorText: 'white',
            colorBorder: '#353570',
          }
        }}
      >
        <Router>
          <Routes>
            {generateRoutes()}
            {/* Add a catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
