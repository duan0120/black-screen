# Timer Settings Implementation

## 功能概述

在 Hero.js 组件中实现了定时器设置功能，包括颜色切换定时器和自动退出全屏定时器。

## 实现的功能

### 1. 颜色切换定时器 (Color Switch Interval)
- **设置范围**: 0-300秒
- **默认值**: 0（不切换）
- **功能**:
  - 当设置了 switchTime 时，进入全屏后定时切换颜色
  - 按照 colorDatas 中的顺序循环切换
  - 从当前颜色开始循环
  - 如果当前颜色不在预设颜色中（来自颜色选择器），将此颜色加入循环，下一个是黑色

### 2. 自动退出全屏定时器 (Exit Fullscreen Time)
- **设置范围**: 0-60分钟
- **默认值**: 0（不自动退出）
- **功能**:
  - 当设置了 exitTime 时，进入全屏后开始计时
  - 定时结束时自动退出全屏

### 3. 定时器管理
- **启动**: 进入全屏时自动启动设置的定时器
- **清除**: 退出全屏时自动清除所有定时器
- **清理**: 组件卸载时清除定时器，防止内存泄漏

## 代码结构

### 状态管理
```javascript
const [switchTime, setSwitchTime] = useState(0);
const [exitTime, setExitTime] = useState(0);
const [colorSwitchTimer, setColorSwitchTimer] = useState(null);
const [exitTimer, setExitTimer] = useState(null);
const [currentColorIndex, setCurrentColorIndex] = useState(0);
const [colorCycleArray, setColorCycleArray] = useState([]);
```

### 核心函数
- `prepareColorCycleArray()`: 准备颜色循环数组
- `switchToNextColor()`: 切换到下一个颜色
- `startTimers()`: 启动定时器
- `clearTimers()`: 清除定时器

### UI 组件
在 "Timer Settings" 标签页中添加了两个 NumberInput 组件：
- 颜色切换间隔设置
- 退出全屏时间设置

## 翻译支持

添加了以下翻译键：
- `"Color Switch Interval (seconds, 0 for none)"`
- `"Exit Fullscreen Time (minutes, 0 for none)"`
- `"0 means no color switching"`
- `"0 means no auto exit"`

支持英文和中文翻译。

## 使用方法

1. 在 "Timer Settings" 标签页中设置定时器参数
2. 点击颜色预览区域或按 F 键进入全屏
3. 定时器会根据设置自动工作：
   - 颜色切换定时器：按设定间隔切换颜色
   - 退出定时器：到达设定时间后自动退出全屏
4. 手动退出全屏时，所有定时器会自动清除

## 测试

创建了 `test-timer.html` 文件用于测试定时器逻辑，可以独立验证：
- 颜色切换功能
- 定时器启动/停止
- 颜色循环逻辑

## 注意事项

1. 定时器在进入全屏时启动，退出全屏时清除
2. 支持通过各种方式退出全屏（ESC键、点击、浏览器退出全屏等）
3. 组件卸载时会自动清理定时器，防止内存泄漏
4. 颜色切换会保持当前选择的颜色作为起始点

## 重要修复记录

### NumberInput 键盘输入问题
**问题**: NumberInput 组件无法接受键盘输入
**原因**:
1. 使用了错误的 `onChange` 属性，应该使用 `onValueChange`
2. 全局键盘事件处理器拦截了输入

**解决方案**:
1. 将 `onChange={setValue}` 改为 `onValueChange={setValue}`
2. 修改键盘事件处理器，当焦点在输入框时跳过快捷键处理

**正确用法**:
```javascript
<NumberInput
  label="Label"
  value={value}
  onValueChange={setValue}  // 使用 onValueChange 而不是 onChange
  min={0}
  max={100}
  endContent="unit"
  className="w-full"
/>
```
