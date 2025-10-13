const STAR_TO_TON = 0.008571;
const items = [
    { id: 'witchhat-28131', name: 'Witch Hat (шляпа)', price: 4.0, image: 'https://nft.fragment.com/gift/witchhat-28131.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'bdaycandle-126281', name: 'B-Day Candle (хепи бездей, свечка)', price: 1.22, image: 'https://nft.fragment.com/gift/bdaycandle-126281.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'berrybox-25500', name: 'Berry Box (клубничка)', price: 5.0, image: 'https://nft.fragment.com/gift/berrybox-25500.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'astralshard-3152', name: 'Astral Shard', price: 135.0, image: 'https://nft.fragment.com/gift/astralshard-3152.medium.jpg', rarity: 'legendary', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'bigyear-34582', name: 'Big Year', price: 0.02, image: 'https://nft.fragment.com/gift/bigyear-34582.medium.jpg', rarity: 'uncommon', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'astralshard-3163', name: 'Astral Shard', price: 0.02, image: 'https://nft.fragment.com/gift/astralshard-3163.medium.jpg', rarity: 'legendary', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'bdaycandle-4141', name: 'B-Day Candle', price: 0.02, image: 'https://nft.fragment.com/gift/bdaycandle-4141.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'berrybox-40043', name: 'Berry Box', price: 0.02, image: 'https://nft.fragment.com/gift/berrybox-40043.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'bondedring-5965', name: 'Bonded Ring', price: 0.02, image: 'https://nft.fragment.com/gift/bondedring-5965.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'bowtie-28769', name: 'Bow Tie', price: 0.02, image: 'https://nft.fragment.com/gift/bowtie-28769.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'bunnymuffin-12885', name: 'Bunny Muffin', price: 0.02, image: 'https://nft.fragment.com/gift/bunnymuffin-12885.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'cookieheart-6666', name: 'Cookie Heart', price: 0.02, image: 'https://nft.fragment.com/gift/cookieheart-6666.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'candycane-8666', name: 'Candy Cane', price: 0.02, image: 'https://nft.fragment.com/gift/candycane-8666.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'crystalball-12686', name: 'Crystal Ball', price: 0.02, image: 'https://nft.fragment.com/gift/crystalball-12686.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'cupidcharm-9131', name: 'Cupid Charm', price: 0.02, image: 'https://nft.fragment.com/gift/cupidcharm-9131.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'deskcalendar-40546', name: 'Desk Calendar', price: 0.02, image: 'https://nft.fragment.com/gift/deskcalendar-40546.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'diamondring-27070', name: 'Diamond Ring', price: 0.02, image: 'https://nft.fragment.com/gift/diamondring-27070.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'durovscap-1896', name: 'Durov’s Cap', price: 0.02, image: 'https://nft.fragment.com/gift/durovscap-1896.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'easteregg-103928', name: 'Easter Egg', price: 0.02, image: 'https://nft.fragment.com/gift/easteregg-103928.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'electricskull-7480', name: 'Electric Skull', price: 0.02, image: 'https://nft.fragment.com/gift/electricskull-7480.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'eternalcandle-35905', name: 'Eternal Candle', price: 0.02, image: 'https://nft.fragment.com/gift/eternalcandle-35905.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'eternalrose-22', name: 'Eternal Rose', price: 0.02, image: 'https://nft.fragment.com/gift/eternalrose-22.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'evileye-32715', name: 'Evil Eye', price: 0.02, image: 'https://nft.fragment.com/gift/evileye-32715.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'flyingbroom-22528', name: 'Flying Broom', price: 0.02, image: 'https://nft.fragment.com/gift/flyingbroom-22528.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'freshsocks-60569', name: 'Fresh Sock', price: 0.02, image: 'https://nft.fragment.com/gift/freshsocks-60569.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'gemsignet-1544', name: 'Gem Signet', price: 0.02, image: 'https://nft.fragment.com/gift/gemsignet-1544.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'genielamp-3228', name: 'Genie Lamp', price: 0.02, image: 'https://nft.fragment.com/gift/genielamp-3228.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'gingercookie-26328', name: 'Ginger Cookie', price: 0.02, image: 'https://nft.fragment.com/gift/gingercookie-26328.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'hangingstar-5', name: 'Hanging Star', price: 0.02, image: 'https://nft.fragment.com/gift/hangingstar-5.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'heartlocket-875', name: 'Heart Locket', price: 0.02, image: 'https://nft.fragment.com/gift/heartlocket-875.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'hexpot-14463', name: 'Hex Pot', price: 0.02, image: 'https://nft.fragment.com/gift/hexpot-14463.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'holidaydrink-4449', name: 'Holiday Drin', price: 0.02, image: 'https://nft.fragment.com/gift/holidaydrink-4449.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'homemadecake-99999', name: 'Homemade Cake', price: 0.02, image: 'https://nft.fragment.com/gift/homemadecake-99999.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'hypnolollipop-18577', name: 'Hypno Lollipop', price: 0.02, image: 'https://nft.fragment.com/gift/hypnolollipop-18577.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'inputkey-7756', name: 'Input Key', price: 0.02, image: 'https://nft.fragment.com/gift/inputkey-7756.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'iongem-555', name: 'Ion Gem', price: 0.02, image: 'https://nft.fragment.com/gift/iongem-555.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'ionicdryer-10997', name: 'Ionic Dryer', price: 0.02, image: 'https://nft.fragment.com/gift/ionicdryer-10997.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'jackinthebox-59291', name: 'Jacks-in-the-Box', price: 0.02, image: 'https://nft.fragment.com/gift/jackinthebox-59291.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'jellybunny-31356', name: 'Jelly Bunnie', price: 0.02, image: 'https://nft.fragment.com/gift/jellybunny-31356.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'jesterhat-6', name: 'Jester Hat', price: 0.02, image: 'https://nft.fragment.com/gift/jesterhat-6.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'jinglebells-58366', name: 'Jingle Bell', price: 0.02, image: 'https://nft.fragment.com/gift/jinglebells-58366.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'jollychimp-22614', name: 'Jolly Chimp', price: 0.02, image: 'https://nft.fragment.com/gift/jollychimp-22614.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'joyfulbundle-10953', name: 'Joyful Bundle', price: 0.02, image: 'https://nft.fragment.com/gift/joyfulbundle-10953.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'kissedfrog-1141', name: 'Kissed Frog', price: 0.02, image: 'https://nft.fragment.com/gift/kissedfrog-1141.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lightsword-2165', name: 'Light Sword', price: 0.02, image: 'https://nft.fragment.com/gift/lightsword-2165.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lolpop-94355', name: 'Lol Pop', price: 0.02, image: 'https://nft.fragment.com/gift/lolpop-94355.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lootbag-11217', name: 'Loot Bag', price: 0.02, image: 'https://nft.fragment.com/gift/lootbag-11217.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lovecandle-18042', name: 'Love Candle', price: 0.02, image: 'https://nft.fragment.com/gift/lovecandle-18042.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lovepotion-109', name: 'Love Potion', price: 0.02, image: 'https://nft.fragment.com/gift/lovepotion-109.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lowrider-1279', name: 'Low Rider', price: 0.02, image: 'https://nft.fragment.com/gift/lowrider-1279.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lunarsnake-56789', name: 'Lunar Snake', price: 0.02, image: 'https://nft.fragment.com/gift/lunarsnake-56789.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'lushbouquet-12386', name: 'Lush Bouquet', price: 0.02, image: 'https://nft.fragment.com/gift/lushbouquet-12386.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'madpumpkin-888', name: 'Mad Pumpkin', price: 0.02, image: 'https://nft.fragment.com/gift/madpumpkin-888.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'magicpotion-2', name: 'Magic Potion', price: 0.02, image: 'https://nft.fragment.com/gift/magicpotion-2.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'mightyarm-3109', name: 'Mighty Arm', price: 0.02, image: 'https://nft.fragment.com/gift/mightyarm-3109.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'minioscar-2890', name: 'Mini Oscar', price: 0.02, image: 'https://nft.fragment.com/gift/minioscar-2890.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'moonpendant-18188', name: 'Moon Pendant', price: 0.02, image: 'https://nft.fragment.com/gift/moonpendant-18188.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'nailbracelet-3276', name: 'Nail Bracelet', price: 0.02, image: 'https://nft.fragment.com/gift/nailbracelet-3276.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'nekohelmet-1244', name: 'Neko Helmet', price: 0.02, image: 'https://nft.fragment.com/gift/nekohelmet-1244.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'partysparkler-2255', name: 'Party Sparkler', price: 0.02, image: 'https://nft.fragment.com/gift/partysparkler-2255.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'perfumebottle-672', name: 'Perfume Bottle', price: 0.02, image: 'https://nft.fragment.com/gift/perfumebottle-672.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'petsnake-28085', name: 'Pet Snake', price: 0.02, image: 'https://nft.fragment.com/gift/petsnake-28085.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'plushpepe-2493', name: 'Plush Pepe', price: 0.02, image: 'https://nft.fragment.com/gift/plushpepe-2493.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'preciouspeach-2161', name: 'Precious Peache', price: 0.02, image: 'https://nft.fragment.com/gift/preciouspeach-2161.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'recordplayer-23441', name: 'Record Player', price: 0.02, image: 'https://nft.fragment.com/gift/recordplayer-23441.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'restlessjar-41983', name: 'Restless Jar', price: 0.02, image: 'https://nft.fragment.com/gift/restlessjar-41983.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'sakuraflower-78869', name: 'Sakura Flower', price: 0.02, image: 'https://nft.fragment.com/gift/sakuraflower-78869.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'santahat-46117', name: 'Santa Hat', price: 0.02, image: 'https://nft.fragment.com/gift/santahat-46117.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'scaredcat-1321', name: 'Scared Cat', price: 0.02, image: 'https://nft.fragment.com/gift/scaredcat-1321.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'sharptongue-4346', name: 'Sharp Tongue', price: 0.02, image: 'https://nft.fragment.com/gift/sharptongue-4346.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'signetring-10272', name: 'Signet Ring', price: 0.02, image: 'https://nft.fragment.com/gift/signetring-10272.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'skullflower-10047', name: 'Skull Flower', price: 0.02, image: 'https://nft.fragment.com/gift/skullflower-10047.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'skystilettos-100', name: 'Sky Stiletto', price: 0.02, image: 'https://nft.fragment.com/gift/skystilettos-100.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'sleighbell-10312', name: 'Sleigh Bell', price: 0.02, image: 'https://nft.fragment.com/gift/sleighbell-10312.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'snakebox-100028', name: 'Snake Box', price: 0.02, image: 'https://nft.fragment.com/gift/snakebox-100028.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'snoopcigar-102009', name: 'Snoop Cigar', price: 0.02, image: 'https://nft.fragment.com/gift/snoopcigar-102009.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'snoopdogg-177664', name: 'Snoop Dogg', price: 0.02, image: 'https://nft.fragment.com/gift/snoopdogg-177664.medium.jpg', rarity: 'legendary', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'snowglobe-9426', name: 'Snow Globe', price: 0.02, image: 'https://nft.fragment.com/gift/snowglobe-9426.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'snowmittens-22328', name: 'Snow Mitten', price: 0.02, image: 'https://nft.fragment.com/gift/snowmittens-22328.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'spicedwine-6710', name: 'Spiced Wine', price: 0.02, image: 'https://nft.fragment.com/gift/spicedwine-6710.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'spyagaric-52589', name: 'Spy Agaric', price: 0.02, image: 'https://nft.fragment.com/gift/spyagaric-52589.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'starnotepad-15903', name: 'Star Notepad', price: 0.02, image: 'https://nft.fragment.com/gift/starnotepad-15903.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'stellarrocket-54969', name: 'Stellar Rocket', price: 0.02, image: 'https://nft.fragment.com/gift/stellarrocket-54969.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'swagbag-23308', name: 'Se\\wag Bags', price: 0.02, image: 'https://nft.fragment.com/gift/swagbag-23308.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'swisswatch-17331', name: 'Swiss Watches', price: 0.02, image: 'https://nft.fragment.com/gift/swisswatch-17331.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'tamagadget-7', name: 'Tama Gadget', price: 0.02, image: 'https://nft.fragment.com/gift/tamagadget-7.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'tophat-16032', name: 'Top Hat', price: 0.02, image: 'https://nft.fragment.com/gift/tophat-16032.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'toybear-12595', name: 'Toy Bear', price: 0.02, image: 'https://nft.fragment.com/gift/toybear-12595.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'trappedheart-9568', name: 'Trapped Heart', price: 0.02, image: 'https://nft.fragment.com/gift/trappedheart-9568.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'valentinebox-74', name: 'Valentine Box', price: 0.02, image: 'https://nft.fragment.com/gift/valentinebox-74.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'vintagecigar-1024', name: 'Vintage Cigar', price: 0.02, image: 'https://nft.fragment.com/gift/vintagecigar-1024.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'voodoodoll-1327', name: 'Voodoo Doll', price: 0.02, image: 'https://nft.fragment.com/gift/voodoodoll-1327.medium.jpg', rarity: 'rare', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'westsidesign-10025', name: 'Westside Sign', price: 0.02, image: 'https://nft.fragment.com/gift/westsidesign-10025.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'whipcupcake-39039', name: 'Whip Cupcake', price: 0.02, image: 'https://nft.fragment.com/gift/whipcupcake-39039.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'winterwreath-39544', name: 'Winter Wreath', price: 0.02, image: 'https://nft.fragment.com/gift/winterwreath-39544.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'witchhat-28769', name: 'Witch Hat', price: 0.02, image: 'https://nft.fragment.com/gift/witchhat-28769.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' },
    { id: 'xmasstocking-26729', name: 'Xmas Stocking', price: 0.02, image: 'https://nft.fragment.com/gift/xmasstocking-26729.medium.jpg', rarity: 'common', model: '-', backdrop: '-', symbol: '-', issued: '-' }
];

const caseCards = document.querySelectorAll('.case-card');
const spinBtns = document.querySelectorAll('.spin-btn');
const resultContainer = document.getElementById('result-container');
const historyList = document.getElementById('history-list');
const balanceElement = document.getElementById('balance');
const topUpBtn = document.getElementById('topUpBtn');
const topUpModal = document.getElementById('topUpModal');
const closeModal = document.getElementById('closeModal');
const mainPage = document.getElementById('main-page');
const toast = document.getElementById('toast');
const navItems = document.querySelectorAll('.nav-item');
const pageSections = document.querySelectorAll('.page-section');
const spinModal = document.getElementById('spinModal');
const spinResult = document.getElementById('spinResult');
const closeSpinModal = document.getElementById('closeSpinModal');
const giftSelect = document.getElementById('gift-select');
const targetSelect = document.getElementById('target-select');
const upgradeChance = document.getElementById('upgrade-chance');
const upgradeCost = document.getElementById('upgrade-cost');
const upgradeBtn = document.getElementById('upgrade-btn');
const inventoryGrid = document.getElementById('inventory-grid');
const selectedGiftPreview = document.getElementById('selected-gift-preview');
const selectedTargetPreview = document.getElementById('selected-target-preview');
const ratingTableBody = document.getElementById('rating-table-body');
const noRatingData = document.getElementById('no-rating-data');
const operationsList = document.getElementById('operations-list');
let selectedCase = 'start';
let isRolling = false;
let rollsHistory = [];
let currentBalance = 50000 * STAR_TO_TON; // 50000 Stars → TON
let userInventory = [];
let operationsHistory = [];
let preloadedImages = new Map();
let imagesPreloadedCount = 0;
let imagesPreloadTotal = 0;

function preloadItemImages() {
    try {
        const head = document.head;
        const uniqueSrcs = Array.from(new Set(items.map(it => it.image)));
        imagesPreloadTotal = uniqueSrcs.length;
        uniqueSrcs.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            head.appendChild(link);
            if (!preloadedImages.has(src)) {
                const img = new Image();
                img.decoding = 'async';
                img.referrerPolicy = 'no-referrer';
                img.onload = () => { imagesPreloadedCount++; };
                img.onerror = () => { imagesPreloadedCount++; };
                img.src = src;
                preloadedImages.set(src, img);
            }
        });
    } catch (e) { }
}

