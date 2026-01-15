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
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // 检查滚动状态
  const checkScroll = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        console.log('Checking scroll...', scrollLeft, scrollWidth, clientWidth);

        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    }
  };

  useEffect(() => {
    // 延迟检查，确保DOM渲染完成
    const timer = setTimeout(() => {
      checkScroll();
    }, 100);
    
    window.addEventListener('resize', checkScroll);
    
    // 监听标签变化时重新检查
    const observer = new MutationObserver(checkScroll);
    if (scrollAreaRef.current) {
      observer.observe(scrollAreaRef.current, { childList: true, subtree: true });
    }
    
    return () => {
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [tabs]);

  // 处理标签点击
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId, false);
  };

  // 处理标签关闭
  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    removeTab(tabId);
  };

  // 滚动功能
  const scroll = (direction: 'left' | 'right') => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        const scrollAmount = 200;
        scrollContainer.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  if (tabs.length <= 1) return null;

  return (
    <div className="flex items-center bg-background border-b h-8">
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

      {/* 标签页容器 - 修复滚动区域 */}
      <div className="flex-1 relative overflow-hidden" ref={scrollAreaRef}>
        <ScrollArea 
          className="h-full w-full" 
          type="scroll"
          scrollHideDelay={0}
        >
          <div 
            className="flex h-8 min-w-max" 
            onScroll={checkScroll}
          >
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
                style={{ minWidth: '100px', maxWidth: '200px' }}
                onClick={() => handleTabClick(tab.id)}
              >
                <div className="flex items-center justify-between px-3 flex-1">
                  <div className="flex items-center gap-2 flex-1">
                    {tab.id === 'dashboard' ? (
                      <Home className="h-3 w-3" />
                    ) : null}
                    <span className="text-sm font-medium truncate">
                      {tab.title}
                    </span>
                  </div>
                  
                  {tab.closable !== false && tab.id !== 'dashboard' && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 hover:bg-destructive/10 hover:text-destructive ml-2"
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
      </div>

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