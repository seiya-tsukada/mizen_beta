// ダミーデータ
const activityData = [
    { id: 1, type: 'user', message: '新規ユーザーが登録されました', time: '10分前' },
    { id: 2, type: 'order', message: '新しい注文が入りました', time: '30分前' },
    { id: 3, type: 'system', message: 'システムメンテナンスが完了しました', time: '1時間前' }
];

// アクティビティリストの生成
function generateActivityList() {
    const activityList = document.querySelector('.activity-list');
    activityList.innerHTML = activityData.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-${getActivityIcon(activity.type)}"></i>
            </div>
            <div class="activity-content">
                <p>${activity.message}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        </div>
    `).join('');
}

// アクティビティタイプに応じたアイコンを取得
function getActivityIcon(type) {
    const icons = {
        user: 'user',
        order: 'shopping-cart',
        system: 'cog'
    };
    return icons[type] || 'info-circle';
}

// チャートの初期化
function initializeCharts() {
    // 売上推移チャート
    const salesChart = document.getElementById('salesChart');
    if (salesChart) {
        // ここにチャートライブラリ（Chart.jsなど）を使用した実装を追加
        console.log('売上推移チャートを初期化');
    }

    // ユーザー分布チャート
    const userDistributionChart = document.getElementById('userDistributionChart');
    if (userDistributionChart) {
        // ここにチャートライブラリ（Chart.jsなど）を使用した実装を追加
        console.log('ユーザー分布チャートを初期化');
    }
}

// 検索機能
function initializeSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log('検索:', e.target.value);
            // ここに検索機能の実装を追加
        });
    }
}

// 通知機能
function initializeNotifications() {
    const notificationBell = document.querySelector('.notifications');
    if (notificationBell) {
        notificationBell.addEventListener('click', () => {
            console.log('通知を表示');
            // ここに通知機能の実装を追加
        });
    }
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', () => {
    generateActivityList();
    initializeCharts();
    initializeSearch();
    initializeNotifications();
}); 