function initFromStorage() {
    const savedBalance = localStorage.getItem('bearDropBalance');
    const savedHistory = localStorage.getItem('bearDropHistory');
    const savedInventory = localStorage.getItem('bearDropInventory');
    const savedOperations = localStorage.getItem('bearDropOperations');
    if (savedBalance) {
        currentBalance = parseFloat(savedBalance);
        balanceElement.textContent = currentBalance.toFixed(6);
    }
    if (savedHistory) {
        rollsHistory = JSON.parse(savedHistory);
        updateHistory();
    }
    if (savedInventory) {
        userInventory = JSON.parse(savedInventory);
        updateInventory();
    }
    if (savedOperations) {
        operationsHistory = JSON.parse(savedOperations);
        updateOperationsHistory();
    }
}

function saveToStorage() {
    localStorage.setItem('bearDropBalance', currentBalance.toString());
    localStorage.setItem('bearDropHistory', JSON.stringify(rollsHistory));
    localStorage.setItem('bearDropInventory', JSON.stringify(userInventory));
    localStorage.setItem('bearDropOperations', JSON.stringify(operationsHistory));
}

function showToast(message, isError = false) {
    toast.textContent = message;
    toast.className = 'toast show';
    toast.style.borderLeftColor = isError ? '#ff6b6b' : '#4e54c8';
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        pageSections.forEach(section => section.classList.remove('active'));
        document.getElementById(`${page}-page`).classList.add('active');
        if (page === 'rating') {
            loadRatingData();
        }
    });
});

spinBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentCard = btn.closest('.case-card');
        const caseType = parentCard ? parentCard.dataset.case : 'start';
        selectedCase = caseType;
        const casePrices = {
            start: 1,
            magic: 30,
            mystic: 400,
            eternal: 30,
            shadow: 30,
            golden: 100,
            celestial: 60,
            arcane: 2490,
            prismatic: 4999,
            royal: 200,
            fabled: 999,
            lunar: 1999
        };
        const priceInStars = casePrices[caseType] || 1;
        const priceInTon = priceInStars * STAR_TO_TON;
        if (currentBalance < priceInTon) {
            showToast('Недостаточно средств! Пополните баланс.', true);
            return;
        }
        currentBalance -= priceInTon;
        balanceElement.textContent = currentBalance.toFixed(6);
        saveToStorage();
        openCase(caseType);
    });
});

function openCase(caseType) {
    if (isRolling) return;
    isRolling = true;
    const casePrices = {
        start: 1,
        magic: 30,
        mystic: 400,
        eternal: 30,
        shadow: 30,
        golden: 100,
        celestial: 60,
        arcane: 2490,
        prismatic: 4999,
        royal: 200,
        fabled: 999,
        lunar: 1999
    };
    const priceInStars = casePrices[caseType] || 1;
    const priceInTon = priceInStars * STAR_TO_TON;
    if (spinModal) spinModal.classList.add('active');
    spinResult.innerHTML = '<div class="empty-state"><p>Загрузка подарков...</p></div>';
    const availableItems = items;
    const winnerIndex = Math.floor(Math.random() * availableItems.length);
    const finalItem = availableItems[winnerIndex];
    const preloadedOk = imagesPreloadTotal > 0 && imagesPreloadedCount >= Math.max(1, Math.floor(imagesPreloadTotal * 0.9));
    if (preloadedOk) {
        startSmoothSpin(finalItem);
        return;
    }
    const allImages = availableItems.map(item => item.image);
    let loadedCount = 0;
    const totalImages = allImages.length;
    let started = false;
    const maybeStart = () => {
        if (!started && loadedCount >= Math.max(1, Math.floor(totalImages * 0.7))) {
            started = true;
            startSmoothSpin(finalItem);
        }
    };
    const timeoutId = setTimeout(() => {
        if (!started) {
            started = true;
            startSmoothSpin(finalItem);
        }
    }, 1500);
    const onImageLoad = () => { loadedCount++; maybeStart(); };
    allImages.forEach(src => {
        if (preloadedImages.has(src)) {
            loadedCount++;
        } else {
            const img = new Image();
            img.onload = onImageLoad;
            img.onerror = onImageLoad;
            img.src = src;
            preloadedImages.set(src, img);
        }
    });
    if (totalImages === 0) {
        clearTimeout(timeoutId);
        startSmoothSpin(finalItem);
    }
}

