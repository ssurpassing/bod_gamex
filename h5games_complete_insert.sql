-- h5Games 完整游戏数据导入 GameXCode
-- 使用方法：在 Supabase SQL 编辑器中执行此脚本
-- 总计 260+ 个游戏

-- 步骤1：确保基础分类存在
INSERT INTO categories (name, description, image) VALUES
('Action', '动作和射击游戏', 'Action.svg'),
('Puzzle', '益智解谜游戏', 'Puzzle.svg'),
('Car', '汽车和停车游戏', 'Car.svg'),
('Sports', '体育运动游戏', 'Sports.svg')
ON CONFLICT (name) DO NOTHING;

-- 步骤2：批量插入游戏数据
INSERT INTO games (gameTitle, gameUrl, gameImage, gameCategory, description, metaKeywords, view, date) VALUES
-- 射击游戏 (Action) - 30个
('Alien Attack', 'https://game.fastgame.lol/games/alien-attack/v010/index.html', 'https://game.fastgame.lol/assets/icons/game/alien_attack.jpg', 'Action', '经典外星射击游戏', 'Alien Attack,Action,Shooting', 156, NOW()),
('Galaga Assault', 'https://game.fastgame.lol/games/Galaga_Assault/index.html', 'https://game.fastgame.lol/assets/icons/game/Galaga_Assault.jpg', 'Action', '银河战士射击游戏', 'Galaga Assault,Action,Space', 234, NOW()),
('Galaxy Attack', 'https://game.fastgame.lol/games/Galaxy_Attack/index.html', 'https://game.fastgame.lol/assets/icons/game/Galaxy_Attack.jpg', 'Action', '太空射击游戏', 'Galaxy Attack,Action,Space', 445, NOW()),
('Germ War', 'https://game.fastgame.lol/games/germ_war/index.html', 'https://game.fastgame.lol/assets/icons/game/Germ_War.jpg', 'Action', '细菌大战策略射击', 'Germ War,Action,Strategy', 89, NOW()),
('Meteorite Shooter', 'https://game.fastgame.lol/games/Meteorite_Shooter/index.html', 'https://game.fastgame.lol/assets/icons/game/Meteorite_Shooter.jpg', 'Action', '陨石射击游戏', 'Meteorite Shooter,Action', 167, NOW()),
('Shootero', 'https://game.fastgame.lol/games/Shootero/index.html', 'https://game.fastgame.lol/assets/icons/game/Shootero.jpg', 'Action', '飞行射击游戏', 'Shootero,Action,Shooter', 298, NOW()),
('Space Attack', 'https://game.fastgame.lol/games/space_attack/index.html', 'https://game.fastgame.lol/assets/icons/game/space_attack.jpg', 'Action', '太空攻击游戏', 'Space Attack,Action,Space', 312, NOW()),
('Space Shooter War', 'https://game.fastgame.lol/games/Galaxy_Attack/index.html', 'https://game.fastgame.lol/assets/icons/game/Space_Shooter.jpg', 'Action', '太空射击战争', 'Space Shooter War,Action,Space', 278, NOW()),
('Galaxy War', 'https://game.fastgame.lol/games/Galaxy_Attack/index.html', 'https://game.fastgame.lol/assets/icons/game/Galaxy_War.jpg', 'Action', '银河战争', 'Galaxy War,Action,Space', 234, NOW()),
('DD-2K-Shoot', 'https://game.fastgame.lol/games/DD-2K-Shoot/v1.0.0/index.html', 'https://game.fastgame.lol/assets/icons/game/DD-2K-Shoot.jpg', 'Action', '2K射击游戏', 'DD-2K-Shoot,Action,Shooter', 145, NOW()),
('dd-pick-it', 'https://game.fastgame.lol/games/dd-pick-it/v1.0.21/index.html', 'https://game.fastgame.lol/assets/icons/game/dd-pick-it.jpg', 'Action', '拾取游戏', 'dd-pick-it,Action', 123, NOW()),
('donut-box', 'https://game.fastgame.lol/games/donut-box/v2/index.html', 'https://game.fastgame.lol/assets/icons/game/donut-box.jpg', 'Action', '甜甜圈盒子', 'donut-box,Action', 167, NOW()),
('filling-lines', 'https://game.fastgame.lol/games/filling-lines/v1.0.0/index.html', 'https://game.fastgame.lol/assets/icons/game/filling-lines.jpg', 'Action', '填充线条', 'filling-lines,Action', 189, NOW()),
('Frontline', 'https://game.fastgame.lol/games/Frontline/demo7/index.html', 'https://game.fastgame.lol/assets/icons/game/Frontline.jpg', 'Action', '前线游戏', 'Frontline,Action', 234, NOW()),
('fruitmas', 'https://game.fastgame.lol/games/fruitmas/v1.0.9/index.html', 'https://game.fastgame.lol/assets/icons/game/fruitmas.jpg', 'Action', '水果圣诞', 'fruitmas,Action', 156, NOW()),
('house-paint', 'https://game.fastgame.lol/games/house-paint/index.html', 'https://game.fastgame.lol/assets/icons/game/house-paint.jpg', 'Action', '房屋油漆', 'house-paint,Action', 245, NOW()),
('two-tiles', 'https://game.fastgame.lol/games/two-tiles/index.html', 'https://game.fastgame.lol/assets/icons/game/two-tiles.jpg', 'Action', '两个瓷砖', 'two-tiles,Action', 134, NOW()),
('color-tunnel', 'https://game.fastgame.lol/games/color-tunnel/index.html', 'https://game.fastgame.lol/assets/icons/game/color-tunnel.jpg', 'Action', '彩色隧道', 'color-tunnel,Action', 456, NOW()),
('neon-tower', 'https://game.fastgame.lol/games/neon-tower/index.html', 'https://game.fastgame.lol/assets/icons/game/neon-tower.jpg', 'Action', '霓虹塔', 'neon-tower,Action', 234, NOW()),
('space-monsters', 'https://game.fastgame.lol/games/space-monsters/index.html', 'https://game.fastgame.lol/assets/icons/game/space-monsters.jpg', 'Action', '太空怪物', 'space-monsters,Action', 167, NOW()),
('space-shooter', 'https://game.fastgame.lol/games/space-shooter/index.html', 'https://game.fastgame.lol/assets/icons/game/space-shooter.jpg', 'Action', '太空射击', 'space-shooter,Action', 289, NOW()),
('tap-tap-dunk', 'https://game.fastgame.lol/games/tap-tap-dunk/index.html', 'https://game.fastgame.lol/assets/icons/game/tap-tap-dunk.jpg', 'Action', '点击扣篮', 'tap-tap-dunk,Action', 178, NOW()),

