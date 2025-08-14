# 💸 Financial Dashboard

A responsive, dark-mode-enabled financial dashboard built with **Next.js 14**, **Tailwind CSS**, and **Chart.js**. It visualizes mock financial data with dynamic filters, modular components, and clean architecture.

---

## 🚀 Features

- 📊 Interactive charts (Line, Bubble) using Chart.js
- 🌗 Dark mode toggle
- 🎛️ FilterBar with dropdowns for dynamic data range
- 🧩 Modular component structure
- ⚡ API routes with mock data
- 🎨 Responsive design with Tailwind CSS
- 🌀 Loading spinner while charts fetch data

---

## 🛠️ Tech Stack

| Layer         | Technology                |
|--------------|---------------------------|
| Framework     | [Next.js 14](https://nextjs.org) (App Router) |
| Styling       | [Tailwind CSS](https://tailwindcss.com) + CSS Modules |
| Charts        | [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) |
| API Mocking   | Next.js API Routes        |
| Fonts         | [Geist](https://vercel.com/font) via `next/font` |
| Deployment    | [Vercel](https://vercel.com) |

---

## 📦 Getting Started

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### 1. Clone the repository

```bash
git clone https://github.com/your-vishveshvar/financial-dashboard.git
cd financial-dashboard
npm install
src/
├── app/
│   ├── api/
│   │   └── mis/route.ts         # API route for MIS chart
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── MainCard.tsx
│   │   ├── FilterBar.tsx
│   │   ├── StatGrid.tsx
│   │   ├── BubbleChart.tsx
│   │   ├── SipBusinessChart.tsx
│   │   └── MonthlyMISChart.tsx
│   └── page.tsx                 # Main dashboard page
├── styles/
│   └── *.module.css             # Modular CSS files