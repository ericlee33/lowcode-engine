---
title: 简介
sidebar_position: 1
---

# 阿里低代码引擎简介

## 低代码介绍

零代码、低代码的概念在整个全球行业内已经流行了很长一段时间。通常意义上的低代码定义会有三个关键点：

1. 一个用于生产软件的可视化编辑器
2. 中间包含了一些用于组装的物料，可以通过编排、组合和配置它们以生成丰富的功能或表现
3. 最后的实施结果是成本降低

通常情况下低代码平台会具备以下的几个能力：

- **可视化页面搭建**，通过简单的拖拽完成应用页面开发，对前端技能没有要求或不需要特别专业的了解；
- **可视化模型设计**，与业务相关的数据存储变得更容易理解，甚至大多数简单场景可以做到表单即模型，模型字段的类型更加业务化；
- **可视化流程设计**，不管是业务流程还是审批流程，都可以通过简单的点线连接来进行配置；
- **可视化报表及数据分析**，BI 数据分析能力成为标配，随时随地通过拖拽选择来定义自定义分析报表；
- **可视化服务与数据开放、集成**，具备与其他系统互联互通的配置；
- **权限、角色设置标准化和业务化**，通过策略规则配置来将数据、操作的权限进行精细化管理；
- **无需关心服务器、数据库等底层运维、计算设施设备、网络等等复杂技术概念**，具备安全、性能的统一解决方案，开发者只需要专注于业务本身；

有了上面这些，你会发现即使是个技术小白，只要你了解业务，就能不受束缚的完成大多数业务应用的搭建。但低代码本身也不仅仅是为技术小白准备的。在实践中，低代码因为通过组件化、模块化的思路让业务的抽象更加容易，而且在扩展及配置化上带来了更加新鲜的模式探索，技术人员的架构设计成本和实施成本也就降了很多。

市面上常见的低代码产品[可以看 Golden 的梳理](https://golden.com/wiki/No-code_%2F_low-code_development-NMGMEA6)。

## 低代码引擎介绍

**低代码引擎是一款为低代码平台开发者提供的，具备强大定制扩展能力的低代码设计器研发框架。**

下面简单描述定义中的子部分：

**低代码设计器**
现如今低代码平台越来越多，而每一个低代码平台中都会有的一个能力就是搭建和配置页面、模块的页面，这个页面我们称为设计器。例如，下图是中后台低代码平台的设计器。
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01sXuwkK1j8sg4S53Dx_!!6000000004504-2-tps-1682-969.png)
设计器承载着低代码平台的核心功能，包括入料、编排、组件配置、画布渲染等等。由于其功能多，打磨精细难，也是低代码平台建设最耗时的地方。

**定制扩展能力**

什么是扩展能力呢，一方面我们可以快速拥有一份标准的低代码设计器，另外一方面如果有业务独特的功能需要，我们可以不用看它的源码、不用关心其实现，可以使用 API、插件等方式快速完成能力的开发。
而低代码引擎对于设计器的扩展能力支持基本上覆盖了低代码设计器的所有功能点。下图是针对标准的设计器提供了扩展功能的区域。
![](https://img.alicdn.com/imgextra/i1/O1CN01ZVgAE31wltQ4BVnCe_!!6000000006349-2-tps-3838-1914.png)
**低代码设计器研发框架**

低代码引擎的核心是设计器，通过扩展、周边生态等可以产出各式各样的设计器。它不是一套可以适合所有人的低代码平台，而是帮助低代码平台的开发者，快速生产低代码平台的工具。

## 寻找适合您的低代码解决方案

帮助用户根据个人或企业需求选择合适的低代码产品。

| 特性/产品        | 低代码引擎                               | Lab平台                                  | UIPaaS                                      |
|-----------------|-----------------------------------------|-----------------------------------------|--------------------------------------------|
| **适用用户**    | 前端开发者                               | 需要快速搭建应用/页面的用户              | 企业用户，需要大规模部署低代码解决方案的组织 |
| **产品特点**    | 设计器研发框架，适合定制开发            | 低代码平台, 可视化操作界面，易于上手                | 低代码平台孵化器，企业级功能                |
| **使用场景**    | 定制和开发低代码平台的设计器部分        | 通过可视化, 快速开发应用或页面                  | 帮助具有一定规模软件研发团队的的企业低成本定制低代码平台        |
| **产品关系**    | 开源产品                                 | 基于UIPaaS技术实现, 展示了UIPaaS的部分能力                      | 提供完整的低代码平台解决方案，商业产品                |
| **收费情况**    | 免费                                     | 可免费使用（有额度限制），不提供私有化部署售卖 | 仅提供私有化部署售卖                        |
| **官方网站**    | [低代码引擎官网](https://lowcode-engine.cn/) | [Lab平台官网](https://lab.lowcode-engine.cn/) | [UIPaaS官网](https://uipaas.net/)          |

*注：请根据您的具体需求和条件选择合适的产品。如需更详细的信息，请访问各产品的官方网站。*
