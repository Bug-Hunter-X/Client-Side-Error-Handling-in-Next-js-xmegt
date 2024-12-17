```javascript
// pages/about.js
import { ErrorBoundary } from 'react-error-boundary';

function About() {
  // This will now be caught by the ErrorBoundary
  throw new Error('Intentional error');
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function AboutPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <About />
    </ErrorBoundary>
  );
}
```