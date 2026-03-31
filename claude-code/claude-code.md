---
theme: default
highlighter: shiki
colorSchema: auto
lineNumbers: false
---

# Claude Code 技术详解

## AI 驱动的开发新范式

面向开发者的智能编程助手

---

# 目录

1. **Claude Code 介绍** - 什么是 Claude Code
2. **安装与配置** - 快速上手与国产模型配置
3. **核心功能** - Agent 循环、子 Agent、Skills 等
4. **Skills 市场** - 常用 Skills 推荐
5. **创建 Skills** - 自定义技能开发指南
6. **Q&A** - 提问与交流

---

# 1. Claude Code 介绍

---

## 什么是 Claude Code？

### 🤖 AI 编程助手

- Anthropic 官方 CLI 工具
- 基于 Claude 大模型
- 深度集成开发流

### 💻 核心能力

- 代码编辑与重构
- Bug 调试与修复
- 新功能开发
- 代码审查与测试

---

## Claude Code vs 其他 AI 编程工具

| 特性 | Claude Code | Copilot | Cursor |
|------|-------------|---------|--------|
| 自主执行 | ✅ 完整 Agent 循环 | ❌ 代码建议 | ⚠️ 有限自主 |
| 工具调用 | ✅ 多种内置工具 | ❌ 仅代码补全 | ✅ 部分支持 |
| Skills 系统 | ✅ 可扩展 | ❌ 不支持 | ⚠️ 有限支持 |
| 子 Agent | ✅ 并行任务 | ❌ 不支持 | ❌ 不支持 |
| 上下文管理 | ✅ 自动压缩 | ❌ 窗口限制 | ⚠️ 手动管理 |

---

## Claude Code 的工作模式

1. 用户请求
2. 判断任务复杂度
3. 简单任务 → 直接处理
4. 复杂任务 → 进入 Plan 模式
5. 分析需求 → 制定计划 → 用户确认 → 执行计划
6. 需要子任务时创建子 Agent
7. 执行操作 → 验证结果 → 完成任务

---

## 典型使用场景

### 🐛 Bug 修复
1. 分析错误信息
2. 定位问题代码
3. 生成修复方案
4. 验证修复结果

### ✨ 新功能开发
1. 理解需求
2. 设计实现方案
3. 编写代码
4. 添加测试

### 📝 代码审查
1. 分析变更
2. 检查规范
3. 识别问题
4. 提供建议

---

# 2. 安装与配置

---

## 系统要求

### 必需条件

- **Node.js**: v22.x
- **npm**: v10.x
- **操作系统**: Windows 10/11, macOS 10.15+, Linux
- **API Key**

### 推荐配置

- **内存**: 8GB+
- **存储**: 1GB+ 可用空间
- **网络**: 稳定互联网连接
- **Git**: 2.30+

---

## 安装步骤

### 步骤 1: 安装 nvm

**Windows**:
```bash
nvm install 22
nvm use 22
```

**macOS/Linux**:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 22
nvm use 22
```

### 步骤 2: 安装 Claude Code

```bash
# 全局安装
npm install -g @anthropic-ai/claude-code

# 验证
claude --version
```

---

## 配置 API Key

### 方式一：.claude/settings.json（推荐）

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.siliconflow.cn/v1",
    "ANTHROPIC_API_KEY": "your-api-key-here",
    "ANTHROPIC_MODEL": "deepseek-ai/DeepSeek-V3"
  }
}
```

### 方式二：环境变量

```bash
# Linux/macOS
export ANTHROPIC_BASE_URL="https://api.siliconflow.cn/v1"
export ANTHROPIC_API_KEY="your-key"
export ANTHROPIC_MODEL="deepseek-ai/DeepSeek-V3"
```

---

## 配置国产模型

### 为什么需要配置国产模型？

- **访问问题**: 国内访问 Anthropic API 受限
- **成本考虑**: 国际 API 调用费用较高

### 方案一：使用 SiliconFlow

```bash
export ANTHROPIC_BASE_URL=https://api.siliconflow.cn/v1
export ANTHROPIC_API_KEY=your-siliconflow-key
```

### 方案二：使用 DeepSeek 官方 API

```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/v1
export ANTHROPIC_API_KEY=your-deepseek-key
export ANTHROPIC_MODEL=deepseek-chat
```

