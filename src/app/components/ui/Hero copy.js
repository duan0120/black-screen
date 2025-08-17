'use client';
import { getTranslation } from '@/lib/i18n';
import {
  Button,
  Card, CardHeader, CardBody, CardFooter,
  Link,
  Select, SelectItem,
  NumberInput,
  Tabs, Tab,
  Checkbox
} from '@heroui/react';
import clsx from 'clsx';
import { useState, useEffect, useCallback } from 'react';


export default function Hero({ locale = 'en', color = 'black' }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showFullscreenTip, setShowFullscreenTip] = useState(false);

  const lang = locale === 'en' ? '' : locale;

  const t = function (key) {
    return getTranslation(locale, key);
  }

  const colorDatas = {
    black: {
      title: t('Black Screen Tool'),
      colorValue: "#000000",
      label: t('Black'),
      labelTextColor: "text-white",
      path: `${lang}/`,
    },
    white: {
      title: t('White Screen Tool'),
      colorValue: "#ffffff",
      label: t('White'),
      labelTextColor: "text-black",
      path: `${lang}/white-screen`,
    },
    red: {
      title: t('Red Screen Tool'),
      colorValue: "#ff0000",
      label: t('Red'),
      labelTextColor: "text-white",
      path: `${lang}/red-screen`,
    },
    green: {
      title: t('Green Screen Tool'),
      colorValue: "#00ff00",
      label: t('Green'),
      labelTextColor: "text-black",
      path: `${lang}/green-screen`,
    },
    blue: {
      title: t('Blue Screen Tool'),
      colorValue: "#0000ff",
      label: t('Blue'),
      labelTextColor: "text-white",
      path: `${lang}/blue-screen`,
    },
    yellow: {
      title: t('Yellow Screen Tool'),
      colorValue: "#ffff00",
      label: t('Yellow'),
      labelTextColor: "text-black",
      path: `${lang}/yellow-screen`,
    },
    orange: {
      title: t('Orange Screen Tool'),
      colorValue: "#FFA500",
      label: t('Orange'),
      labelTextColor: "text-black",
      path: `${lang}/orange-screen`,
    },
    pink: {
      title: t('Pink Screen Tool'),
      colorValue: "#FF69B4",
      label: t('Pink'),
      labelTextColor: "text-black",
      path: `${lang}/pink-screen`,
    },
    purple: {
      title: t('Purple Screen Tool'),
      colorValue: "#800080",
      label: t('Purple'),
      labelTextColor: "text-white",
      path: `${lang}/purple-screen`,
    },
  };

  const { title } = colorDatas[color];
  const [colorValue, setColorValue] = useState(colorDatas[color].colorValue);

  const resolutions = [
    {
      key: '480p',
      width: 854,
      height: 480,
      label: '480p (854x480)'
    },
    {
      key: '720p',
      width: 1280,
      height: 720,
      label: '720p (1280x720)'
    },
    {
      key: '1080p',
      width: 1920,
      height: 1080,
      label: '1080p (1920x1080)'
    },
    {
      key: '1440p',
      width: 2560,
      height: 1440,
      label: '1440p (2560x1440)'
    },
    {
      key: '4k',
      width: 3840,
      height: 2160,
      label: '4K (3840x2160)'
    },
    {
      key: '8k',
      width: 7680,
      height: 4320,
      label: '8K (7680x4320)'
    }
  ];
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);

  // Focus Mode 变量
  const [workTime, setWorkTime] = useState(25);
  const [restTime, setRestTime] = useState(5);
  const [cycles, setCycles] = useState(1);
  const [restColor, setRestColor] = useState('black');
  const [enterFullscreenImmediately, setEnterFullscreenImmediately] = useState(true);

  // Focus Mode 状态
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('work'); // 'work' or 'break'
  const [currentCycle, setCurrentCycle] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Custom Mode 变量
  const [delayTime, setDelayTime] = useState(3);
  const [switchTime, setSwitchTime] = useState(0);
  const [exitTime, setExitTime] = useState(0);

  // 根据背景颜色计算合适的文字颜色
  const getTextColor = (bgColor) => {
    // 将十六进制颜色转换为RGB
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // 计算亮度 (使用相对亮度公式)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // 如果背景较亮，使用深色文字；如果背景较暗，使用浅色文字
    return brightness > 128 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)';
  };

  // 请求通知权限
  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  };

  // 发送通知
  const sendNotification = (title, body, onClick) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification(title, { body });
      if (onClick) {
        notification.onclick = onClick;
      }
    }
  };

  // 格式化时间显示
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 开始计时器
  const startTimer = useCallback(() => {
    if (isTimerRunning) return;

    requestNotificationPermission();
    setIsTimerRunning(true);
    setCurrentPhase('work');
    setCurrentCycle(1);
    setTimeRemaining(workTime * 60);

    if (enterFullscreenImmediately) {
      setColorValue('#ffffff'); // 工作阶段使用白色
      // 直接调用全屏API
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
      setShowFullscreenTip(true);

      // 3秒后隐藏提示
      setTimeout(() => {
        setShowFullscreenTip(false);
      }, 3000);
    } else {
      setColorValue('#ffffff'); // 预览区域显示白色
    }
  }, [isTimerRunning, workTime, enterFullscreenImmediately]);

  // 停止计时器
  const stopTimer = useCallback(() => {
    setIsTimerRunning(false);
    setCurrentPhase('work');
    setCurrentCycle(1);
    setTimeRemaining(0);
    if (isFullscreen) {
      // 直接调用退出全屏API而不依赖exitFullscreen函数
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setColorValue(colorDatas[color].colorValue); // 恢复原始颜色
  }, [isFullscreen, colorDatas, color]);



  // 进入全屏模式
  const enterFullscreen = useCallback(() => {
    // 隐藏页面滚动条
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    setIsFullscreen(true);
    setShowFullscreenTip(true);

    // 3秒后隐藏提示
    setTimeout(() => {
      setShowFullscreenTip(false);
    }, 3000);
  }, []);

  // 退出全屏模式
  const exitFullscreen = useCallback(() => {
    // 恢复页面滚动条
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  }, []);

  // 切换全屏模式
  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  const handleResolutionChange = (key) => {
    const resolution = resolutions.find((r) => r.key === key);
    setWidth(resolution.width);
    setHeight(resolution.height);
  };

  const handleDownload = () => {
    // 创建 canvas 元素
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // 设置 canvas 尺寸
    canvas.width = width;
    canvas.height = height;

    // 填充背景色
    ctx.fillStyle = colorValue;
    ctx.fillRect(0, 0, width, height);

    // 将 canvas 转换为 blob
    canvas.toBlob((blob) => {
      // 创建下载链接
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      // 生成文件名
      const colorName = Object.keys(colorDatas).find(key =>
        colorDatas[key].colorValue === colorValue
      ) || 'custom';
      const fileName = `${colorName}-screen-${width}x${height}.png`;

      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      // 清理
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 'image/png');
  }

  // 计时器效果
  useEffect(() => {
    let interval = null;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // 直接在这里处理阶段切换，避免依赖switchToNextPhase
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning]);

  // 监听timeRemaining变化来处理阶段切换
  useEffect(() => {
    if (isTimerRunning && timeRemaining === 0) {
      // 处理阶段切换
      if (currentPhase === 'work') {
        // 从工作切换到休息
        setCurrentPhase('break');
        setTimeRemaining(restTime * 60);
        const breakColorValue = colorDatas[restColor].colorValue;
        setColorValue(breakColorValue);

        // 直接调用全屏API
        const enterFullscreenDirect = () => {
          document.body.style.overflow = 'hidden';
          document.documentElement.style.overflow = 'hidden';

          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          }
          setIsFullscreen(true);
        };

        sendNotification(
          t('Break Time! Switch to fullscreen?'),
          '',
          () => {
            if (!isFullscreen) {
              enterFullscreenDirect();
            }
          }
        );

        if (!isFullscreen) {
          enterFullscreenDirect();
        }
      } else {
        // 从休息切换到工作或结束
        if (currentCycle >= cycles) {
          // 所有循环完成
          sendNotification(t('Focus Mode Completed!'), '');
          setIsTimerRunning(false);
          setCurrentPhase('work');
          setCurrentCycle(1);
          setTimeRemaining(0);
          if (isFullscreen) {
            // 直接调用退出全屏API
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            }
          }
          setColorValue(colorDatas[color].colorValue); // 恢复原始颜色
          return;
        }

        // 开始下一个工作周期
        setCurrentPhase('work');
        setCurrentCycle(currentCycle + 1);
        setTimeRemaining(workTime * 60);
        setColorValue('#ffffff'); // 工作阶段使用白色
      }
    }
  }, [isTimerRunning, timeRemaining, currentPhase, restTime, colorDatas, restColor, isFullscreen, currentCycle, cycles, workTime, color, t]);

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (event) => {
      // 如果计时器运行中，ESC键停止计时器
      if (isTimerRunning && event.key === 'Escape') {
        event.preventDefault();
        stopTimer();
        return;
      }

      switch (event.key) {
        case 'f':
        case 'F':
          event.preventDefault();
          if (!isFullscreen) {
            enterFullscreen();
          }
          break;
        case 'Escape':
          event.preventDefault();
          if (isFullscreen) {
            exitFullscreen();
          }
          break;
        case ' ':
          event.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);

      // 根据全屏状态控制滚动条
      if (isCurrentlyFullscreen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, [isFullscreen, enterFullscreen, exitFullscreen, toggleFullscreen, isTimerRunning, stopTimer]);

  // 全屏时的渲染
  if (isFullscreen) {
    return (
      <div
        className="fixed inset-0 z-50 cursor-pointer flex items-center justify-center w-screen h-screen"
        style={{
          backgroundColor: colorValue,
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}
        onClick={isTimerRunning ? stopTimer : toggleFullscreen}
      >
        {/* Focus Mode 计时器显示 */}
        {isTimerRunning && (
          <div className="text-center" style={{ color: getTextColor(colorValue) }}>
            <div className="text-6xl font-bold mb-4">
              {formatTime(timeRemaining)}
            </div>
            <div className="text-2xl mb-2">
              {currentPhase === 'work' ? t('Work Time') : t('Break Time')}
            </div>
            <div className="text-lg">
              {t('Cycle')} {currentCycle} / {cycles}
            </div>
            <div className="text-sm mt-4 opacity-70">
              {t('Click anywhere to exit')}
            </div>
          </div>
        )}

        {/* 3秒提示 (非计时器模式) */}
        {!isTimerRunning && showFullscreenTip && (
          <div className="text-lg text-center bg-black/20 px-10 py-4 rounded" style={{ color: getTextColor(colorValue) }}>
            {t('Press F for fullscreen, ESC to exit, SPACE to toggle')}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="text-center pt-6 sm:pt-10 pb-2 px-4 sm:px-0">
      <h1 className="text-3xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8">
        {title}
      </h1>
      <div className='flex-col max-w-4xl mx-auto'>
        <Card className="mb-6 sm:mb-8">
          <CardHeader className='px-4 sm:px-6'>
            <h3 className="text-lg font-semibold flex-shrink-0">{t('Screen Preview')}</h3>
          </CardHeader>
          <CardBody className='px-4 sm:px-6'>
            <div
              className="h-48 sm:h-64 rounded-lg cursor-pointer border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:border-black dark:hover:border-white relative overflow-hidden group"
              style={{ backgroundColor: colorValue }}
              onClick={() => {
                if (isTimerRunning && !enterFullscreenImmediately) {
                  // 计时器运行中且未选择立即全屏：点击进入全屏
                  enterFullscreen();
                } else if (isTimerRunning && enterFullscreenImmediately) {
                  // 计时器运行中且选择了立即全屏：点击停止计时器
                  stopTimer();
                } else {
                  // 计时器未运行：正常进入全屏
                  enterFullscreen();
                }
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* 颜色值显示在右上角 */}
              <div className="absolute top-2 right-2 text-xs text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-black/80 px-2 py-1 rounded">
                {colorValue}
              </div>

              {/* Focus Mode 计时器显示 */}
              {isTimerRunning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center" style={{ color: getTextColor(colorValue) }}>
                    <div className="text-4xl font-bold mb-2">
                      {formatTime(timeRemaining)}
                    </div>
                    <div className="text-lg mb-1">
                      {currentPhase === 'work' ? t('Work Time') : t('Break Time')}
                    </div>
                    <div className="text-sm">
                      {t('Cycle')} {currentCycle} / {cycles}
                    </div>
                    {!enterFullscreenImmediately && !isFullscreen && (
                      <div className="text-xs mt-2 opacity-70">
                        {t('Click to enter full screen')}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 鼠标悬停时显示提示 */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sm bg-black/20 px-6 sm:px-10 py-4 rounded" style={{ color: getTextColor(colorValue) }}>
                    {isTimerRunning && !enterFullscreenImmediately
                      ? t('Click to enter full screen')
                      : isTimerRunning && enterFullscreenImmediately
                        ? t('Click anywhere to exit')
                        : t('Click to enter full screen')
                    }
                  </div>
                </div>
              )}
            </div>
          </CardBody>
          <CardFooter className='px-4 sm:px-6'>
            <p className='text-sm text-gray-500'>{t('Press F for fullscreen, ESC to exit, SPACE to toggle')}</p>
          </CardFooter>
        </Card>
        <Card className='mb-6 sm:mb-8'>
          <CardHeader className='px-4 sm:px-6'>
            <h3 className="text-lg font-semibold">{t('Color Selection')}</h3>
          </CardHeader>
          <CardBody className='px-4 sm:px-6'>
            <div className='grid grid-cols-2 gap-4 sm:flex sm:items-center sm:flex-wrap'>
              {Object.keys(colorDatas).map((colorKey) => (
                <Button
                  key={colorKey}
                  href={`${colorDatas[colorKey].path}`}
                  as={Link}
                  className={clsx(
                    'border-2 min-w-[90px] w-full sm:w-auto',
                    colorValue === colorDatas[colorKey].colorValue
                      ? 'border-blue-500 border-4'
                      : 'border-gray-300',
                    colorDatas[colorKey].labelTextColor
                  )}
                  style={{
                    backgroundColor: colorDatas[colorKey].colorValue
                  }}
                >
                  {colorDatas[colorKey].label}
                </Button>
              ))}
              <div className="relative min-w-[90px] h-10 rounded-medium cursor-pointer overflow-hidden w-full sm:w-auto">
                <input
                  type="color"
                  value={colorValue}
                  onChange={(e) => setColorValue(e.target.value)}
                  className="absolute inset-0 w-full h-full cursor-pointer z-10"
                  style={{
                    border: 'none',
                    outline: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                    opacity: 0.01
                  }}
                />
                <div
                  className="absolute inset-0 w-full h-full rounded-medium pointer-events-none flex items-center justify-center border-2 border-gray-300"
                  style={{ backgroundColor: colorValue }}
                >
                  <span
                    className="text-xs font-mono"
                    style={{ color: getTextColor(colorValue) }}
                  >
                    {colorValue}
                  </span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Tabs
          aria-label="Options"
          className='w-full'
          classNames={{
            tabList: "flex-col sm:flex-row w-full sm:w-auto",
            tab: "w-full sm:w-auto justify-start sm:justify-center",
            panel: "w-full"
          }}
        >
          <Tab key="download" title={t('Download Image')}>
            <Card>
              <CardBody className='px-4 sm:px-6'>
                <Select
                  className="w-full sm:max-w-xs mb-4"
                  label="Mode"
                  defaultSelectedKeys={["1080p"]}
                  onChange={(e) => handleResolutionChange(e.target.value)}
                >
                  {resolutions.map((m) => (
                    <SelectItem key={m.key}>{m.label}</SelectItem>
                  ))}
                </Select>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4'>
                  <NumberInput label={t('Width')} value={width} onChange={setWidth} endContent="px" className="w-full sm:w-auto" />
                  <NumberInput label={t('Height')} value={height} onChange={setHeight} endContent="px" className="w-full sm:w-auto" />
                </div>
                <Button color="primary" onPress={handleDownload} className="w-full sm:w-auto">{t('Download Image')}</Button>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="focusMode" title={t('Focus Mode (Pomodoro)')}>
            <Card>
              <CardBody className='px-4 sm:px-6'>
                <div className='space-y-4 flex-col'>
                  <NumberInput
                    label={t('Work Duration (minutes)')}
                    value={workTime}
                    onChange={setWorkTime}
                    min={1}
                    max={120}
                    className="w-full sm:w-auto"
                  />
                  <NumberInput
                    label={t('Break Duration (minutes)')}
                    value={restTime}
                    onChange={setRestTime}
                    min={1}
                    max={60}
                    className="w-full sm:w-auto"
                  />
                  <NumberInput
                    label={t('Cycles')}
                    value={cycles}
                    onChange={setCycles}
                    min={1}
                    max={10}
                    className="w-full sm:w-auto"
                  />

                  <Select
                    label={t('Break Color')}
                    selectedKeys={[restColor]}
                    onSelectionChange={(keys) => setRestColor(Array.from(keys)[0])}
                    className="w-full sm:max-w-xs"
                  >
                    <SelectItem key="black">{t('Black')}</SelectItem>
                    <SelectItem key="pink">{t('Pink')}</SelectItem>
                    <SelectItem key="purple">{t('Purple')}</SelectItem>
                  </Select>
                  <div>
                    <Checkbox
                      isSelected={enterFullscreenImmediately}
                      onValueChange={setEnterFullscreenImmediately}
                    >
                      {t('Enter fullscreen immediately')}
                    </Checkbox>
                  </div>

                  {!isTimerRunning ? (
                    <Button
                      color="primary"
                      onPress={startTimer}
                      className="w-full"
                      size="lg"
                    >
                      {t('Start Timer')}
                    </Button>
                  ) : (
                    <Button
                      color="danger"
                      onPress={stopTimer}
                      className="w-full"
                      size="lg"
                    >
                      {t('Stop Timer')}
                    </Button>
                  )}
                </div>
              </CardBody>
              <CardFooter className='px-4 sm:px-6'>
                <p className='text-sm text-gray-500 text-left'>{t('Focus Mode: Boost productivity with Pomodoro timer (work/break cycles, fullscreen white/colored screens).')}</p>
              </CardFooter>
            </Card>
          </Tab>
          <Tab key="customMode" title={t('Custom Mode')}>
            <Card>
              <CardBody className='px-4 sm:px-6'>

              </CardBody>
              <CardFooter className='px-4 sm:px-6'>
                <p className='text-sm text-gray-500 text-left'>{t('Custom Mode: Set fullscreen color switches with delays and intervals. Select mode to switch.')}</p>
              </CardFooter>
            </Card>
          </Tab>
          <Tab key="oled" title={t('OLED Protection')}>
            <Card>
              <CardBody className='px-4 sm:px-6'>

              </CardBody>
              <CardFooter className='px-4 sm:px-6'>
                <p className='text-sm text-gray-500 text-left'>{t('OLED Protection: Prevent burn-in with periodic fullscreen black screen and dynamic pattern. Set interval/duration, enable pattern, and start protection.')}</p>
              </CardFooter>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div >
  );
}
