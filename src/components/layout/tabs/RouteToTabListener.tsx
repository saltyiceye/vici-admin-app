// src/tabs/RouteToTabListener.tsx - 路由变化 -> 标签更新
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useResourceContext, useRecordContext, useTranslate,useGetResourceLabel } from 'ra-core';
import { useTabsStore } from './tabs-store';

export const RouteToTabListener: React.FC = () => {
  const location = useLocation();
  const resource = useResourceContext();
  const record = useRecordContext();
  const translate = useTranslate();
  const { addTab, findTabByPath } = useTabsStore();

const getResourceLabel = useGetResourceLabel();
  
  
  const lastPathRef = useRef(location.pathname);
  const isInitialMount = useRef(true);
  
  // 解析 react-admin 路径
  const parseReactAdminPath = (path: string) => {
    const parts = path.split('/').filter(Boolean);
    
    if (parts.length === 0) return { resource: undefined, action: 'list', recordId: undefined };
    
    const resourceName = parts[0];
    const action = parts[1] || 'list';
    const recordId = parts[2];
    
    return { resource: resourceName, action, recordId };
  };
  
  // 生成标签标题
  const generateTabTitle = (path: string) => {
    const { resource: res, action, recordId } = parseReactAdminPath(path);
    
    if (!res) return 'Dashboard';
    
    const resourceTitle = getResourceLabel(res, 2)
    console.log('action',action);

    switch (action) {
      case 'list':
        return resourceTitle;
      case 'create':
        return translate('ra.action.create', { resource: resourceTitle });
      case 'show':
        return record?.name || `${resourceTitle} #${recordId}`;
      case 'edit':
        return translate('ra.action.edit', {
          resource: resourceTitle,
          name: record?.name || '',
        });
      default:
        return resourceTitle;
    }
  };
  
  useEffect(() => {
    // 跳过初始加载和重复路径
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (location.pathname === lastPathRef.current) {
      return;
    }
    
    lastPathRef.current = location.pathname;
    
    // 检查是否已有该标签页
    const existingTab = findTabByPath(location.pathname);
    if (existingTab) {
      // 标签已存在，只激活它
      useTabsStore.getState().setActiveTab(existingTab.id, true);
      return;
    }
    
    // 创建新标签页
    const title = generateTabTitle(location.pathname);
    const { resource: res, action, recordId } = parseReactAdminPath(location.pathname);
    
    addTab({
        id: `tab-${Date.now()}`,
        title,
        path: location.pathname,
        resource: res,
        action,
        recordId,
        closable: location.pathname !== '/',
    }, true); // 静默添加，不触发额外逻辑
  }, [location.pathname, addTab, findTabByPath, resource, record, translate]);
  
  return null;
};