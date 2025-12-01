# BIM WebTemplate

A comprehensive Building Information Modeling (BIM) web platform integrating modern web technologies with enterprise-grade features. This project connects multiple third-party APIs and provides real-time 3D visualization for BIM workflows.

## Project Overview

**Purpose**: Build a scalable BIM platform for construction project management based on Autodesk products (Revit, AutoCAD, 3ds Max, Navisworks) and BIM 360.

**Tech Stack**:
- **Frontend**: React 18, Tailwind CSS, Three.js (3D visualization), Axios (API client)
- **Backend**: Python FastAPI, Azure SQL Database, Docker
- **Authentication**: Microsoft Azure AD
- **Deployment**: Azure, GitHub Actions CI/CD
- **Architecture**: Layered (routes → controllers → services → models → utils)

## Project Structure

```
WebTemplate/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS files
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── public/              # Static assets
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── index.html
├── backend/                 # FastAPI backend
│   ├── routes/              # API endpoints
│   ├── controllers/         # Request handlers
│   ├── services/            # Business logic
│   ├── models/              # Data models
│   ├── utils/               # Utility functions
│   ├── main.py              # FastAPI application entry point
│   └── requirements.txt
├── .github/
│   ├── workflows/           # GitHub Actions CI/CD
│   └── copilot-instructions.md
├── Dockerfile               # Backend containerization
├── docker-compose.yml       # Local development environment
├── .env.example             # Environment variables template
└── README.md
```

## Quick Start

### Prerequisites

- **Node.js** 18+ (for frontend)
- **Python** 3.11+ (for backend)
- **Docker** and **Docker Compose** (optional, for containerized deployment)

### 1. Clone Repository

```bash
git clone <repository-url>
cd WebTemplate
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will be available at `http://localhost:3000`

### 3. Setup Backend

```bash
cd backend
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
python main.py
```

The backend API will be available at `http://localhost:8000`
API docs: `http://localhost:8000/docs` (Swagger UI)

### 4. Environment Configuration

Copy `.env.example` to `.env` and update with your credentials:

```bash
cp .env.example .env
```

Edit `.env` with:
- Azure AD credentials
- Database connection string
- Third-party API keys (OpenWeather, Mapbox, Google Translate)

### 5. Using Docker (Optional)

```bash
docker-compose up
```

This will start:
- Backend API: `http://localhost:8000`
- Frontend: `http://localhost:3000`

## Frontend Development

### Components Hierarchy

```
App
├── Header (Navigation)
├── Hero (Landing section)
├── Features (Feature showcase)
└── Footer (Site footer)
```

### Key Patterns

- **Styling**: Tailwind CSS with responsive design (mobile-first)
- **State Management**: React hooks (useState, useEffect)
- **API Calls**: Axios client for backend communication
- **3D Visualization**: Three.js for BIM model rendering (to be integrated)

### Build Production

```bash
cd frontend
npm run build
```

Output: `frontend/dist/`

## Backend Development

### Architecture Layers

1. **Routes** (`backend/routes/`) - URL endpoints and HTTP methods
2. **Controllers** (`backend/controllers/`) - Request/response handling
3. **Services** (`backend/services/`) - Business logic and workflows
4. **Models** (`backend/models/`) - Data schemas and validation
5. **Utils** (`backend/utils/`) - Helper functions, logging, error handling

### Adding a New Endpoint

1. Create route in `backend/routes/`
2. Link to controller in `backend/controllers/`
3. Implement service logic in `backend/services/`
4. Define model/schema in `backend/models/`

Example:
```python
# routes/weather.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/weather/{location}")
async def get_weather(location: str):
    """Fetch weather for a location"""
    return WeatherService.get_weather(location)
```

### Testing

Run tests with pytest:

```bash
pytest backend/tests/ -v --cov
```

## Integrated APIs (Roadmap)

- [ ] OpenWeatherMap (Weather data)
- [ ] Mapbox (Geographic visualization)
- [ ] Microsoft Teams (Collaboration)
- [ ] Microsoft Planner (Task management)
- [ ] Azure Cognitive Services (AI/ML)
- [ ] Google Translate API (Localization)
- [ ] Autodesk Forge (BIM model management)
- [ ] Autodesk BIM 360 (Collaboration platform)

## Security Best Practices

- All secrets stored in `.env` (never commit to git)
- Azure AD authentication for user verification
- CORS configured for frontend domain only
- HTTPS enforced in production
- Input validation on all API endpoints
- Rate limiting on external API calls

## CI/CD Pipeline

GitHub Actions workflows in `.github/workflows/`:
- Lint code
- Run tests
- Build Docker image
- Deploy to Azure

(Configuration files to be created in separate task)

## Performance Optimization

- Response caching for external API calls
- Lazy loading of 3D models
- CDN delivery for static assets
- Database query optimization with indexes
- Connection pooling for database

## Debugging

### Frontend Debug
```bash
# Development mode with hot reload
cd frontend && npm start

# With browser DevTools (F12)
```

### Backend Debug
```bash
# With Python debugger
python -m pdb backend/main.py

# With logging (see backend/utils/logger.py)
```

## Common Issues

| Issue | Solution |
|-------|----------|
| CORS errors | Check `ALLOWED_ORIGINS` in `backend/main.py` |
| API not responding | Ensure backend running on `:8000` |
| Styling not applied | Run `npm install tailwindcss` in frontend |
| Database connection fails | Verify `.env` DATABASE_URL is correct |

## Contributing

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes following project conventions
3. Test thoroughly before committing
4. Create Pull Request with clear description
5. Request code review

## Documentation

- See `.github/copilot-instructions.md` for AI agent guidelines
- Swagger API docs: `http://localhost:8000/docs` (auto-generated)

## License

[To be defined]

## Support

For issues or questions:
- GitHub Issues: Create an issue in the repository
- Documentation: Check README and code comments
- API Help: Visit Swagger docs

---

**Version**: 0.1.0  
**Last Updated**: December 2024
