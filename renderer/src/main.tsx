import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

// Vite's define plugin makes this variable available
const targetPackage = process.env.TARGET_PACKAGE;

if (!targetPackage) {
  throw new Error("TARGET_PACKAGE environment variable is not set!");
}

// Dynamically import the App component from the target package
// @ts-ignore - This is a dynamic alias resolved by Vite.
const App = lazy(() => import(`@current-package/src/App.tsx`));

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Check for the preview flag in the URL
const urlParams = new URLSearchParams(window.location.search);
const isPreview = urlParams.get('preview') === 'true';

// Conditionally apply a wrapper for the development view
const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  if (isPreview) {
    return <>{children}</>;
  }
  // This is the default centered view for `npm run dev`
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] flex items-center justify-center p-4">
      {children}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <AppWrapper>
      <Suspense fallback={<div>Loading Asset...</div>}>
        <App />
      </Suspense>
    </AppWrapper>
  </React.StrictMode>
);
