import React from 'react';

interface LocalTimeProps {
  isoString: string;
  showDate?: boolean;
  showTime?: boolean;
  timeFormat?: '12h' | '24h';
  className?: string;
}

const LocalTimeFromISO: React.FC<LocalTimeProps> = ({
  isoString,
  showDate = true,
  showTime = true,
  timeFormat = '24h',
  className = ''
}) => {
  if (!isoString) {
    return <span className={className}>NONE</span>;
  }

  try {
    const date = new Date(isoString);
    
    // 验证日期是否有效
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    const formatOptions: Intl.DateTimeFormatOptions = {
      hour12: timeFormat === '12h',
    };

    if (showDate) {
      formatOptions.year = 'numeric';
      formatOptions.month = '2-digit';
      formatOptions.day = '2-digit';
    }

    if (showTime) {
      formatOptions.hour = '2-digit';
      formatOptions.minute = '2-digit';
      formatOptions.second = '2-digit';
    }

    const localString = date.toLocaleString('zh-CN', formatOptions);

    return (
      <span className={className} title={`UTC: ${isoString}`}>
        {localString}
      </span>
    );
  } catch (error) {
    return (
      <span className={className} style={{ color: '#dc3545' }}>
        ERROR
      </span>
    );
  }
};

export default LocalTimeFromISO;