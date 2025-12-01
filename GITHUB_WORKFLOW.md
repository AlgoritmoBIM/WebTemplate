# WebTemplate - Guía Rápida de GitHub

## Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/WebTemplate.git
cd WebTemplate
```

## Inicializar el proyecto

```bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt

# Frontend
cd ../frontend
npm install
npm run dev
```

## Rama principal

- **main**: Código en producción (versiones estables)
- **develop**: Rama de desarrollo (base para features)

## Workflow de desarrollo

### Para trabajar en una feature:

```bash
# Crea rama desde develop
git checkout develop
git pull origin develop
git checkout -b feature/nombre-descriptivo

# Haz cambios, commits, y pushea
git add .
git commit -m "feat: descripción del cambio"
git push origin feature/nombre-descriptivo

# Abre un PR hacia develop
```

### Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` Nueva funcionalidad
- `fix:` Bug fix
- `docs:` Cambios de documentación
- `style:` Cambios que no afectan el código (formato, etc)
- `refactor:` Refactorización sin cambiar funcionamiento
- `test:` Agregar o actualizar tests
- `chore:` Cambios en build, dependencies, etc

Ejemplo:
```bash
git commit -m "feat: add user authentication with Azure AD"
git commit -m "fix: resolve API timeout on slow connections"
```

## Antes de hacer un PR

1. Sincroniza con la rama origen:
```bash
git fetch origin
git rebase origin/develop
```

2. Ejecuta tests locales:
```bash
# Backend
cd backend
pytest
flake8 .

# Frontend
cd frontend
npm run lint
npm run build
```

3. Actualiza la documentación si es necesario

## CI/CD Automático

Los siguientes checks corren automáticamente en cada PR:
- ✅ Backend tests (Python 3.9, 3.10, 3.11)
- ✅ Frontend linting y build
- ✅ Docker image build
- ✅ Code quality checks

## Configuración recomendada de Git

```bash
# Alias útiles
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Auto-CRLF (importante para Windows)
git config --global core.autocrlf true
```

## Preguntas Frecuentes

**¿Cómo actualizo mi fork?**
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

**¿Cómo revertir commits?**
```bash
git revert <commit-hash>  # Crea nuevo commit que deshace cambios
git reset --hard HEAD~1   # Borra último commit (¡cuidado!)
```

**¿Cómo squashear commits?**
```bash
git rebase -i HEAD~3  # Rebase interactivo de últimos 3 commits
```

## Recursos

- [GitHub Docs](https://docs.github.com)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

---

¡Gracias por contribuir a WebTemplate! 🚀