-- 排序游戏 (Puzzle) - 25个
('Ball Sort Puzzle', 'https://game.fastgame.lol/games/BallSortPuzzle/index.html', 'https://game.fastgame.lol/assets/icons/game/BallSortPuzzle.jpg', 'Puzzle', '彩球排序益智游戏', 'Ball Sort Puzzle,Puzzle,Sort', 523, NOW()),
('Hexagon Block Sort', 'https://game.fastgame.lol/games/Hexagon_Block_Sort/index.html', 'https://game.fastgame.lol/assets/icons/game/Hexagon_Block_Sort.jpg', 'Puzzle', '六边形方块排序', 'Hexagon Block Sort,Puzzle', 234, NOW()),
('Market Sort', 'https://game.fastgame.lol/games/MarketSort/index.html', 'https://game.fastgame.lol/assets/icons/game/MarketSort.jpg', 'Puzzle', '市场物品排序', 'Market Sort,Puzzle,Sort', 156, NOW()),
('Rope Color Sort 3D', 'https://game.fastgame.lol/games/Galaxy_Attack/index.html', 'https://game.fastgame.lol/assets/icons/game/rope-color-sort-3d.jpg', 'Puzzle', '3D绳子颜色排序', 'Rope Color Sort 3D,Puzzle,3D', 189, NOW()),
('Good Sort Master War', 'https://game.fastgame.lol/games/GoodSortMaster/index.html', 'https://game.fastgame.lol/assets/icons/game/GoodSortMaster.jpg', 'Puzzle', '排序大师战争', 'Good Sort Master War,Puzzle', 445, NOW()),
('Water Sort', 'https://game.fastgame.lol/games/WaterSort/index.html', 'https://game.fastgame.lol/assets/icons/game/WaterSort.jpg', 'Puzzle', '水彩排序游戏', 'Water Sort,Puzzle,Sort', 678, NOW()),
('Ball Sort Master', 'https://game.fastgame.lol/games/BallSortMaster/index.html', 'https://game.fastgame.lol/assets/icons/game/BallSortMaster.jpg', 'Puzzle', '排序大师游戏', 'Ball Sort Master,Puzzle', 567, NOW()),
('Cocktail Sort', 'https://game.fastgame.lol/games/CocktailSort/index.html', 'https://game.fastgame.lol/assets/icons/game/CocktailSort.jpg', 'Puzzle', '鸡尾酒排序游戏', 'Cocktail Sort,Puzzle', 234, NOW()),
('Liquids Sort', 'https://game.fastgame.lol/games/LiquidsSort/index.html', 'https://game.fastgame.lol/assets/icons/game/LiquidsSort.jpg', 'Puzzle', '液体排序游戏', 'Liquids Sort,Puzzle', 345, NOW()),
('Bird Sort Main', 'https://game.fastgame.lol/games/Bird_Sort-main/index.html', 'https://game.fastgame.lol/assets/icons/game/Bird_Sort-main.jpg', 'Puzzle', '小鸟排序游戏', 'Bird Sort Main,Puzzle', 278, NOW()),
('dd-sand-sort-puzzle', 'https://game.fastgame.lol/games/dd-sand-sort-puzzle/v1.1.4/index.html', 'https://game.fastgame.lol/assets/icons/game/dd-sand-sort-puzzle.jpg', 'Puzzle', '沙子排序益智', 'dd-sand-sort-puzzle,Puzzle', 167, NOW()),
('basket-slide', 'https://game.fastgame.lol/games/basket-slide/index.html', 'https://game.fastgame.lol/assets/icons/game/basket-slide.jpg', 'Puzzle', '篮球滑动', 'basket-slide,Puzzle', 145, NOW()),
('dd-pizza-pickup', 'https://game.fastgame.lol/games/dd-pizza-pickup/index.html', 'https://game.fastgame.lol/assets/icons/game/dd-pizza-pickup.jpg', 'Puzzle', '披萨拾取', 'dd-pizza-pickup,Puzzle', 134, NOW()),
('Slices', 'https://game.fastgame.lol/games/Slices/index.html', 'https://game.fastgame.lol/assets/icons/game/Slices.jpg', 'Puzzle', '切片游戏', 'Slices,Puzzle', 189, NOW()),
('number-maze', 'https://game.fastgame.lol/games/number-maze/index.html', 'https://game.fastgame.lol/assets/icons/game/number-maze.jpg', 'Puzzle', '数字迷宫', 'number-maze,Puzzle', 167, NOW()),
('2048-remastered', 'https://game.fastgame.lol/games/2048-remastered/v1.0.2/index.html', 'https://game.fastgame.lol/assets/icons/game/2048-remastered.jpg', 'Puzzle', '2048重制版', '2048-remastered,Puzzle', 456, NOW()),
('2048-cards', 'https://game.fastgame.lol/games/2048-cards/index.html', 'https://game.fastgame.lol/assets/icons/game/2048-cards.jpg', 'Puzzle', '2048卡牌', '2048-cards,Puzzle', 234, NOW()),
('blocks8', 'https://game.fastgame.lol/games/blocks8/index.html', 'https://game.fastgame.lol/assets/icons/game/blocks8.jpg', 'Puzzle', '方块8', 'blocks8,Puzzle', 156, NOW()),
('bridges', 'https://game.fastgame.lol/games/bridges/index.html', 'https://game.fastgame.lol/assets/icons/game/bridges.jpg', 'Puzzle', '桥梁游戏', 'bridges,Puzzle', 178, NOW()),
('Circles', 'https://game.fastgame.lol/games/Circles/index.html', 'https://game.fastgame.lol/assets/icons/game/Circles.jpg', 'Puzzle', '圆圈游戏', 'Circles,Puzzle', 134, NOW()),
('colored-bricks', 'https://game.fastgame.lol/games/colored-bricks/index.html', 'https://game.fastgame.lol/assets/icons/game/colored-bricks.jpg', 'Puzzle', '彩色砖块', 'colored-bricks,Puzzle', 145, NOW()),
('connect-me', 'https://game.fastgame.lol/games/connect-me/index.html', 'https://game.fastgame.lol/assets/icons/game/connect-me.jpg', 'Puzzle', '连接我', 'connect-me,Puzzle', 123, NOW()),
('dd-alpha-balls', 'https://game.fastgame.lol/games/dd-alpha-balls/index.html', 'https://game.fastgame.lol/assets/icons/game/dd-alpha-balls.jpg', 'Puzzle', '字母球游戏', 'dd-alpha-balls,Puzzle', 167, NOW()),
('equalz', 'https://game.fastgame.lol/games/equalz/index.html', 'https://game.fastgame.lol/assets/icons/game/equalz.jpg', 'Puzzle', '等于游戏', 'equalz,Puzzle', 189, NOW()),
('fill', 'https://game.fastgame.lol/games/fill/index.html', 'https://game.fastgame.lol/assets/icons/game/fill.jpg', 'Puzzle', '填充游戏', 'fill,Puzzle', 234, NOW()),
('make7', 'https://game.fastgame.lol/games/make7/index.html', 'https://game.fastgame.lol/assets/icons/game/make7.jpg', 'Puzzle', '制作7', 'make7,Puzzle', 156, NOW()),
('match4', 'https://game.fastgame.lol/games/match4/index.html', 'https://game.fastgame.lol/assets/icons/game/match4.jpg', 'Puzzle', '匹配4', 'match4,Puzzle', 167, NOW()),

