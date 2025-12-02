# 🚀 Guía Rápida de Ejecución

## Frontend (React + Vite)

### Opción 1: Usar el script batch (Windows)
```bash
start-frontend.bat
```

### Opción 2: Manual en PowerShell
```powershell
cd frontend
npm start
```

El servidor estará disponible en: **http://localhost:3000**

---

## Backend (FastAPI + Python)

### Requisitos previos
- Python 3.9+
- pip

### Instalación

```powershell
cd backend
python -m venv venv

# En Windows
venv\Scripts\activate

# En macOS/Linux
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt
```

### Ejecución

```powershell
# Asegúrate de tener activado el venv
python main.py
```

El servidor estará disponible en: **http://localhost:8000**

Para ver la documentación interactiva de la API:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

---

## 🐳 Con Docker

### Construir imagen
```bash
docker build -t webtemplate .
```

### Ejecutar contenedor
```bash
docker-compose up
```

El proyecto estará disponible en:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

---

## 📋 Stack Tecnológico

| Componente | Tecnología |
|-----------|-----------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS |
| Backend | FastAPI (Python) |
| Base de datos | Azure SQL (planned) |
| Autenticación | Azure AD (planned) |
| 3D | Three.js |
| HTTP Client | Axios |

---

## ⚙️ Variables de entorno

Crear `.env` en la raíz del proyecto (basado en `.env.example`):

```env
DATABASE_URL=mssql+pyodbc:///?odbc_connect=...
AZURE_AD_CLIENT_ID=your_id
AZURE_AD_CLIENT_SECRET=your_secret
OPENWEATHER_API_KEY=your_key
MAPBOX_API_KEY=your_key
GOOGLE_TRANSLATE_API_KEY=your_key
ENVIRONMENT=development
```

---

## 🔗 Recursos

- [Documentación de desarrollo](.github/copilot-instructions.md)
- [Cómo contribuir](CONTRIBUTING.md)
- [Roadmap](ROADMAP.md)

---

## 🐛 Solución de problemas

### El frontend no inicia
1. Verifica que Node.js esté instalado: `node --version`
2. Reinstala dependencias: `npm install`
3. Limpia cache: `npm cache clean --force`

### El backend no inicia
1. Verifica Python: `python --version`
2. Activa el venv correctamente
3. Reinstala dependencias: `pip install -r requirements.txt`

### Puerto ya en uso
```powershell
# Frontend (cambiar puerto)
npm start -- --port 3001

# Backend (cambiar puerto en main.py o via variable de entorno)
```

---

**¿Necesitas ayuda?** Revisa [CONTRIBUTING.md](CONTRIBUTING.md) o abre un issue en GitHub.