### 方案三：使用智谱 AI

```bash
export ANTHROPIC_BASE_URL=https://open.bigmodel.cn/api/paas/v4
export ANTHROPIC_API_KEY=your-zhipu-key
```

### 方案四：本地部署 Ollama

```bash
ollama pull deepseek-coder:33b
export ANTHROPIC_BASE_URL=http://localhost:11434/v1
export ANTHROPIC_API_KEY=ollama
```

---

# 3. 核心功能详解

---

## 核心系统架构

### 核心系统
- **Agent 循环**: Observe-Orient-Act
- **工具注册表**: 内置工具+MCP
- **权限系统**: Classifier+Rules

### 扩展系统
- **Skills 加载器**: TRIGGER 触发
- **子 Agent 系统**: 并行任务执行

### 上下文管理
- **Auto Memory**: 自动压缩机制

---

## Agent 循环机制

### 3O 工作模式

### 👁️ Observe (观察)
- 收集信息
- 读取相关文件
- 搜索代码库
- 执行诊断命令

### 🧠 Orient (思考)
- 分析处理
- 理解问题本质
- 评估可用选项
- 制定解决方案

### ✋ Act (行动)
- 执行操作
- 编辑文件、运行测试
- 创建文件、提交代码
- 验证结果

---

## 子 Agent 系统

### 什么是子 Agent？

子 Agent 是 Claude Code 的并行任务执行机制。

### 主要特点
- **独立执行**: 独立上下文和工具
- **并行处理**: 多任务同时执行
- **专业分工**: 专注不同领域
- **结果聚合**: 返回主 Agent

### 使用场景
- 🔍 代码探索
- 🧪 测试并行
- 📚 文档生成
- 🔧 多任务开发

---

## 子 Agent 类型

### 1. Explore Agent (探索子 Agent)
**用途**: 代码库探索、大规模搜索

### 2. Plan Agent (规划子 Agent)
**用途**: 架构设计、实现方案制定

### 3. Review Agent (审查子 Agent)
**用途**: 代码审查、质量检查

---

## Skills 系统详解

### 什么是 Skills？

Skills 是 Claude Code 的可扩展能力系统，允许用户定义专门的任务处理流程。

### Skill 结构

```yaml
---
name: skill-name
description: 技能描述
TRIGGER when: 触发条件
---

## 技能内容
instructions: |
  详细的执行指南
```

### Skill 优势
- 🎯 **专注性**: 每个 Skill 专注特定领域
- 📋 **标准化**: 统一的任务执行流程
- 🔄 **可复用**: 一次编写多次使用
- 🔌 **可扩展**: 持续添加新能力

---

## Skills 加载机制

### 完整加载流程

1. 用户消息输入
2. Skill Hook 拦截
3. 扫描 .claude/skills 目录
4. TRIGGER when 检查
5. 匹配则加载 Skill 指令
6. 注入 Agent 系统提示
7. 继续处理用户消息

### 匹配阈值
- **精确匹配**: 直接调用 skill:name
- **语义匹配**: 相似度 > 0.7 触发
- **模糊匹配**: 相似度 0.5-0.7，需额外确认

---

## 上下文与压缩机制

### 为什么需要压缩？

- **上下文限制**: 即使 200K 上下文也有成本
- **token 成本**: 长上下文 = 更高费用
- **响应速度**: 更短上下文 = 更快响应

### 压缩策略

**高优先级 (完整保留)**:
- 用户明确指示
- 关键决策点
- 待办任务状态

**中优先级 (摘要保留)**:
- 推理过程
- 方案讨论

**低优先级 (可丢弃)**:
- 闲聊内容
- 已验证的中间结果

---

# 4. 常用 Skills 市场

---

## Python 开发类

### `python-development:python-pro`
- Python 3.12+ 特性
- 现代 Python 开发

### `python-development:async-python-patterns`
- 异步编程模式
- asyncio 最佳实践

### `python-development:python-testing-patterns`
- pytest 测试框架
- 测试驱动开发

---

## LLM 应用开发类

### `llm-application-dev:rag-implementation`
- RAG 系统构建
- 向量数据库

### `llm-application-dev:prompt-engineering-patterns`
- 高级提示工程
- CoT 思维链