-- 消消乐游戏 (Puzzle) - 20个
('Candy Crush', 'https://game.fastgame.lol/games/candyCrush/index.html', 'https://game.fastgame.lol/assets/icons/game/candyCrush.jpg', 'Puzzle', '糖果粉碎传奇', 'Candy Crush,Puzzle,Match3', 890, NOW()),
('Jewels Blitz 6', 'https://game.fastgame.lol/games/Jewels_Blitz_6/1/index.html', 'https://game.fastgame.lol/assets/icons/game/Jewels_Blitz_6.jpg', 'Puzzle', '珠宝闪电战6', 'Jewels Blitz 6,Puzzle,Match3', 456, NOW()),
('Ocean Blast Match3', 'https://game.fastgame.lol/games/OceanBlastMatch3/index.html', 'https://game.fastgame.lol/assets/icons/game/OceanBlastMatch3.jpg', 'Puzzle', '海洋爆破三消', 'Ocean Blast Match3,Puzzle', 334, NOW()),
('Diamond Dungeon', 'https://game.fastgame.lol/games/DiamondDungeon/index.html', 'https://game.fastgame.lol/assets/icons/game/DiamondDungeon.jpg', 'Puzzle', '钻石地牢三消', 'Diamond Dungeon,Puzzle', 278, NOW()),
('Garden Bloom', 'https://game.fastgame.lol/games/garden-bloom/index.html', 'https://game.fastgame.lol/assets/icons/game/garden-bloom.jpg', 'Puzzle', '花园绽放三消', 'Garden Bloom,Puzzle', 189, NOW()),
('Candy Blast', 'https://game.fastgame.lol/games/CandyBlast/index.html', 'https://game.fastgame.lol/assets/icons/game/CandyBlast.jpg', 'Puzzle', '糖果爆破游戏', 'Candy Blast,Puzzle', 267, NOW()),
('Kitty Jewel Quest', 'https://game.fastgame.lol/games/Kitty_Jewel_Quest/index.html', 'https://game.fastgame.lol/assets/icons/game/Kitty_Jewel_Quest.jpg', 'Puzzle', '小猫珠宝探险', 'Kitty Jewel Quest,Puzzle', 156, NOW()),
('match-arena', 'https://game.fastgame.lol/games/match-arena/index.html', 'https://game.fastgame.lol/assets/icons/game/match-arena.jpg', 'Puzzle', '匹配竞技场', 'match-arena,Puzzle', 234, NOW()),
('Forgotten Treasure 2', 'https://game.fastgame.lol/games/ForgottenTreasure2/index.html', 'https://game.fastgame.lol/assets/icons/game/ForgottenTreasure2.jpg', 'Puzzle', '遗忘的宝藏2', 'Forgotten Treasure 2,Puzzle', 178, NOW()),
('Building A House', 'https://game.fastgame.lol/games/BuildingAHouse/index.html', 'https://game.fastgame.lol/assets/icons/game/BuildingAHouse.jpg', 'Puzzle', '建造房屋消消乐', 'Building A House,Puzzle', 145, NOW()),
('fools-match', 'https://game.fastgame.lol/games/fools-match/index.html', 'https://game.fastgame.lol/assets/icons/game/fools-match.jpg', 'Puzzle', '愚人匹配', 'fools-match,Puzzle', 134, NOW()),
('happy-connect', 'https://game.fastgame.lol/games/happy-connect/v1.0.0/index.html', 'https://game.fastgame.lol/assets/icons/game/happy-connect.jpg', 'Puzzle', '快乐连接', 'happy-connect,Puzzle', 123, NOW()),
('match-shapes', 'https://game.fastgame.lol/games/match-shapes/v1.0.4/index.html', 'https://game.fastgame.lol/assets/icons/game/match-shapes.jpg', 'Puzzle', '匹配形状', 'match-shapes,Puzzle', 167, NOW()),
('mergefish', 'https://game.fastgame.lol/games/mergefish/mf4/index.html', 'https://game.fastgame.lol/assets/icons/game/mergefish.jpg', 'Puzzle', '合并鱼', 'mergefish,Puzzle', 189, NOW()),
('merge-push', 'https://game.fastgame.lol/games/merge-push/v1.0.2/index.html', 'https://game.fastgame.lol/assets/icons/game/merge-push.jpg', 'Puzzle', '合并推动', 'merge-push,Puzzle', 156, NOW()),
('DunkLine', 'https://game.fastgame.lol/games/DunkLine/index.html', 'https://game.fastgame.lol/assets/icons/game/DunkLine.jpg', 'Puzzle', '扣篮线条', 'DunkLine,Puzzle', 178, NOW()),
('fire-up', 'https://game.fastgame.lol/games/fire-up/index.html', 'https://game.fastgame.lol/assets/icons/game/fire-up.jpg', 'Puzzle', '火焰上升', 'fire-up,Puzzle', 134, NOW()),
('Differences_Find', 'https://game.fastgame.lol/games/Differences_Find/index.html', 'https://game.fastgame.lol/assets/icons/game/Differences_Find.jpg', 'Puzzle', '寻找差异', 'Differences_Find,Puzzle', 167, NOW()),
('Find_A_Difference', 'https://game.fastgame.lol/games/Find_A_Difference/index.html', 'https://game.fastgame.lol/assets/icons/game/Find_A_Difference.jpg', 'Puzzle', '找出不同', 'Find_A_Difference,Puzzle', 145, NOW()),
('Find_Differences', 'https://game.fastgame.lol/games/Find_Differences/index.html', 'https://game.fastgame.lol/assets/icons/game/Find_Differences.jpg', 'Puzzle', '找不同', 'Find_Differences,Puzzle', 189, NOW()),

