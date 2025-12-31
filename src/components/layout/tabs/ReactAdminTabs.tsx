// src/tabs/ReactAdminTabs.tsx
import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTabsStore } from './tabs-store';

import { cn } from '@/lib/utils';
import { useTranslate } from 'ra-core';

export const ReactAdminTabs: React.FC = () => {
  const {
    tabs,
    activeTabId,
    removeTab,
    setActiveTab,
    closeOtherTabs,
    closeRightTabs,
    closeAllTabs,
  } = useTabsStore();

  const translate = useTranslate();
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // 检查滚动状态
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const timer = setTimeout(checkScroll, 100); // 延迟检查确保DOM渲染完成
    window.addEventListener('resize', checkScroll);
    return () => {
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, [tabs]);

  // 处理标签点击
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId, false); // 非静默模式，会触发TabToRouteListener
  };

  // 处理标签关闭
  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    removeTab(tabId);
  };

  // 滚动功能
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (tabs.length <= 1) return null;

  return (
    <div className="flex items-center bg-background border-b h-10">
      {/* 左侧滚动箭头 */}
      {showLeftArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none border-r shrink-0"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      {/* 标签页容器 */}
      <ScrollArea ref={scrollRef} className="flex-1" onScroll={checkScroll}>
        <div className="flex h-10 min-w-max">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                'flex items-center border-r cursor-pointer transition-colors shrink-0',
                'hover:bg-accent hover:text-accent-foreground',
                activeTabId === tab.id
                  ? 'bg-background text-foreground border-t-2 border-t-primary'
                  : 'bg-muted/30'
              )}
              style={{ minWidth: '140px', maxWidth: '200px' }}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 flex-1">
                {tab.id === 'dashboard' ? (
                  <Home className="h-3 w-3" />
                ) : (
                  <span className="h-3 w-3 rounded-full bg-primary/20" />
                )}

                <span className="text-sm font-medium truncate">
                  {tab.title}
                </span>

                {tab.closable !== false && tab.id !== 'dashboard' && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 hover:bg-destructive/10 hover:text-destructive"
                    onClick={(e) => handleCloseTab(e, tab.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* 右侧滚动箭头 */}
      {showRightArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none border-l shrink-0"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      {/* 操作菜单 */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none border-l shrink-0"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => closeOtherTabs(activeTabId)}>
            关闭其他
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => closeRightTabs(activeTabId)}>
            关闭右侧
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={closeAllTabs}>
            关闭所有
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};