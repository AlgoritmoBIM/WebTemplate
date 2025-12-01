# Contributing to WebTemplate

Gracias por tu interés en contribuir a **WebTemplate**. Este documento proporciona pautas para colaborar en el proyecto.

## Cómo Reportar Problemas

Si encuentras un bug o tienes una sugerencia:

1. Verifica que el problema no haya sido reportado antes en [Issues](../../issues)
2. Abre un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Comportamiento esperado vs. actual
   - Tu entorno (OS, navegador, versión de Python, etc.)

## Cómo Contribuir Código

### Preparar tu entorno

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/WebTemplate.git
cd WebTemplate

# Crear rama de feature
git checkout -b feature/nombre-descriptivo
```

### Setup de desarrollo

**Backend:**
```bash
cd backend
python -m venv venv
# En Windows: venv\Scripts\activate
# En macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### Convenciones de código

- **Python**: Seguir [PEP 8](https://www.python.org/dev/peps/pep-0008/), usar `snake_case` para funciones/variables
- **JavaScript/React**: Usar `camelCase`, componentes en carpeta `/components`, seguir estructura de carpetas existente
- **Commits**: Mensajes descriptivos en inglés (ej: "feat: add user authentication", "fix: resolve API timeout issue")
- **Ramas**: `feature/nombre`, `bugfix/nombre`, `docs/nombre`

### Proceso de PR

1. Haz push de tu rama: `git push origin feature/nombre-descriptivo`
2. Abre un Pull Request con:
   - Título descriptivo
   - Descripción del cambio y justificación
   - Referencias a issues (ej: "Closes #123")
   - Cambios visuales o capturas si aplica
3. Asegúrate de que los tests pasen (CI/CD)
4. Un maintainer revisará tu PR

### Antes de hacer commit

```bash
# Backend
cd backend
flake8 .
pytest

# Frontend
cd frontend
npm run lint
npm run build
```

## Directrices de estilo

### Backend (FastAPI + Python)

- Estructura en capas: `routes` → `controllers` → `services` → `models`
- Agregar logging en `utils/logger.py`
- Validar entrada en controllers
- Documentar funciones con docstrings en español

### Frontend (React + Tailwind)

- Componentes funcionales con hooks
- Estructura: `pages/` (rutas), `components/` (reutilizables), `utils/` (helpers)
- Usar Tailwind CSS, evitar CSS inline
- Comentarios en código complejo

## Preguntas o dudas

- Abre una discussion en [Discussions](../../discussions)
- Contacta a los maintainers en issues

¡Gracias por contribuir! 🚀