-- 停车游戏 (Car) - 15个
('Bus Parking King', 'https://game.fastgame.lol/games/Bus_Parking_King/index.html', 'https://game.fastgame.lol/assets/icons/game/Bus_Parking_King.jpg', 'Car', '公交停车之王', 'Bus Parking King,Car,Parking', 234, NOW()),
('Parking Fury', 'https://game.fastgame.lol/games/Parking_Fury/index.html', 'https://game.fastgame.lol/assets/icons/game/Parking_Fury.jpg', 'Car', '停车狂怒', 'Parking Fury,Car,Parking', 345, NOW()),
('Crazy Parking', 'https://game.fastgame.lol/games/crazy_parking/index.html', 'https://game.fastgame.lol/assets/icons/game/crazy_parking.jpg', 'Car', '疯狂停车', 'Crazy Parking,Car,Parking', 167, NOW()),
('Parking Ace 3D', 'https://game.fastgame.lol/games/Parking_Ace_3d/index.html', 'https://game.fastgame.lol/assets/icons/game/Parking_Ace_3d.jpg', 'Car', '3D停车王牌', 'Parking Ace 3D,Car,Parking,3D', 456, NOW()),
('Bus Driving', 'https://game.fastgame.lol/games/Bus_Driving/game/index.html', 'https://game.fastgame.lol/assets/icons/game/Bus_Driving.jpg', 'Car', '公交车驾驶', 'Bus Driving,Car,Driving', 278, NOW()),
('Move The Car', 'https://game.fastgame.lol/games/MoveTheCar/game/index.html', 'https://game.fastgame.lol/assets/icons/game/MoveTheCar.jpg', 'Car', '移动汽车', 'Move The Car,Car', 189, NOW()),
('Parking Out', 'https://game.fastgame.lol/games/ParkingOut/glgame/index.html', 'https://game.fastgame.lol/assets/icons/game/ParkingOut.jpg', 'Car', '停车出库', 'Parking Out,Car,Parking', 234, NOW()),
('Parking Slot', 'https://game.fastgame.lol/games/Parking_Slot/game_240321/index.html', 'https://game.fastgame.lol/assets/icons/game/Parking_Slot.jpg', 'Car', '停车位', 'Parking Slot,Car,Parking', 156, NOW()),
('Pocket Parking', 'https://game.fastgame.lol/games/Pocket_Parking/index.html', 'https://game.fastgame.lol/assets/icons/game/Pocket_Parking.jpg', 'Car', '口袋停车', 'Pocket Parking,Car,Parking', 145, NOW()),
('parkmania', 'https://game.fastgame.lol/games/parkmania/index.html', 'https://game.fastgame.lol/assets/icons/game/parkmania.jpg', 'Car', '停车狂热', 'parkmania,Car,Parking', 167, NOW()),
('Bus_Parking_King', 'https://game.fastgame.lol/games/Bus_Parking_King/index.html', 'https://game.fastgame.lol/assets/icons/game/Bus_Parking_King.jpg', 'Car', '公交停车国王', 'Bus_Parking_King,Car,Parking', 178, NOW()),
('crazy_parking', 'https://game.fastgame.lol/games/crazy_parking/index.html', 'https://game.fastgame.lol/assets/icons/game/crazy_parking.jpg', 'Car', '疯狂停车游戏', 'crazy_parking,Car,Parking', 189, NOW()),
('MoveTheCar', 'https://game.fastgame.lol/games/MoveTheCar/game/index.html', 'https://game.fastgame.lol/assets/icons/game/MoveTheCar.jpg', 'Car', '移动汽车游戏', 'MoveTheCar,Car', 134, NOW()),
('Parking_Ace_3d', 'https://game.fastgame.lol/games/Parking_Ace_3d/index.html', 'https://game.fastgame.lol/assets/icons/game/Parking_Ace_3d.jpg', 'Car', '3D停车王牌', 'Parking_Ace_3d,Car,Parking,3D', 267, NOW()),
('ParkingOut', 'https://game.fastgame.lol/games/ParkingOut/glgame/index.html', 'https://game.fastgame.lol/assets/icons/game/ParkingOut.jpg', 'Car', '停车出库游戏', 'ParkingOut,Car,Parking', 178, NOW()),

-- 塔防游戏 (Action) - 15个
('Art Of Defense', 'https://game.fastgame.lol/games/ArtOfDefense/index.html', 'https://game.fastgame.lol/assets/icons/game/ArtOfDefense.jpg', 'Action', '防御艺术', 'Art Of Defense,Action,Tower Defense', 345, NOW()),
('Tower Defense Battle', 'https://game.fastgame.lol/games/Tower_Defense_Battle/index.html', 'https://game.fastgame.lol/assets/icons/game/Tower_Defense_Battle.jpg', 'Action', '塔防战斗', 'Tower Defense Battle,Action,TD', 567, NOW()),
('Draw The Defense', 'https://game.fastgame.lol/games/DrawTheDefense/index.html', 'https://game.fastgame.lol/assets/icons/game/DrawTheDefense.jpg', 'Action', '画出防御', 'Draw The Defense,Action,TD', 234, NOW()),
('Cube Tower', 'https://game.fastgame.lol/games/Cube_Tower/index.html', 'https://game.fastgame.lol/assets/icons/game/Cube_Tower.jpg', 'Action', '立方体塔防', 'Cube Tower,Action,Tower Defense', 189, NOW()),
('Endless Siege', 'https://game.fastgame.lol/games/endlessseige/index.html', 'https://game.fastgame.lol/assets/icons/game/endlessseige.jpg', 'Action', '无尽围攻', 'Endless Siege,Action,TD', 156, NOW()),
('tower-defense-mingling', 'https://game.fastgame.lol/games/tower-defense-mingling/index.html', 'https://game.fastgame.lol/assets/icons/game/tower-defense-mingling.jpg', 'Action', '命令塔防', 'tower-defense-mingling,Action,TD', 234, NOW()),
('Defender Master1', 'https://game.fastgame.lol/games/DefenderMaster1/index.html', 'https://game.fastgame.lol/assets/icons/game/DefenderMaster1.jpg', 'Action', '防御大师1', 'Defender Master1,Action', 167, NOW()),
('towerDefense', 'https://game.fastgame.lol/games/towerDefense/index.html', 'https://game.fastgame.lol/assets/icons/game/towerDefense.jpg', 'Action', '塔防游戏', 'towerDefense,Action,TD', 289, NOW()),
('Tower Defense Yandex', 'https://game.fastgame.lol/games/TowerDefenseYandex/index.html', 'https://game.fastgame.lol/assets/icons/game/TowerDefenseYandex.jpg', 'Action', 'Yandex塔防', 'Tower Defense Yandex,Action,TD', 134, NOW()),
('Tower Defense Galaxy', 'https://game.fastgame.lol/games/TowerDefenseGalaxy/index.html', 'https://game.fastgame.lol/assets/icons/game/TowerDefenseGalaxy.jpg', 'Action', '银河塔防', 'Tower Defense Galaxy,Action,TD', 245, NOW()),
('american-football-challenge', 'https://game.fastgame.lol/games/american-football-challenge/index.html', 'https://game.fastgame.lol/assets/icons/game/american-football-challenge.jpg', 'Action', '美式足球挑战', 'american-football-challenge,Action', 178, NOW()),
('disk-rush', 'https://game.fastgame.lol/games/disk-rush/index.html', 'https://game.fastgame.lol/assets/icons/game/disk-rush.jpg', 'Action', '圆盘冲刺', 'disk-rush,Action', 156, NOW()),
('galaxy-toops', 'https://game.fastgame.lol/games/galaxy-toops/index.html', 'https://game.fastgame.lol/assets/icons/game/galaxy-toops.jpg', 'Action', '银河部队', 'galaxy-toops,Action', 167, NOW()),
('ruin', 'https://game.fastgame.lol/games/ruin/index.html', 'https://game.fastgame.lol/assets/icons/game/ruin.jpg', 'Action', '毁灭游戏', 'ruin,Action', 134, NOW()),
('sea-battle', 'https://game.fastgame.lol/games/sea-battle/index.html', 'https://game.fastgame.lol/assets/icons/game/sea-battle.jpg', 'Action', '海战游戏', 'sea-battle,Action', 189, NOW()),