function startSmoothSpin(finalItem) {
    spinResult.innerHTML = '';
    const spinnerContainer = document.createElement('div');
    spinnerContainer.className = 'spinner-container';
    spinResult.appendChild(spinnerContainer);
    const indicator = document.createElement('div');
    indicator.className = 'spinner-indicator';
    spinnerContainer.appendChild(indicator);
    const spinnerTrack = document.createElement('div');
    spinnerTrack.className = 'spinner-track';
    spinnerContainer.appendChild(spinnerTrack);
    const baseCells = 20;
    const baseItems = Array.from({ length: baseCells }, () => {
        const rndIndex = Math.floor(Math.random() * items.length);
        return items[rndIndex];
    });
    const allItems = baseItems.concat(baseItems);
    const reelStrip = document.createElement('div');
    reelStrip.className = 'reel-strip';
    reelStrip.style.display = 'flex';
    reelStrip.style.alignItems = 'center';
    reelStrip.style.gap = '20px';
    reelStrip.style.willChange = 'transform';
    reelStrip.style.transition = 'none';
    const fallbackSvg = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="100%" height="100%" fill="#1e1e2f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888" font-size="14">no image</text></svg>');
    const fallbackSrc = `data:image/svg+xml;charset=utf-8,${fallbackSvg}`;
    allItems.forEach(item => {
        const reelItem = document.createElement('div');
        reelItem.className = 'reel-item';
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.onerror = () => {
            console.warn('Image failed to load:', item.image);
            img.src = fallbackSrc;
        };
        reelItem.appendChild(img);
        reelStrip.appendChild(reelItem);
    });
    spinnerTrack.appendChild(reelStrip);
    requestAnimationFrame(() => {
        const itemWidth = reelStrip.querySelector('.reel-item')?.getBoundingClientRect().width || 180;
        const gap = 20;
        const cellWidth = itemWidth + gap;
        const containerWidth = spinnerContainer.getBoundingClientRect().width;
        const stripLen = allItems.length;
        let totalWidth = stripLen * cellWidth;
        const searchWindow = Math.min(20, stripLen);
        const lastCycleStart = Math.max(0, stripLen - searchWindow);
        let targetIndex = -1;
        for (let i = stripLen - 1; i >= lastCycleStart; i--) {
            if (allItems[i].id === finalItem.id) {
                targetIndex = i;
                break;
            }
        }
        if (targetIndex === -1) {
            const fallbackItem = document.createElement('div');
            fallbackItem.className = 'reel-item';
            const img = document.createElement('img');
            img.src = finalItem.image;
            img.alt = finalItem.name;
            fallbackItem.appendChild(img);
            reelStrip.appendChild(fallbackItem);
            allItems.push(finalItem);
            targetIndex = allItems.length - 1;
        }
        const center = containerWidth / 2;
        const targetCenter = targetIndex * cellWidth + itemWidth / 2;
        totalWidth = allItems.length * cellWidth;
        let loops = Math.max(1, Math.min(2, Math.floor(6000 / totalWidth)));
        const rawTranslate = center - targetCenter - loops * totalWidth;
        const maxOffset = totalWidth * 2;
        const targetTranslate = Math.max(-maxOffset, Math.min(maxOffset, rawTranslate));
        const startX = 0;
        reelStrip.style.transform = `translate3d(${startX}px, 0, 0)`;
        const duration = Math.floor(7000 + Math.random() * 3000); // 7-10 секунд — медленнее
        const start = performance.now();
        function customEase(t) {
            return 1 - Math.pow(1 - t, 4);
        }
        function animate(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = customEase(progress);
            let currentX = startX + (targetTranslate - startX) * eased;
            if (currentX < -totalWidth) {
                currentX = -totalWidth + (currentX % totalWidth);
            }
            reelStrip.style.transform = `translate3d(${currentX}px, 0, 0)`;
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                finishSpin(null, finalItem);
            }
        }
        requestAnimationFrame(animate);
    });
}

