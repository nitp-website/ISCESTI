'use client';

import { useEffect, useMemo, useState } from 'react';

const fallbackCount = 0;

export default function VisitorCounter() {
  const [count, setCount] = useState(fallbackCount);

  useEffect(() => {
    let isMounted = true;

    async function updateCount() {
      try {
        const response = await fetch('/api/visitor-count', {
          method: 'POST',
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Failed to update visitor count');
        }

        const data = await response.json();
        if (isMounted && Number.isFinite(data?.count)) {
          setCount(data.count);
        }
      } catch {
        try {
          const fallbackResponse = await fetch('/api/visitor-count', {
            method: 'GET',
            cache: 'no-store',
          });
          const fallbackData = await fallbackResponse.json();
          if (isMounted && Number.isFinite(fallbackData?.count)) {
            setCount(fallbackData.count);
          }
        } catch {
          if (isMounted) {
            setCount(fallbackCount);
          }
        }
      }
    }

    updateCount();

    return () => {
      isMounted = false;
    };
  }, []);

  const digits = useMemo(() => String(count).padStart(6, '0').split(''), [count]);

  return (
    <div className="visitor-counter" aria-label={`Visitors: ${count}`}>
      <span className="visitor-counter-label">Visitors:</span>
      <div className="visitor-counter-digits" aria-hidden="true">
        {digits.map((digit, index) => (
          <span className="visitor-counter-digit" key={`${digit}-${index}`}>
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}
