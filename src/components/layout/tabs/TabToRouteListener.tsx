// src/tabs/TabToRouteListener.tsx - 标签变化 -> 路由更新
import { useEffect,useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTabsStore } from './tabs-store';

export const TabToRouteListener: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeTabId, tabs } = useTabsStore();
  
  const lastActiveTabIdRef = useRef(activeTabId);
  const isNavigatingRef = useRef(false);
  
  useEffect(() => {
    // 如果标签没有变化，返回
    if (activeTabId === lastActiveTabIdRef.current) {
      return;
    }
    
    lastActiveTabIdRef.current = activeTabId;
    
    // 防止循环
    if (isNavigatingRef.current) {
      isNavigatingRef.current = false;
      return;
    }
    
    // 获取当前活动标签页
    const activeTab = tabs.find(tab => tab.id === activeTabId);
    
    if (activeTab && activeTab.path !== location.pathname) {
      isNavigatingRef.current = true;
      
      // 导航到标签页对应的路径
      navigate(activeTab.path);
      
      // 重置标志
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 100);
    }
  }, [activeTabId, tabs, navigate, location.pathname]);
  
  return null;
};