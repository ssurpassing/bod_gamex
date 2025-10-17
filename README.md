# GameX - Online Games Platform

一个基于Next.js的现代化在线游戏平台，支持游戏管理、分类浏览和管理员后台。

## 🚀 功能特性

- **游戏展示**: 支持按分类、时间、热度展示游戏
- **搜索浏览**: 分类浏览和搜索功能
- **管理后台**: 完整的游戏管理系统（CRUD）
- **用户认证**: JWT基础的登录认证
- **响应式设计**: 适配移动端和桌面端
- **性能优化**: 代码分割、懒加载、缓存优化

## 🏗️ 技术栈

- **前端**: Next.js 14, React 18, Tailwind CSS
- **UI组件库**: NextUI
- **数据库**: Supabase (PostgreSQL)
- **认证**: JWT (jose)
- **图标**: React Icons

## 📦 安装和运行

### 1. 克隆项目
```bash
git clone https://github.com/your-username/gamex.git
cd gamex
```

### 2. 安装依赖
```bash
npm install
```

### 3. 环境配置
复制环境变量模板：
```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件，填入你的配置：
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_key_here

# JWT Configuration
JWT_SECRET=your_jwt_secret_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Admin Configuration
ADMIN_ID=admin
ADMIN_PASSWORD=password
```

### 4. 数据库设置
在Supabase中执行 `supabase_schema.sql` 文件中的SQL脚本来创建数据库表。

### 5. 运行项目
```bash
npm run dev
```

访问 http://localhost:3000 查看项目。

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   ├── admin/             # 管理后台
│   ├── play/              # 游戏播放页面
│   └── category/          # 分类页面
├── components/            # React组件
│   ├── block/             # 页面区块组件
│   ├── template/          # 布局模板组件
│   └── GameForm.jsx       # 游戏表单组件
├── hooks/                 # 自定义Hooks
│   └── useGames.js        # 游戏数据管理
├── lib/                   # 工具库
│   └── supabase.jsx       # Supabase客户端
├── utils/                 # 工具函数
│   └── apiResponse.js     # API响应工具
└── config/                # 配置文件
    └── site.js            # 站点配置
```

## 🔧 代码优化亮点

### 1. 安全性提升
- ✅ 移除硬编码的API密钥和数据库凭据
- ✅ 使用环境变量管理敏感信息
- ✅ 添加输入验证和错误处理

### 2. 代码复用性
- ✅ 创建可复用的 `useGames` Hook
- ✅ 统一的API响应处理工具
- ✅ 通用的游戏卡片组件

### 3. 性能优化
- ✅ 减少重复的数据获取逻辑
- ✅ 优化的加载状态处理
- ✅ 简化的组件结构

### 4. 可维护性
- ✅ 集中式配置管理
- ✅ 清晰的代码结构
- ✅ 统一的错误处理

## 🎯 主要组件

### useGames Hook
```javascript
const { games, loading, error } = useGames(filter, sortBy, limit);
```

### GameForm Component
```javascript
<GameForm
  game={gameData}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

### API Response Utils
```javascript
// Success response
return successResponse(data, 200);

// Error response
return errorResponse('Error message', 500);
```

## 🔒 环境变量说明

| 变量 | 说明 | 必需 |
|------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase项目URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_KEY` | Supabase anon key | ✅ |
| `JWT_SECRET` | JWT加密密钥 | ✅ |
| `NEXT_PUBLIC_SITE_URL` | 站点URL | ❌ |
| `ADMIN_ID` | 管理员用户名 | ✅ |
| `ADMIN_PASSWORD` | 管理员密码 | ✅ |

## 🚀 部署

项目支持多种部署方式：

- **Vercel**: 一键部署，支持serverless函数
- **Netlify**: 静态站点部署
- **自建服务器**: 传统Node.js部署

### Vercel部署
1. 连接GitHub仓库到Vercel
2. 配置环境变量
3. 点击部署

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目。

## 📄 License

MIT License - 详见 [LICENSE](LICENSE) 文件