function finishSpin(finalIndex, finalItem) {
    userInventory.push(finalItem);
    rollsHistory.unshift(finalItem);
    operationsHistory.unshift({ type: 'case_open', item: finalItem, case: selectedCase, date: new Date().toLocaleString('ru-RU') });
    if (rollsHistory.length > 10) rollsHistory.pop();
    saveToStorage();
    updateResultContainer('item', finalItem);
    updateSpinModal('item', finalItem);
    updateHistory();
    updateInventory();
    if (finalItem.rarity === 'legendary') {
        createParticles();
        document.body.style.animation = 'none';
        setTimeout(() => { document.body.style.animation = 'pulse 0.5s'; }, 10);
    }
    isRolling = false;
}

function updateSpinModal(state, item = null) {
    if (!spinResult) return;
    if (state === 'item' && item) {
        const rarityClass = `rarity ${item.rarity}`;
        spinResult.innerHTML = `
            <div class="item-display">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <div class="${rarityClass}">${capitalizeFirstLetter(item.rarity)}</div>
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-meta">
                        <div class="item-property">
                            <span>Модель</span>
                            ${item.model}
                        </div>
                        <div class="item-property">
                            <span>Фон</span>
                            ${item.backdrop}
                        </div>
                        <div class="item-property">
                            <span>Символ</span>
                            ${item.symbol}
                        </div>
                        <div class="item-property">
                            <span>Выпущено</span>
                            ${item.issued}
                        </div>
                    </div>
                    <div class="item-price">
                        <i class="fas fa-coins"></i>
                        ${(item.price).toFixed(6)} TON
                    </div>
                    <button class="claim-btn">
                        <i class="fas fa-gift"></i>
                        Забрать подарок
                    </button>
                </div>
            </div>
        `;
        const claimBtn = spinResult.querySelector('.claim-btn');
        if (claimBtn) {
            claimBtn.addEventListener('click', () => {
                showToast(`Поздравляем! Вы получили ${item.name} за ${(item.price).toFixed(6)} TON!`);
                if (spinModal) spinModal.classList.remove('active');
            });
        }
        return;
    }
    spinResult.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">
                <i class="fas fa-gift"></i>
            </div>
            <h3>Еще нет подарка</h3>
            <p>Выберите кейс и нажмите "Крутить", чтобы получить свой подарок</p>
        </div>
    `;
}

function updateResultContainer(state, item = null) {
    resultContainer.innerHTML = '';
    if (state === 'item' && item) {
        const rarityClass = `rarity ${item.rarity}`;
        resultContainer.innerHTML = `
            <div class="item-display">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <div class="${rarityClass}">${capitalizeFirstLetter(item.rarity)}</div>
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-meta">
                        <div class="item-property">
                            <span>Модель</span>
                            ${item.model}
                        </div>
                        <div class="item-property">
                            <span>Фон</span>
                            ${item.backdrop}
                        </div>
                        <div class="item-property">
                            <span>Символ</span>
                            ${item.symbol}
                        </div>
                        <div class="item-property">
                            <span>Выпущено</span>
                            ${item.issued}
                        </div>
                    </div>
                    <div class="item-price">
                        <i class="fas fa-coins"></i>
                        ${(item.price).toFixed(6)} TON
                    </div>
                    <button class="claim-btn">
                        <i class="fas fa-gift"></i>
                        Забрать подарок
                    </button>
                </div>
            </div>
        `;
        document.querySelector('.claim-btn').addEventListener('click', () => {
            showToast(`Поздравляем! Вы получили ${item.name} за ${(item.price).toFixed(6)} TON!`);
        });
    } else {
        resultContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <i class="fas fa-gift"></i>
                </div>
                <h3>Еще нет подарка</h3>
                <p>Выберите кейс и нажмите "Крутить", чтобы получить свой подарок</p>
            </div>
        `;
    }
}

