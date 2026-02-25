// GameHub100 - 游戏数据

const gamesData = [
    // 益智类 (10个)
    {
        id: 'puzzle-001',
        name: '2048',
        category: 'puzzle',
        description: '经典数字合并游戏，挑战你的逻辑思维！',
        tags: ['数字', '合并', '策略'],
        difficulty: '中等',
        icon: '🔢'
    },
    {
        id: 'puzzle-002',
        name: '数独',
        category: 'puzzle',
        description: '填入1-9的数字，每行每列不能重复',
        tags: ['数字', '逻辑', '经典'],
        difficulty: '困难',
        icon: '📊'
    },
    {
        id: 'puzzle-003',
        name: '扫雷',
        category: 'puzzle',
        description: '避开地雷，找出所有安全格子',
        tags: ['经典', '策略', '推理'],
        difficulty: '中等',
        icon: '💣'
    },
    {
        id: 'puzzle-004',
        name: '拼图游戏',
        category: 'puzzle',
        description: '将打乱的图片拼回原样',
        tags: ['图片', '空间', '视觉'],
        difficulty: '简单',
        icon: '🧩'
    },
    {
        id: 'puzzle-005',
        name: '华容道',
        category: 'puzzle',
        description: '移动方块，让曹操从出口逃走',
        tags: ['滑块', '经典', '策略'],
        difficulty: '困难',
        icon: '🚪'
    },
    {
        id: 'puzzle-006',
        name: '记忆翻牌',
        category: 'puzzle',
        description: '翻开卡牌，找出所有配对',
        tags: ['记忆', '配对', '视觉'],
        difficulty: '简单',
        icon: '🃏'
    },
    {
        id: 'puzzle-007',
        name: '推箱子',
        category: 'puzzle',
        description: '将所有箱子推到指定位置',
        tags: ['经典', '策略', '空间'],
        difficulty: '中等',
        icon: '📦'
    },
    {
        id: 'puzzle-008',
        name: '连连看',
        category: 'puzzle',
        description: '找出相同的图案并消除',
        tags: ['配对', '消除', '视觉'],
        difficulty: '简单',
        icon: '🔗'
    },
    {
        id: 'puzzle-009',
        name: '数字填色',
        category: 'puzzle',
        description: '根据数字提示填充颜色',
        tags: ['数字', '颜色', '创意'],
        difficulty: '简单',
        icon: '🎨'
    },
    {
        id: 'puzzle-010',
        name: '消消乐',
        category: 'puzzle',
        description: '交换相邻方块，消除三个或以上相同颜色',
        tags: ['消除', '匹配', '策略'],
        difficulty: '简单',
        icon: '💎'
    },
    
    // 动作类 (10个)
    {
        id: 'action-001',
        name: '贪吃蛇',
        category: 'action',
        description: '控制蛇吃食物，不要撞到自己',
        tags: ['经典', '反应', '策略'],
        difficulty: '简单',
        icon: '🐍'
    },
    {
        id: 'action-002',
        name: '打砖块',
        category: 'action',
        description: '用挡板反弹球，消除所有砖块',
        tags: ['经典', '反应', '瞄准'],
        difficulty: '简单',
        icon: '🧱'
    },
    {
        id: 'action-003',
        name: '飞机大战',
        category: 'action',
        description: '驾驶战斗机，消灭敌人',
        tags: ['射击', '躲避', '动作'],
        difficulty: '中等',
        icon: '✈️'
    },
    {
        id: 'action-004',
        name: '跳跃游戏',
        category: 'action',
        description: '控制角色跳跃，躲避障碍物',
        tags: ['跳跃', '躲避', '反应'],
        difficulty: '简单',
        icon: '🦘'
    },
    {
        id: 'action-005',
        name: '弹球游戏',
        category: 'action',
        description: '控制弹球，获取高分',
        tags: ['弹球', '反应', '物理'],
        difficulty: '中等',
        icon: '⚪'
    },
    {
        id: 'action-006',
        name: '打地鼠',
        category: 'action',
        description: '快速点击冒出的地鼠',
        tags: ['反应', '点击', '速度'],
        difficulty: '简单',
        icon: '🐹'
    },
    {
        id: 'action-007',
        name: '接金币',
        category: 'action',
        description: '控制篮子接住掉落的金币',
        tags: ['接物', '反应', '移动'],
        difficulty: '简单',
        icon: '💰'
    },
    {
        id: 'action-008',
        name: '跑酷游戏',
        category: 'action',
        description: '在屋顶上奔跑，躲避障碍',
        tags: ['跑酷', '跳跃', '动作'],
        difficulty: '中等',
        icon: '🏃'
    },
    {
        id: 'action-009',
        name: '抓娃娃',
        category: 'action',
        description: '控制抓手，抓取娃娃',
        tags: ['瞄准', '时机', '技巧'],
        difficulty: '中等',
        icon: '🧸'
    },
    {
        id: 'action-010',
        name: '躲避障碍',
        category: 'action',
        description: '控制角色躲避各种障碍物',
        tags: ['躲避', '反应', '生存'],
        difficulty: '简单',
        icon: '🚧'
    },
    
    // 策略类 (10个)
    {
        id: 'strategy-001',
        name: '五子棋',
        category: 'strategy',
        description: '先连成五子的获胜',
        tags: ['棋类', '策略', '对战'],
        difficulty: '简单',
        icon: '⚫'
    },
    {
        id: 'strategy-002',
        name: '井字棋',
        category: 'strategy',
        description: '经典的井字棋游戏',
        tags: ['棋类', '策略', '简单'],
        difficulty: '简单',
        icon: '#️⃣'
    },
    {
        id: 'strategy-003',
        name: '四子棋',
        category: 'strategy',
        description: '先连成四子的获胜',
        tags: ['棋类', '策略', '对战'],
        difficulty: '简单',
        icon: '🔴'
    },
    {
        id: 'strategy-004',
        name: '黑白棋',
        category: 'strategy',
        description: '翻转对手的棋子，占据更多格子',
        tags: ['棋类', '策略', '翻转'],
        difficulty: '中等',
        icon: '⚪'
    },
    {
        id: 'strategy-005',
        name: '跳棋',
        category: 'strategy',
        description: '跳过对方棋子，到达对面',
        tags: ['棋类', '跳跃', '策略'],
        difficulty: '中等',
        icon: '🔵'
    },
    {
        id: 'strategy-006',
        name: '三子棋',
        category: 'strategy',
        description: '简化版的井字棋',
        tags: ['棋类', '策略', '简单'],
        difficulty: '简单',
        icon: '3️⃣'
    },
    {
        id: 'strategy-007',
        name: '围棋（简化版）',
        category: 'strategy',
        description: '在9x9棋盘上对弈',
        tags: ['棋类', '策略', '深度'],
        difficulty: '困难',
        icon: '⚫'
    },
    {
        id: 'strategy-008',
        name: '象棋（简化版）',
        category: 'strategy',
        description: '中国象棋简化版',
        tags: ['棋类', '策略', '经典'],
        difficulty: '中等',
        icon: '♞'
    },
    {
        id: 'strategy-009',
        name: '斗兽棋',
        category: 'strategy',
        description: '动物对战，大吃小',
        tags: ['棋类', '动物', '策略'],
        difficulty: '简单',
        icon: '🦁'
    },
    {
        id: 'strategy-010',
        name: '军棋（简化版）',
        category: 'strategy',
        description: '军事策略对战',
        tags: ['棋类', '军事', '策略'],
        difficulty: '中等',
        icon: '🎖️'
    }
];

// 导出游戏数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gamesData;
}