-- 音乐游戏 (Puzzle) - 15个
('Piano Fire', 'https://game.fastgame.lol/games/Piano_Fire/index.html', 'https://game.fastgame.lol/assets/icons/game/Piano_Fire.jpg', 'Puzzle', '火焰钢琴', 'Piano Fire,Puzzle,Music', 678, NOW()),
('Magic Tiles 3', 'https://game.fastgame.lol/games/Magic_Tiles3_Online_Z/index.html', 'https://game.fastgame.lol/assets/icons/game/Magic_Tiles3_Online_Z.jpg', 'Puzzle', '魔法瓷砖3在线', 'Magic Tiles 3,Puzzle,Music', 445, NOW()),
('Music Line 3D', 'https://game.fastgame.lol/games/Music_Line_3D/index.html', 'https://game.fastgame.lol/assets/icons/game/Music_Line_3D.jpg', 'Puzzle', '3D音乐线条', 'Music Line 3D,Puzzle,Music,3D', 567, NOW()),
('Perfect Piano 2', 'https://game.fastgame.lol/games/Perfect_Piano_2/index.html', 'https://game.fastgame.lol/assets/icons/game/Perfect_Piano_2.jpg', 'Puzzle', '完美钢琴2', 'Perfect Piano 2,Puzzle,Music', 334, NOW()),
('Blob Opera', 'https://game.fastgame.lol/games/BlobOpera/index.html', 'https://game.fastgame.lol/assets/icons/game/BlobOpera.jpg', 'Puzzle', '斑点歌剧', 'Blob Opera,Puzzle,Music', 223, NOW()),
('Piano Title', 'https://game.fastgame.lol/games/PianoTitle/index.html', 'https://game.fastgame.lol/assets/icons/game/PianoTitle.jpg', 'Puzzle', '钢琴标题', 'Piano Title,Puzzle,Music', 156, NOW()),
('Pinao Keys', 'https://game.fastgame.lol/games/Pinao_Keys/index.html', 'https://game.fastgame.lol/assets/icons/game/Pinao_Keys.jpg', 'Puzzle', '钢琴键盘', 'Pinao Keys,Puzzle,Music', 167, NOW()),
('Music Surf Christmas', 'https://game.fastgame.lol/games/Music_Surf_Christmas/index.html', 'https://game.fastgame.lol/assets/icons/game/Music_Surf_Christmas.jpg', 'Puzzle', '圣诞音乐冲浪', 'Music Surf Christmas,Puzzle,Music', 189, NOW()),
('Piano Music Tiles', 'https://game.fastgame.lol/games/Piano_Music_Tiles/index.html', 'https://game.fastgame.lol/assets/icons/game/Piano_Music_Tiles.jpg', 'Puzzle', '钢琴音乐瓷砖', 'Piano Music Tiles,Puzzle,Music', 234, NOW()),
('Dance Battle', 'https://game.fastgame.lol/games/Dance_Battle/index.html', 'https://game.fastgame.lol/assets/icons/game/Dance_Battle.jpg', 'Puzzle', '舞蹈战斗', 'Dance Battle,Puzzle,Music', 178, NOW()),
('DrawIn', 'https://game.fastgame.lol/games/DrawIn/index.html', 'https://game.fastgame.lol/assets/icons/game/DrawIn.jpg', 'Puzzle', '画入游戏', 'DrawIn,Puzzle,Music', 145, NOW()),
('knife-hit', 'https://game.fastgame.lol/games/knife-hit/index.html', 'https://game.fastgame.lol/assets/icons/game/knife-hit.jpg', 'Puzzle', '飞刀游戏', 'knife-hit,Puzzle', 167, NOW()),
('ludo', 'https://game.fastgame.lol/games/ludo/index.html', 'https://game.fastgame.lol/assets/icons/game/ludo.jpg', 'Puzzle', '鲁多游戏', 'ludo,Puzzle', 234, NOW()),
('mahjong-classic', 'https://game.fastgame.lol/games/mahjong-classic/index.html', 'https://game.fastgame.lol/assets/icons/game/mahjong-classic.jpg', 'Puzzle', '经典麻将', 'mahjong-classic,Puzzle', 289, NOW()),
('onet-puzzle', 'https://game.fastgame.lol/games/onet-puzzle/index.html', 'https://game.fastgame.lol/assets/icons/game/onet-puzzle.jpg', 'Puzzle', 'onet益智', 'onet-puzzle,Puzzle', 156, NOW()),

-- 连连看游戏 (Puzzle) - 15个
('Onet Link', 'https://game.fastgame.lol/games/Onet_Link/index.html', 'https://game.fastgame.lol/assets/icons/game/Onet_Link.jpg', 'Puzzle', '连连看链接', 'Onet Link,Puzzle,Connect', 456, NOW()),
('Tile Connect', 'https://game.fastgame.lol/games/Tile_Connect/index.html', 'https://game.fastgame.lol/assets/icons/game/Tile_Connect.jpg', 'Puzzle', '瓷砖连连看', 'Tile Connect,Puzzle,Connect', 345, NOW()),
('King of Mahjong', 'https://game.fastgame.lol/games/king-of-mahjong/index.html', 'https://game.fastgame.lol/assets/icons/game/king-of-mahjong.jpg', 'Puzzle', '麻将之王', 'King of Mahjong,Puzzle,Mahjong', 567, NOW()),
('Onet Paradise', 'https://game.fastgame.lol/games/onet-paradise/index.html', 'https://game.fastgame.lol/assets/icons/game/onet-paradise.jpg', 'Puzzle', '天堂连连看', 'Onet Paradise,Puzzle,Connect', 278, NOW()),
('Onet Fruit Classic', 'https://game.fastgame.lol/games/onet-fruit-classic/index.html', 'https://game.fastgame.lol/assets/icons/game/onet-fruit-classic.jpg', 'Puzzle', '经典水果连连看', 'Onet Fruit Classic,Puzzle,Connect', 189, NOW()),
('butterfly-shimai', 'https://game.fastgame.lol/games/butterfly-shimai/index.html', 'https://game.fastgame.lol/assets/icons/game/butterfly-shimai.jpg', 'Puzzle', '蝴蝶姐妹连连看', 'butterfly-shimai,Puzzle,Connect', 234, NOW()),
('Christmas Connect', 'https://game.fastgame.lol/games/Christmas_Connect/1/index.html', 'https://game.fastgame.lol/assets/icons/game/Christmas_Connect.jpg', 'Puzzle', '圣诞连连看', 'Christmas Connect,Puzzle,Connect', 167, NOW()),
('One Connect Main', 'https://game.fastgame.lol/games/One_Connect-main/index.html', 'https://game.fastgame.lol/assets/icons/game/One_Connect-main.jpg', 'Puzzle', '连线游戏主版', 'One Connect Main,Puzzle,Connect', 156, NOW()),
('Monster Duo', 'https://game.fastgame.lol/games/Monster-duo/index.html', 'https://game.fastgame.lol/assets/icons/game/Monster-duo.jpg', 'Puzzle', '怪物双人组', 'Monster Duo,Puzzle,Connect', 145, NOW()),
('onet-world', 'https://game.fastgame.lol/games/onet-world/index.html', 'https://game.fastgame.lol/assets/icons/game/onet-world.jpg', 'Puzzle', '世界连连看', 'onet-world,Puzzle,Connect', 134, NOW()),
('dd-alpha-balls', 'https://game.fastgame.lol/games/dd-alpha-balls/index.html', 'https://game.fastgame.lol/assets/icons/game/dd-alpha-balls.jpg', 'Puzzle', '字母球游戏', 'dd-alpha-balls,Puzzle', 123, NOW()),
('connect-merge', 'https://game.fastgame.lol/games/connect-me/index.html', 'https://game.fastgame.lol/assets/icons/game/connect-merge.jpg', 'Puzzle', '连接合并', 'connect-merge,Puzzle', 167, NOW()),
('color-strings', 'https://game.fastgame.lol/games/color-strings/index.html', 'https://game.fastgame.lol/assets/icons/game/color-strings.jpg', 'Puzzle', '彩色绳子', 'color-strings,Puzzle', 178, NOW()),
('omino', 'https://game.fastgame.lol/games/omino/index.html', 'https://game.fastgame.lol/assets/icons/game/omino.jpg', 'Puzzle', '多米诺游戏', 'omino,Puzzle', 189, NOW()),
('Pattern', 'https://game.fastgame.lol/games/Pattern/index.html', 'https://game.fastgame.lol/assets/icons/game/Pattern.jpg', 'Puzzle', '图案游戏', 'Pattern,Puzzle', 156, NOW()),