function updateHistory() {
    if (rollsHistory.length === 0) {
        historyList.innerHTML = `<div class="empty-state"><p>Пока нет истории открытий. Откройте кейс, чтобы увидеть свою историю.</p></div>`;
        return;
    }
    historyList.innerHTML = '';
    rollsHistory.forEach(item => {
        const rarityClass = `rarity ${item.rarity}`;
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="history-image">
            <div class="history-name">${item.name}</div>
            <div class="history-meta">
                <span class="${rarityClass}">${capitalizeFirstLetter(item.rarity)}</span>
                <span>${(item.price).toFixed(6)} TON</span>
            </div>
        `;
        historyList.appendChild(historyItem);
    });
}

function updateInventory() {
    if (userInventory.length === 0) {
        inventoryGrid.innerHTML = `<div class="empty-state"><p>У вас пока нет подарков. Откройте кейс, чтобы получить подарки.</p></div>`;
        giftSelect.innerHTML = '<option value="">Выберите подарок для улучшения</option>';
        targetSelect.innerHTML = '<option value="">Выберите цель улучшения</option>';
        selectedGiftPreview.style.display = 'none';
        selectedTargetPreview.style.display = 'none';
        upgradeBtn.disabled = true;
        return;
    }
    inventoryGrid.innerHTML = '';
    giftSelect.innerHTML = '<option value="">Выберите подарок для улучшения</option>';
    targetSelect.innerHTML = '<option value="">Выберите цель улучшения</option>';
    userInventory.forEach((item, index) => {
        const rarityClass = `rarity ${item.rarity}`;
        const inventoryItem = document.createElement('div');
        inventoryItem.className = 'inventory-item';
        inventoryItem.dataset.index = index;
        inventoryItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="inventory-image">
            <div class="inventory-name">${item.name}</div>
            <div class="${rarityClass} inventory-rarity">${capitalizeFirstLetter(item.rarity)}</div>
        `;
        inventoryGrid.appendChild(inventoryItem);
        const giftOption = document.createElement('option');
        giftOption.value = index;
        giftOption.textContent = `${item.name} (${capitalizeFirstLetter(item.rarity)})`;
        giftSelect.appendChild(giftOption);
        const targetOption = document.createElement('option');
        targetOption.value = index;
        targetOption.textContent = `${item.name} (${capitalizeFirstLetter(item.rarity)})`;
        targetSelect.appendChild(targetOption);
    });
    document.querySelectorAll('.inventory-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.inventory-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
    });
}

