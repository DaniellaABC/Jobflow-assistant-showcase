# JobFlow Assistant

**AI-assisted job application workflow · 智能求职申请辅助工具**

[中文说明](#中文说明) · [English](#english)

> **Portfolio showcase / 作品集演示仓库**  
> The public repository is a **privacy-safe demonstration**, not the full production extension.  
> 本公开仓库仅展示脱敏原型、示例代码和系统设计，不包含实际求职者简历、浏览器登录信息或商业核心代码。

---

## 中文说明

### 项目介绍

JobFlow Assistant 是一款面向求职者的浏览器辅助工具原型，旨在减少重复填写招聘申请表的时间，并让申请过程更易管理。

个人原型已经探索的工作流程：

1. **导入链接**：粘贴单个招聘链接，或从 Excel / CSV 导入职位清单。
2. **复用简历**：维护中英文结构化简历，包括教育、工作、项目、技能与自我介绍。
3. **检查字段**：辅助识别招聘网页上的申请表内容，向用户展示拟填写的数据。
4. **缺失信息提问**：无法判断的内容交给用户填写，不臆测薪资、学历、日期和个人信息。
5. **人工确认提交**：登录、验证码、附件上传及最终提交由用户完成。
6. **记录状态**：维护职位队列、申请状态与重复投递提醒。

**当前状态：** 个人 Edge 扩展原型已实现基础流程，但尚未完成跨网站兼容性、安全审查及公开商业发布。本仓库提供可以离线打开的演示页面和单元测试。

### 体验展示版

打开 [demo/index.html](demo/index.html) 查看纯本地、全部采用虚构数据的交互示例。

```bash
# 可选：安装 Node.js 18+ 后运行代码示例测试
node src/workflow.test.js
```

**本仓库包含：** `demo/`（模拟界面）、`src/`（岗位去重与缺失字段演示）、`docs/`（系统架构、发布验收与商业化规划）。

### 产品路线

- **V2.1 独立本地工作区**：不同使用者的数据分类管理、独立简历与投递记录、备份及恢复。
- **公开 Beta**：更广泛的真实招聘网站测试、权限缩减与异常恢复。
- **V3.0 商业候选测试版（私有）**：已制作本地安装和升级包、隐私控制及离线签名授权原型；**尚未连接支付、完成真实网站验收或通过商店审核，未正式上市**。完整商业源码不在本公开仓库。

### 安全与开发声明

此工具不会绕过登录、验证码或访问控制，不承诺所有网站都能自动填写，也不自动替用户点击最终提交。招聘网站可能在输入时自动保存草稿。真实简历数据不应提交到公开仓库。

部分实现和文档由 AI 工具辅助编写，并由项目维护者负责需求、测试和集成。本仓库未添加开源许可证；公开可查看不代表获准复制或商业再分发。

---

## English

### Overview

**JobFlow Assistant** is an early-stage browser-assisted job application tool designed to reduce repetitive form entry while keeping applicants in control of their submissions.

The personal prototype explores the following workflow:

1. **Import job links:** Paste a single job URL or import an Excel/CSV list.
2. **Reuse a structured résumé:** Organize multilingual education, employment, projects, skills, and personal statements.
3. **Review form matches:** Inspect detected application fields and proposed résumé values before filling.
4. **Ask for missing information:** Prompt the applicant when a required answer is unknown or ambiguous, rather than inventing details.
5. **Keep a human in the loop:** Users handle authentication, CAPTCHA, attachments, and final submission.
6. **Track applications:** Maintain queues, application statuses, and duplicate-submission warnings.

**Current status:** The personal Edge extension prototype supports parts of this workflow. Broad compatibility across recruitment websites, security reviews, and commercial release requirements are **not yet complete**. This repository contains a sanitized, offline demo and sample logic rather than the full extension.

### Try the portfolio demo

Open [demo/index.html](demo/index.html) locally. It uses fictional data and does not connect to job boards.

```bash
# Optional: run sample unit tests with Node.js 18+
node src/workflow.test.js
```

Repository layout: `demo/` (offline UI), `src/` (sample duplicate detection and missing-answer logic), and `docs/` (architecture, release checklist, and commercialization plan).

### Roadmap

- **V2.1 Local workspaces:** Separate résumé records, application queues, and backup/restore per local workspace.
- **Public beta:** Expand recruitment-site testing, minimize permissions, and improve error recovery.
- **V3.0 Private commercial beta:** A local install/upgrade candidate, privacy controls, and offline signed-license prototype have been developed. **Payment integration, live-site QA, and store certification remain pending; not publicly released or sold.** Commercial source code is not included here.

### Safety & attribution

The tool does not bypass authentication, CAPTCHA, or access controls. It does not guarantee compatibility with every hiring platform or auto-submit applications. Some recruitment sites may save drafts during data entry. Do not publish real applicants' résumés or credentials.

Parts of the implementation and documentation were created with AI assistance; project requirements, verification, and integration remain the maintainer's responsibility. **No open-source license has been granted for this repository.**
