// GameHub100 - 主应用逻辑

class GameHub {
    constructor() {
        this.games = gamesData;
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        this.renderGames();
        this.setupEventListeners();
    }

    // 渲染游戏列表
    renderGames(category = 'all') {
        const grid = document.getElementById('gameGrid');
        const filteredGames = category === 'all' 
            ? this.games 
            : this.games.filter(game => game.category === category);

        grid.innerHTML = filteredGames.map(game => `
            <div class="game-card" data-game-id="${game.id}">
                <div class="game-card-image">
                    <span style="font-size: 80px; line-height: 180px; text-align: center; display: block;">${game.icon}</span>
                </div>
                <div class="game-card-content">
                    <h3>${game.name}</h3>
                    <p>${game.description}</p>
                    <div class="game-card-tags">
                        <span class="tag">${game.difficulty}</span>
                        ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // 添加点击事件
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => {
                const gameId = card.dataset.gameId;
                this.openGame(gameId);
            });
        });
    }

    // 打开游戏
    openGame(gameId) {
        const game = this.games.find(g => g.id === gameId);
        if (game) {
            // 跳转到游戏页面
            window.location.href = `games/${game.category}/${game.id}.html`;
        }
    }

    // 设置事件监听
    setupEventListeners() {
        // 分类按钮
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // 移除所有active类
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                // 添加active类到当前按钮
                e.target.classList.add('active');
                
                // 获取分类并渲染
                const category = e.target.dataset.category;
                this.currentCategory = category;
                this.renderGames(category);
            });
        });

        // 搜索功能
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        searchBtn.addEventListener('click', () => this.searchGames(searchInput.value));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchGames(searchInput.value);
            }
        });
    }

    // 搜索游戏
    searchGames(query) {
        if (!query.trim()) {
            this.renderGames(this.currentCategory);
            return;
        }

        const filteredGames = this.games.filter(game => 
            game.name.toLowerCase().includes(query.toLowerCase()) ||
            game.description.toLowerCase().includes(query.toLowerCase()) ||
            game.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );

        const grid = document.getElementById('gameGrid');
        if (filteredGames.length === 0) {
            grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">没有找到匹配的游戏</p>';
        } else {
            grid.innerHTML = filteredGames.map(game => `
                <div class="game-card" data-game-id="${game.id}">
                    <div class="game-card-image">
                        <span style="font-size: 80px; line-height: 180px; text-align: center; display: block;">${game.icon}</span>
                    </div>
                    <div class="game-card-content">
                        <h3>${game.name}</h3>
                        <p>${game.description}</p>
                        <div class="game-card-tags">
                            <span class="tag">${game.difficulty}</span>
                            ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new GameHub();
});