-- 体育运动游戏 (Sports) - 15个
('Basketball Legends 2020', 'https://game.fastgame.lol/games/basketball-legends-2020/index.html', 'https://game.fastgame.lol/assets/icons/game/basketball-legends-2020.jpg', 'Sports', '2020篮球传奇', 'Basketball Legends 2020,Sports,Basketball', 678, NOW()),
('Toon Cup', 'https://game.fastgame.lol/games/tooncup/index.html', 'https://game.fastgame.lol/assets/icons/game/tooncup.jpg', 'Sports', '卡通杯足球', 'Toon Cup,Sports,Football', 445, NOW()),
('Football Kick 3D', 'https://game.fastgame.lol/games/FootballKick3D/index.html', 'https://game.fastgame.lol/assets/icons/game/FootballKick3D.jpg', 'Sports', '3D足球踢', 'Football Kick 3D,Sports,Football,3D', 334, NOW()),
('Freekick Football 3D', 'https://game.fastgame.lol/games/Freekick_Football_3D/index.html', 'https://game.fastgame.lol/assets/icons/game/Freekick_Football_3D.jpg', 'Sports', '3D任意球足球', 'Freekick Football 3D,Sports,Football,3D', 256, NOW()),
('Basketball Crazy', 'https://game.fastgame.lol/games/Basketball_Crazy/index.html', 'https://game.fastgame.lol/assets/icons/game/Basketball_Crazy.jpg', 'Sports', '疯狂篮球', 'Basketball Crazy,Sports,Basketball', 189, NOW()),
('Basketball REAL', 'https://game.fastgame.lol/games/Basketball_REAL/index.html', 'https://game.fastgame.lol/assets/icons/game/Basketball_REAL.jpg', 'Sports', '真实篮球', 'Basketball REAL,Sports,Basketball', 234, NOW()),
('La Football', 'https://game.fastgame.lol/games/La_Football/index.html', 'https://game.fastgame.lol/assets/icons/game/La_Football.jpg', 'Sports', '洛杉矶足球', 'La Football,Sports,Football', 167, NOW()),
('Football Hero', 'https://game.fastgame.lol/games/scooer_hero/index.html', 'https://game.fastgame.lol/assets/icons/game/scooer_hero.jpg', 'Sports', '足球英雄', 'Football Hero,Sports,Football', 156, NOW()),
('Basket Swooshes', 'https://game.fastgame.lol/games/basket-swooshes/index.html', 'https://game.fastgame.lol/assets/icons/game/basket-swooshes.jpg', 'Sports', '篮球嗖嗖声', 'Basket Swooshes,Sports,Basketball', 145, NOW()),
('Freekick Football 3D', 'https://game.fastgame.lol/games/Freekick_Football_3D/index.html', 'https://game.fastgame.lol/assets/icons/game/Freekick_Football_3D.jpg', 'Sports', '任意球足球3D', 'Freekick Football 3D,Sports,Football', 134, NOW()),
('tooncup', 'https://game.fastgame.lol/games/tooncup/index.html', 'https://game.fastgame.lol/assets/icons/game/tooncup.jpg', 'Sports', '卡通杯', 'tooncup,Sports,Football', 178, NOW()),
('La_Football', 'https://game.fastgame.lol/games/La_Football/index.html', 'https://game.fastgame.lol/assets/icons/game/La_Football.jpg', 'Sports', 'LA足球', 'La_Football,Sports,Football', 189, NOW()),
('FootballKick3D', 'https://game.fastgame.lol/games/FootballKick3D/index.html', 'https://game.fastgame.lol/assets/icons/game/FootballKick3D.jpg', 'Sports', '3D足球踢', 'FootballKick3D,Sports,Football,3D', 167, NOW()),
('scooer_hero', 'https://game.fastgame.lol/games/scooer_hero/index.html', 'https://game.fastgame.lol/assets/icons/game/scooer_hero.jpg', 'Sports', '足球英雄', 'scooer_hero,Sports,Football', 156, NOW()),
('basket-swooshes', 'https://game.fastgame.lol/games/basket-swooshes/index.html', 'https://game.fastgame.lol/assets/icons/game/basket-swooshes.jpg', 'Sports', '篮球嗖嗖', 'basket-swooshes,Sports,Basketball', 145, NOW()),

