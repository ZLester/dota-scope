var request = require('request');
var cheerio = require('cheerio');
var heroController = require('../controllers/heroController.js');
var mongoose = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/dotascope';
mongoose.connect(mongoUri);

var dotaMaxEndpoints = ['abaddon', 'alchemist', 'ancient_apparition', 'antimage', 'axe', 'bane', 'batrider', 'beastmaster', 'bloodseeker', 'bountyhunter', 'brewmaster', 'bristleback', 'broodmother', 'centaurwarrunner', 'chaosknight', 'chen', 'clinkz', 'clockwerk', 'crystalmaiden', 'darkseer', 'dazzle', 'deathprophet', 'disruptor', 'doom', 'dragonknight', 'drowranger', 'earthshaker', 'earthspirit', 'eldertitan', 'emberspirit', 'enchantress', 'enigma', 'facelessvoid', 'gyrocopter', 'huskar', 'invoker', 'jakiro', 'juggernaut', 'keeperofthelight', 'kunkka', 'legioncommander', 'leshrac', 'lich', 'lifestealer', 'lina', 'lion', 'lonedruid', 'luna', 'lycan', 'magnus', 'medusa', 'meepo', 'mirana', 'morphling', 'nagasiren', 'naturesprophet', 'necrophos', 'nightstalker', 'nyxassassin', 'ogremagi', 'omniknight', 'oracle', 'outworlddevourer', 'phantomassassin', 'phantomlancer', 'phoenix', 'puck', 'pudge', 'pugna', 'queenofpain', 'razor', 'riki', 'rubick', 'sandking', 'shadowdemon', 'shadowfiend', 'shadowshaman', 'silencer', 'wraithking', 'skywrathmage', 'slardar', 'slark', 'sniper', 'spectre', 'spiritbreaker', 'stormspirit', 'sven', 'techies', 'templarassassin', 'terrorblade', 'tidehunter', 'timbersaw', 'tinker', 'tiny', 'treantprotector', 'trollwarlord', 'tusk', 'undying', 'ursa', 'vengefulspirit', 'venomancer', 'viper', 'visage', 'warlock', 'weaver', 'windrunner', 'winterwyvern', 'io', 'witchdoctor', 'zeus'];
var curHero = heroNames[0];

var url = 'http://dotamax.com/hero/detail/match_up_anti/' + dotaMaxEndpoints + '/';

