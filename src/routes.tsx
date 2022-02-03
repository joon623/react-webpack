import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import App from './App';
import ImageComponent from './Component/ImageComponent';
import Counter from './features/counter/Counter';
import NotFound from './NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App text="index component" />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="counter" element={<Counter />} />
          <Route path="image" element={<ImageComponent />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route>
        <Route path="contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

function Layout() {
  return (
    <div>
      <h1>Welcome to the webpack app!</h1>
      <nav>
        <Link to="invoices">Invoices</Link> |{' '}
        <Link to="dashboard">Dashboard</Link> |{' '}
        <Link to="counter">Counter</Link> | {'  '}
        <Link to="image">Image</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

function LeagueStandings() {
  return <h1>LeagueStandings</h1>;
}

function PageLayout() {
  return (
    <div>
      <h1>page layout</h1>
      <Outlet />
    </div>
  );
}

function Privacy() {
  return <h1>privacy</h1>;
}

function Tos() {
  return <h1>Tos</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}
