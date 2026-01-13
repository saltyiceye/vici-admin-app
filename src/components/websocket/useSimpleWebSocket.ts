// src/websocket/useSimpleWebSocket.ts
import { useEffect, useRef, useState } from 'react';

import { useNotify } from 'ra-core';

export const useSimpleWebSocket = (url: string) => {
    const notify = useNotify();
  const ws = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // 获取 token（最简单的实现）
  const getToken = () => {
    return localStorage.getItem('vicisms-xyz-mgniSession');
  };

  // 连接 WebSocket
  const connect = () => {
    const token = getToken();
    if (!token) {
      console.warn('未找到 token');
      return;
    }

    // 将 token 添加到 WebSocket URL
    const wsUrl = `${url}?token=${token}`;
    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      console.log('WebSocket 已连接');
      setIsConnected(true);
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('收到消息:', data);
        // 这里可以处理消息
        notify(`WebSocket Message: ${JSON.stringify(data)}`);
      } catch (error) {
        console.log('原始消息:', event.data);
      }
    };

    ws.current.onclose = () => {
      console.log('WebSocket 已断开');
      setIsConnected(false);
      // 3秒后重连
      setTimeout(() => connect(), 3000);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket 错误:', error);
    };
  };

  // 发送消息
  const sendMessage = (data: any) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(data));
      return true;
    }
    console.warn('WebSocket 未连接');
    return false;
  };

  // 断开连接
  const disconnect = () => {
    if (ws.current) {
      ws.current.close();
      ws.current = null;
      setIsConnected(false);
    }
  };

  // 自动连接和断开
  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, [url]);

  return {
    isConnected,
    sendMessage,
    disconnect,
    connect
  };
};