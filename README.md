## Simple Status Service

A minimal Node.js HTTP service that responds with JSON:

```json
{
  "status": "ok",
  "message": "service running"
}
```

The service listens on a port defined by the `PORT` environment variable (default `8080`).

### Requirements

- Node.js 18+ (or use the provided Dockerfile)
- npm

### Environment Variables

Copy `.env.example` to `.env` if needed:

```bash
cp .env.example .env
```

Both files contain:

```bash
PORT=8080
```

You can change `PORT` to any port you prefer.

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm start
```

The service will start on `http://localhost:8080` (or the port you configured).

Test the endpoint:

```bash
curl http://localhost:8080
```

You should see:

```json
{"status":"ok","message":"service running"}
```

### Run with Docker

Build the image:

```bash
docker build -t simple-status-service .
```

Run the container (default port 8080):

```bash
docker run --rm -p 8080:8080 --env-file .env simple-status-service
```

Or override the port at runtime:

```bash
docker run --rm -p 3000:3000 -e PORT=3000 simple-status-service
```

Then test:

```bash
curl http://localhost:8080
```

or, if you used port 3000:

```bash
curl http://localhost:3000
```

