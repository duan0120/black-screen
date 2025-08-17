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
import { useState, useEffect, useCallback, useRef } from 'react';


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

  const [switchTime, setSwitchTime] = useState(0);
  const [exitTime, setExitTime] = useState(0);

  // 定时器相关状态
  const [colorSwitchTimer, setColorSwitchTimer] = useState(null);
  const [exitTimer, setExitTimer] = useState(null);

  // 记录进入全屏前的颜色
  const [colorBeforeFullscreen, setColorBeforeFullscreen] = useState(null);

  // 记录当前选中的 Tab
  const [currentTab, setCurrentTab] = useState('download');

  // OLED 保护相关状态
  const [dynamicPattern, setDynamicPattern] = useState(true); // 是否启用动态图案

  // 使用 ref 来避免循环依赖
  const exitFullscreenRef = useRef(null);

  // OLED 保护相关的 ref
  const oledCanvasRef = useRef(null);
  const oledAnimationRef = useRef(null);

  // 管理定时器的 useEffect
  useEffect(() => {
    if (!isFullscreen) {
      // 不在全屏模式，清除所有定时器
      if (colorSwitchTimer) {
        clearInterval(colorSwitchTimer);
        setColorSwitchTimer(null);
      }
      if (exitTimer) {
        clearTimeout(exitTimer);
        setExitTimer(null);
      }

      // 如果有记录的颜色，恢复到进入全屏前的颜色
      if (colorBeforeFullscreen) {
        console.log('Restoring color after fullscreen:', colorBeforeFullscreen);
        setColorValue(colorBeforeFullscreen);
        setColorBeforeFullscreen(null); // 清除记录
      }

      return;
    }

    // 在全屏模式下启动定时器
    console.log('Setting up timers in fullscreen mode:', { switchTime, exitTime, colorValue });

    // 启动颜色切换定时器
    if (switchTime > 0 && !colorSwitchTimer) {
      console.log('Starting color switch timer with interval:', switchTime, 'seconds');

      // 准备颜色循环数组
      const fixedColorOrder = ['black', 'white', 'red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple'];
      const currentColorKey = fixedColorOrder.find(key => colorDatas[key].colorValue === colorValue);

      let cycleArray;
      let currentIndex;

      if (currentColorKey) {
        // 当前颜色在预设颜色中
        currentIndex = fixedColorOrder.indexOf(currentColorKey);
        cycleArray = fixedColorOrder.map(key => colorDatas[key].colorValue);
      } else {
        // 当前颜色不在预设颜色中，将其加入到数组最后
        cycleArray = [...fixedColorOrder.map(key => colorDatas[key].colorValue), colorValue];
        currentIndex = cycleArray.length - 1; // 从自定义颜色开始
      }

      console.log('Color cycle setup:', { cycleArray, currentIndex, currentColor: colorValue });

      // 使用闭包来维护当前索引
      let index = currentIndex;

      const colorTimer = setInterval(() => {
        index = (index + 1) % cycleArray.length;
        const nextColor = cycleArray[index];
        console.log('Color switch timer triggered. Index:', index, 'Color:', nextColor);
        setColorValue(nextColor);
      }, switchTime * 1000);

      setColorSwitchTimer(colorTimer);
    }

    // 启动退出全屏定时器
    if (exitTime > 0 && !exitTimer) {
      console.log('Starting exit timer with duration:', exitTime, 'minutes');
      const exitTimerRef = setTimeout(() => {
        console.log('Exit timer triggered, exiting fullscreen');
        if (exitFullscreenRef.current) {
          exitFullscreenRef.current();
        }
      }, exitTime * 60 * 1000);
      setExitTimer(exitTimerRef);
    }

    // 清理函数
    return () => {
      if (colorSwitchTimer) {
        clearInterval(colorSwitchTimer);
      }
      if (exitTimer) {
        clearTimeout(exitTimer);
      }
    };
  }, [isFullscreen, switchTime, exitTime, colorBeforeFullscreen]); // 依赖关键状态

  // OLED 保护功能
  const createDynamicPattern = useCallback((canvas) => {
    const ctx = canvas.getContext('2d');
    let x = 0, y = 0, dx = 1, dy = 1;

    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x, y, 10, 10);

      x += dx;
      y += dy;

      if (x >= canvas.width || x < 0) dx = -dx;
      if (y >= canvas.height || y < 0) dy = -dy;

      oledAnimationRef.current = requestAnimationFrame(drawPattern);
    };

    drawPattern();
  }, []);

  const startOledCycle = useCallback(() => {
    console.log('Starting OLED protection');

    // 立即进入黑屏保护
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.setAttribute('data-oled-protection', 'true');
    fullscreenDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #000000;
        z-index: 9999;
        cursor: pointer;
      `;

    // 如果启用动态图案，创建移动的白点
    if (dynamicPattern) {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `;

      fullscreenDiv.appendChild(canvas);
      oledCanvasRef.current = canvas;
      createDynamicPattern(canvas);
    }

    // 添加退出提示
    const exitHint = document.createElement('div');
    exitHint.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        font-family: Arial, sans-serif;
      `;
    exitHint.textContent = 'Press ESC to exit OLED Protection';
    fullscreenDiv.appendChild(exitHint);

    // 退出函数
    const exitOledProtection = () => {
      console.log('exitOledProtection called');
      if (document.body.contains(fullscreenDiv)) {
        document.body.removeChild(fullscreenDiv);
        if (oledAnimationRef.current) {
          cancelAnimationFrame(oledAnimationRef.current);
        }

      }
    };

    // 点击退出
    fullscreenDiv.addEventListener('click', exitOledProtection);

    document.body.appendChild(fullscreenDiv);

    // 进入全屏
    if (fullscreenDiv.requestFullscreen) {
      fullscreenDiv.requestFullscreen().catch(err => {
        console.log('Failed to enter fullscreen for OLED protection:', err);
      });
    }


  }, [dynamicPattern, createDynamicPattern]);

  const startOledProtection = useCallback(() => {
    console.log('Starting OLED Protection');

    // 如果已经有OLED保护在运行，先停止它
    const existingOledDiv = document.querySelector('[data-oled-protection]');
    if (existingOledDiv) {
      stopOledProtection();
    }

    startOledCycle();
  }, [startOledCycle]);

  const stopOledProtection = useCallback(() => {
    console.log('Stopping OLED Protection');

    if (oledAnimationRef.current) {
      cancelAnimationFrame(oledAnimationRef.current);
    }

    // 如果当前有OLED保护屏幕，移除它
    const existingOledDiv = document.querySelector('[data-oled-protection]');
    console.log('Found OLED div to remove:', !!existingOledDiv);
    if (existingOledDiv) {
      try {
        // 如果在全屏模式，先退出全屏
        if (document.fullscreenElement === existingOledDiv) {
          document.exitFullscreen().catch(err => {
            console.log('Failed to exit fullscreen:', err);
          });
        }
        document.body.removeChild(existingOledDiv);
        console.log('OLED protection div removed successfully');
      } catch (error) {
        console.error('Error removing OLED protection div:', error);
      }
    }
  }, []);

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

  // 进入全屏模式
  const enterFullscreen = useCallback(() => {
    // 如果设置了颜色切换定时器，记录当前颜色
    if (switchTime > 0) {
      console.log('Recording color before fullscreen:', colorValue);
      setColorBeforeFullscreen(colorValue);
    }

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

  }, [switchTime, colorValue]);

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

  // 将 exitFullscreen 函数赋值给 ref
  useEffect(() => {
    exitFullscreenRef.current = exitFullscreen;
  }, [exitFullscreen]);

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

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (event) => {
      // 如果焦点在输入框上，不处理快捷键
      const activeElement = document.activeElement;
      if (activeElement && (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.contentEditable === 'true' ||
        activeElement.getAttribute('role') === 'textbox'
      )) {
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
          // 检查是否有OLED保护屏幕，如果有就停止它
          const oledDiv = document.querySelector('[data-oled-protection]');
          if (oledDiv) {
            stopOledProtection();
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
  }, [isFullscreen, enterFullscreen, exitFullscreen, toggleFullscreen, stopOledProtection]);

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
        onClick={toggleFullscreen}
      >

        {/* 3秒提示 (非计时器模式) */}
        {showFullscreenTip && (
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
                enterFullscreen();
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* 颜色值显示在右上角 */}
              <div className="absolute top-2 right-2 text-xs text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-black/80 px-2 py-1 rounded">
                {colorValue}
              </div>

              {/* 鼠标悬停时显示提示 */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sm bg-black/20 px-6 sm:px-10 py-4 rounded" style={{ color: getTextColor(colorValue) }}>
                    {t('Click to enter full screen')}
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
          selectedKey={currentTab}
          onSelectionChange={setCurrentTab}
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
                  <NumberInput label={t('Width')} value={width} onValueChange={setWidth} endContent="px" className="w-full sm:w-auto" />
                  <NumberInput label={t('Height')} value={height} onValueChange={setHeight} endContent="px" className="w-full sm:w-auto" />
                </div>
                <Button color="primary" onPress={handleDownload} className="w-full sm:w-auto">{t('Download Image')}</Button>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="timer" title={t('Timer Settings')}>
            <Card>
              <CardBody className='px-4 sm:px-6'>
                <NumberInput
                  label={t('Color Switch Interval (seconds, 0 for none)')}
                  value={switchTime}
                  onValueChange={setSwitchTime}
                  min={0}
                  max={300}
                  endContent="s"
                  className="w-full mb-4"
                />
                <NumberInput
                  label={t('Exit Fullscreen Time (minutes, 0 for none)')}
                  value={exitTime}
                  onValueChange={setExitTime}
                  min={0}
                  max={60}
                  endContent="min"
                  className="w-full mb-4"
                />
                <Button color="primary" onPress={enterFullscreen} className="w-full sm:w-auto">{t('Start Timer')}</Button>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="oled" title={t('OLED Protection Settings')}>
            <Card>
              <CardBody className='px-4 sm:px-6'>

                <div className='mb-4'>
                  <Checkbox
                    isSelected={dynamicPattern}
                    onValueChange={setDynamicPattern}
                  >
                    {t('Enable Dynamic Pattern (Burn-in Protection)')}
                  </Checkbox>
                </div>
                <Button
                  color="primary"
                  onPress={startOledProtection}
                  className="w-full sm:w-auto"
                >
                  {t('Start OLED Protection')}
                </Button>
              </CardBody>
              <CardFooter className='px-4 sm:px-6'>
                <p className='text-sm text-gray-500 text-left'>{t('OLED Protection: Prevent burn-in with fullscreen black screen and optional dynamic pattern. Enable pattern if desired, then start protection.')}</p>
              </CardFooter>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div >
  );
}
