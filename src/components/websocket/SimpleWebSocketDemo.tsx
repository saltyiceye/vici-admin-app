// src/components/SimpleWebSocketDemo.tsx
import React, { useState } from 'react';
import { useSimpleWebSocket } from './useSimpleWebSocket';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const SimpleWebSocketDemo = () => {
  const [message, setMessage] = useState('');
  const { isConnected, sendMessage } = useSimpleWebSocket('ws://localhost:8080');

  const handleSend = () => {
    if (message.trim()) {
      sendMessage({
        type: 'chat',
        content: message,
        timestamp: new Date().toISOString()
      });
      setMessage('');
    }
  };

  return (
    <Card>
      <CardContent>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        status: {isConnected ? 'connected' : 'disconnected'}
        </h1>
        <div className="flex w-full max-w-sm items-center gap-2">
        <Input placeholder="Email" value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
            disabled={!isConnected}
            />
        <Button type="submit" variant="outline" onClick={handleSend}
            disabled={!isConnected || !message.trim()}>
            Subscribe
        </Button>
        </div>
        <div className="flex w-full max-w-sm items-center gap-2">
        </div>
      </CardContent>
    </Card>
  );
};