function updateUpgradeInfo() {
    const giftIndex = giftSelect.value;
    const targetIndex = targetSelect.value;
    if (giftIndex === "" || targetIndex === "" || giftIndex === targetIndex) {
        upgradeChance.textContent = "Шанс: 0%";
        upgradeCost.textContent = "Стоимость: 0.000000 TON";
        upgradeBtn.disabled = true;
        selectedGiftPreview.style.display = 'none';
        selectedTargetPreview.style.display = 'none';
        return;
    }
    const gift = userInventory[giftIndex];
    const target = userInventory[targetIndex];
    const rarityValues = { 'common': 1, 'uncommon': 2, 'rare': 3, 'epic': 4, 'legendary': 5 };
    const giftValue = rarityValues[gift.rarity];
    const targetValue = rarityValues[target.rarity];
    const rarityDiff = targetValue - giftValue;
    let chance = 50;
    if (rarityDiff > 0) chance -= rarityDiff * 15;
    else if (rarityDiff < 0) chance += Math.abs(rarityDiff) * 10;
    chance = Math.max(5, Math.min(95, chance));
    const cost = Math.ceil(target.price * 0.5 * 1e6) / 1e6;
    upgradeChance.textContent = `Шанс: ${chance}%`;
    upgradeCost.textContent = `Стоимость: ${cost.toFixed(6)} TON`;
    upgradeBtn.disabled = false;
    selectedGiftPreview.style.display = 'block';
    selectedGiftPreview.innerHTML = `
        <h3>Выбранный подарок</h3>
        <img src="${gift.image}" alt="${gift.name}" style="width: 100px; height: 100px; border-radius: 10px; margin: 10px 0;">
        <div class="rarity ${gift.rarity}">${capitalizeFirstLetter(gift.rarity)}</div>
        <div>${gift.name}</div>
    `;
    selectedTargetPreview.style.display = 'block';
    selectedTargetPreview.innerHTML = `
        <h3>Цель улучшения</h3>
        <img src="${target.image}" alt="${target.name}" style="width: 100px; height: 100px; border-radius: 10px; margin: 10px 0;">
        <div class="rarity ${target.rarity}">${capitalizeFirstLetter(target.rarity)}</div>
        <div>${target.name}</div>
    `;
}

function performUpgrade() {
    const giftIndex = giftSelect.value;
    const targetIndex = targetSelect.value;
    if (giftIndex === "" || targetIndex === "" || giftIndex === targetIndex) {
        showToast('Пожалуйста, выберите разные подарки для улучшения', true);
        return;
    }
    const gift = userInventory[giftIndex];
    const target = userInventory[targetIndex];
    const rarityValues = { 'common': 1, 'uncommon': 2, 'rare': 3, 'epic': 4, 'legendary': 5 };
    const giftValue = rarityValues[gift.rarity];
    const targetValue = rarityValues[target.rarity];
    const rarityDiff = targetValue - giftValue;
    let chance = 50;
    if (rarityDiff > 0) chance -= rarityDiff * 15;
    else if (rarityDiff < 0) chance += Math.abs(rarityDiff) * 10;
    chance = Math.max(5, Math.min(95, chance));
    const cost = Math.ceil(target.price * 0.5 * 1e6) / 1e6;
    if (currentBalance < cost) {
        showToast('Недостаточно средств для улучшения!', true);
        return;
    }
    currentBalance -= cost;
    balanceElement.textContent = currentBalance.toFixed(6);
    const isSuccessful = Math.random() * 100 < chance;
    if (isSuccessful) {
        userInventory[giftIndex] = target;
        showToast(`Улучшение прошло успешно! Вы получили ${target.name}`, false);
        operationsHistory.unshift({ type: 'upgrade_success', from: gift, to: target, cost: cost, date: new Date().toLocaleString('ru-RU') });
    } else {
        userInventory.splice(giftIndex, 1);
        showToast('Улучшение не удалось. Подарок утерян.', true);
        operationsHistory.unshift({ type: 'upgrade_failed', from: gift, cost: cost, date: new Date().toLocaleString('ru-RU') });
    }
    saveToStorage();
    updateInventory();
    updateUpgradeInfo();
    updateOperationsHistory();
}

