// GameHub100 - 游戏数据（100个游戏完整版）

const gamesData = [
    // 益智类 (10个)
    { id: 'puzzle-001', name: '2048', category: 'puzzle', description: '经典数字合并游戏，挑战你的逻辑思维！', tags: ['数字', '合并', '策略'], difficulty: '中等', icon: '🔢' },
    { id: 'puzzle-002', name: '数独', category: 'puzzle', description: '填入1-9的数字，每行每列不能重复', tags: ['数字', '逻辑', '经典'], difficulty: '困难', icon: '📊' },
    { id: 'puzzle-003', name: '扫雷', category: 'puzzle', description: '避开地雷，找出所有安全格子', tags: ['经典', '策略', '推理'], difficulty: '中等', icon: '💣' },
    { id: 'puzzle-004', name: '拼图游戏', category: 'puzzle', description: '将打乱的图片拼回原样', tags: ['图片', '空间', '视觉'], difficulty: '简单', icon: '🧩' },
    { id: 'puzzle-005', name: '华容道', category: 'puzzle', description: '移动方块，让曹操从出口逃走', tags: ['滑块', '经典', '策略'], difficulty: '困难', icon: '🚪' },
    { id: 'puzzle-006', name: '记忆翻牌', category: 'puzzle', description: '翻开卡牌，找出所有配对', tags: ['记忆', '配对', '视觉'], difficulty: '简单', icon: '🃏' },
    { id: 'puzzle-007', name: '推箱子', category: 'puzzle', description: '将所有箱子推到指定位置', tags: ['经典', '策略', '空间'], difficulty: '中等', icon: '📦' },
    { id: 'puzzle-008', name: '连连看', category: 'puzzle', description: '找出相同的图案并消除', tags: ['配对', '消除', '视觉'], difficulty: '简单', icon: '🔗' },
    { id: 'puzzle-009', name: '数字填色', category: 'puzzle', description: '根据数字提示填充颜色', tags: ['数字', '颜色', '创意'], difficulty: '简单', icon: '🎨' },
    { id: 'puzzle-010', name: '消消乐', category: 'puzzle', description: '交换相邻方块，消除三个或以上相同颜色', tags: ['消除', '匹配', '策略'], difficulty: '简单', icon: '💎' },
    
    // 动作类 (10个)
    { id: 'action-001', name: '贪吃蛇', category: 'action', description: '控制蛇吃食物，不要撞到自己', tags: ['经典', '反应', '策略'], difficulty: '简单', icon: '🐍' },
    { id: 'action-002', name: '打砖块', category: 'action', description: '用挡板反弹球，消除所有砖块', tags: ['经典', '反应', '瞄准'], difficulty: '简单', icon: '🧱' },
    { id: 'action-003', name: '飞机大战', category: 'action', description: '驾驶战斗机，消灭敌人', tags: ['射击', '躲避', '动作'], difficulty: '中等', icon: '✈️' },
    { id: 'action-004', name: '跳跃游戏', category: 'action', description: '控制角色跳跃，躲避障碍物', tags: ['跳跃', '躲避', '反应'], difficulty: '简单', icon: '🦘' },
    { id: 'action-005', name: '弹球游戏', category: 'action', description: '控制弹球，获取高分', tags: ['弹球', '反应', '物理'], difficulty: '中等', icon: '⚪' },
    { id: 'action-006', name: '打地鼠', category: 'action', description: '快速点击冒出的地鼠', tags: ['反应', '点击', '速度'], difficulty: '简单', icon: '🐹' },
    { id: 'action-007', name: '接金币', category: 'action', description: '控制篮子接住掉落的金币', tags: ['接物', '反应', '移动'], difficulty: '简单', icon: '💰' },
    { id: 'action-008', name: '跑酷游戏', category: 'action', description: '在屋顶上奔跑，躲避障碍', tags: ['跑酷', '跳跃', '动作'], difficulty: '中等', icon: '🏃' },
    { id: 'action-009', name: '抓娃娃', category: 'action', description: '控制抓手，抓取娃娃', tags: ['瞄准', '时机', '技巧'], difficulty: '中等', icon: '🧸' },
    { id: 'action-010', name: '躲避障碍', category: 'action', description: '控制角色躲避各种障碍物', tags: ['躲避', '反应', '生存'], difficulty: '简单', icon: '🚧' },
    
    // 策略类 (10个)
    { id: 'strategy-001', name: '五子棋', category: 'strategy', description: '先连成五子的获胜', tags: ['棋类', '策略', '对战'], difficulty: '简单', icon: '⚫' },
    { id: 'strategy-002', name: '井字棋', category: 'strategy', description: '经典的井字棋游戏', tags: ['棋类', '策略', '简单'], difficulty: '简单', icon: '#️⃣' },
    { id: 'strategy-003', name: '四子棋', category: 'strategy', description: '先连成四子的获胜', tags: ['棋类', '策略', '对战'], difficulty: '简单', icon: '🔴' },
    { id: 'strategy-004', name: '黑白棋', category: 'strategy', description: '翻转对手的棋子，占据更多格子', tags: ['棋类', '策略', '翻转'], difficulty: '中等', icon: '⚪' },
    { id: 'strategy-005', name: '跳棋', category: 'strategy', description: '跳过对方棋子，到达对面', tags: ['棋类', '跳跃', '策略'], difficulty: '中等', icon: '🔵' },
    { id: 'strategy-006', name: '三子棋', category: 'strategy', description: '简化版的井字棋', tags: ['棋类', '策略', '简单'], difficulty: '简单', icon: '3️⃣' },
    { id: 'strategy-007', name: '围棋（简化版）', category: 'strategy', description: '在9x9棋盘上对弈', tags: ['棋类', '策略', '深度'], difficulty: '困难', icon: '⚫' },
    { id: 'strategy-008', name: '象棋（简化版）', category: 'strategy', description: '中国象棋简化版', tags: ['棋类', '策略', '经典'], difficulty: '中等', icon: '♞' },
    { id: 'strategy-009', name: '斗兽棋', category: 'strategy', description: '动物对战，大吃小', tags: ['棋类', '动物', '策略'], difficulty: '简单', icon: '🦁' },
    { id: 'strategy-010', name: '军棋（简化版）', category: 'strategy', description: '军事策略对战', tags: ['棋类', '军事', '策略'], difficulty: '中等', icon: '🎖️' },
    
    // 反应类 (10个)
    { id: 'reaction-001', name: '反应速度测试', category: 'reaction', description: '测试你的反应速度', tags: ['反应', '速度', '测试'], difficulty: '简单', icon: '⚡' },
    { id: 'reaction-002', name: '点击挑战', category: 'reaction', description: '在限定时间内点击尽可能多的目标', tags: ['点击', '速度', '挑战'], difficulty: '简单', icon: '👆' },
    { id: 'reaction-003', name: '颜色反应', category: 'reaction', description: '快速识别并点击正确的颜色', tags: ['颜色', '识别', '速度'], difficulty: '简单', icon: '🎨' },
    { id: 'reaction-004', name: '闪避球', category: 'reaction', description: '躲避飞来的球', tags: ['躲避', '反应', '生存'], difficulty: '中等', icon: '🔴' },
    { id: 'reaction-005', name: '快速计算', category: 'reaction', description: '快速进行数学计算', tags: ['数学', '速度', '脑力'], difficulty: '中等', icon: '🔢' },
    { id: 'reaction-006', name: '节奏大师', category: 'reaction', description: '跟随节奏点击', tags: ['节奏', '音乐', '点击'], difficulty: '中等', icon: '🎵' },
    { id: 'reaction-007', name: '追踪目标', category: 'reaction', description: '追踪移动的目标并点击', tags: ['追踪', '瞄准', '反应'], difficulty: '中等', icon: '🎯' },
    { id: 'reaction-008', name: '快速记忆', category: 'reaction', description: '快速记住并复现图案', tags: ['记忆', '速度', '图案'], difficulty: '困难', icon: '🧠' },
    { id: 'reaction-009', name: '双击挑战', category: 'reaction', description: '快速双击目标', tags: ['双击', '速度', '挑战'], difficulty: '简单', icon: '✌️' },
    { id: 'reaction-010', name: '连击挑战', category: 'reaction', description: '保持连击不断', tags: ['连击', '节奏', '挑战'], difficulty: '中等', icon: '🔥' },
    
    // 射击类 (10个)
    { id: 'shooting-001', name: '打靶射击', category: 'shooting', description: '瞄准靶心射击', tags: ['射击', '瞄准', '精度'], difficulty: '简单', icon: '🎯' },
    { id: 'shooting-002', name: '太空射击', category: 'shooting', description: '在太空中消灭敌人', tags: ['太空', '射击', '动作'], difficulty: '中等', icon: '🚀' },
    { id: 'shooting-003', name: '气球射击', category: 'shooting', description: '射击飘起的气球', tags: ['气球', '射击', '瞄准'], difficulty: '简单', icon: '🎈' },
    { id: 'shooting-004', name: '僵尸射击', category: 'shooting', description: '消灭来袭的僵尸', tags: ['僵尸', '射击', '生存'], difficulty: '中等', icon: '🧟' },
    { id: 'shooting-005', name: '飞碟射击', category: 'shooting', description: '射击飞行的飞碟', tags: ['飞碟', '射击', '瞄准'], difficulty: '中等', icon: '🛸' },
    { id: 'shooting-006', name: '狙击手', category: 'shooting', description: '远距离精确射击', tags: ['狙击', '精度', '瞄准'], difficulty: '困难', icon: '🔭' },
    { id: 'shooting-007', name: '坦克大战', category: 'shooting', description: '驾驶坦克消灭敌人', tags: ['坦克', '射击', '对战'], difficulty: '中等', icon: '🛡️' },
    { id: 'shooting-008', name: '弓箭射击', category: 'shooting', description: '用弓箭射击目标', tags: ['弓箭', '射击', '精度'], difficulty: '中等', icon: '🏹' },
    { id: 'shooting-009', name: '水果忍者', category: 'shooting', description: '切开飞来的水果', tags: ['水果', '切割', '反应'], difficulty: '简单', icon: '🍉' },
    { id: 'shooting-010', name: '鸭子射击', category: 'shooting', description: '经典的打鸭子游戏', tags: ['鸭子', '射击', '经典'], difficulty: '简单', icon: '🦆' },
    
    // 休闲类 (10个)
    { id: 'casual-001', name: '弹钢琴', category: 'casual', description: '在虚拟钢琴上演奏', tags: ['音乐', '钢琴', '创作'], difficulty: '简单', icon: '🎹' },
    { id: 'casual-002', name: '接水果', category: 'casual', description: '用篮子接住掉落的水果', tags: ['接物', '水果', '反应'], difficulty: '简单', icon: '🍎' },
    { id: 'casual-003', name: '养宠物', category: 'casual', description: '照顾你的虚拟宠物', tags: ['宠物', '养成', '休闲'], difficulty: '简单', icon: '🐱' },
    { id: 'casual-004', name: '钓鱼游戏', category: 'casual', description: '享受钓鱼的乐趣', tags: ['钓鱼', '休闲', '耐心'], difficulty: '简单', icon: '🎣' },
    { id: 'casual-005', name: '种花游戏', category: 'casual', description: '种植并照顾花朵', tags: ['花朵', '种植', '休闲'], difficulty: '简单', icon: '🌸' },
    { id: 'casual-006', name: '打鼓游戏', category: 'casual', description: '跟随节奏敲打鼓', tags: ['音乐', '鼓', '节奏'], difficulty: '简单', icon: '🥁' },
    { id: 'casual-007', name: '气泡消除', category: 'casual', description: '点击消除气泡', tags: ['气泡', '消除', '放松'], difficulty: '简单', icon: '🫧' },
    { id: 'casual-008', name: '摇骰子', category: 'casual', description: '简单的摇骰子游戏', tags: ['骰子', '运气', '休闲'], difficulty: '简单', icon: '🎲' },
    { id: 'casual-009', name: '堆叠游戏', category: 'casual', description: '堆叠方块，看谁堆得高', tags: ['堆叠', '平衡', '技巧'], difficulty: '中等', icon: '📦' },
    { id: 'casual-010', name: '旋转陀螺', category: 'casual', description: '让陀螺保持旋转', tags: ['陀螺', '平衡', '技巧'], difficulty: '简单', icon: '🌀' },
    
    // 文字类 (10个)
    { id: 'word-001', name: '打字练习', category: 'word', description: '练习打字速度', tags: ['打字', '速度', '练习'], difficulty: '简单', icon: '⌨️' },
    { id: 'word-002', name: '猜单词', category: 'word', description: '根据提示猜出单词', tags: ['单词', '猜测', '英语'], difficulty: '中等', icon: '📝' },
    { id: 'word-003', name: '成语接龙', category: 'word', description: '用上一个成语的末字开头', tags: ['成语', '接龙', '中文'], difficulty: '中等', icon: '🐉' },
    { id: 'word-004', name: '词语填空', category: 'word', description: '填入正确的词语', tags: ['词语', '填空', '语言'], difficulty: '简单', icon: '✏️' },
    { id: 'word-005', name: '字母排序', category: 'word', description: '将打乱的字母排成单词', tags: ['字母', '排序', '英语'], difficulty: '简单', icon: '🔤' },
    { id: 'word-006', name: '句子重组', category: 'word', description: '将打乱的词语组成句子', tags: ['句子', '重组', '语言'], difficulty: '中等', icon: '📃' },
    { id: 'word-007', name: '填字游戏', category: 'word', description: '填字游戏', tags: ['填字', '词汇', '益智'], difficulty: '困难', icon: '📰' },
    { id: 'word-008', name: '找错字', category: 'word', description: '找出句子中的错别字', tags: ['错字', '检查', '中文'], difficulty: '简单', icon: '🔍' },
    { id: 'word-009', name: '古诗填空', category: 'word', description: '填写古诗中缺失的字', tags: ['古诗', '文学', '中文'], difficulty: '中等', icon: '📜' },
    { id: 'word-010', name: '单词拼写', category: 'word', description: '根据发音拼写单词', tags: ['拼写', '英语', '听写'], difficulty: '中等', icon: '✍️' },
    
    // 卡牌类 (10个)
    { id: 'card-001', name: '21点', category: 'card', description: '经典的21点扑克游戏', tags: ['扑克', '策略', '博弈'], difficulty: '简单', icon: '🃏' },
    { id: 'card-002', name: '接龙', category: 'card', description: '经典的纸牌接龙游戏', tags: ['纸牌', '经典', '策略'], difficulty: '中等', icon: '♠️' },
    { id: 'card-003', name: '蜘蛛纸牌', category: 'card', description: '更具挑战性的纸牌游戏', tags: ['纸牌', '策略', '挑战'], difficulty: '困难', icon: '🕷️' },
    { id: 'card-004', name: '翻牌配对', category: 'card', description: '翻开卡牌找出配对', tags: ['配对', '记忆', '卡牌'], difficulty: '简单', icon: '🎴' },
    { id: 'card-005', name: '抽鬼牌', category: 'card', description: '不要抽到鬼牌', tags: ['运气', '卡牌', '多人'], difficulty: '简单', icon: '👻' },
    { id: 'card-006', name: '比大小', category: 'card', description: '简单的比大小游戏', tags: ['运气', '简单', '卡牌'], difficulty: '简单', icon: '🎴' },
    { id: 'card-007', name: '扑克排序', category: 'card', description: '将扑克牌按顺序排列', tags: ['排序', '策略', '扑克'], difficulty: '中等', icon: '🃏' },
    { id: 'card-008', name: '炸金花', category: 'card', description: '比较牌面大小的游戏', tags: ['扑克', '比牌', '策略'], difficulty: '中等', icon: '💰' },
    { id: 'card-009', name: '斗地主（简化版）', category: 'card', description: '经典斗地主简化版', tags: ['扑克', '对战', '策略'], difficulty: '中等', icon: '👑' },
    { id: 'card-010', name: '德州扑克（简化版）', category: 'card', description: '德州扑克简化版', tags: ['扑克', '策略', '博弈'], difficulty: '困难', icon: '🤠' },
    
    // 体育类 (10个)
    { id: 'sports-001', name: '篮球投篮', category: 'sports', description: '投篮得分游戏', tags: ['篮球', '投篮', '瞄准'], difficulty: '简单', icon: '🏀' },
    { id: 'sports-002', name: '足球射门', category: 'sports', description: '射入球门得分', tags: ['足球', '射门', '瞄准'], difficulty: '简单', icon: '⚽' },
    { id: 'sports-003', name: '乒乓球', category: 'sports', description: '打乒乓球', tags: ['乒乓球', '反应', '对战'], difficulty: '中等', icon: '🏓' },
    { id: 'sports-004', name: '高尔夫', category: 'sports', description: '打网球', tags: ['网球', '反应', '对战'], difficulty: '中等', icon: '⛳' },
    { id: 'sports-005', name: '网球', category: 'sports', description: '打保龄球', tags: ['保龄球', '瞄准', '技巧'], difficulty: '简单', icon: '🎾' },
    { id: 'sports-006', name: '台球', category: 'sports', description: '打台球', tags: ['台球', '瞄准', '技巧'], difficulty: '中等', icon: '🎱' },
    { id: 'sports-007', name: '高尔夫', category: 'sports', description: '打高尔夫球', tags: ['高尔夫', '瞄准', '技巧'], difficulty: '中等', icon: '⛳' },
    { id: 'sports-008', name: '跳远', category: 'sports', description: '跳远比赛', tags: ['跳远', '田径', '力量'], difficulty: '简单', icon: '🏃' },
    { id: 'sports-009', name: '游泳', category: 'sports', description: '游泳比赛', tags: ['游泳', '速度', '比赛'], difficulty: '简单', icon: '🏊' },
    { id: 'sports-010', name: '滑雪', category: 'sports', description: '滑雪游戏', tags: ['滑雪', '躲避', '速度'], difficulty: '中等', icon: '⛷️' },
    
    // 创意类 (10个)
    { id: 'creative-001', name: '像素画板', category: 'creative', description: '在像素画板上创作', tags: ['像素', '绘画', '创作'], difficulty: '简单', icon: '🎨' },
    { id: 'creative-002', name: '音乐创作', category: 'creative', description: '创作自己的音乐', tags: ['音乐', '创作', '节拍'], difficulty: '中等', icon: '🎵' },
    { id: 'creative-003', name: '涂色游戏', category: 'creative', description: '给图片涂色', tags: ['涂色', '绘画', '放松'], difficulty: '简单', icon: '🖌️' },
    { id: 'creative-004', name: '捏泥人', category: 'creative', description: '虚拟捏泥人', tags: ['泥人', '创作', '3D'], difficulty: '中等', icon: '🗿' },
    { id: 'creative-005', name: '拼贴画', category: 'creative', description: '用素材创作拼贴画', tags: ['拼贴', '创作', '艺术'], difficulty: '简单', icon: '🖼️' },
    { id: 'creative-006', name: '字体设计', category: 'creative', description: '设计创意字体', tags: ['字体', '设计', '创作'], difficulty: '中等', icon: '🔤' },
    { id: 'creative-007', name: '服装搭配', category: 'creative', description: '搭配服装造型', tags: ['服装', '搭配', '时尚'], difficulty: '简单', icon: '👗' },
    { id: 'creative-008', name: '建筑模拟', category: 'creative', description: '设计建筑', tags: ['建筑', '设计', '3D'], difficulty: '困难', icon: '🏢' },
    { id: 'creative-009', name: '表情包制作', category: 'creative', description: '制作表情包', tags: ['表情', '创作', '趣味'], difficulty: '简单', icon: '😂' },
    { id: 'creative-010', name: '动画制作', category: 'creative', description: '制作简单动画', tags: ['动画', '创作', '艺术'], difficulty: '困难', icon: '🎬' }
];

// 导出游戏数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gamesData;
}