### `llm-application-dev:langchain-architecture`
- LangChain 框架
- Agent 设计

---

## Kubernetes 运维类

### `kubernetes-operations:k8s-manifest-generator`
- 生成 K8s YAML
- Deployment/Service

### `kubernetes-operations:gitops-workflow`
- ArgoCD 集成
- Flux CD 部署

---

## 通用工具类

### `superpowers:test-driven-development`
- TDD 开发流程
- 红 - 绿-重构

### `superpowers:systematic-debugging`
- 系统调试方法
- 根因分析

### `superpowers:brainstorming`
- 需求分析
- 方案设计

---

# 5. 创建和使用 Skills

---

## Skill 文件结构

```markdown
---
name: my-custom-skill
description: 我的自定义技能描述
TRIGGER when: 触发条件描述
---

# 技能内容

## 概述
技能的详细介绍...

## 使用场景
- 场景 1
- 场景 2

## 执行步骤
1. 第一步
2. 第二步
3. 第三步
```

### 存放位置
```
.claude/
└── skills/
    ├── my-skill.md
    └── another-skill.md
```

---

## 创建 Skill 的步骤

### Step 1: 确定技能目标
- 问题：这个技能解决什么问题？
- 受众：谁会使用这个技能？
- 范围：技能的边界在哪里？

### Step 2: 定义触发条件
```markdown
TRIGGER when:
- 用户提到关键词 X
- 需要执行 Y 类型任务
```

### Step 3: 编写执行指南
- 首先，理解用户需求
- 然后，收集必要信息
- 接着，执行核心操作
- 最后，验证结果

### Step 4: 测试和优化

---

## Skill 创建示例

### 示例：代码审查技能

```markdown
---
name: code-reviewer
description: 代码审查专家评审
TRIGGER when: 用户要求审查代码、review PR
---

# 代码审查技能

## 审查流程

### 1. 理解变更
- 获取变更文件列表
- 理解变更目的

### 2. 代码检查
- [ ] 代码规范符合性
- [ ] 潜在 Bug 识别
- [ ] 安全漏洞检查

### 3. 提供反馈
- 严重问题优先
- 具体修改建议
```

---

## Skill 最佳实践

### ✅ 推荐做法
- **专注单一职责**: 一个技能做一件事
- **清晰的触发条件**: 明确何时使用
- **详细的步骤指南**: 可操作的具体步骤
- **适当的约束**: 必要的边界定义
- **持续迭代**: 根据反馈优化

### ❌ 避免做法
- **过于宽泛**: 技能范围太大
- **模糊描述**: 不清晰的指令
- **过度约束**: 限制合理发挥

---

# 6. Q&A 提问

---

## 常见问题 FAQ

### Q: Claude Code 收费吗？
**A**: 需要 Claude API 订阅
- Pro 计划：$20/月
- 按量付费：根据 token 计费
- 使用国产模型可降低成本

### Q: 支持哪些编程语言？
**A**: 支持所有主流语言
- Python, JavaScript/TypeScript
- Java, Go, Rust, C/C++
- Ruby, Swift, Kotlin 等

### Q: 代码安全如何保障？
**A**: 多层安全保障
- 工具调用需用户授权
- 危险操作强制确认
- 敏感文件识别保护

### Q: 可以离线使用吗？
**A**: 部分支持
- 本地工具可离线
- AI 推理需要联网
- 本地部署 Ollama 可完全离线

---

## 学习资源

### 官方文档
- [Claude Code 文档](https://docs.anthropic.com/claude-code/)
- [SDK 参考](https://docs.anthropic.com/claude-code/sdk)
- [API 文档](https://docs.anthropic.com/claude/reference/)

### 社区资源
- [Learn ShareAI](https://learn.shareai.run/zh/s01/)
- [Discord 社区](https://discord.gg/claude)
- [技能市场](https://claude-skills.dev/)

---

## 实践练习

### 动手试试

1. **安装配置**: 完成 Claude Code 安装和国产模型配置
2. **基本技能**: 尝试使用 brainstorming 和 debugging 技能
3. **创建技能**: 编写一个你自己的技能文件
4. **任务管理**: 使用 TodoWrite 管理一个开发任务

---

# 感谢聆听

## Q&A 环节

欢迎提问交流！

[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
