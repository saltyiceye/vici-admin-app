// src/tabs/tabs-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Tab {
  id: string;
  title: string;
  path: string;
  resource?: string;
  action?: string;
  recordId?: string;
  closable?: boolean;
}

interface TabsStore {
  tabs: Tab[];
  activeTabId: string;
  
  // 添加标签页（静默模式：isSilent=true时不触发导航）
  addTab: (tab: Tab, isSilent?: boolean) => void;
  removeTab: (tabId: string) => void;
  setActiveTab: (tabId: string, isSilent?: boolean) => void;
  closeOtherTabs: (tabId: string) => void;
  closeRightTabs: (tabId: string) => void;
  closeAllTabs: () => void;
  updateTabTitle: (tabId: string, title: string) => void;
  findTabByPath: (path: string) => Tab | undefined;
  findTabById: (id: string) => Tab | undefined;
}

const HOME_TAB: Tab = {
  id: 'dashboard',
  title: 'Dashboard',
  path: '/',
  closable: false,
};

export const useTabsStore = create<TabsStore>()(
  persist(
    (set, get) => ({
      tabs: [HOME_TAB],
      activeTabId: 'dashboard',
      
      addTab: (tab, isSilent = false) => {
        const { tabs } = get();
        
        // 生成唯一ID
        const tabId = tab.id || `tab-${Date.now()}`;
        const tabWithId = { ...tab, id: tabId };
        
        // 检查是否已存在相同路径的标签页
        const existingTabIndex = tabs.findIndex(t => t.path === tab.path);
        
        if (existingTabIndex !== -1) {
          // 如果已存在，激活它
          set({ activeTabId: tabs[existingTabIndex].id });
        } else {
          // 添加新标签页
          set({
            tabs: [...tabs, tabWithId],
            activeTabId: tabId,
          });
        }
      },
      
      removeTab: (tabId) => {
        if (tabId === 'dashboard') return;
        
        const { tabs, activeTabId } = get();
        const newTabs = tabs.filter(tab => tab.id !== tabId);
        
        let newActiveTabId = activeTabId;
        if (tabId === activeTabId && newTabs.length > 0) {
          const removedIndex = tabs.findIndex(t => t.id === tabId);
          const nextTab = tabs[removedIndex + 1] || tabs[removedIndex - 1];
          newActiveTabId = nextTab?.id || 'dashboard';
        }
        
        set({
          tabs: newTabs,
          activeTabId: newActiveTabId,
        });
      },
      
      setActiveTab: (tabId, isSilent = false) => {
        set({ activeTabId: tabId });
      },
      
      closeOtherTabs: (tabId) => {
        const { tabs } = get();
        const tabToKeep = tabs.find(t => t.id === tabId);
        const homeTab = tabs.find(t => t.id === 'dashboard');
        
        if (!tabToKeep) return;
        
        const newTabs = homeTab ? [homeTab, tabToKeep] : [tabToKeep];
        set({
          tabs: newTabs,
          activeTabId: tabId,
        });
      },
      
      closeRightTabs: (tabId) => {
        const { tabs } = get();
        const tabIndex = tabs.findIndex(t => t.id === tabId);
        if (tabIndex === -1) return;
        
        const newTabs = tabs.slice(0, tabIndex + 1);
        set({ tabs: newTabs });
      },
      
      closeAllTabs: () => {
        set({
          tabs: [HOME_TAB],
          activeTabId: 'dashboard',
        });
      },
      
      updateTabTitle: (tabId, title) => {
        set((state) => ({
          tabs: state.tabs.map(tab =>
            tab.id === tabId ? { ...tab, title } : tab
          ),
        }));
      },
      
      findTabByPath: (path) => {
        return get().tabs.find(tab => tab.path === path);
      },
      
      findTabById: (id) => {
        return get().tabs.find(tab => tab.id === id);
      },
    }),
    {
      name: 'react-admin-tabs-storage',
    }
  )
);