function loadRatingData() {
    const ratingData = [
        { username: 'User123', avatar: 'https://via.placeholder.com/40', balance: (150 * STAR_TO_TON).toFixed(6), earned: (500 * STAR_TO_TON).toFixed(6) },
        { username: 'NFTCollector', avatar: 'https://via.placeholder.com/40', balance: (120 * STAR_TO_TON).toFixed(6), earned: (450 * STAR_TO_TON).toFixed(6) },
        { username: 'CryptoKing', avatar: 'https://via.placeholder.com/40', balance: (95 * STAR_TO_TON).toFixed(6), earned: (380 * STAR_TO_TON).toFixed(6) },
        { username: 'BearLover', avatar: 'https://via.placeholder.com/40', balance: (80 * STAR_TO_TON).toFixed(6), earned: (320 * STAR_TO_TON).toFixed(6) },
        { username: 'GiftHunter', avatar: 'https://via.placeholder.com/40', balance: (65 * STAR_TO_TON).toFixed(6), earned: (280 * STAR_TO_TON).toFixed(6) }
    ];
    if (ratingData.length === 0) {
        ratingTableBody.innerHTML = '';
        noRatingData.style.display = 'block';
        return;
    }
    noRatingData.style.display = 'none';
    ratingTableBody.innerHTML = '';
    ratingData.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${user.avatar}" alt="${user.username}" class="user-avatar">${user.username}</td>
            <td>${user.balance}</td>
            <td>${user.earned}</td>
        `;
        ratingTableBody.appendChild(row);
    });
}

function updateOperationsHistory() {
    if (operationsHistory.length === 0) {
        operationsList.innerHTML = `<div class="empty-state"><p>Пока нет истории операций.</p></div>`;
        return;
    }
    operationsList.innerHTML = '';
    operationsHistory.forEach(operation => {
        const operationItem = document.createElement('div');
        operationItem.className = 'operation-item';
        let operationText = '';
        let operationType = '';
        switch (operation.type) {
            case 'case_open':
                operationType = 'Открытие кейса';
                operationText = `Получен: ${operation.item.name}`;
                break;
            case 'upgrade_success':
                operationType = 'Успешное улучшение';
                operationText = `${operation.from.name} → ${operation.to.name}`;
                break;
            case 'upgrade_failed':
                operationType = 'Неудачное улучшение';
                operationText = `Потерян: ${operation.from.name}`;
                break;
            default:
                operationType = 'Операция';
                operationText = 'Неизвестная операция';
        }
        operationItem.innerHTML = `
            <div>
                <div class="operation-type">${operationType}</div>
                <div class="operation-details">${operationText}</div>
            </div>
            <div class="operation-date">${operation.date}</div>
        `;
        operationsList.appendChild(operationItem);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createParticles() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1000';
    document.body.appendChild(container);
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        container.appendChild(particle);
        const animation = particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 1000,
            easing: 'cubic-bezier(0, 0.9, 0.57, 1)'
        });
        animation.onfinish = () => {
            particle.remove();
            if (container.children.length === 0) container.remove();
        };
    }
}

topUpBtn.addEventListener('click', () => topUpModal.classList.add('active'));
closeModal.addEventListener('click', () => topUpModal.classList.remove('active'));
closeSpinModal.addEventListener('click', () => spinModal.classList.remove('active'));
window.addEventListener('click', (event) => {
    if (event.target === topUpModal) topUpModal.classList.remove('active');
    if (event.target === spinModal) spinModal.classList.remove('active');
});
giftSelect.addEventListener('change', updateUpgradeInfo);
targetSelect.addEventListener('change', updateUpgradeInfo);
upgradeBtn.addEventListener('click', performUpgrade);
initFromStorage();
preloadItemImages();
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { background: var(--bg-gradient); }
        50% { background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460); }
        100% { background: var(--bg-gradient); }
    }
`;
document.head.appendChild(style);

// smooth anchor scrolling (from original)
(function() {
    const supportsNativeSmooth = 'scrollBehavior' in document.documentElement.style;
    document.addEventListener('click', function(event) {
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) return;
        const hash = anchor.getAttribute('href');
        if (!hash || hash === '#' || hash.length === 0) return;
        const target = document.querySelector(hash);
        if (!target) return;
        event.preventDefault();
        const header = document.querySelector('header');
        const headerOffset = header ? header.offsetHeight : 0;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            window.scrollTo(0, targetTop);
            return;
        }
        if (supportsNativeSmooth) {
            window.scrollTo({ top: targetTop, behavior: 'smooth' });
        } else {
            const start = window.pageYOffset;
            const distance = targetTop - start;
            const duration = 500;
            let startTime = null;
            function easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeInOutQuad(progress);
                window.scrollTo(0, start + distance * eased);
                if (elapsed < duration) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }
        history.pushState(null, '', hash);
    });
})();


