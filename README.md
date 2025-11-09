# WebGPU Template

A lightweight WebGPU demo project that renders a simple triangle using the WebGPU API. This template provides a minimal setup for getting started with WebGPU development in TypeScript.

## Features

- Renders a blue triangle using WebGPU
- WebGPU support detection with error handling
- Displays GPU adapter information
- Fast development with Vite
- TypeScript with strict type checking
- Clean, minimal codebase

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (v10.20.0) - specified in `package.json`
- A **WebGPU-compatible browser**:
  - Chrome/Edge 113+ (Windows, macOS, Linux, Android)
  - Chrome Canary (with WebGPU flag enabled)
  - Firefox Nightly (with WebGPU flag enabled)
  - Safari 18+ (macOS/iOS)

## Installation

1. Clone the repository:

```bash
git clone git@github.com:vancura/webgpu-template.git
cd webgpu-template
```

2. Install dependencies:

```bash
pnpm install
```

## Usage

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build

Build for production:

```bash
pnpm build
```

The output will be in the `dist` directory.

### Preview

Preview the production build:

```bash
pnpm preview
```

## Project Structure

```
webgpu-template/
├── index.html          # Main HTML file
├── src/
│   └── main.ts        # WebGPU rendering logic
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## How It Works

The application:

1. **Checks for WebGPU support** - Verifies that the browser supports WebGPU
2. **Requests GPU adapter and device** - Gets access to the GPU hardware
3. **Configures the canvas** - Sets up the WebGPU rendering context
4. **Creates shaders** - Defines vertex and fragment shaders in WGSL
5. **Sets up render pipeline** - Configures the rendering pipeline
6. **Renders the triangle** - Draws a blue triangle on a dark background

The triangle is defined by three vertices in the vertex shader:

- Top vertex: `(0.0, 0.5)`
- Bottom left: `(-0.5, -0.5)`
- Bottom right: `(0.5, -0.5)`

## Technologies Used

- **WebGPU** - Modern graphics API for the web
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **WGSL** - WebGPU Shading Language

## Browser Compatibility

WebGPU is still relatively new. If you encounter issues:

1. **Chrome/Edge**: Ensure you're on version 113+ and WebGPU is enabled
2. **Firefox**: Enable `dom.webgpu.enabled` in `about:config`
3. **Safari**: Requires Safari 18+ on macOS/iOS

The application will display an error message if WebGPU is not supported.

## License

ISC
