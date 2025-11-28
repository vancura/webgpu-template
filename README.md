# WebGPU Template

[![CI](https://github.com/ambilab/webgpu-template/actions/workflows/ci.yml/badge.svg)](https://github.com/ambilab/webgpu-template/actions/workflows/ci.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![pnpm](https://img.shields.io/badge/pnpm-10.24.0-yellow.svg)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![WebGPU](https://img.shields.io/badge/WebGPU-Enabled-green.svg)](https://www.w3.org/TR/webgpu/)

A minimal starter template for WebGPU projects using TypeScript. Get up and running with modern GPU programming on the
web in minutes.

## Features

- **WebGPU ready** — Pre-configured with `@webgpu/types` for full TypeScript support
- **Modern tooling** — Vite for fast development with HMR
- **Strict TypeScript** — Comprehensive type checking enabled
- **Code quality** — ESLint, Prettier, and Husky pre-configured
- **Release workflow** — Changesets for versioning and publishing

## Prerequisites

- **Node.js** v20 or higher (LTS recommended)
- **pnpm** v10.24.0 or higher
- A **WebGPU-compatible browser**:
  - Chrome/Edge 113+ (Windows, macOS, Linux, Android)
  - Firefox Nightly (with `dom.webgpu.enabled` in `about:config`)
  - Safari 18+ (macOS/iOS)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ambilab/webgpu-template.git
cd webgpu-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open your browser at `http://localhost:5173` to see a WebGPU-rendered triangle.

## Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Start dev server with HMR           |
| `pnpm build`        | Type-check and build for production |
| `pnpm preview`      | Preview the production build        |
| `pnpm lint`         | Run ESLint                          |
| `pnpm lint:fix`     | Run ESLint with auto-fix            |
| `pnpm format`       | Format code with Prettier           |
| `pnpm format:check` | Check formatting without changes    |
| `pnpm typecheck`    | Run TypeScript type checking        |
| `pnpm clean`        | Remove dist and cache directories   |
| `pnpm changeset`    | Create a changeset for version bump |
| `pnpm version:bump` | Bump version based on changesets    |
| `pnpm release`      | Build library and publish to npm    |

## Project Structure

```text
webgpu-template/
├── src/
│   └── main.ts           # WebGPU demo entry point
├── index.html            # HTML template
├── package.json
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── eslint.config.js      # ESLint flat config
├── prettier.config.js    # Prettier configuration
└── commitlint.config.js  # Commit message linting
```

## How It Works

The template includes a minimal WebGPU demo that:

1. **Checks WebGPU support** — Displays a helpful error if unavailable
2. **Initializes the GPU** — Requests adapter and device
3. **Configures the canvas** — Sets up the WebGPU context
4. **Creates shaders** — Vertex and fragment shaders in WGSL
5. **Builds a pipeline** — Configures the render pipeline
6. **Renders a triangle** — Clears to dark gray, draws a blue triangle

```typescript
// Example: Creating a shader module
const vertexShaderModule = device.createShaderModule({
  label: 'Vertex Shader',
  code: `
        @vertex
        fn main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4f {
            var positions = array<vec2f, 3>(
                vec2f(0.0, 0.5),
                vec2f(-0.5, -0.5),
                vec2f(0.5, -0.5)
            );
            return vec4f(positions[vertexIndex], 0.0, 1.0);
        }
    `,
});
```

## Browser Compatibility

| Browser     | Version | Status                      |
| ----------- | ------- | --------------------------- |
| Chrome/Edge | 113+    | Enabled by default          |
| Firefox     | Nightly | Enable `dom.webgpu.enabled` |
| Safari      | 18+     | Enabled by default          |

The demo displays a user-friendly error message if WebGPU is not supported.

## Technologies

- **[WebGPU](https://www.w3.org/TR/webgpu/)** — Modern GPU API for the web
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Vite](https://vite.dev/)** — Fast build tool with HMR
- **[WGSL](https://www.w3.org/TR/WGSL/)** — WebGPU Shading Language

## Resources

- [WebGPU Specification](https://www.w3.org/TR/webgpu/)
- [WGSL Specification](https://www.w3.org/TR/WGSL/)
- [WebGPU Fundamentals](https://webgpufundamentals.org/)
- [Tour of WGSL](https://google.github.io/tour-of-wgsl/)

## License

ISC
