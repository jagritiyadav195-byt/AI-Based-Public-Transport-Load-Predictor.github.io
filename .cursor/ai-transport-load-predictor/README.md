# AI Public Transport Load Predictor

Modern, responsive React + Tailwind UI with a **Node.js/Express backend** for the **AI Public Transport Load Predictor**.

## Tech

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Lucide icons, Leaflet (map)
- **Backend:** Node.js, Express, TypeScript (tsx), CORS

## Run locally

### 1. Install dependencies

```bash
# Root (frontend)
npm install

# Backend
cd server && npm install && cd ..
```

### 2. Run frontend and backend

**Option A – both together (from project root):**

```bash
npm run dev:all
```

- Frontend: http://localhost:5173  
- Backend API: http://localhost:3001  

**Option B – separately:**

```bash
# Terminal 1 – backend
npm run dev:server

# Terminal 2 – frontend
npm run dev
```

### 3. Environment (optional)

- **Frontend:** set `VITE_API_URL` if the API is not at `http://localhost:3001` (e.g. in `.env`: `VITE_API_URL=http://localhost:3001`).
- **Backend:** set `PORT` if you want a different port (default `3001`).

See `.env.example` for placeholders.

## Backend API

- **GET** `/api/load-prediction?routeId=<id>`  
  Returns load prediction for the given bus/train route (same shape as the frontend `LoadPrediction` type).

- **GET** `/health`  
  Health check.

## Project layout

- `src/` – React app (components, services, styles)
- `src/services/transportService.ts` – frontend client; calls backend `/api/load-prediction`
- `server/` – Express backend
  - `server/src/index.ts` – app entry, CORS, routes
  - `server/src/routes/loadPrediction.ts` – load-prediction route
  - `server/src/services/predictionService.ts` – prediction logic (replace with DB/ML when ready)

To plug in real data, edit `server/src/services/predictionService.ts` (e.g. DB, GTFS-Realtime, or an ML model).
