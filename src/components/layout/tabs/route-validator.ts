// src/tabs/route-validator.ts
import { useResourceDefinitions } from 'ra-core';

// 缓存已验证的路由
const validRoutesCache = new Map<string, boolean>();

// 获取所有有效的资源路由
const getValidResourcePaths = () => {
  const paths = new Set<string>();
  
  // react-admin 的标准路由模式
  const actions = ['list', 'create', 'show', 'edit'];
  
  // 这里需要从 react-admin 获取已注册的资源
  // 由于在工具函数中无法使用 hook，我们稍后会通过组件传递
  return paths;
};

// 解析 react-admin 路径
export interface ParsedRoute {
  resource?: string;
  action?: string;
  recordId?: string;
  isValid: boolean;
}

export const parseReactAdminPath = (path: string): ParsedRoute => {
  // 处理根路径
  if (path === '/') {
    return { resource: undefined, action: undefined, recordId: undefined, isValid: true };
  }
  
  const parts = path.split('/').filter(Boolean);
  
  // react-admin 路径模式: /resource, /resource/create, /resource/action/id
  if (parts.length === 0) {
    return { isValid: false };
  }
  
  const resource = parts[0];
  
  // 简单验证：资源名应该是小写字母、数字、连字符
  if (!/^[a-z0-9-]+$/.test(resource)) {
    return { isValid: false };
  }
  
  if (parts.length === 1) {
    // /resource -> 列表页
    return { resource, action: 'list', recordId: undefined, isValid: true };
  }
  
  const action = parts[1];
  const validActions = ['list', 'create', 'show', 'edit'];
  
  if (!validActions.includes(action)) {
    return { isValid: false };
  }
  
  if (parts.length === 2) {
    // /resource/create -> 创建页
    return { resource, action, recordId: undefined, isValid: true };
  }
  
  if (parts.length === 3) {
    // /resource/action/id -> 详情/编辑页
    const recordId = parts[2];
    return { resource, action, recordId, isValid: true };
  }
  
  // 路径段过多，无效
  return { isValid: false };
};

// 检查是否是有效的 react-admin 路由
export const isValidReactAdminRoute = (path: string, resources: string[] = []): boolean => {
  // 检查缓存
  if (validRoutesCache.has(path)) {
    return validRoutesCache.get(path)!;
  }
  
  // 解析路径
  const parsed = parseReactAdminPath(path);
  
  if (!parsed.isValid) {
    validRoutesCache.set(path, false);
    return false;
  }
  
  // 如果有资源列表，检查资源是否存在
  if (resources.length > 0 && parsed.resource && !resources.includes(parsed.resource)) {
    validRoutesCache.set(path, false);
    return false;
  }
  
  validRoutesCache.set(path, true);
  return true;
};

// 预定义的有效路由（除了资源路由）
export const PREDEFINED_ROUTES = ['/', '/login', '/logout'];