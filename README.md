# PlayFun Games - 出海小游戏平台 🎮

一个精致、现代化的出海小游戏平台，支持200+免费在线游戏，无需下载即可游玩。专为全球市场设计，具备优秀的SEO性能和多语言支持。

## ✨ 特性

- 🎮 **200+ 免费游戏** - 多种类型的HTML5游戏
- ⚡ **即时游玩** - 无需下载，点击即玩
- 📱 **响应式设计** - 完美支持桌面、平板和手机
- 🌍 **多语言支持** - 支持10种主要语言，适合出海
- 🔍 **SEO优化** - 针对Google搜索引擎深度优化
- ⚡ **性能优异** - 快速加载，流畅用户体验
- 🎨 **现代UI** - 简洁、精致的游戏界面设计
- 🔒 **安全可靠** - 家庭友好，适合所有年龄段用户

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS + CSS Variables
- **UI组件**: NextUI + 自定义组件
- **数据库**: Supabase
- **动画**: Framer Motion
- **图标**: React Icons
- **部署**: Vercel (推荐)

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