-- 跑酷游戏 (Action) - 20个
('Subway Surfers Tokyo', 'https://game.fastgame.lol/games/subway-surfers-tokyo/index.html', 'https://game.fastgame.lol/assets/icons/game/subway-surfers-tokyo.jpg', 'Action', '地铁跑酷东京版', 'Subway Surfers Tokyo,Action,Running', 890, NOW()),
('Subway Surfers Vegas', 'https://game.fastgame.lol/games/SubwaySurfers_vegas/index.html', 'https://game.fastgame.lol/assets/icons/game/SubwaySurfers_vegas.jpg', 'Action', '地铁跑酷拉斯维加斯版', 'Subway Surfers Vegas,Action,Running', 756, NOW()),
('Subway Surfers Rio', 'https://game.fastgame.lol/games/subway_surfers_rio/index.html', 'https://game.fastgame.lol/assets/icons/game/subway_surfers_rio.jpg', 'Action', '地铁跑酷里约版', 'Subway Surfers Rio,Action,Running', 567, NOW()),
('Moto X3M 1', 'https://game.fastgame.lol/games/motox3m1/index.html', 'https://game.fastgame.lol/assets/icons/game/motox3m1.jpg', 'Action', '摩托X3M 1', 'Moto X3M 1,Action,Motorcycle', 445, NOW()),
('Moto X3M 2', 'https://game.fastgame.lol/games/motox3m2/index.html', 'https://game.fastgame.lol/assets/icons/game/motox3m2.jpg', 'Action', '摩托X3M 2', 'Moto X3M 2,Action,Motorcycle', 334, NOW()),
('Moto X3M 3', 'https://game.fastgame.lol/games/motox3m3/index.html', 'https://game.fastgame.lol/assets/icons/game/motox3m3.jpg', 'Action', '摩托X3M 3', 'Moto X3M 3,Action,Motorcycle', 423, NOW()),
('Moto X3M 4', 'https://game.fastgame.lol/games/motox3m4/index.html', 'https://game.fastgame.lol/assets/icons/game/motox3m4.jpg', 'Action', '摩托X3M 4', 'Moto X3M 4,Action,Motorcycle', 512, NOW()),
('Moto X3M 5', 'https://game.fastgame.lol/games/motox3m5/index.html', 'https://game.fastgame.lol/assets/icons/game/motox3m5.jpg', 'Action', '摩托X3M 5', 'Moto X3M 5,Action,Motorcycle', 389, NOW()),
('Moto X3M 6', 'https://game.fastgame.lol/games/motox3m6/index.html', 'https://game.fastgame.lol/assets/icons/game/motox3m6.jpg', 'Action', '摩托X3M 6', 'Moto X3M 6,Action,Motorcycle', 467, NOW()),
('Subway Surfers Hong Kong', 'https://game.fastgame.lol/games/Subway_Surfer_Hongkong/index.html', 'https://game.fastgame.lol/assets/icons/game/Subway_Surfer_Hongkong.jpg', 'Action', '地铁跑酷香港版', 'Subway Surfers Hong Kong,Action,Running', 645, NOW()),
('Subway Surfers Ice Island', 'https://game.fastgame.lol/games/Subway_Surfer_IceIsland/index.html', 'https://game.fastgame.lol/assets/icons/game/Subway_Surfer_IceIsland.jpg', 'Action', '地铁跑酷冰岛版', 'Subway Surfers Ice Island,Action,Running', 534, NOW()),
('Subway Surfers Marrakesh', 'https://game.fastgame.lol/games/Subway_Surfer_Marrakesh/index.html', 'https://game.fastgame.lol/assets/icons/game/Subway_Surfer_Marrakesh.jpg', 'Action', '地铁跑酷马拉喀什版', 'Subway Surfers Marrakesh,Action,Running', 423, NOW()),
('subway-surfers-venice', 'https://game.fastgame.lol/games/subway-surfers-venice/index.html', 'https://game.fastgame.lol/assets/icons/game/subway-surfers-venice.jpg', 'Action', '地铁跑酷威尼斯版', 'subway-surfers-venice,Action,Running', 612, NOW()),
('subway-surfers_san-francisco', 'https://game.fastgame.lol/games/subway-surfers_san-francisco/index.html', 'https://game.fastgame.lol/assets/icons/game/subway-surfers_san-francisco.jpg', 'Action', '地铁跑酷旧金山版', 'subway-surfers_san-francisco,Action,Running', 501, NOW()),
('subway-surfers-winter-holiday', 'https://game.fastgame.lol/games/subway-surfers-winter-holiday/index.html', 'https://game.fastgame.lol/assets/icons/game/subway-surfers-winter-holiday.jpg', 'Action', '地铁跑酷寒假版', 'subway-surfers-winter-holiday,Action,Running', 789, NOW()),
('Subway-Surfers-Zurich', 'https://game.fastgame.lol/games/Subway-Surfers-Zurich/index.html', 'https://game.fastgame.lol/assets/icons/game/Subway-Surfers-Zurich.jpg', 'Action', '地铁跑酷苏黎世版', 'Subway-Surfers-Zurich,Action,Running', 345, NOW()),
('color-tunnel', 'https://game.fastgame.lol/games/color-tunnel/index.html', 'https://game.fastgame.lol/assets/icons/game/color-tunnel.jpg', 'Action', '彩色隧道', 'color-tunnel,Action', 234, NOW()),
('cubito', 'https://game.fastgame.lol/games/cubito/index.html', 'https://game.fastgame.lol/assets/icons/game/cubito.jpg', 'Action', '立方体', 'cubito,Action', 156, NOW()),
('neon-swing', 'https://game.fastgame.lol/games/neon-swing/index.html', 'https://game.fastgame.lol/assets/icons/game/neon-swing.jpg', 'Action', '霓虹摆动', 'neon-swing,Action', 167, NOW()),

