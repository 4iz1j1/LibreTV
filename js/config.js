// 全局变量配置
const PROXY_URL = '/proxy/';    // 可用在 Cloudflare, Netlify（测试用）, Vercel（测试用）
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码相关配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证成功的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期90天，即3个月
    adminLocalStorageKey: 'adminPasswordVerified'  // 管理员验证成功的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '提供全网高清电影资源的聚合平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API源配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '笔锋资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天天影视资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪影视',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '风风影视',
        detail: 'http://ffzy5.tv',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳影视',
        detail: 'https://heimuer.tv',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360影视资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi影视资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙影视',
    },
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '欢乐吧影视',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速影视',
        detail: 'https://jszyapi.com',
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '朴嗙摚资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪影视',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔豆影视',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最顶影视'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花影视'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '午夜影视'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun影视'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '凌子资源'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '测试源',
        adult: true
    },
    // 以下注释部分是可能存在的成人API源，默认隐藏
};

// 定义扩展API方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 挂载到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;

// 聚合搜索配置
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,             // 每个源请求超时（毫秒）
    maxResults: 10000,         // 最大结果数
    parallelRequests: true,    // 是否并行请求各个源
    showSourceBadges: true     // 是否显示来源徽章
};

// API请求配置
const API_CONFIG = {
    search: {
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大翻页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 正则匹配m3u8链接
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径player.html

// 播放器配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,        // 播放器请求超时
    filterAds: true,       // 是否启用广告屏蔽
    autoPlayNext: true,    // 默认启用自动播放下一集
    adFilteringEnabled: true,
    adFilteringStorage: 'adFilteringEnabled'
};

// 错误信息配置
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请刷新页面或更换资源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 安全配置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否处理URL
    maxQueryLength: 100,        // 最大查询长度
};

// 自定义API配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大同时源数
    testTimeout: 5000,        // 测试超时（毫秒）
    namePrefix: 'Custom-',    // 源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存有效期（2个月）
    adultPropName: 'isAdult'  // 标识成人内容属性
};

// 是否隐藏内置成人API
const HIDE_BUILTIN_ADULT_APIS = false;