request(url, function(error, response, html){
  if(!error) {
    var $ = cheerio.load(html);
    var chineseHash = {
      '撼地者' : 'earthshaker', 
      '斯温' : 'sven', 
      '小小' : 'tiny',
      '昆卡' : 'kunkka',
      '兽王' : 'beastmaster', 
      '钢背兽' : 'bristleback', 
      '伐木机' : 'timbersaw',
      '半人马战行者' : 'centaurwarrunner', 
      '艾欧' : 'io',
      '工程师' : 'techies',
      '军团指挥官' : 'legioncommander',
      '树精卫士' : 'treantprotector',
      '酒仙' : 'brewmaster',
      '炼金术士' : 'alchemist',
      '哈斯卡' : 'huskar', 
      '全能骑士' : 'omniknight', 
      '发条技师' : 'clockwerk', 
      '龙骑士' : 'dragonknight', 
      '暗夜魔王' : 'nightstalker', 
      '噬魂鬼' : 'lifestealer', 
      '冥魂大帝' : 'wraithking',
      '潮汐猎人' : 'tidehunter', 
      '斯拉达' : 'slardar', 
      '沙王' : 'sandking', 
      '帕吉' : 'pudge', 
      '斧王' : 'axe', 
      '大地之灵' : 'earthspirit', 
      '上古巨神' : 'eldertitan', 
      '巨牙海民' : 'tusk',
      '裂魂人' : 'spiritbreaker', 
      '狼人' : 'lycanthrope', 
      '混沌骑士' : 'chaosknight', 
      '不朽尸王' : 'undying', 
      '马格纳斯' : 'magnus', 
      '亚巴顿' : 'abaddon',
      '末日使者' : 'doom', 
      '巨魔战将' : 'trollwarlord', 
      '灰烬之灵' : 'emberspirit', 
      '娜迦海妖' : 'nagasiren', 
      '德鲁伊' : 'lonedruid', 
      '矮人直升机' : 'gyrocopter', 
      '熊战士' : 'ursa', 
      '狙击手' : 'sniper', 
      '圣堂刺客': 'templarassassin',
      '露娜' : 'luna', 
      '赏金猎人' : 'bountyhunter', 
      '力丸' : 'riki', 
      '复仇之魂' : 'vengefulspirit', 
      '幻影长矛手' : 'phantomlancer', 
      '变体精灵' : 'morphling', 
      '米拉娜' : 'mirana', 
      '主宰' : 'juggernaut', 
      '卓尔游侠' : 'drowranger', 
      '敌法师' : 'antimage', 
      '美杜莎' : 'medusa', 
      '斯拉克' : 'slark', 
      '司夜刺客' : 'nyxassassin',
      '米波' : 'meepo', 
      '幽鬼' : 'spectre',
      '编织者' : 'weaver', 
      '神谕者' : 'oracle',
      '育母蜘蛛' : 'broodmother', 
      '克林克兹' : 'clinkz', 
      '冥界亚龙' : 'viper', 
      '幻影刺客' : 'phantomassassin', 
      '虚空假面' : 'facelessvoid', 
      '剧毒术士' : 'venomancer', 
      '剃刀' : 'razor', 
      '影魔' : 'shadowfiend',
      '嗜血狂魔' : 'bloodseeker', 
      '寒冬飞龙' : 'winterwyvern',
      '恐怖利刃' : 'terrorblade',
      '凤凰' : 'phoenix',
      '天怒法师' : 'skywrathmage', 
      '光之守卫' : 'keeperofthelight',
      '干扰者' : 'disruptor',
      '拉比克': 'rubick',
      '食人魔魔法师' : 'ogremagi',
      '沉默术士' : 'silencer',
      '陈' : 'chen',
      '杰奇洛' : 'jakiro',
      '魅惑魔女' : 'enchantress',
      '先知' : 'naturesprophet', 
      '修补匠' : 'tinker',
      '暗影萨满' : 'shadowshaman', 
      '莉娜' : 'lina', 
      '宙斯' : 'zeus', 
      '风行者' : 'windrunner',
      '风暴之灵' : 'stormspirit',
      '帕克' : 'puck',
      '水晶室女' : 'crystalmaiden',
      '维萨吉' : 'visage',
      '暗影恶魔' : 'shadowdemon',
      '殁境神蚀者' : 'outworlddevourer',
      '黑暗贤者' : 'darkseer',
      '蝙蝠骑士' : 'batrider',
      '远古冰魄' : 'ancientapparition',
      '祈求者' : 'invoker',
      '拉席克' : 'leshrac',
      '戴泽' : 'dazzle',
      '帕格纳' : 'pugna', 
      '死亡先知' : 'deathprophet',
      '痛苦女王' : 'queenofpain',
      '术士' : 'warlock',
      '瘟疫法师' : 'necrophos',
      '谜团' : 'enigma',
      '巫医' : 'witchdoctor',
      '莱恩' : 'lion', 
      '巫妖' : 'lich',
      '祸乱之源' : 'bane',
    }
    var result = {};
    for (var i = 0; i < 109; i++) {
      var chineseName = $($('.table-list tr')[i].children[0].children[1]).text();
      var englishName = chineseHash[chineseName];
      var counterPercentage = $($('.table-list tr')[i].children[1].children[0]).text();
      var parsedCounter = parseFloat(counterPercentage.replace('%',''));
      result[englishName] = parsedCounter;
      if (englishName === undefined) {
        console.log('WARNING FIX: ' + chineseName);
      }
      console.log(chineseName + ' translated to ' + englishName + ' with a counter % of ' + counterPercentage);
    }
    console.log(result);
    heroController.updateByName(curHero, result, function(err, res) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Updated ' + curHero + '\nNew stats: \n' + res);
    })
  }
});