-- 更多益智游戏 (Puzzle) - 30个
('sudoku', 'https://game.fastgame.lol/games/sudoku/index.html', 'https://game.fastgame.lol/assets/icons/game/sudoku.jpg', 'Puzzle', '数独游戏', 'sudoku,Puzzle', 445, NOW()),
('mahjong-classic', 'https://game.fastgame.lol/games/mahjong-classic/index.html', 'https://game.fastgame.lol/assets/icons/game/mahjong-classic.jpg', 'Puzzle', '经典麻将', 'mahjong-classic,Puzzle', 389, NOW()),
('ludo', 'https://game.fastgame.lol/games/ludo/index.html', 'https://game.fastgame.lol/assets/icons/game/ludo.jpg', 'Puzzle', '鲁多游戏', 'ludo,Puzzle', 267, NOW()),
('solitaire-klondike', 'https://game.fastgame.lol/games/solitaire-klondike/index.html', 'https://game.fastgame.lol/assets/icons/game/solitaire-klondike.jpg', 'Puzzle', '纸牌接龙', 'solitaire-klondike,Puzzle', 334, NOW()),
('Solitaire', 'https://game.fastgame.lol/games/solitaire/v1.0.2/index.html', 'https://game.fastgame.lol/assets/icons/game/Solitaire.jpg', 'Puzzle', '纸牌游戏', 'Solitaire,Puzzle', 289, NOW()),
('pool8', 'https://game.fastgame.lol/games/pool8/index.html', 'https://game.fastgame.lol/assets/icons/game/pool8.jpg', 'Puzzle', '8球台球', 'pool8,Puzzle', 234, NOW()),
('mini-golf', 'https://game.fastgame.lol/games/mini-golf/index.html', 'https://game.fastgame.lol/assets/icons/game/mini-golf.jpg', 'Puzzle', '迷你高尔夫', 'mini-golf,Puzzle', 178, NOW()),
('jigsaw-casual', 'https://game.fastgame.lol/games/jigsaw-casual/v1.0.44/index.html', 'https://game.fastgame.lol/assets/icons/game/jigsaw-casual.jpg', 'Puzzle', '休闲拼图', 'jigsaw-casual,Puzzle', 167, NOW()),
('memory-match', 'https://game.fastgame.lol/games/memory-match/v1.0.4/index.html', 'https://game.fastgame.lol/assets/icons/game/memory-match.jpg', 'Puzzle', '记忆匹配', 'memory-match,Puzzle', 156, NOW()),
('kids-coloring', 'https://game.fastgame.lol/games/kids-coloring/v1.0.51/index.html', 'https://game.fastgame.lol/assets/icons/game/kids-coloring.jpg', 'Puzzle', '儿童涂色', 'kids-coloring,Puzzle', 145, NOW()),
('kids-spelling', 'https://game.fastgame.lol/games/kids-spelling/v1.0.0/index.html', 'https://game.fastgame.lol/assets/icons/game/kids-spelling.jpg', 'Puzzle', '儿童拼写', 'kids-spelling,Puzzle', 134, NOW()),
('kids-alphabet', 'https://game.fastgame.lol/games/kids-alphabet/v1.0.20/index.html', 'https://game.fastgame.lol/assets/icons/game/kids-alphabet.jpg', 'Puzzle', '儿童字母', 'kids-alphabet,Puzzle', 123, NOW()),
('word-haven', 'https://game.fastgame.lol/games/word-haven/v1.0.1/index.html', 'https://game.fastgame.lol/assets/icons/game/word-haven.jpg', 'Puzzle', '词汇天堂', 'word-haven,Puzzle', 167, NOW()),
('world-puzzle', 'https://game.fastgame.lol/games/world-puzzle/v1.0.4/index.html', 'https://game.fastgame.lol/assets/icons/game/world-puzzle.jpg', 'Puzzle', '世界益智', 'world-puzzle,Puzzle', 178, NOW()),
('quiz-star', 'https://game.fastgame.lol/games/quiz-star/v1.0.1/index.html', 'https://game.fastgame.lol/assets/icons/game/quiz-star.jpg', 'Puzzle', '问答之星', 'quiz-star,Puzzle', 189, NOW()),
('tetra-blocks', 'https://game.fastgame.lol/games/tetra-blocks/v1.0.2/index.html', 'https://game.fastgame.lol/assets/icons/game/tetra-blocks.jpg', 'Puzzle', '俄罗斯方块', 'tetra-blocks,Puzzle', 234, NOW()),
('two-dots-remastered', 'https://game.fastgame.lol/games/two-dots-remastered/v1.0.3/index.html', 'https://game.fastgame.lol/assets/icons/game/two-dots-remastered.jpg', 'Puzzle', '两点重制版', 'two-dots-remastered,Puzzle', 156, NOW()),
('plinko-frenzy', 'https://game.fastgame.lol/games/plinko-frenzy/v1.0.2/index.html', 'https://game.fastgame.lol/assets/icons/game/plinko-frenzy.jpg', 'Puzzle', 'Plinko狂热', 'plinko-frenzy,Puzzle', 167, NOW()),
('fruits-slot-machine', 'https://game.fastgame.lol/games/fruits-slot-machine/v1.0.2/index.html', 'https://game.fastgame.lol/assets/icons/game/fruits-slot-machine.jpg', 'Puzzle', '水果老虎机', 'fruits-slot-machine,Puzzle', 178, NOW()),
('bubble-up', 'https://game.fastgame.lol/games/bubble-up/v1.0.5/index.html', 'https://game.fastgame.lol/assets/icons/game/bubble-up.jpg', 'Puzzle', '气泡上升', 'bubble-up,Puzzle', 189, NOW()),
('bubble-up-endless', 'https://game.fastgame.lol/games/bubble-up-endless/v1.0.3/index.html', 'https://game.fastgame.lol/assets/icons/game/bubble-up-endless.jpg', 'Puzzle', '无尽气泡', 'bubble-up-endless,Puzzle', 156, NOW()),
('blastify2', 'https://game.fastgame.lol/games/blastify2/v1.0.5/index.html', 'https://game.fastgame.lol/assets/icons/game/blastify2.jpg', 'Puzzle', '爆破2', 'blastify2,Puzzle', 234, NOW()),
('pixel-match', 'https://game.fastgame.lol/games/pixel-match/v1.0.4/index.html', 'https://game.fastgame.lol/assets/icons/game/pixel-match.jpg', 'Puzzle', '像素匹配', 'pixel-match,Puzzle', 167, NOW()),
('free-birds', 'https://game.fastgame.lol/games/free-birds/v1.0.23/index.html', 'https://game.fastgame.lol/assets/icons/game/free-birds.jpg', 'Puzzle', '自由小鸟', 'free-birds,Puzzle', 145, NOW()),
('stacky-clown', 'https://game.fastgame.lol/games/stacky-clown/v1.0.61/index.html', 'https://game.fastgame.lol/assets/icons/game/stacky-clown.jpg', 'Puzzle', '堆叠小丑', 'stacky-clown,Puzzle', 134, NOW()),
('parking-way', 'https://game.fastgame.lol/games/parking-way/v1.0.55/index.html', 'https://game.fastgame.lol/assets/icons/game/parking-way.jpg', 'Puzzle', '停车方式', 'parking-way,Puzzle', 123, NOW()),
('world-cup-fever', 'https://game.fastgame.lol/games/world-cup-fever/v1.0.58/index.html', 'https://game.fastgame.lol/assets/icons/game/world-cup-fever.jpg', 'Puzzle', '世界杯狂热', 'world-cup-fever,Puzzle', 167, NOW()),
('dummies-world-cup', 'https://game.fastgame.lol/games/dummies-world-cup/v1.0.3/index.html', 'https://game.fastgame.lol/assets/icons/game/dummies-world-cup.jpg', 'Puzzle', '假人世界杯', 'dummies-world-cup,Puzzle', 178, NOW()),
('fill-pix', 'https://game.fastgame.lol/games/fill-pix/v1.0.20/index.html', 'https://game.fastgame.lol/assets/icons/game/fill-pix.jpg', 'Puzzle', '填充像素', 'fill-pix,Puzzle', 189, NOW()),
('sport-challenge', 'https://game.fastgame.lol/games/sport-challenge/v1.0.2/index.html', 'https://game.fastgame.lol/assets/icons/game/sport-challenge.jpg', 'Puzzle', '体育挑战', 'sport-challenge,Puzzle', 156, NOW()),
('shapes-puzzle', 'https://game.fastgame.lol/games/shapes-puzzle/v1.0.1/index.html', 'https://game.fastgame.lol/assets/icons/game/shapes-puzzle.jpg', 'Puzzle', '形状益智', 'shapes-puzzle,Puzzle', 167, NOW()),
('car-out', 'https://game.fastgame.lol/games/car-out/v1.0.34/index.html', 'https://game.fastgame.lol/assets/icons/game/car-out.jpg', 'Puzzle', '汽车出库', 'car-out,Puzzle', 178, NOW()),
('food-puzzle', 'https://game.fastgame.lol/games/food-puzzle/v1.0.3/index.html', 'https://game.fastgame.lol/assets/icons/game/food-puzzle.jpg', 'Puzzle', '食物益智', 'food-puzzle,Puzzle', 189, NOW()),
('blockup-puzzle', 'https://game.fastgame.lol/games/blockup-puzzle/v1.0.0/index.html', 'https://game.fastgame.lol/assets/icons/game/blockup-puzzle.jpg', 'Puzzle', '方块上升益智', 'blockup-puzzle,Puzzle', 156, NOW());

-- 步骤3：优化数据库性能
-- 注意：UUID主键不需要更新序列，因为UUID是随机生成的

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_games_category_date ON games(gameCategory, date DESC);
CREATE INDEX IF NOT EXISTS idx_games_view ON games(view DESC);
CREATE INDEX IF NOT EXISTS idx_games_title ON games(gameTitle);
CREATE INDEX IF NOT EXISTS idx_games_url ON games(gameUrl);

-- 步骤4：验证数据
-- 查看各分类游戏数量
SELECT gameCategory, COUNT(*) as game_count
FROM games
GROUP BY gameCategory
ORDER BY game_count DESC;

-- 查看最新的10个游戏
SELECT gameTitle, gameCategory, date
FROM games
ORDER BY date DESC
LIMIT 10;

-- 查看访问量最高的10个游戏
SELECT gameTitle, gameCategory, view
FROM games
ORDER BY view DESC
LIMIT 10;

-- 统计总游戏数量
SELECT COUNT(*) as total_games FROM games;