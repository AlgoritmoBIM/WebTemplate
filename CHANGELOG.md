# Changelog

Todas las cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-01

### Added
- Estructura inicial del proyecto con frontend React y backend FastAPI
- Página de inicio con componentes base (Header, Hero, Features, Footer)
- Configuración de Tailwind CSS para estilos
- Autenticación básica con Azure AD (preparado)
- Docker y docker-compose para containerización
- CI/CD con GitHub Actions
- Documentación de desarrollo y contribuciones
- Integraciones preparadas con APIs de terceros:
  - OpenWeatherMap (clima)
  - Mapbox (mapas)
  - Microsoft Teams y Planner
  - Azure Cognitive Services
  - Google Translate

### Changed
- N/A

### Deprecated
- N/A

### Removed
- N/A

### Fixed
- N/A

### Security
- N/A

---

### Formato para futuras versiones

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- Descripción de nuevas características

### Changed
- Cambios en funcionalidades existentes

### Deprecated
- Características que serán removidas

### Removed
- Características removidas

### Fixed
- Bugs corregidos

### Security
- Vulnerabilidades de seguridad arregladas
```

### Cómo contribuir a este CHANGELOG

1. Bajo la sección `[Unreleased]` agrega cambios en las categorías correspondientes
2. Usa gerundios para describir cambios: "add", "change", "remove", "fix", "security"
3. Sé específico y claro en la descripción
4. Referencia números de issue cuando sea posible (ej: "fix: resolve issue #123")
