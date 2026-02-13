'use client';

import { useEffect } from 'react';

export default function ElevenLabsWidget() {
  useEffect(() => {
    // Check if widget script already exists
    if (document.getElementById('elevenlabs-convai-widget')) {
      return;
    }

    // Create and append widget script
    const script = document.createElement('script');
    script.id = 'elevenlabs-convai-widget';
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('elevenlabs-convai-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      id="convai-widget"
      data-agent-id="agent_0001kh8zyfnkf55a1q355vb3khzq"
      data-position="right"
      data-open-chat-on-load="false"
      data-transparent-background="true"
    />
  );
}
